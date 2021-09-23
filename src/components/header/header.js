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
        <>
            <Backgroud />
            <Section>
                <div className="header-content">
                    <div className="header-text">
                        <h2>Johandry Mora</h2>
                        <h3 className="title-section">Informatics Engineer</h3>
                        <p>I am passionate about application development and learning about new technologies but creating quality software and improving every day is my main objective</p>
                    </div>
                    <figure className="header-img">
                        <img src={imgLaptop} alt="laptop" width="100%" />
                    </figure>
                </div>
            </Section>
        </>
    )
}
export default Header

/**
 * Estyled component and component class
 */
const Section = styled.section`
    grid-area: header;
    position: relative;
    min-height: 50vh;

    .header-content {
        display: grid;
        grid-template-columns: 60% 40%;
        align-items: center;
        position: relative;
        width: 100%;
        height: 100%;
    }

    .header-text {
        width: 80%;
        color: white;

        h2 {
            font-size: 2.5rem;
            font-weight: 500;
        }

        h3 {
            margin: 1rem 0 2rem;
        }

        p {
            margin: 1rem 0;
            font-style: italic;
            font-size: 20px;
            line-height: 1.3;
        }
    }

    .header-img {
        display: flex;
        justify-content: end;
        img {
            width: 70%;
        }
    }

    @media screen and (max-width: 800px){
        min-height: 100vh;
        .header-content {
            grid-template-columns: 100%;
            align-items: center;
            position: relative;
            padding: 1rem;
        }

        .header-img {
            display: flex;
            justify-content: end;
            img {
                width: 65%;
            }
        }
    }

    @media screen and (max-width: 700px){
        .header-text {
            width: 100%;
        }

        .header-img {
            display: flex;
            justify-content: end;
            img {
                width: 60%;
            }
        }
    }

    @media screen and (max-width: 600px){
        .header-text {
            padding: 0 1rem;
        }

        .header-img {
            display: flex;
            justify-content: end;
            img {
                width: 100%;
            }
        }
    }
`

/**
 * Estyled component and component class
 */
const Backgroud = styled.div`
    position: absolute;
    min-height: 50vh;
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 40%, rgba(0, 212, 255, 1) 100%);
    clip-path: polygon(0% 0%, 0% 74%, 29% 99%, 29% 99%, 100% 76%, 100% 0%);
    width: 100%;

    @media screen and (max-width: 800px){
        min-height: 100vh;
        min-height: 80vh;
    }
`