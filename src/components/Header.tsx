import {styled} from "styled-components";

const PageHeader = styled.header`
    width: 100%;
    background: #101112;
    color: #dca060;
    margin-top: 0.7vh;
    margin-bottom: 1.5vh;
    display: flex;
    flex-direction: column;
`
const PageImg = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-bottom: #dca060 0.25vh solid;
`

const Styledh1 = styled.h1`
`

const Styledp = styled.p`

`

export default function Header() {
    return (
        <PageHeader>
            <PageImg src="../../public/maine-sunrise-crop.jpg" alt="image of sunset at the header of the page" id="page-img"/>
            <h1>Abdulrhman Alharbi</h1>
            <p>My Online Resume</p>
        </PageHeader>
    )
}