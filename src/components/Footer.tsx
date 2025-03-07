import {styled} from "styled-components";
import {Link} from "react-router";

const StyledP = styled.p`
`

export default function Footer() {
    return (
        <footer>
            <StyledP>All rights reserved by Abdulrhman Alharbi <Link to="/credits">Credits</Link> &#169;</StyledP>
        </footer>
    )
}