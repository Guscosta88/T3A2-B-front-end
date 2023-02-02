import React from 'react'
import { Link } from 'react-router-dom'

const ShoppingList = () => {
  return (
    <div class="card">
        <h5>Participants List</h5>
        <Link to="/participants">
            <button className="btn btn-secondary mt-2">Back</button>
        </Link>
    </div>
  )
}

export default ShoppingList