import React,{ Component } from 'react';
// import { Parallax, Background } from 'react-parallax';
import Parallax from 'react-simple-parallax';
import AOS from 'aos'; 


class AboutMe extends Component {

    render () {
        var background = {
            height: "700px",
            backgroundImage: 'url(https://static.pexels.com/photos/262272/pexels-photo-262272.jpeg)'
        };

        return (
            <div>

                <section id="about-section">
                     <div className="container">
                        <div className="row">
                            <Parallax speedDivider="5" backgroundStyle={background}>
                                <h1>This is Sentimentum</h1>
                            </Parallax>
                        </div>
                    </div>
                </section>

                <section>
                     <div className="container">
                        <div className="row">
                            <Parallax speedDivider="5" backgroundStyle={background}>
                                <h1>This is Sentimentum</h1>
                            </Parallax>
                        </div>
                    </div>
                </section>

                {/*<!-- About -->*/}
                <section id="about-section">
                    <div className="container">
                        <div className="row">
                            <Parallax>
                            <div className="col-lg-8 col-lg-offset-2">
                                <h1>Our Vision for Solace</h1>
                                <p>Studies have shown that writing or speaking what’s on our minds is extremely beneficial to our sense of self and well-being. Unfortunately many people don't take the time to write out what's on their minds and others are often embarrassed or unwilling to express themselves in front of another person. <i>This is the problem we are trying to solve.</i></p>
                                <p>Solace is a platform that provides users with an easy and accurate method of self-introspection. Each day, users are encouraged to share their thoughts and feelings with Solace by simply speaking to the app. Solace will then analyze the recordings and output a visual representation of the user's personality and emotional insights, allowing users to learn and discover more about themselves.</p>
                            </div>
                            </Parallax>
                        </div>
                    </div>
                </section>

            </div>
        );
   };

};

export default AboutMe; 