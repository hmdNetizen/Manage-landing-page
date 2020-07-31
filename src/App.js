import React, { Fragment, useState } from "react";
import "animate.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/layout/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/Theme";
import Footer from "./components/layout/Footer";
import LandingPage from "./components/pages/LandingPage";
import Pricing from "./components/pages/Pricing";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Careers from "./components/pages/Careers";
import Community from "./components/pages/Community";
import GetStarted from "./components/pages/GetStarted";

function App() {
  const [value, setValue] = useState(0);

  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Header value={value} setValue={setValue} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <LandingPage {...props} setValue={setValue} />}
            />
            <Route
              exact
              path="/pricing"
              render={(props) => <Pricing {...props} setValue={setValue} />}
            />
            <Route
              exact
              path="/product"
              render={(props) => <Products {...props} setValue={setValue} />}
            />
            <Route
              exact
              path="/about"
              render={(props) => <About {...props} setValue={setValue} />}
            />
            <Route
              exact
              path="/careers"
              render={(props) => <Careers {...props} setValue={setValue} />}
            />
            <Route
              exact
              path="/community"
              render={(props) => <Community {...props} setValue={setValue} />}
            />
            <Route
              exact
              path="/getstarted"
              render={(props) => <GetStarted {...props} setValue={setValue} />}
            />
          </Switch>
          <Footer setValue={setValue} />
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
