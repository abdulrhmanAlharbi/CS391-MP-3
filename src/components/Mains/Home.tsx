import {styled} from "styled-components";

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

/// content

const ImgBioParent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    border-bottom: #343538 1vh solid;
`

const ImgContainer = styled.div`
    width: 40%;
    margin: 6vh;
    border: #343538 0.45vh solid;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`

const BioContainer = styled.div`
    width: 100%;
    padding-top: 6vh;
`

const Bio = styled.p`
    align-self: center;
    width: 100%;
    padding-right: 2vw;
    color: #dca060;
    font-size: calc(2px + 1.3vw);
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
    return (
        <StyledMain>
            <CurrentpageLabel>
                <LabelContainers>
                    <CurrentPagetxt>Home</CurrentPagetxt>
                </LabelContainers>
            </CurrentpageLabel>

            <ImgBioParent>
                <ImgContainer>
                    <Img src="../../public/picture.jpeg" alt="A picture of Abdulrhman Alharbi"/>
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