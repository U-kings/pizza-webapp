import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalConatainer, SidebarContainer, Icon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {

    return (
        <>
            <ModalConatainer isOpen={isOpen} onClick={toggle} />
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon>
                    <FontAwesomeIcon className="close" icon={["fas", "times"]} /> 
                </Icon>
                <SidebarMenu>
                    <SidebarLink to="/">Pizzas</SidebarLink>
                    <SidebarLink to="/">Desserts</SidebarLink>
                    <SidebarLink to="/">Full Menu</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/">Order Now</SidebarRoute>
                </SideBtnWrap>
            </SidebarContainer>
        </>
    )
}

export default Sidebar;