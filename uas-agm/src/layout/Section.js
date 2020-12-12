import React, {useContext} from "react"
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Intro from '../pages/Intro.js';
import About from '../pages/About.js';
import Passion from '../pages/Passion.js'
import STI from '../pages/STI.js'
import Arsikom from '../pages/Arsikom.js';
import Ompi from '../pages/Ompi.js';
import Penutup from '../pages/Closing.js';
const Section = () =>{

  return(    
    <section style={{marginTop:"10%"}}>
      <Switch>
        <Route exact path="/" component={Intro}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/passion" component={Passion}/>
        <Route exact path="/jurusan" component={STI}/>
        <Route exact path="/arsikom" component={Arsikom}/>
        <Route exact path="/ompi" component={Ompi}/>
        <Route exact path="/penutup" component={Penutup}/>
      </Switch>
    </section>
  )
}

export default Section