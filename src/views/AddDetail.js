import React from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'

class AddDetails extends React.Component{

    render(){
        return(
            <div>
                <h6>Add Item</h6>
                <Form noValidate className = "login-form">
                    <FormGroup className = "mb-3">
                        <Input type="text" placeholder="Name"
                            name="name"
                            id="name"></Input>
                    </FormGroup>
                    <FormGroup className = "mb-3">
                        <Input type="text" placeholder="ShopName"
                            name="shopname"
                            id="shopname"></Input>
                    </FormGroup>
                    <FormGroup className = "mb-3">
                        <Input type="text" placeholder="Status"
                            name="status"
                            id="status"></Input>
                    </FormGroup>
                    <Button value="submit">Add</Button>&nbsp;&nbsp;
                </Form>
            </div>
        )
    }
}

export default AddDetails;