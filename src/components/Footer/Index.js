import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FooterContainer, FooterWrap, SocialMediaWrap, SocialMedia, SocialLogo, SocialIcons, SocialIconLink } from "./FooterElements";

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/">Pizza</SocialLogo>
                            <SocialIcons>
                                <SocialIconLink href="/" targert="_blank" aria-label="Facebook" rel="noopener noreferrer"><FontAwesomeIcon icon={["fas", "hamburger"]} /></SocialIconLink>
                                <SocialIconLink href="/" targert="_blank" aria-label="Facebook" rel="noopener noreferrer"><FontAwesomeIcon icon={["fas", "hammer"]} /></SocialIconLink>
                                <SocialIconLink href="/" targert="_blank" aria-label="Facebook" rel="noopener noreferrer"><FontAwesomeIcon icon={["fas", "frog"]} /></SocialIconLink>
                                <SocialIconLink href="/" targert="_blank" aria-label="Facebook" rel="noopener noreferrer"><FontAwesomeIcon icon={["fas", "credit-card"]} /></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>  
        </>
    )
}

export default Footer
