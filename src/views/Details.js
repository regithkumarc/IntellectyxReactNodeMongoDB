import React from 'react'
import './AddDetails.css'
import AddDetails from './AddDetail'
import ShowDetails from './ShowDetails'

class Details extends React.Component{

    render(){
        return(
            <div className="full-form"><br></br>
            {/* <h3 style = {{color : "grey",textAlign : "left",fontWeight : "bold"}}>My Wallet</h3> */}
              <div>
                   <ShowDetails></ShowDetails>
              </div>
              <div>
                    <AddDetails></AddDetails>
              </div>
            </div>
        )
    }
}

export default Details;