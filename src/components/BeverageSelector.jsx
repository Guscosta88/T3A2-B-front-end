import { useEffect, useState } from 'react'

// Beverage Selector Component
const BeverageSelector = ( { beverage, setBeverage } ) => {
    
    let [beverages, setBeverages] = useState([])

    // FETCH List of Beverages
    useEffect(() => {
        fetch("https://t3a2-b-back-end-production.up.railway.app/beverages") // API Endpoint
        .then((res) => res.json()) // JSON Response
        .then((data) => setBeverages(data)) // Return Beverage Data
    }, [])

  return (
    <div className="beverage_component">
        <label> Beverage </label><br />

        {/* Dropdown → Select Beverage */}
        <select className="dropdown-toggle col-sm-12" onChange={(evt) => setBeverage(evt.target.value)} value={beverage}>
        <option value="" disabled>Select a beverage</option>
            {beverages.map((bev, index ) => (
                <option key={index} value={bev._id}>
                    {bev.name}
                </option>
            ))}
        </select>
    </div>
  )
}

// Export Beverage Selector Component
export default BeverageSelector