import React, {useState} from 'react'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
            <HeroContainer>
               <Navbar toggle={toggle} />
               <Sidebar isOpen={isOpen} toggle={toggle} />
               <HeroContent>
                   <HeroItems>
                       <HeroH1>Greatest Pizza Ever</HeroH1>
                       <HeroP>READY IN 60 SECONDS</HeroP>
                       <HeroBtn>Place Order</HeroBtn>
                   </HeroItems>
               </HeroContent>
            </HeroContainer>
    )
}

export  default Hero;