import logo from './logo.svg';
import './App.css';
import Navbarex from './components/Navbarex';

import Login from './components/Login';
import { LinkContainer } from 'react-router-bootstrap'
import { Route, BrowserRouter as Router, Switch, useHistory } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import Admin from './components/Admin';
import { useMediaQuery } from "@material-ui/core";
import Userlogin from './components/Userlogin';
import Balance from './components/Balance';
import Fundtransfer from './components/Fundtransfer';
import MyNewValidations from './components/Newuser';
import Newuser from './components/Newuser';
import Adminlogin from './components/Adminlogin';
import Options from './components/Options';
import Transactions from './components/Transactions';
import Contact from './components/Contact';
import Team from './components/Team';
import Customers from './components/Customers';
import Report from './components/Report';
import KYC from './components/KYC';
import find from './components/find'





function App() {
  const rey = useMediaQuery("(max-width:500px)");

  return (
    <div className="App">


      {/* <Router>
        <div >
          <LinkContainer to="/Login">
            <Nav.Link ></Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Admin">
            <Nav.Link ></Nav.Link>
          </LinkContainer>

          <Switch>
            <Route exact path="/" component={Navbarex} />
            <Route exact path="/Login/add" component={Login} />
            <Route exact path="/Admin/add" component={Admin} />
            <Route exact path="/Adminlogin" component={Adminlogin} />
            <Route exact path="/Userlogin" component={Userlogin} />
            <Route exact path="/Balance" component={Balance} />
            <Route exact path="/Fund transfer" component={Options} />
            <Route exact path="/Transfer" component={Fundtransfer} />
            <Route exact path="/Register/add" component={Newuser} />
            <Route exact path="/Newuser" component={Newuser} />
            <Route exact path="/Contact" component={Contact}/>
            <Route exact path="/Logout" component={Navbarex}/>
            <Route exact path="/Report" component={Report}/>
            <Route exact path="/Transactions" component={Fundtransfer} />
            <Route exact path="/KYC" component={KYC} />
        

          </Switch>

        </div>
      </Router>
      {rey && <div style={{ backgroundColor: "grey", textAlign: "center" }}>Screen Switched to mobile version</div>}    */}
    <find/>
    


    </div>
  );
}

export default App;
