import { useState } from 'react'
import BeverageSelector from './BeverageSelector'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'

// POST New Participant
const NewParticipant = () => {
    // Initialise Variables
    const [name, setName ] = useState("")
    const [beverage, setBeverage ] = useState("Beer")
    const [isMeatEater, setIsMeatEater ] = useState("") 
    const [loading, setLoading ] = useState("") // Loading Status
    const navigate = useNavigate() // Navigation

    // Event Listener → handleSubmit
    const handleSubmit = async (event) => {
        // Prevent submit until beverage ID is selected.
        event.preventDefault();
        setLoading(true)
        let beverageId;

        try{
            const response = await fetch( // Fetch Beverage ID
                `https://t3a2-b-back-end-production.up.railway.app/beverages?name=${beverage}`
            );
            const data = await response.json();
            beverageId = data._id; // Return Beverage ID
        } catch (error) {
            console.log("Error retrieving beverage ID:", error); // Catch Error Response
        }

        // Participant Details
        const participant = {name, drink_id: beverageId, meat_eater: isMeatEater };
        console.log('Request Body:', JSON.stringify(participant)); 

        // HTTP POST Request to API endpoint "Participants":
        fetch("https://t3a2-b-back-end-production.up.railway.app/participants", {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(participant), // Convert object to JSON string
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("Success:", data); // New Participant POST Successful Response
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
        {loading ? <Loading /> :
        <form onSubmit={handleSubmit}>
        <label className="new_participant_name" htmlFor="name">Enter Name</label>
            <div className="col-sm-12">
            <input 
                type="text" 
                className="form-control" 
                id="name" 
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
    </div>

    {/* Beverage Selector → Dropdown */}
    <BeverageSelector 
        beverage={beverage}
        setBeverage={setBeverage}
    />

    {/* Meat Eater? → Boolean (Radio) */}
    <label htmlFor="isMeatEater">Meat eater?</label>
    <div className="col-sm-12 meat_eater">

        {/* "Yes" Input = Meat Eater? */}
        <input 
            className="form-check-input" 
            type="radio" 
            name="isMeatEater" 
            id="Yes" 
            value="Yes"
            checked={isMeatEater === "Yes"}
            onChange={(e) => setIsMeatEater(e.target.value)}
        />
        <label className="form-check-label" htmlFor="Yes">Yes</label>

        {/* "No" Input = Meat Eater? */}
        <input 
            className="form-check-input" 
            type="radio" 
            name="isMeatEater" 
            id="No" 
            value="No"
            checked={isMeatEater === "No"}
            onChange={(e) => setIsMeatEater(e.target.value)}
        />
        <label className="form-check-label" htmlFor="No">No</label>
    </div>

    {/* Submit Form Button */}
    <div className="form_button">
        <button type="submit" className="btn btn-secondary mt-2" onClick={handleSubmit}>Submit</button>
    </div>
    </form>
}
    </div>
  )
}

// Export New Participant
export default NewParticipant