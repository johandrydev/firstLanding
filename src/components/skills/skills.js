// React
import React from 'react'
import styled from 'styled-components'

// data from skills
const contenSkills = [
    [
        {
            title: 'Js',
            background: '#1e88e5',
            width: '60%'
        },
        {
            title: 'React',
            background: '#1565c0',
            width: '80%'
        },
        {
            title: 'Vue',
            background: '#1976d2',
            width: '70%'
        },
        {
            title: 'Angular',
            background: '#2196f3',
            width: '50%'
        },
        {
            title: 'Ionic',
            background: '#2196f3',
            width: '50%'
        }
    ],
    [
        {
            title: 'Html, Css',
            background: '#1e88e5',
            width: '60%'
        },
        {
            title: 'Golang',
            background: '#1976d2',
            width: '70%'
        },
        {
            title: 'Node Js',
            background: '#2196f3',
            width: '50%'
        },
        {
            title: 'Php (Yii2 framework)',
            background: '#1565c0',
            width: '80%'
        },
        {
            title: 'Blockchain solutions',
            background: '#1e88e5',
            width: '60%'
        }
    ]
]

/**
 * Funtional Component to render Skills section
 */
const Skills = () => (
    <Section>
        <h3 className="div-title-skill title-section">Skills</h3>
        <div className="div-skill">
            {contenSkills.map((skill, index) => (
                <div className="div-skill-bar" key={index} >
                    {skill.map(({ title, background, width }, ind) => {
                        const styleSkill = {
                            backgroundColor: background,
                            width: width
                        }
                        return (
                            <div key={ind}>
                                <span>{title}</span>
                                <div className="bar-wrap">
                                    <span className="bar-fill" style={styleSkill}></span>
                                    <div className="percentage">{width}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ))}
        </div>
    </Section>
)
export default Skills

/**
 * Estyled component and component class
 */
const Section = styled.section`
    grid-area: skills;
    background: rgb(255,255,255);
    background: linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(230,230,230,1) 17%);
    padding: 3rem;
    display: grid;
    flex-direction: column;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
        ".      titleSkill      titleSkill      titleSkill      titleSkill      ."
        ".      skill           skill           skill           skill           .";

    .div-title-skill {
        grid-area: titleSkill;
    }

    .div-skill {
        grid-area: skill;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        margin-bottom: 3rem;

        .div-skill-bar {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 100%;

            > div {
                margin: .5rem 0;

                :hover {
                    .bar-fill {
                        transform: scaleY(1.5)
                    }

                    .percentage {
                        display: flex;
                        justify-content: center;
                        font-size: small;
                        margin: .2rem;
                    }
                }
            }
        }
    }

    .bar-wrap {
        background-color: rgb(182, 188, 226);
        border-radius: 10px;
        margin-bottom: 10px;
        height: 5px;

        .bar-fill {
            border-radius: 10px;
            display: block;
            height: 5px;
            width: 0px;
        }

        .percentage {
            display: none;
        }
    }


    @media screen and (max-width: 1200px){
        .div-skill {
            padding: 0 3rem;
        }
    }

    @media screen and (max-width: 1000px){
        grid-template-areas:
        ".      titleSkill      titleSkill      titleSkill      titleSkill      ."
        "skill      skill           skill           skill           skill       skill";
        .div-skill {
            padding: 0 3rem;
        }
    }

    @media screen and (max-width: 650px){
        .div-skill {
            padding: 0 1rem;
            grid-template-columns: 1fr;
            grid-gap: 0;
        }
    }
`