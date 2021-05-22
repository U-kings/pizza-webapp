import React from 'react'
import { Nav, NavIcon, NavLink} from './NavbarElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({toggle}) =>{
    return(
            <Nav>
                <NavLink to='/'>Pizza</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <FontAwesomeIcon className="FontIcon" icon={["fas", "pizza-slice"]} />
                </NavIcon>
            </Nav>
    )
}

export default Navbar;