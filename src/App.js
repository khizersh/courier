import React,{useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import ContactUs from "./components/pages/ContactUs";
import SignUp from "./components/pages/SignUp";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";
import MainLayout from "./components/modules/layout/MainLayout";
import TrackingModal from "./components/modules/home/TrackingModal";
import Tracking from "./components/pages/Tracking";

function App() {

  const [check , setCheck] = useState(false)

  setTimeout(() => {
    setCheck(true)
  }, 2000);
  return (
    <Router>
      <MainLayout>
      {check && <TrackingModal check={true} />} 
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tracking/:id" exact component={Tracking} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/marketing" component={Marketing} />
          <Route path="/consulting" component={Consulting} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
