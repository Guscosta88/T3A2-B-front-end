import { useEffect, useState } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom';
import { round } from 'lodash';

const ShoppingList = () => {
    const [participants, setParticipants] = useState([]);
    const [foods, setFoods] = useState([]);
    const [beverages, setBeverages] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function getData() {
        const res = await fetch("https://t3a2-b-back-end-production.up.railway.app/participants");
        const participantsData = await res.json();
        setParticipants(participantsData);
  
        const res2 = await fetch("https://t3a2-b-back-end-production.up.railway.app/foods");
        const foodData = await res2.json();
        setFoods(foodData);
  
        const res3 = await fetch("https://t3a2-b-back-end-production.up.railway.app/beverages");
        const beveragesData = await res3.json();
        setBeverages(beveragesData);
  
        setLoading(false);
      }
      getData();
    }, []);

    return (
        <div className="card">
          {loading ? (
            <Loading />
          ) : (
            <>
              <h5>Shopping List</h5>
              <h5 id="shopping_h5">Grocery List</h5>
              <div className="grocery">
                {foods.map(food => {
                  let participant_food_multiply = 0;
      
                  if (food.cont_meat === "Yes") {
                    const participant = participants.filter(p => p.meat_eater === "Yes");
                  
                    if (participant.length) {
                      participant_food_multiply = round((participant.length * food.quantity), 2);
                    }
                  } else if (food.cont_meat === "No") {
                    const participant = participants.filter(p => p.meat_eater === "No");
                  
                    if (participant.length) {
                      participant_food_multiply = round((participant.length * food.quantity), 2);
                    }
                  }
      
                  return participant_food_multiply !== 0 ? (
                    <div className="container">
                      <div className="row" key={food.id}>
                        <div className="col-8 border-right border-bottom">{food.name}</div>
                        <div className="col-2 border-bottom">{participant_food_multiply}</div>
                        <div className="col-2 border-right border-bottom">{food.unit}</div>
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
              <h5 id="shopping_h5">Beverage List</h5>
              <div className="beverages">
                {beverages.map(beverage => {
                  let participant_beverage_multiply = 0;
      
                  const participant = participants.filter(p => p.drink_id === beverage._id);
                  if (participant.length) {
                    participant_beverage_multiply = participant.length * beverage.quantity;
                  }
      
                  return participant_beverage_multiply !== 0 ? (
                    <div className="container">
                      <div className="row" key={beverage.id}>
                        <div className="col-9 border-right border-bottom">{beverage.name}</div>
                        <div className="col-3 border-right border-bottom">{participant_beverage_multiply} bt</div>
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </>
          )}
          <div class="participant_buttons">
                        <Link to="/participants">
                    <button>Back</button>
                </Link>
                </div>
        </div>
      )
      };
      
      export default ShoppingList;