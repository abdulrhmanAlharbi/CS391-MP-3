import {Link} from "react-router";
import {styled} from "styled-components";

const StyledNav = styled.nav`
    @media screen and (max-width: 900px){
        width: 100%;
        display: flex;
        flex-direction: row;
}
`

const Navul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    list-style: none;
    padding-left: 0;

    @media screen and (max-width: 900px){
        flex-direction: row;
        list-style: none;
        padding-left: 0;
        width: 100%;
    }
`

const Navli = styled.li`
    display: flex; /* applied to anchor tag inside - make it occupy the entire box */
    width: 100%;
    height: 7vh;
    background-color:#232426;
    margin: 0;
    
    &:hover {
        background: #1b1c1d;
    }

    @media screen and (max-width: 900px){
        font-size: calc(2px + 1.5vw);
        background: #232426;
        flex: 1;
        height: 100%;
    }
`

const LeftContent = styled.div`
    width : 23%;
    height: 100vh;
    border-right: 0.4vw solid #343538;
    /* box-shadow: 4px 0px 4px #161719; */
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 900px) {
        border-top:  1vh solid #343538;
        border-right: 0vw solid #343538;
        width: 100%;
        height: 6.3vh; /* this changes the size of the navigation menu and everything inside it */
        flex-direction: row; /* change alignment */
        justify-content: space-between;
    }
`

//Navigation text
const NavigationtxtParent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: 5vh;
    width: 100%;
    background: #343538;
    
    @media screen and (max-width: 900px) {
        display:none;
    }
`

const NavtxtContainer = styled.div`
    display: flex; /* to move the text using flexbox */
    flex-direction: row;
    align-items: flex-end; /* move to bottom */
    width: 65%;
    height: 90%;
    background: #232426;
    font-size: calc(3px + 1vw);
    @media screen and (max-width: 900px) {
        display:none;
    }
`

const NavHeaderText = styled.h2`
    margin-left: 1vw;
    margin-bottom: 0.2vh;
    color: #41afff;
    @media screen and (max-width: 900px) {
        display:none;
    }
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
    
    &:hover {
        color: #e87a89;
        font-weight: bold;
        padding-left: 1.8vw;
    }
    
    @media screen and (max-width: 900px) {
        height: 100%;
        width : 100%;
        text-align: center;
        text-decoration: none;
        font-size: calc(3px + 0.9vw);
        padding-left: unset;
        color: white;
        
        &:hover {
            padding-left: unset;
        }
    }
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
            <StyledNav>
                <Navul>
                    <Navli><StyledLink to="/">Home</StyledLink></Navli>
                    <Navli><StyledLink to="/about-me">About Me</StyledLink></Navli>
                    <Navli><StyledLink to="/skills">Skills</StyledLink></Navli>
                    <Navli><StyledLink to="/projects">Projects</StyledLink></Navli>
                    <Navli><StyledLink to="/experience">Experience</StyledLink></Navli>
                    <Navli><StyledLink to="/contact-me">Contact Me</StyledLink></Navli>
                </Navul>
            </StyledNav>
        </LeftContent>
    )

}