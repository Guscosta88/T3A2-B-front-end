import { useState, useEffect } from 'react'
import ParticipantForm from './ParticipantForm'
import Loading from './Loading'
import { useNavigate, useParams, Link } from 'react-router-dom'

const EditParticipant = () => {
    const [loading, setLoading ] = useState(false)
    let [name, setName ] = useState("")
    let [beverage, setBeverage ] = useState("")
    let [isMeatEater, setIsMeatEater ] = useState("")
    let [hasError, setHasError ] = useState(false)
    const navigate = useNavigate()

    const { id } = useParams();

    useEffect(() => {
        async function getParticipant() {
            const result = await fetch(`https://t3a2-b-back-end-production.up.railway.app/participants/${id}`);
            if(result.status !== 200){
                setHasError(true)
            } else {
            const data = await result.json()
            setName(data.name)
            setBeverage(data.drink_id ? data.drink_id._id : null)
            setIsMeatEater(data.meat_eater)
            }
        }
        getParticipant()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

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

        const participant = { name, drink_id: beverage, meat_eater: isMeatEater }
        
        fetch(`https://t3a2-b-back-end-production.up.railway.app/participants/${id}`, {
            method: "PUT",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(participant),
        })
        .then((res) => res.json())
        .then((data) => {
            setLoading(false)
            navigate("/participants");
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }
       
  return (
    <div className="card_participant">
        <h5>Edit Participant</h5>
        {
            loading ? 
                <Loading /> 
            :
                (
                    !hasError?
                        <ParticipantForm 
                            name={name}
                            setName={setName}
                            beverage={beverage}
                            setBeverage={setBeverage}
                            isMeatEater={isMeatEater}
                            setIsMeatEater={setIsMeatEater}
                            handleSubmit={handleSubmit}
                        />
                        
                    :
                    <div className="text-danger">Something went wrong</div>
                )
            }

                        <Link to="/participants">
                            <button className="btn btn-secondary text-white mt-2">Back</button>
                        </Link>

        </div>
      )
}

export default EditParticipant