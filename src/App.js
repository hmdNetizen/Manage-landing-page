import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/layout/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/Theme";
import Footer from "./components/layout/Footer";
import LandingPage from "./components/pages/LandingPage";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/product" component={() => <div>Product</div>} />
            <Route exact path="/about" component={() => <div>About Us</div>} />
            <Route exact path="/careers" component={() => <div>Careers</div>} />
            <Route
              exact
              path="/community"
              component={() => <div>Community</div>}
            />
            <Route
              exact
              path="/getstarted"
              component={() => <div>Get Started</div>}
            />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
