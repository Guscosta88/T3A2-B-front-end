import { useEffect, useState } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom';
import { round } from 'lodash';

// Shopping List
const ShoppingList = () => {
  
    // Initialise Variables
    const [participants, setParticipants] = useState([]);
    const [foods, setFoods] = useState([]);
    const [beverages, setBeverages] = useState([]);
    const [loading, setLoading] = useState(true); // Loading Status
  
    // GET Participant Data + Food & Beverage Choice
    useEffect(() => {
      async function getData() {
        const res = await fetch("https://t3a2-b-back-end-production.up.railway.app/participants"); // FETCH Participant Data
        const participantsData = await res.json();
        setParticipants(participantsData); // Return Participant Data
  
        const res2 = await fetch("https://t3a2-b-back-end-production.up.railway.app/foods"); // FETCH Food Data
        const foodData = await res2.json();
        setFoods(foodData); // Return Food Data
  
        const res3 = await fetch("https://t3a2-b-back-end-production.up.railway.app/beverages"); // FETCH Beverage Data
        const beveragesData = await res3.json();
        setBeverages(beveragesData); // Return Beverage Data
  
        setLoading(false);
      }
      getData(); // Return Data
    }, []);

    // Shopping List Card
    return (
        <div className="card">
          {loading ? (
            <Loading />
          ) : (
            <>
              <h5>Shopping List</h5>

              {/* Grocery Shopping List */}
              <h5 id="shopping_h5">Grocery List</h5>
              <div className="grocery">
                {foods.map(food => {
                  let participant_food_multiply = 0; // Food Multiplier based on # of Meat and Non-Meat Eaters
      
                  // Filter Participants: Meat Eaters
                  if (food.cont_meat === "Yes") {
                    const participant = participants.filter(p => p.meat_eater === "Yes");
                  
                    if (participant.length) { 
                      participant_food_multiply = round((participant.length * food.quantity), 2);
                    }
                  // Filter Participants: Non-Meat Eaters
                  } else if (food.cont_meat === "No") {
                    const participant = participants.filter(p => p.meat_eater === "No");
                  
                    if (participant.length) {
                      participant_food_multiply = round((participant.length * food.quantity), 2);
                    }
                  }
      
                  // Return Grocery Shopping List Data
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

              {/* Beverage Shopping List */}
              <h5 id="shopping_h5">Beverage List</h5>
              <div className="beverages">
                {beverages.map(beverage => {
                  let participant_beverage_multiply = 0; // Beverage Multiplier
      
                  const participant = participants.filter(p => p.drink_id === beverage._id);
                  if (participant.length) {
                    participant_beverage_multiply = participant.length * beverage.quantity;
                  }
      
                  // Return Beverage Shopping List Data
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

          {/* Navigation Buttons */}
          <div class="participant_buttons">
            {/* Route to Participant List */}
            <Link to="/participants">
              <button>Back</button>
            </Link>
          </div>
        </div>
      )
      };
      
      // Export Shopping List
      export default ShoppingList;