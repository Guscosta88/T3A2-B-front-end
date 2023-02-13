import { useState } from 'react'
import ParticipantForm from './ParticipantForm'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'

// POST New Participant
const NewParticipant = () => {
    // Initialise Variables
    const [name, setName ] = useState("")
    const [beverage, setBeverage ] = useState("")
    const [isMeatEater, setIsMeatEater ] = useState("") 
    const [loading, setLoading ] = useState(false) // Loading Status
    const navigate = useNavigate() // Navigation

    // Event Listener → handleSubmit
    const handleSubmit = async (event) => {
        // Prevent submit until beverage ID is selected.
        event.preventDefault();

        if(!name || name.length > 9) {
            alert("Name must be filled and should not exceed 9 characters.");
            return;
        }
        if(!beverage){
            alert("Please select a beverage option.");
            return;
        }
        if(!isMeatEater){
            alert("please select if participant eats meat or not.");
            return;
        }

        setLoading(true)

        // Participant Details
        const participant = {name, drink_id: beverage, meat_eater: isMeatEater };

        // HTTP POST Request to API endpoint "Participants":
        await fetch("https://t3a2-b-back-end-production.up.railway.app/participants", {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(participant), // Convert object to JSON string
        })
        .then((res) => res.json())
        .then((data) => {
            setLoading(false)
            navigate("/participants"); // Navigate to "/participants" route
        })
        .catch((error) => {
            console.log("Error:", error); // Catch Error
        });
    };

// Participant Card Form
  return (
    <div className="card_participant">
    <h5>Add Participant</h5>
    {
        loading ? 
            <Loading /> 
        :
                    <ParticipantForm 
                        name={name}
                        setName={setName}
                        beverage={beverage}
                        setBeverage={setBeverage}
                        isMeatEater={isMeatEater}
                        setIsMeatEater={setIsMeatEater}
                        handleSubmit={handleSubmit}
                    />
        }
    </div>
  )
}

// Export New Participant
export default NewParticipant