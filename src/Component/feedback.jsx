import React from 'react'

const Feedback = (props) => {
    // console.log(props);
    // console.log(feedback)
  return (
      <div>
          <div>
              <h1>{props.name}</h1>
              {props.feedback.map((feed, index) => {
                  return (
                      
                          <div className='feedback' key={index}>
                          <h4>
                              Name:    {feed.Name}  |
                          
                              Department :    {feed.Department} |
                         
                              Rating:    {feed.Rating}|
                          </h4>
                      </div>
                      
                  )
              }
              )}
              <button onClick={() => { props.varad(true) }}>
                  go back
              </button>
          </div>
    </div>
  )
}

export default Feedback