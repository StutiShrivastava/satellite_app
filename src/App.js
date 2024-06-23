import './App.css';
import EventDataGrid from './containers/EventDataGrid';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import LoginComponent from './containers/LoginComponent';
import { AuthProvider } from './containers/AuthContext';
import Home from './containers/Home';
import CreateSatelliteEvent from './containers/CreateSatelliteEvent';
import About from './containers/About';
function App() {
  return (
    <div>
      <AuthProvider>
      <Routes>  
       <Route path="/" exact element = {<LoginComponent />} />    
       <Route path="/home" exact element = {<Home />} /> 
       <Route path="/login" exact element = {<LoginComponent/>} />
       <Route path="/showAllEvents" exact element = {<EventDataGrid />} />
       <Route path="/createEvent" exact element = {<CreateSatelliteEvent />} />
       <Route path="/about" exact element = {<About />} />
       </Routes> 
       </AuthProvider>    
    </div>
  );
};

export default App;
