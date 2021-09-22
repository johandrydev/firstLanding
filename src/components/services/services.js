// React
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
// Images
import imgWebAplication from '../../assets/images/undraw_real-time_sync_o57k.svg'
import imgMobileAplication from '../../assets/images/undraw_android_jr64.svg'
import imgBackend from '../../assets/images/undraw_server_cluster_jwwq.svg'
import imgNem from '../../assets/images/nem_logo.png'

// data from services
const contenServices = [
    {
        title: 'Web Aplications',
        paragraph: 'Development with Html, css and Js. Management of different frameworks and libraries such as React, Angular, Vue.',
        img: imgWebAplication
    },
    {
        title: 'Mobile Aplications',
        paragraph: 'Management framework Ionic.',
        img: imgMobileAplication
    },
    {
        title: 'Backeng development',
        paragraph: 'Development with golang, Node Js, Php.',
        img: imgBackend
    },
    {
        title: 'Blockchain',
        paragraph: 'Development of solutions with blockchain technology from the nem platform.',
        img: imgNem
    }
]

/**
 * Funtional Component to render Services section
 */
const Services = () => {
    const divServices = useRef()
    // states
    const [ scroll, changeScroll ] = useState(window.scrollY)
    const [ animation, changeAnimation ] = useState(true)

    /**
     * Change state from Scroll
     */
    const handleScrollChange = () => {
        changeScroll(window.scrollY)
    }
    
    /**
     * Allows you to add animation to the images of the services
     */
    useEffect(() => {
        const showAnimation = divServices.current.offsetTop - (window.innerHeight / 1.4);

        if (window.scrollY >= showAnimation && animation) {
            for (const child of divServices.current.children) {
                // add animation from figure
                child.firstElementChild.style.animation = 'showServices 1s ease';
            }

            changeAnimation(false)
        }

        if (window.scrollY === 0) {
            changeAnimation(true)
            for (const child of divServices.current.children) {
                child.firstElementChild.style.animation = '';
            }
        }
        window.addEventListener('scroll', handleScrollChange)

        return () => {
            window.removeEventListener('scroll', handleScrollChange)
        }
    }, [scroll, animation])

    return (
        <Section>
            <h3 className="title-section mt-3">Services offered</h3>
            <div className="div-services" ref={divServices}>
                { contenServices.map( ({title, paragraph, img}, index) => (
                    <div key={index}>
                        <figure style={{
                            height: 120
                        }}>
                            <img src={ img } alt="" width="100" height="100" />
                        </figure>
                        <h4>{ title }</h4>
                        <p>{ paragraph }</p>
                    </div>
                )) }
            </div>
        </Section>
    )
}
export default Services

/**
 * Estyled component and component class
 */
const Section = styled.section`
    grid-area: services;
    background: linear-gradient(180deg,rgba(230,230,230,1) 0%,rgba(255,255,255,1) 13%);;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .div-services {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        height: 80%;
    }

    .mt-3 {
        margin-top: 3rem !important;
    }

    .div-services div {
        margin: 1rem;
        width: 15rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        figure {
            transition: transform 300ms
        }

        :hover {
            figure {
                transform: scale(1.1);
            }
        }
    }

    @keyframes showServices {
        0% {
            transform: translate(-60%, 0)
        }
    }

    @media screen and (max-width: 1200px){
        .card {
            width: 60%;
        }
    }

    @media screen and (max-width: 657px){
        background: linear-gradient(180deg,rgba(230,230,230,1) 0%,rgba(255,255,255,1) 8%);
    }
`