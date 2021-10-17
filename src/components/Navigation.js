import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            {/* Equivalent à Ancre <a> dans navigation, pour aller de page en page */}
            <NavLink exact to="/">
                Accueil
            </NavLink>
            <NavLink exact to="/about">
            </NavLink>
        </div>
    );
};

export default Navigation;