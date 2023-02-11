import { useEffect, useState } from 'react'

const BeverageSelector = ( { beverage, setBeverage } ) => {
    let [beverages, setBeverages] = useState([])

    useEffect(() => {
        fetch("https://t3a2-b-back-end-production.up.railway.app/beverages")
        .then((res) => res.json())
        .then((data) => setBeverages(data))
    }, [])

  return (
    <div className="beverage_component">
        <label> Beverage </label><br />

        <select className="dropdown-toggle col-sm-12" onChange={(evt) => setBeverage(evt.target.value)} value={beverage}>
        <option value="" disabled selected>Select a beverage</option>
            {beverages.map(bev => (
                <option key={bev.beverage} value={bev.beverage}>
                    {bev.name}
                </option>
            ))}
        </select>
    </div>
  )
}

export default BeverageSelector