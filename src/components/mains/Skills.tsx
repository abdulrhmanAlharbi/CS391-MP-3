import {styled} from 'styled-components';
import {useEffect} from "react";

//container
const StyledMain = styled.main`
    width: 78%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

const CurrentpageLabel = styled.div`
    display: flex;  /* to be able to add more labels if needed */
    align-items: flex-end;
    height: 5vh;
    width: 100%;
    background: #343538;

    @media screen and (max-width: 900px) {
        width: 100%;
        align-items: center;
    }
`

const LabelContainers = styled.div`
    display: flex; /* to move the text using flexbox */
    flex-direction: row;
    align-items: flex-end; /* move to bottom */
    width: 17%;
    height: 90%;
    background: #232426;
    font-size: calc(3px + 1vw);

    @media screen and (max-width: 900px) {
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`

const CurrentPagetxt = styled.h2`
    margin-left: 1vw;
    margin-bottom: 0.2vh;
    color: #b3a6ff;

    @media screen and (max-width: 900px) {
        margin-left: unset;
        margin-bottom: unset;
    }

`
//

const Section1 = styled.section`
    padding: 3vh 3vw 7vh 3vw; /* im using padding to allow borders to occupy the entire area */
    color: #dca060;
    font-size: calc(2px + 1.2vw);
    border-bottom: 0.4vh dashed #343538;
`
const Section2 = styled.section`
    padding: 6vh 3vw 7vh 3vw;
    color: #dca060;
    font-size: calc(2px + 1.2vw);
    border-bottom: 0.4vh dashed #343538;

    h3 {
        font-size: calc(2px + 1.5vw);
        color: #ffcf9b;
    }

    @media screen and (max-width: 900px) {
        padding: 3vh 3vw 7vh 3vw;

        h3 {
            text-align: center;
            padding-bottom: 2vh;
        }
    }
`

const Section3 = styled.section`
    padding: 6vh 3vw 7vh 3vw;
    color: #dca060;
    font-size: calc(2px + 1.2vw);
    border-bottom: 0.4vh dashed #343538;

    h3 {
        font-size: calc(2px + 1.5vw);
        color: #ffcf9b;
    }

    @media screen and (max-width: 900px) {
        padding: 3vh 3vw 7vh 3vw;

        h3 {
            text-align: center;
            padding-bottom: 2vh;
        }
    }
`



export default function Skills() {
    useEffect(() => {
        document.title = "Skills | resume";
    });

    return (
        <StyledMain>
            <CurrentpageLabel>
                <LabelContainers>
                    <CurrentPagetxt>Skills</CurrentPagetxt>
                </LabelContainers>
            </CurrentpageLabel>

            <Section1>
                <p>
                    Here are some of the technical and soft skills I have developed through my studies and projects.
                </p>
            </Section1>
            <Section2>
                <h3>Technical Skills</h3>
                <ul>
                    <li>Proficient in <strong>Python, Java, C, Rust and Bash </strong></li>
                    <li>Experience with <strong>Linux system administration</strong></li>
                    <li>Knowledge of <strong>networking fundamentals and cybersecurity principles</strong></li>
                    <li>Familiar with <strong>database management</strong> (MySQL, MongoDB)</li>
                </ul>
            </Section2>
            <Section3>
                <h3>Soft Skills</h3>
                <ul>
                    <li>Analytical and problem-solving skills</li>
                    <li>Ability to troubleshoot and debug effectively</li>
                    <li>Experience collaborating in development teams</li>
                </ul>
            </Section3>


        </StyledMain>
    )

}