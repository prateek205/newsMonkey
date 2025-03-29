import React, { Component } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {
  pageSize = 3;
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element=<News
                key="general"
                pageSize={this.pageSize}
                country="us"
                category="general"
              />
            />
            <Route
              exact
              path="/business"
              key=""
              element=<News
                key="business"
                pageSize={this.pageSize}
                country="us"
                category="business"
              />
            />
            <Route
              exact
              path="/entertainment"
              key=""
              element=<News
                key="entertainment"
                pageSize={this.pageSize}
                country="us"
                category="entertainment"
              />
            />
            <Route
              exact
              path="/general"
              element=<News
                key="general"
                pageSize={this.pageSize}
                country="us"
                category="general"
              />
            />
            <Route
              exact
              path="/health"
              key=""
              element=<News
                key="health"
                pageSize={this.pageSize}
                country="us"
                category="health"
              />
            />
            <Route
              exact
              path="/science"
              key=""
              element=<News
                key="science"
                pageSize={this.pageSize}
                country="us"
                category="science"
              />
            />
            <Route
              exact
              path="/sports"
              key=""
              element=<News
                key="sports"
                pageSize={this.pageSize}
                country="us"
                category="sports"
              />
            />
            <Route
              exact
              path="/technology"
              key=""
              element=<News
                key="technology"
                pageSize={this.pageSize}
                country="us"
                category="technology"
              />
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
