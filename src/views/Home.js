import React from "react";
import Typist from 'react-typist';

class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="fitNav text text-large color-contrast center-children bg-color-primary-darker">
          <div className="z-1">
              <span className="noIbar text-color-anim">I</span>   
              <span className="noIbar text-color-anim">'</span>   
              <span className="noIbar text-color-anim">m</span>
              <span>&nbsp;</span>   
              <span className="noIbar text-color-anim">S</span>   
              <span className="noIbar text-color-anim">e</span>   
              <span className="noIbar text-color-anim">t</span>   
              <span className="noIbar text-color-anim">h</span>
            </div>
            <div className="wrap-off pencil text-code color-complementary pos-corner o-5 noIbar">
                <Typist cursor={{ show: false }} >&lt;h1&gt;I'm Seth&lt;/h1&gt;</Typist>
            </div>    
        </div>
      </div>
    )
  };
}

export default Home;
