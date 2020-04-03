// React
import React from 'react'
import styled from 'styled-components'
// images
import imgLaptop from '../../assets/images/laptop.png'

/**
 * Funtional Component to render Header section
 */
const Header = () => {
    return (
        <Section>
            <div className="background"></div>
            <div className="header-content">
                <div className="header-text">
                    <h2>Johandry Mora</h2>
                    <h3>Informatics Engineer</h3>
                    <p>Application development is what I am passionate about and being aware of new technologies is my main objective</p>
                </div>
                <figure className="header-img">
                    <img src={imgLaptop} alt="laptop" width="100%" />
                </figure>
            </div>
        </Section>
    )
}
export default Header

/**
 * Estyled component and component class
 */
const Section = styled.section`
    grid-area: header;
    position: relative;

    .background {
        position: absolute;
        background: rgb(2, 0, 36);
        background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 40%, rgba(0, 212, 255, 1) 100%);
        clip-path: polygon(0% 0%, 0% 74%, 29% 99%, 29% 99%, 100% 76%, 100% 0%);
        height: 100%;
        width: 100%;
    }

    .header-content {
        display: grid;
        grid-template-columns: 60% 40%;
        align-items: center;
        position: relative;
        padding: 3rem;
    }

    .header-text {
        margin: auto;
        width: 60%;
        color: white;

        h2 {
            font-size: 2.5rem;
            font-weight: 500;
        }

        p {
            margin: 1rem 0;
            font-style: italic;
        }
    }

    .header-img {
        width: 70%;
    }

    @media screen and (max-width: 800px){
        .header-content {
            grid-template-columns: 100%;
            grid-template-rows: 10rem 10rem;
            align-items: center;
            position: relative;
            padding: 1rem;
        }

        .header-text {
            width: 70%;
        }

        .header-img {
            width: 30%;
            margin: auto;
        }
    }

    @media screen and (max-width: 700px){
        .header-img {
            width: 40%;
            margin: auto;
        }
    }

    @media screen and (max-width: 600px){
        .header-text {
            width: 80%;
        }

        .header-img {
            width: 50%;
            margin: auto;
        }
    }

    @media screen and (max-width: 500px){
        .header-text {
            width: 90%;
        }

        .header-img {
            width: 60%;
            margin: auto;
        }
    }

    @media screen and (max-width: 400px){
        .header-img {
            width: 70%;
            margin: auto;
        }
    }

    @media screen and (max-width: 350px){
        .header-img {
            width: 85%;
            margin: auto;
        }
    }
`