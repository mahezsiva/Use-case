import logo from './logo.svg';
import './App.css';
import Navbarex from './components/Navbarex';

import Login from './components/Login';
import { LinkContainer } from 'react-router-bootstrap'
import { Route, BrowserRouter as Router, Switch,useHistory } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contactus from './components/Admin';
import Admin from './components/Admin';
import { useMediaQuery } from "@material-ui/core";
import Userlogin from './components/Userlogin';
import Balance from './components/Balance';
import Fundtransfer from './components/Fundtransfer';

function App() {
  const rey=useMediaQuery("(max-width:500px)");

  return (
    <div className="App">

      
    
     <Router>
        <div >
          <LinkContainer to="/Login">
            <Nav.Link ></Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Admin">
            <Nav.Link ></Nav.Link>
          </LinkContainer>
          <Switch>
          <Route exact path="/" component={Navbarex} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Admin" component={Admin} />
            <Route exact path="/Userlogin"component={Userlogin}/>
            <Route exact path="/Balance" component={Balance}/>
            <Route exact path="/Fund transfer" component={Fundtransfer}/>
          </Switch>

        </div>
      </Router>
      {rey && <div style={{backgroundColor:"grey",textAlign:"center"}}>Screen Switched to mobile version</div>}
      
        

    </div>
  );
}

export default App;
