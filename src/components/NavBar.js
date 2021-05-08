import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {

    return (
        <div className='NavBarDiv'>
            <NavLink to='/' className='NavBarLink'>Home</NavLink>
            <NavLink to='/games' className='NavBarLink'>Games</NavLink>
            <NavLink to='/games/mylibrary' className='NavBarLink'>My Library</NavLink>
            <NavLink to='/games/wishlist' className='NavBarLink'>Wish-List</NavLink>
        </div>
    );
};

export default NavBar;