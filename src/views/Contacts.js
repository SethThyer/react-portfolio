import React from 'react';
import Typist from 'react-typist';

import blend from '../images/Projects/blend.png'
import broken from '../images/Projects/Cover.png'
import langAqu from '../images/Projects/Screenshot_1.jpg'
import waterCycle from '../images/Projects/Screenshot_2.jpg'
import timeTable from '../images/Projects/Screenshot_3.jpg'
import game from '../images/Projects/WebSite.png'

class Contacts extends React.Component {

  render() {
    window.scrollTo(0, 0);
    return (
      <div className="contacts">
        <Typist className="wrap-off pencil text-code color-complementary tl noIbar z-3" cursor={{ show: false }} >&lt;a&gt;Send me an Email!&lt;/a&gt;</Typist>
        <div className="center-children bg-color-primary">
          <div className="z-1 contactBox">
            Let's work together on something amazing!<br />
            <div className="mail-text">
              <a href="mailto: seththyer23@gmail.com?Subject=Want's To Chat!" className="btn-color-anim">Send me an Email!</a>
            </div>
              <div className="img-circle-wrap">
                <div className="img-circle"><img alt="an information website I made" src={langAqu} /></div>
                <div className="img-circle"><img alt="a game I made" src={broken} /></div>
                <div className="img-circle"><img alt="a render I made" src={blend} /></div>
                <div className="img-circle"><img alt="a frontend-website I made" src={waterCycle} /></div>
                <div className="img-circle"><img alt="a backend-website I made" src={timeTable} /></div>
                <div className="img-circle"><img alt="a game I made" src={game} /></div>
              </div>
        </div>
        </div>
      </div>
    )
  };
}

export default Contacts;
