import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useLocation,
} from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import ContactUs from "./components/pages/ContactUs";
import SignUp from "./components/pages/SignUp";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";
import MainLayout from "./components/modules/layout/MainLayout";
import TrackingModal from "./components/modules/home/TrackingModal";
import Tracking from "./components/pages/Tracking";
import ServiceDetail from "./components/pages/ServiceDetail";
import Faq from "./components/pages/Faq";
import Headline from "./components/modules/news/Headline";
import DashboardLayout from "./components/modules/dashboard/DashboardLayout";
import Zone from "./components/pages/dashboard/Zone";
import City from "./components/pages/dashboard/City";
import Service from "./components/pages/dashboard/Service";
import Weight from "./components/pages/dashboard/Weight";
import Pricing from "./components/pages/dashboard/Pricing";
import HeadlineDashboard from "./components/pages/dashboard/Headline";
import NewsDashboard from "./components/pages/dashboard/NewsDashboard";
import Banner from "./components/pages/dashboard/Banner";
import ClientMessage from "./components/pages/dashboard/ClientMesage";
import Stations from "./components/pages/Stations";
import Calculator from "./components/pages/Calculator";
import Offer from "./components/pages/dashboard/Offer";
// import Banner from "./components/modules/home/Banner";

function App(props) {
  const [check, setCheck] = useState(false);

  setTimeout(() => {
    setCheck(true);
  }, 2000);

  function ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
      try {
        // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } catch (error) {
        window.scrollTo(0, 0);
      }
    }, []);
    return props.children;
  }

  return (
    <Router>
      <ScrollToTop>
        {window.location.pathname.includes("dashboard") ? (
          <DashboardLayout>
            <Switch>
              <Route path="/dashboard/zone" component={Zone} />
              <Route path="/dashboard/city" component={City} />
              <Route path="/dashboard/service" component={Service} />
              <Route path="/dashboard/weight" component={Weight} />
              <Route path="/dashboard/price" component={Pricing} />
              <Route path="/dashboard/headline" component={HeadlineDashboard} />
              <Route path="/dashboard/news" component={NewsDashboard} />
              <Route path="/dashboard/banner" component={Banner} />
              <Route path="/dashboard/message" component={ClientMessage} />
              <Route path="/dashboard/offer" component={Offer} />
            </Switch>
          </DashboardLayout>
        ) : (
          <MainLayout>
            {/* {check && <TrackingModal check={true} />} */}
            <Headline />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/tracking/:id" exact component={Tracking} />
              <Route path="/services" component={Services} />
              <Route path="/service-detail/:page" component={ServiceDetail} />
              <Route path="/products" component={Products} />
              <Route path="/contact-us" component={ContactUs} />
              <Route path="/faq" component={Faq} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/marketing" component={Marketing} />
              <Route path="/consulting" component={Consulting} />
              <Route path="/stations" component={Stations} />
              <Route path="/rate-calculator" component={Calculator} />
            </Switch>
          </MainLayout>
        )}
      </ScrollToTop>
    </Router>
  );
}

export default App;
