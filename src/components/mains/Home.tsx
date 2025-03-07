import {styled} from "styled-components";
import {useEffect} from "react";

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

/// content

const ImgBioParent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    border-bottom: #343538 1vh solid;
    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        height: 70%;
    }
`

const ImgContainer = styled.div`
    width: 40%;
    margin: 6vh;
    border: #343538 0.45vh solid;
    @media screen and (max-width: 900px) {
        margin: 4vh;

    }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`

const BioContainer = styled.div`
    width: 100%;
    padding-top: 6vh;
    @media screen and (max-width: 900px) {
        padding-top: unset;
    }
`

const Bio = styled.p`
    align-self: center;
    width: 100%;
    padding-right: 2vw;
    color: #dca060;
    font-size: calc(2px + 1.3vw);
    @media screen and (max-width: 900px) {
        font-size: calc(2px + 2vw);
        text-align: center;
        padding-right: unset;
        padding: 2vw;    
    }
`

const BioSpan = styled.span`
    color: #ffcf9b;
    font-weight: bold;
`

const StyledSection = styled.section`
    padding-top: 4vh;
    margin: 1vh 3vw;
    color: #dca060;
    font-size: calc(2px + 1.2vw);
`


export default function Home() {
    useEffect(() => {
        document.title = "Home | resume";
    });

    return (
        <StyledMain>
            <CurrentpageLabel>
                <LabelContainers>
                    <CurrentPagetxt>Home</CurrentPagetxt>
                </LabelContainers>
            </CurrentpageLabel>

            <ImgBioParent>
                <ImgContainer>
                    <Img src="/picture.jpeg" alt="A picture of Abdulrhman Alharbi" />
                </ImgContainer>

                <BioContainer>
                    <Bio>
                        <BioSpan>Hello, I’m Abdulrhman Alharbi! 👋</BioSpan> <br /><br />

                        I’m a Computer Science student currently pursuing my Bachelor's degree at Boston University. Passionate about technology, problem-solving, and creating innovative solutions, I strive to build projects that are both functional and user-friendly.
                    </Bio>
                </BioContainer>
            </ImgBioParent>

            <StyledSection>
                Welcome to my website, here  you’ll find my skills, projects, experience, and ways to connect with me. I’m always open to new opportunities, collaborations, and exciting challenges.
            </StyledSection>
        </StyledMain>
    );

}