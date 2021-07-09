import React from "react";
import Typist from 'react-typist';
import handleVieport from 'react-in-viewport';

import Backend from '../images/Services/Backend.jpg';
import Blend from '../images/Services/Blend.jpg';
import Bot from '../images/Services/Bot.jpg';
import Frontend from '../images/Services/Frontend.jpg';
import Other from '../images/Services/Programming.jpg';
import Unity from '../images/Services/Unity.jpg';

require('intersection-observer');

class WhatICanDo extends React.Component {
    setText() {
        const { enterCount } = this.props;
        
        if (enterCount >= 1) return(<Typist cursor={{ show: false }} >import services from '../services.json'</Typist>);
        return '';
    }


    render() {
        return (
            <div className="vh-adap text text-large color-contrast bg-color-primary dots">
                <div className="wrap-off pencil text-code color-complementary tl-rel noIbar z-3">
                    <div>
                        {this.setText()}
                    </div>
                </div>
                <div className="grid-wrap">
                    <div className="grid-item">
                        Discord Bots<br />
                        <div className="text-small">I can create a Bot for Discord using discord.js</div><br />
                        <img alt="a Discord Bot I made" src={Bot} />
                    </div>
                    <div className="grid-item">
                        3D Assets<br />
                        <div className="text-small">I can provide renders and 3D models through Blender</div><br />
                        <img alt="a render I made" src={Blend} />
                    </div>
                    <div className="grid-item">
                        Unity Asset Creation<br />
                        <div className="text-small">I can fabricate C# script assets and 2D sprites for Unity</div><br />
                        <img alt="assets in Unity I made" src={Unity} />
                    </div>
                    <div className="grid-item">
                        Programming<br />
                        <div className="text-small">I can offer my skills in miscellaneous coding</div><br />
                        <img alt="me making a C# TCP server" src={Other} />
                    </div>
                    <div className="grid-item">
                        Front-end WebDev<br />
                        <div className="text-small">I can synthesise front-end displays for your applications</div><br />
                        <img alt="a website I made" src={Frontend} />
                    </div>
                    <div className="grid-item">
                        Back-end WebDev<br />
                        <div className="text-small">I can design API's and API interactions for your apps</div><br />
                        <img alt="an API I made" src={Backend} />
                    </div>
                </div>
            </div>
        )
    };
}

const CanDo = handleVieport(WhatICanDo, { rootMargin: '-1.0px' });
export default CanDo;
