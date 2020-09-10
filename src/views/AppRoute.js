import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import AddDetails from './AddDetail';
import ShowDetails from './ShowDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './Details';

class AppRoute extends React.Component{

    render(){
        return(
            <Router>
                <Route path="/" exact component={Details}></Route>
                    <div class="container">
                         <Route path="/add" exact component={AddDetails}></Route>
                        <Route path="/list" exact component={ShowDetails}></Route>
                     </div>
            </Router>
        )
    }
}

export default AppRoute;