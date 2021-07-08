import React from "react";
import Typist from 'react-typist';
import handleVieport from 'react-in-viewport';
import waves from '../images/waves.png';
require('intersection-observer');

class AboutPage extends React.Component {
  setText() {
    const { enterCount } = this.props;
    
    if (enterCount >= 1) return(<Typist cursor={{ show: false }} >import skills from '../skills.json'</Typist>);
    return '';
  }

  render() {
    return (
      <div className="vh plaid">
        <div>
            <div>
                <div className="z-1 code-box noIbar">
                    {"{"}<br />
                    &nbsp;&nbsp;&nbsp; Name: 'Seth Thyer',<br />
                    <br />
                    <p className="">&nbsp;&nbsp;&nbsp; Languages That I Often Use: {"{"}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'C++',<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'C#',<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'Java',<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'JS',<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'HTML',<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'CSS'<br />
                    &nbsp;&nbsp;&nbsp; {"}"},<br /></p>
                    <br />
                    &nbsp;&nbsp;&nbsp; Technologies That I'm Strong In: {"{"}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'React',<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'Mongoose',<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'SQLite',<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'GitHub',<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'Express',<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'NodeJS'<br />
                    &nbsp;&nbsp;&nbsp; {"}"},<br />
                    <br />
                    &nbsp;&nbsp;&nbsp; Occupation: 'Freelance Coder'<br />
                    <br />{"}"}
                </div>
                  <section>   
                    <div className="wrap-off pencil text-code color-complementary pos-corner o-5 noIbar z-3 mt-3">
                      <div>
                        {this.setText()}
                      </div>
                    </div>
                </section>
            </div>
        </div>
        <img id="waves-aboutpage" alt="vanity waves" src={waves} />
      </div>
    )
  };
}
const About = handleVieport(AboutPage, { rootMargin: '-1.0px' });

export default About;
