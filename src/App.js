import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import TourDetails from "./pages/TourDetails/TourDetails";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <div className="flex-1">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/tourdetails/:tourId">
              <TourDetails />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
