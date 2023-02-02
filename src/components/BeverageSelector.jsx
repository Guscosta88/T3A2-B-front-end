import { useEffect, useState } from 'react'

const BeverageSelector = ( { beverage, setBeverage } ) => {
    let [beverages, setBeverages] = useState([])

    useEffect(() => {
        fetch("https://t3a2-b-back-end-production.up.railway.app/beverages")
        .then((res) => res.json())
        .then((data) => setBeverages(data))
    }, [])

  return (
    <div>
        <label> Beverage </label><br />

        <select onChange={(evt) => setBeverage(evt.target.value)} value={beverage}>

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