import {styled} from 'styled-components';
import Calculator from "../Calculator";
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
//project 1
const Project1Titles = styled.h4`
    display: flex;
    align-items: center;
    padding-left: 1.8vw;
    height: 7vh;
    border-bottom: 0.4vh dashed #343538;
    font-size: calc(3px + 1.3vw);
    color: #ffcf9b;
`

const Project1 = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom:  1vh solid #343538;
`

export default function Projects() {
    useEffect(() => {
        document.title = "Projects | resume";
    });

    return (
        <StyledMain>
            <CurrentpageLabel>
                <LabelContainers>
                    <CurrentPagetxt>Projects</CurrentPagetxt>
                </LabelContainers>
            </CurrentpageLabel>

            <Section1>
                <p>
                    This page serves as a showcase of some projects I have worked on, presenting simple implementations of various concepts and designs.
                </p>
            </Section1>
            <Project1Titles>
                Calculator
            </Project1Titles>
            <Project1>
                <Calculator />
            </Project1>

        </StyledMain>
    )

}