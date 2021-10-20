import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Footer from './Pages/Footer/Footer';
import Gallery from './Pages/Gallery/Gallery';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Products from './Pages/Products/Products';
import Services from './Pages/Services/Services';
import LogIn from './Pages/LogIn/LogIn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SignUp from './Pages/SignUp/SignUp';
import AuthContext from './Context/AuthContext';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import ServiceDetails from './Pages/Services/ServiceDetails/ServiceDetails';
AOS.init();

function App() {
  return (
    <div className="App">
      <AuthContext>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <PrivetRoute path="/servicesDetails/:serviceID">
              <ServiceDetails />
            </PrivetRoute>
            <Route path="/products">
              <Products />
            </Route>
            <PrivetRoute path="/gallery">
              <Gallery />
            </PrivetRoute>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthContext>
    </div>
  );
}

export default App;