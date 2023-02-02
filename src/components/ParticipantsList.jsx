import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


const ParticipantsList = () => {
    let [participants, setParticipants] = useState([])
    let [beverages, setBeverages] = useState([])

    useEffect(() => {
        async function getParticipants() {
            const res = await fetch("https://t3a2-b-back-end-production.up.railway.app/participants")
            const data = await res.json()
            setParticipants(data)
        }
        getParticipants()
    }, [])

    useEffect(() => {
        async function getBeverages() {
            const res = await fetch("https://t3a2-b-back-end-production.up.railway.app/beverages")
            const data = await res.json()
            setBeverages(data)
        }
        getBeverages()
    }, [])




  return (
    <div class="card">
        <h5>Participants List</h5>
        {participants.map(participant => (
        <div class="container participant">

            <div class="row" key={participant.id}>
            <div class="col-3 border-right">{participant.name}</div>

                <div class="col-3 border-right">
                    {beverages.map(beverage => {
                        if (participant.drink_id === beverage._id) {
                            return beverage.name;
                        }
                        return null;
                    })}
                
                </div>

            <div class="col-3">{participant.meat_eater}</div>

            <div class="col-3 list_buttons">
            <button id="edit" className="edit btn btn-secondary">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button id="delete" className="delete btn btn-secondary">
              <i class="fa-solid fa-user-xmark"></i>
            </button>
            
            </div>
            
        </div>
        
        </div>
        ))}
        
        <div class="participant_buttons">
            <Link to="/">
                <button>Add Participant</button>
            </Link>
            <Link to="/shopping">
                <button>Shopping List</button>
            </Link>
        </div>

    </div>
    
  )
}

export default ParticipantsList