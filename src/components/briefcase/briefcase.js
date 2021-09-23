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
            <p>You can view the personal projects and organizations where I have worked and collaborated with projects (App Webs, Mobile and Blockchain Solutions)</p>
        </div>
        <div className="buttons">
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
    min-height: 50vh;
    padding: 2rem 0;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;

    .buttons {
        display: flex;
        a {
            text-decoration: none;
        }
    
        a:nth-child(n + 2) {
            margin-left: 1rem;
        }
    }

    p {
        font-size: 20px;
        line-height: 1.3;
    }

    h4 {
        font-size: 25px;
        margin: 1rem 0;
    }

    @media screen and (max-width: 600px){
        padding: 0 1rem;
    }
`
