import React from 'react'
import BeverageSelector from './BeverageSelector'
import { Link } from 'react-router-dom'

const NewParticipant = () => {
  return (
    <div class="card_participant">
        <h5>Add Participant</h5>
        <form action="">
        <label class="sr-only" for="inlineFormInput">Enter Name</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="inlineFormInput" placeholder="Name"></input>
      </div>
        <BeverageSelector />
        <label class="sr-only" for="inlineFormInput">Meat eater?</label>
            <div class="col-sm-10">
            <input 
                class="form-check-input" 
                type="radio" 
                name="is_meat_eater" 
                id="yes" 
                value="yes">
            </input>

        <label class="form-check-label" for="yes">Yes</label>
            <input 
                class="form-check-input" 
                type="radio" 
                name="is_meat_eater" 
                id="no" 
                value="no">
            </input>
        <label class="form-check-label" for="no">No</label>
            </div>
            <Link to="/participants">
        <button className="btn btn-secondary mt-2">Submit</button>
        </Link>
        </form>
    </div>
  )
}

export default NewParticipant