import { useEffect, useState} from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom';

// Participant List
const ParticipantsList = () => {
    // Initialise Variables
    let [participants, setParticipants] = useState([])
    let [beverages, setBeverages] = useState([])
    const [loading, setLoading] = useState(true); // Loading Status

    // GET Participants
    useEffect(() => {
        async function getParticipants() {
            const res = await fetch("https://t3a2-b-back-end-production.up.railway.app/participants") // FETCH Participant Data
            const data = await res.json()
            setParticipants(data)
        }
        getParticipants() // List Participant Data
    }, [])

    // GET Beverages
    useEffect(() => {
        async function getBeverages() {
            const res = await fetch("https://t3a2-b-back-end-production.up.railway.app/beverages")
            const data = await res.json()
            setBeverages(data)
            setLoading(false);
        }
        getBeverages() // List Participants' Beverages
    }, [])

    // DELETE Participant
    const handleDelete = async (participant) => {
        try{
            const response = await fetch(`https://t3a2-b-back-end-production.up.railway.app/participants/${participant._id}`, { // FETCH Participant ID
                method: 'DELETE'
            });
            window.location.reload();
        } catch (error) {
            console.error(error); // Catch Error
        }
    };

// Participant List Card
return (
    <div className="card">
        {loading ? (
            <Loading />
        ) : (
            <>
        <h5>Participants List</h5>
        {participants.map(participant => ( // Displays List of Participants
        <div className="container participant">
            <div className="row" key={participant.id}>
            <div className="col-3 border-right">{participant.name}</div>

                <div className="col-3 border-right">
                    {beverages.map(beverage => {
                        if (participant.drink_id === beverage._id) {
                            return beverage.name; // Return Participant's Beverage Choice
                        }
                        return null; // Return "Null" if Participant does not want a beverage
                    })}
                </div>

            <div className="col-3">{participant.meat_eater}</div>
            
            {/* Participant Buttons */}
            <div className="col-3 list_buttons">
            
            {/* Edit Participant Button */}
            <button id="edit" className="edit btn btn-secondary">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>

            {/* Delete Participant Button */}
            <button id="delete" className="delete btn btn-secondary" onClick={() => handleDelete(participant)}>
              <i className="fa-solid fa-user-xmark"></i>
            </button>
            
            </div>
            
        </div>
        
        </div>
        ))}
        
        {/* Navigation Buttons */}
        <div className="participant_buttons">

            {/* Route to "New Participant" */}
            <Link to="/">
                <button>Add Participant</button>
            </Link>

            {/* Route to "Shopping List" */}
            <Link to="/shopping">
                <button>Shopping List</button>
            </Link>

        </div>
        </>
        )}

    </div>
    
  )
}

// Export Participant List
export default ParticipantsList