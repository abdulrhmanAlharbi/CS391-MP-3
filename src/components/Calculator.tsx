import {styled} from "styled-components";

const CalculatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 90%;
    padding-top: 5vh;
    font-family: "Orbitron", serif;
`

const ResultContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    border: #dca060 0.3vh solid;
    height: 7vh;
    overflow: hidden;
`

const Result = styled.p`
    width: fit-content;
    font-size: calc(3px + 2vw);
    padding-right: 0.2vw;
    color: #dca060;
`
const UserInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    border-top: 2vh #dca060;
    font-family: "Orbitron", serif;
`

const NumInputParent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    label {
        height: 35%;
        width: 100%;
        background: #dca060;
        align-content: center;
        text-align: center;
        color: #101112;
        font-size: calc(3px + 1vw);
        font-weight: bold;
    }
`

const NumInput = styled.input`
    flex: 1;
    width: 100%;
    background: #1d1f21;
    color: #dca060;
    font-size: calc(3px + 2vw);
    text-align: center;
`

const Operator = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`

const StyledButton = styled.button`
    flex: 1;
    background: #232426;
    font-weight: bold;
    font-size: calc(3px + 1vw);
    color: white;
`

//calculator functions start

//calculator functions end

export default function Calculator() {
    return (
        <CalculatorContainer>
            <ResultContainer>
                <Result></Result>
            </ResultContainer>
            <UserInput>
                <NumInputParent>
                    <label>First Number</label><NumInput type='number' />
                </NumInputParent>

                <Operator>
                    <StyledButton>+</StyledButton>
                    <StyledButton>-</StyledButton>
                    <StyledButton>*</StyledButton>
                    <StyledButton>/</StyledButton>
                    <StyledButton>**</StyledButton>
                    <StyledButton>clear</StyledButton>
                </Operator>

                <NumInputParent>
                    <label>First Number</label><NumInput type='number' />
                </NumInputParent>
            </UserInput>
        </CalculatorContainer>
    )
}