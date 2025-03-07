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
    width: 24%;
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

export default function Experience() {
    useEffect(() => {
        document.title = "Experience | resume";
    });

    return (
        <StyledMain>
            <CurrentpageLabel>
                <LabelContainers>
                    <CurrentPagetxt>Experience</CurrentPagetxt>
                </LabelContainers>
            </CurrentpageLabel>

            <Section1>
                <p>
                    Here are some of the internships and projects that have helped me develop my skills.
                </p>
            </Section1>
            <Section2>
                <h3>System Adminstrator Intern - Akamai Technologies</h3>
                <ul>
                    <li>Assisted in managing Linux-based servers, performing updates, and optimizing system
                        performance.
                    </li>
                    <li>Developed and automated shell scripts for system monitoring and log analysis.</li>
                    <li>Configured user permissions and security settings to enhance system integrity.</li>
                    <li>Provided support in troubleshooting network and server issues.</li>
                </ul>
            </Section2>
            <Section3>
                <h3>University Project: TCP & UDP Protocol Reimplementation</h3>
                <ul>
                    <li>Reimplemented TCP and UDP protocols in C to understand network behavior.</li>
                    <li>Developed a custom packet-handling mechanism to simulate data transmission over networks.</li>
                    <li>Implemented error handling, congestion control, and basic reliability features.</li>
                    <li>Analyzed and compared performance differences between standard and custom implementations.</li>
                </ul>
        </Section3>


</StyledMain>
)

}