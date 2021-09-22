// React
import React from 'react'
import styled from 'styled-components'
// Components 3rd
import { Button } from '@material-ui/core'


/**
 * Funtional Component to render Briefcase section
 */
const Briefcase = () => (
    <Section>
        <div>
            <h4>Projects repository</h4>
            <p>To see personal projects and organizations where I have worked and collaborated with projects (Ecommerce, App Webs, Mobile and Blockchain Solutions)</p>
        </div>
        <div>
            <a href="https://github.com/johandrydev" target="_blank" rel="noopener noreferrer">
                <Button style={{
                    background: 'rgba(9, 9, 121, 1)',
                    color: 'white'
                }} variant="contained">
                    Go to Git Hub
                </Button>
            </a>

            <a href="https://gitlab.com/johandrydev" target="_blank" rel="noopener noreferrer">
                <Button style={{
                    background: 'rgba(9, 9, 121, 1)',
                    color: 'white'
                }} variant="contained">
                    Go to Git Lab
                </Button>
            </a>
        </div>

    </Section>
)
export default Briefcase

/**
 * Estyled component and component class
 */
const Section = styled.section`
    grid-area: briefcase;
    height: 18rem;
    /* padding: 2rem 2rem 2rem 6rem; */
    padding: 2rem 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;

    a {
        text-decoration: none;
    }

    a:nth-child(n + 2) {
        margin-left: 1rem;
    }

    h4 {
        margin: 1rem 0;
    }

    @media screen and (max-width: 1000px){
        padding: 2rem 4rem;
    }

    @media screen and (max-width: 900px){
        padding: 2rem;
    }

    /* @media screen and (max-width: 1030px){
        padding: 2rem 5rem;
    }

    @media screen and (max-width: 967px){
        padding: 2rem 2rem 2rem 4rem;
    }

    @media screen and (max-width: 838px){
        padding: 2rem;
    }

    @media screen and (max-width: 800px){
        padding: 2rem 6rem;
    }

    @media screen and (max-width: 650px){
        padding: 2rem 4rem;
    }

    @media screen and (max-width: 550px){
        padding: 2rem;
    } */
`
