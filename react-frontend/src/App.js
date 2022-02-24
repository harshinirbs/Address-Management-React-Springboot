import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListUsersComponent from './components/ListUsersComponent';
import AddUserComponent from './components/AddUserComponent';
import LoginUserComponent from './components/LoginUserComponent';
import ShowUserComponent from './components/ShowUserComponent';
import AddAddressComponent from './components/AddAddressComponent';



function App() {
  return (
    <div>
      <Router>
      <HeaderComponent />
      <div className='container'>
        <Routes>
          <Route exact path = "/" element = {<AddUserComponent />}></Route>
          <Route path = "/add-user" element = {<AddUserComponent />} ></Route>
          {/* <Route path = "/users" element = {<ListUsersComponent />}></Route>
          <Route path = "/edit-user/:id" element = {<AddUserComponent />}></Route> */}
          <Route path = "/address" element = {<ShowUserComponent />} ></Route>
          <Route path = "/add-address" element = {<AddAddressComponent />} ></Route>
          <Route path = "/edit-address/:id" element = {<AddAddressComponent />} ></Route>
          <Route path = "/login" element = {<LoginUserComponent />} ></Route>
      </Routes>
      </div>
      <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
