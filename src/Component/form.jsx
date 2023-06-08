import React from 'react'
import { useState } from 'react'
import Feedback from "./feedback.jsx"

const Form = (props) => {
    const [Name, setName] = useState("");
    const [Department, setDepartment] = useState("");
    const [Rating, setRating] = useState("");
    const [feedback, setFeed] = useState([]);
    const [toggle, setToggle] = useState(true)




   
    const handleSubmit = (e) => {
        console.log("submitted")
        e.preventDefault();
        const newFeedback = {
            Name: Name,
            Department: Department,
            Rating: Rating,
        }
        // console.log("newfeded",newFeedback)
        setFeed([...feedback, newFeedback]);
        setName('');
        setDepartment('');
        setRating(' ');
        setToggle(!toggle)
    }
    
    return (
        <>{toggle ?
            <form onSubmit={handleSubmit}>
                    <h1>Employee Feedback Form</h1>
                    <div className='card'>
                        <label>Name</label>
                        <input type="text" name="Name" value={Name} onChange={(e)=>setName( e.target.value)} />
                    </div>
                    <div className='card'>
                        <label>Department</label>
                        <input type="text" name="Department" value={Department} onChange={(e)=>setDepartment( e.target.value )} />
                    </div>
                    <div className='card'>
                        <label>Rating</label>
                        <input type="number" name="Rating" value={Rating} onChange={(e)=>setRating( e.target.value )} />
                    </div>
                   <button type='submit'>
                        Submit
                    </button>

            </form>
            :
            <Feedback feedback={feedback} varad={setToggle} />
        }
    </>
  )
}

export default Form