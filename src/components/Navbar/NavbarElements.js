import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';


export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    position: fixed;
    /* justify-content: center; */
    font-weight: 700;
    padding:2rem 5rem;
    justify-content: space-between;
    width: 100%;
    background-color: #1e1e1e;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p{
        transform: translate(-175%, 100%);
        font-weight: bold;
    }

    .FontIcon{
        /* color: red; */
    }
`;

// export const Bars = styled(faPizzaSlice)`
//     font-size: 2rem;
//     transform: translate(-50%, -15%);
// `;