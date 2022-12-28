import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './App.css';
import { Profile } from './components/profile';
import { TopBar } from './components/Nav/topbar';
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
import { Programs } from './components/programs';
import { ProjectList } from './components/Projs/projectlist';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/projects">

            <TopBar />

            <ProjectList />
            <div className="projecttitle"><Fade cascade right delay={100}>PROJECTS</Fade></div>
          </Route>


          <Route path="/experience">

            <TopBar />

            <div style={{marginTop:"100px"}}>
            <div className="border-container">
              <span class="left" style={{marginTop: 20}}>
                <h3>NextGen Kitchens</h3><h5>Aug 2021 - Present</h5>
                <h6 style={{fontSize:"15.5px"}}>Software Developer:<br />
                {"React Native, Node.js, "}<br/>{" NoSQL, Firebase & GCP, Vue.js, Python, PHP."}</h6><br/>
                <h3><a href="https://www.abovegroundartsupplies.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"inherit"}}>Above Ground Art Supplies</a></h3><h5>Nov 2020 - Jun 2021</h5>
                <h6 style={{fontSize:"15.5px"}}>- {"Wordpress & PHP web development"}</h6><br />
                <h3>Ryerson University</h3><h5>2017-2020</h5>
                <h6 style={{fontSize:"15.5px"}}>B.Sc. in Computer Science
                <br />- &nbsp;&nbsp;&nbsp;GPA: 3.6/4.0<br /></h6>
              </span>
              <span class="right">
              </span>
              <motion.div style={{
                              width: "650px",
                              height: "650px",
                              borderRadius: "50%",
                              position:"absolute"}}
                          animate={{ rotate: 360 }}
                          transition={{ ease: "linear", duration: 150, repeat: Infinity }}
              />
            </div>
              <Programs />
            </div>
            <div className="exptitle"><Fade cascade right delay={100}>EXPERIENCE</Fade></div>
            <div style={{paddingTop:"900px"}}></div>
            <a href="/projects"><Fade delay={350}><div className="button-container"><motion.div style={{scale: 1.3}} whileHover={{ scale: 1.8 }} whileTap={{ scale: 1.3}} /></div></Fade></a>
            <div style={{paddingTop:"120px"}}></div>
          </Route>



          <Route path="/">

            <TopBar />

            <div class="d-flex justify-content-end">
              <span class="myname"><Fade cascade down delay={600}>LUCAS</Fade> <Fade cascade down delay={600}>GOLD</Fade></span>
            </div>

            <div className="profile-container">
              <a href="/experience"><Profile /></a>
            </div>

            <Fade up delay={1700}><div className="intro-container">
            Hi - I'm Lucas! I'm a software developer with experience developing full-stack, cross-platform mobile apps using React Native and Node.js!
            </div></Fade>
            <br /><br />
            <div style={{marginTop:"10%"}}></div>
          </Route>
        </Switch>
      </Router>
  );
}
}

export default App;
