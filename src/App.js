import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Login from "./pages/Authentication/Login";
import PrivateRoute from "./pages/Authentication/PrivateRoute/PrivateRoute";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
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
