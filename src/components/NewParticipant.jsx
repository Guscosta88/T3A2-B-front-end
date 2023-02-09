import { useState } from 'react'
import BeverageSelector from './BeverageSelector'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'

const NewParticipant = () => {
    const [name, setName ] = useState("")
    const [beverage, setBeverage ] = useState("Beer")
    const [isMeatEater, setIsMeatEater ] = useState("")
    const [loading, setLoading ] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        let beverageId;

        try{
            const response = await fetch(
                `https://t3a2-b-back-end-production.up.railway.app/beverages?name=${beverage}`
            );
            const data = await response.json();
            beverageId = data._id;
        } catch (error) {
            console.log("Error retrieving beverage ID:", error);
        }

        const participant = {name, drink_id: beverageId, meat_eater: isMeatEater };
        console.log('Request Body:', JSON.stringify(participant)); 

        fetch("https://t3a2-b-back-end-production.up.railway.app/participants", {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(participant),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("Success:", data);
            setLoading(false)
            navigate("/participants");
        })
        .catch((error) => {
            console.log("Error:", error);
        });
    };



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

        <BeverageSelector 
            beverage={beverage}
            setBeverage={setBeverage}
        />

        <label htmlFor="isMeatEater">Meat eater?</label>
    <div className="col-sm-12 meat_eater">
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
    <div className="form_button">
        <button type="submit" className="btn btn-secondary mt-2" onClick={handleSubmit}>Submit</button>
    </div>
    </form>
}
    </div>
  )
}

export default NewParticipant