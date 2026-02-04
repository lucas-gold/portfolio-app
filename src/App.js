import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./components/Nav/NavBar";
import { Profile } from "./components/Profile";
import { ProjectList } from "./components/Projs/ProjectList";

import Fade from "react-reveal/Fade";
import { ExperiencePage } from "./components/Experience/ExperiencePage";

function Layout({ home = false, children }) {
  return (
    <>
      <NavBar isHome={home} />
      {children}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/projects">
          <Layout>
            <div className="projecttitle">
              <Fade cascade right delay={100}>projects</Fade>
            </div>
            <ProjectList />

          </Layout>
        </Route>

        <Route path="/experience">
          <Layout>
            <ExperiencePage />
          </Layout>
        </Route>

        <Route path="/" exact>
          <Layout home={true}>
            <div className="name-wrap">
              <span className="myname">
                <Fade cascade down delay={600}>lucas</Fade>{" "}
                <Fade cascade down delay={600}>gold</Fade>
              </span>
            </div>

            <div className="profile-container">
                <Profile />
            </div>

            <Fade up delay={1700}>
              <div className="intro-container">
                Hi - I'm Lucas! A software developer with experience developing full-stack,
                cross-platform mobile apps using React Native and Node.js!
              </div>
            </Fade>

            <br /><br />
            <div style={{ marginTop: "10%" }} />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}
