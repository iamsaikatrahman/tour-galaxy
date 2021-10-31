import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import AboutUs from "./pages/AboutUs/AboutUs";
import AddTour from "./pages/AddTour/AddTour";
import Login from "./pages/Authentication/Login";
import PrivateRoute from "./pages/Authentication/PrivateRoute/PrivateRoute";
import Blogs from "./pages/Blogs/Blogs";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import ManageBooking from "./pages/ManageBooking/ManageBooking";
import MyBooking from "./pages/MyBooking/MyBooking";
import NotFound from "./pages/NotFound/NotFound";
import TourDetails from "./pages/TourDetails/TourDetails";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthProvider>
        <Router>
          <div className="flex-1">
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <PrivateRoute path="/tourdetails/:tourId">
                <TourDetails />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/mybooking">
                <MyBooking />
              </PrivateRoute>
              <PrivateRoute path="/managebooking">
                <ManageBooking />
              </PrivateRoute>
              <PrivateRoute path="/addtour">
                <AddTour />
              </PrivateRoute>
              <Route path="/aboutus">
                <AboutUs />
              </Route>
              <Route path="/blogs">
                <Blogs />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
