import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import AuthProvider from './Components/Context/AuthProvider';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import ServiceDetail from './Components/ServiceDetails/ServiceDetail';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/service/:serviceId'>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path='/about'>
              <About></About>
            </PrivateRoute>
            <PrivateRoute path='/contact'>
              <Contact></Contact>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route to='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
