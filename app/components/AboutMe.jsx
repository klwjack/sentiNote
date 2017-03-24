import React,{ Component } from 'react';
// import { Parallax, Background } from 'react-parallax';
import Parallax from 'react-simple-parallax';
import AOS from 'aos'; 
import {Grid, Row} from 'react-bootstrap';

class AboutMe extends Component {

    render () {
        var background = {
            height: "700px",
            backgroundImage: 'url(https://static.pexels.com/photos/262272/pexels-photo-262272.jpeg)'
        };

        return (
            <div>
                
                <div>
                    <img className="home-page-image" src="https://static.pexels.com/photos/262272/pexels-photo-262272.jpeg" />
                     <h1>This is Sentimentum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula sodales libero, quis placerat sapien scelerisque sit amet. Aenean sed pharetra augue, non blandit urna. Vestibulum sollicitudin bibendum diam, eget rhoncus odio placerat vitae. Cras lorem tellus, euismod at porta in, molestie eu urna. Phasellus nec ullamcorper nibh. Maecenas eu massa venenatis, consequat dolor eget, maximus felis. Proin nibh odio, semper vitae volutpat id, aliquam maximus justo. Sed ultrices leo at libero bibendum sagittis.</p>
                </div>
                {/*<section id="about-section">
                     <div className="container">
                        <div className="row">
                            <Parallax speedDivider="5" backgroundStyle={background}>
                                <div id="text" className="col m5 s10 offset-m7 offset-s2">
                                    <h1>This is Sentimentum</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula sodales libero, quis placerat sapien scelerisque sit amet. Aenean sed pharetra augue, non blandit urna. Vestibulum sollicitudin bibendum diam, eget rhoncus odio placerat vitae. Cras lorem tellus, euismod at porta in, molestie eu urna. Phasellus nec ullamcorper nibh. Maecenas eu massa venenatis, consequat dolor eget, maximus felis. Proin nibh odio, semper vitae volutpat id, aliquam maximus justo. Sed ultrices leo at libero bibendum sagittis.</p>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </section>*/}

            </div>
        );
   };

};

export default AboutMe; 