// React
import React from 'react'
import styled from 'styled-components'
// Images
import imgGitHub from '../../assets/images/github-logo.png'
// Components 3rd
import { Button } from '@material-ui/core'


/**
 * Funtional Component to render Briefcase section
 */
const Briefcase = () => (
    <Section>
        <div className="card">
            <h4>Projects repository</h4>
            <figure>
                <img src={imgGitHub} alt="Git Hub" width="100%" />
            </figure>
            <div style={{
                width: '100%'
            }}>
                <Button style={{
                    background: 'rgba(9, 9, 121, 1)',
                    color: 'white'
                }} variant="contained">
                    Go to Git Hub
                    </Button>
            </div>
        </div>
    </Section>
)
export default Briefcase

/**
 * Estyled component and component class
 */
const Section = styled.section`
    grid-area: briefcase;
    height: 20rem;
    padding: 2rem;
    display: flex;
    justify-content: center;

    .card {
        width: 50%;
        padding: 1rem;
        background: #fbf9f9;
        border-radius: 10px;
        flex-direction: column;
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    figure {
        width: 10rem;
    }

    @media screen and (max-width: 1200px){
        .card {
            width: 60%;
        }
    }

    @media screen and (max-width: 950px){
        .card {
            width: 70%;
        }
    }

    @media screen and (max-width: 900px){
        .card {
            width: 80%;
        }
    }

    @media screen and (max-width: 800px){
        .card {
            width: 60%;
        }
    }

    @media screen and (max-width: 700px){
        .card {
            width: 70%;
        }
    }

    @media screen and (max-width: 600px){
        .card {
            width: 80%;
        }
    }

    @media screen and (max-width: 500px){
        .card {
            width: 90%;
        }
    }

    @media screen and (max-width: 450px){
        .card {
            width: 100%;
        }
    }
`
