import React from 'react'
import axios from 'axios'
import { Table, Button } from 'reactstrap'

class ShowDetails extends React.Component{

    constructor(){
        super();
        this.state = {
            items : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3002/shop/getAll').then(response => {
            if(response.data.length > 0){
                this.setState({items : response.data});
                console.log("Response : " + response.data)
            }
        }).catch(err => {
            console.log("Error : " + err);
        })
    }

    render(){
        return(
            <div>          
            <Table>  
              <thead>  
                <tr>  
                  <th>Name</th>  
                  <th>Shop Name</th>  
                  <th>Status</th> 
                  <th>Date</th>  
                </tr>  
              </thead>  
              <tbody>  
                {this.state.items.map(item => (  
                  <tr key={item.id}>  
                    <td>{item.name}</td>  
                    <td>{item.shopName}</td>  
                    <td>{item.status}</td>  
                    <td>{item.date.toString().split("T")[0]}</td>  
                    <td><Button variant="info">Edit</Button> &nbsp;       
                    <Button variant="danger">Delete</Button>  
                    </td>  
                  </tr>  
                ))}  
              </tbody>  
            </Table>  
          </div>  
        )
    }
}

export default ShowDetails;