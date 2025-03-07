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
    width: 21%;
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

const QA = styled.div`

`


const Q = styled.p`
    color: #e76b65;
    font-weight: bold;
`

const A = styled.p`
    padding-left: 1.6vw;
`
export default function ContactMe() {
    useEffect(() => {
        document.title = "Contact Me | resume";
    });

    return (
        <StyledMain>
            <CurrentpageLabel>
                <LabelContainers>
                    <CurrentPagetxt>Contact Me</CurrentPagetxt>
                </LabelContainers>
            </CurrentpageLabel>

            <Section1>
                <p>
                    Feel free to reach out for collaboration, project inquiries, or just to connect.
                </p>
            </Section1>
            <Section2>
                <h3>Contact Details</h3>
                <ul>
                    <li><strong>Email:</strong> aalharbi@bu.edu</li>
                    <li><strong>Phone:</strong> +1 (617) 555-7890</li>
                    <li><strong>Location:</strong> Boston, MA, USA</li>
                    <li><strong>Availability:</strong> Open to freelance, internships, job offers, and collaborations
                    </li>
                    <li><strong>preferred Contact:</strong> Email</li>
                </ul>
            </Section2>
            <Section3>
                <h3>Frequently Asked Questions</h3>
                <QA>
                    <Q>Q: Are you open to collaborations?</Q>
                    <A>I'm always interested in working on exciting projects, particularly those that
                        push me beyond my current expertise.</A>
                </QA>
                <QA>
                    <Q>Q: Do you have any experience with frontend or web development?</Q>
                    <A>Currently, I do not have extensive experience with frontend or web development,
                        but I am actively expanding my knowledge through a course on web development, which I'm
                        currently enrolled in.
                    </A>
                </QA>
            </Section3>


        </StyledMain>
)

}