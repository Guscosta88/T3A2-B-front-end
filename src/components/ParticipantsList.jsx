import { useEffect, useState} from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom';


const ParticipantsList = () => {
    let [participants, setParticipants] = useState([])
    let [beverages, setBeverages] = useState([])
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        }
        getBeverages()
    }, [])

    const handleDelete = async (participant) => {
        try{
            const response = await fetch(`https://t3a2-b-back-end-production.up.railway.app/participants/${participant._id}`, {
                method: 'DELETE'
            });
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div className="card">
        {loading ? (
            <Loading />
        ) : (
            <>
        <h5>Participants List</h5>
        {participants.map(participant => (
        <div className="container participant">
            <div className="row" key={participant.id}>
            <div className="col-3 border-right">{participant.name}</div>

                <div className="col-3 border-right">
                    {beverages.map(beverage => {
                        if (participant.drink_id === beverage._id) {
                            return beverage.name;
                        }
                        return null;
                    })}
                </div>

            <div className="col-3">{participant.meat_eater}</div>

            <div className="col-3 list_buttons">
            <Link to="/participant/edit">
            <button id="edit" className="edit btn btn-secondary" onClick={() => handleDelete(participant)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            </Link>
            <button id="delete" className="delete btn btn-secondary" onClick={() => handleDelete(participant)}>
              <i className="fa-solid fa-user-xmark"></i>
            </button>
            
            </div>
            
        </div>
        
        </div>
        ))}
        
        <div className="participant_buttons">
            <Link to="/">
                <button>Add Participant</button>
            </Link>
            <Link to="/shopping">
                <button>Shopping List</button>
            </Link>
        </div>
        </>
        )}

    </div>
    
  )
}

export default ParticipantsList