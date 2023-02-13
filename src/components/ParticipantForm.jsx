import { useEffect, useState } from 'react'
import BeverageSelector from './BeverageSelector'

const ParticipantForm = ({
    name,
    setName,
    beverage,
    setBeverage,
    isMeatEater,
    setIsMeatEater,
    handleSubmit
}) => {

    let [ beverages, setBeverages ] = useState([])

    useEffect(() => {
        fetch("https://t3a2-b-back-end-production.up.railway.app/beverages")
        .then((res) => res.json())
        .then((data) => setBeverages(data))
    }, [])


  return (
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

    <label className="meat_eater_title" htmlFor="isMeatEater">Meat eater?</label>
<div className="col-sm-12 meat_eater mt-3">
    <div className="row">
        <div className="col-6">
        <label className="form-check-label" htmlFor="Yes">Yes</label><br />
        <input 
            className="form-check-input mx-2" 
            type="radio" 
            name="isMeatEater" 
            id="Yes" 
            value="Yes"
            checked={isMeatEater === "Yes"}
            onChange={(e) => setIsMeatEater(e.target.value)}
        />
        </div>
    
        <div className="col-6">
        <label className="form-check-label" htmlFor="No">No</label><br />
        <input 
            className="form-check-input mx-2" 
            type="radio" 
            name="isMeatEater" 
            id="No" 
            value="No"
            checked={isMeatEater === "No"}
            onChange={(e) => setIsMeatEater(e.target.value)}
        />
    </div>
    </div>
</div>
<div className="form_button">
    <button type="submit" className="btn btn-secondary text-white mt-2">Submit</button>
</div>
</form>
  )
}

export default ParticipantForm