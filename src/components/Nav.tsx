import {Link} from "react-router";
import {styled} from "styled-components";

const Navul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    list-style: none;
    padding-left: 0;
`

const Navli = styled.li`
    display: flex; /* applied to anchor tag inside - make it occupy the entire box */
    width: 100%;
    height: 7vh;
    background-color:#232426;
    margin: 0;
`

const LeftContent = styled.div`
    width : 23%;
    height: 100vh;
    border-right: 0.4vw solid #343538;
    /* box-shadow: 4px 0px 4px #161719; */
    display: flex;
    flex-direction: column;
`

//Navigation text
const NavigationtxtParent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: 5vh;
    width: 100%;
    background: #343538;
`

const NavtxtContainer = styled.div`
    display: flex; /* to move the text using flexbox */
    flex-direction: row;
    align-items: flex-end; /* move to bottom */
    width: 65%;
    height: 90%;
    background: #232426;
    font-size: calc(3px + 1vw);
`

const NavHeaderText = styled.h2`
    margin-left: 1vw;
    margin-bottom: 0.2vh;
    color: #41afff;
`
const StyledLink = styled(Link)`
    height: 100%;
    width : 100%;
    text-align: left;
    align-content: center;
    text-decoration: none;
    font-size: calc(3px + 0.9vw);
    padding-left: 1.8vw;
    color: white;
`


export default function Nav (){
    return (
        <LeftContent>
            {
                // add small label with text navigation at the top of navigation menu
            }
            <NavigationtxtParent>
                <NavtxtContainer>
                    <NavHeaderText>Navigation</NavHeaderText>
                </NavtxtContainer>
            </NavigationtxtParent>
            <nav>
                <Navul>
                    <Navli><StyledLink to="/">Home</StyledLink></Navli>
                    <Navli><StyledLink to="/about-me">About Me</StyledLink></Navli>
                    <Navli><StyledLink to="/skills">Skills</StyledLink></Navli>
                    <Navli><StyledLink to="/projects">Projects</StyledLink></Navli>
                    <Navli><StyledLink to="/experience">Experience</StyledLink></Navli>
                    <Navli><StyledLink to="/contact-me">Contact Me</StyledLink></Navli>
                </Navul>
            </nav>
        </LeftContent>
    )

}