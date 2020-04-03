// React
import React from 'react'
import styled from 'styled-components'
// Images
import facebook from '../../assets/images/facebook-logo.png'
import instagram from '../../assets/images/instagram-logo.png'
import linkeding from '../../assets/images/linkeding-logo.png'
import twitter from '../../assets/images/twitter-logo.png'
import imgJAM from '../../assets/images/jam.jpg'

/**
 * Funtional Component to render Footer section
 */
const Footer = () => (
    <Section>
        <div className="div-footer-img">
            <img src={imgJAM} alt="Johandry" style={{
                borderRadius: '50%'
            }} />
        </div>
        <div className="footer-content">
            <h3>Contact me through my social networks:</h3>

            <div className="div-icons">
                <figure>
                    <img src={facebook} alt="Facebbok" width="100%" />
                </figure>
                <figure>
                    <img src={instagram} alt="Instagram" width="100%" />
                </figure>
                <figure>
                    <img src={twitter} alt="Twitter" width="100%" />
                </figure>
                <figure>
                    <img src={linkeding} alt="Linkeding" width="100%" />
                </figure>
            </div>
        </div>
    </Section>
)
export default Footer

/**
 * Estyled component and component class
 */
const Section = styled.section`
    grid-area: footer;
    background: linear-gradient(90deg, rgba(0, 212, 255, 1) 0%, rgba(9, 9, 121, 1) 40%, rgba(2, 0, 36, 1) 100%);
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .div-footer-img{
        margin: -9rem 0 1rem 0;
    }

    .footer-content {
        position: relative;
        color: white;
    }

    .div-icons {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .div-icons figure {
        margin: 1rem;
        width: 3rem;
    }
`