import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation/>
            <Logo/>
           <h2>About</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit cum mollitia voluptates ea perspiciatis commodi alias aspernatur atque laudantium quae voluptatibus eum unde rem omnis, debitis iste corporis ullam.
            </p>
        </div>
    );
};

export default About;