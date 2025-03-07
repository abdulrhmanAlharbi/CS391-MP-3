import {styled} from 'styled-components';

//container
const StyledMain = styled.main`
    width: 78%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`
const CurrentpageLabel = styled.div`
    display: flex;  /* to be able to add more labels if needed */
    align-items: flex-end;
    height: 5vh;
    width: 100%;
    background: #343538;
`

const LabelContainers = styled.div`
    display: flex; /* to move the text using flexbox */
    flex-direction: row;
    align-items: flex-end; /* move to bottom */
    width: 17%;
    height: 90%;
    background: #232426;
    font-size: calc(3px + 1vw);
`

const CurrentPagetxt = styled.h2`
    margin-left: 1vw;
    margin-bottom: 0.2vh;
    color: #b3a6ff;
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
`



export default function AboutMe() {
    return (
        <StyledMain>
            <CurrentpageLabel>
                <LabelContainers>
                    <CurrentPagetxt>About Me</CurrentPagetxt>
                </LabelContainers>
            </CurrentpageLabel>

            <Section1>
                <p>
                    My name is <strong>Abdulrhman Alharbi</strong>, and I’m currently pursuing my Bachelor’s degree in Computer Science at Boston University.
                </p>
            </Section1>
            <Section2>
                <h3>Education</h3>
                <p>
                    I'm currently enrolled at Boston University, working towards a degree in Computer Science.Throughout
                    my studies, I have gained experience in various areas such as networking, cybersecurity, data
                    structures, algorithms, and database management.
                </p>
            </Section2>
            <Section3>
                <h3>Interests</h3>
                <ul>
                    <li>I have a strong interest in Linux and system administration.</li>
                    <li>In my free time, I enjoy exploring different Linux distributions and learning about the inner
                        workings of the kernel.</li>
                    <li>I also find topics like networking and cybersecurity fascinating and enjoy understanding how
                        systems interact.</li>
                </ul>
            </Section3>


        </StyledMain>
    )

}