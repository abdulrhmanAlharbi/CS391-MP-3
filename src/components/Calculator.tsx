import {styled} from "styled-components";
import {useState} from "react";

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

const Result = styled.p<{negative : boolean}>`
    width: fit-content;
    font-size: calc(3px + 2vw);
    padding-right: 0.2vw;
    color: ${(props) => (props.negative ? "red" : "#dca060")};
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

export default function Calculator() {
    //helper function
    function GetCalcElement() {
        const firstInput = document.getElementById("first-input") as HTMLInputElement ;
        const secondInput = document.getElementById("second-input") as HTMLInputElement ;

        if (!firstInput || !secondInput) {
            console.log("error: required element not found");
        }
        return {firstInput, secondInput};
    }

    //calculator logic
    const [result, setResult] = useState("");

    function MyPow() {
        const {firstInput, secondInput} = GetCalcElement();

        if (!firstInput || !secondInput) {
            return;
        }


        const n = Number(firstInput.value);
        let p = Number(secondInput.value);

        let res = 1;
        let negative = false;

        if (p < 0) {
            p = p * -1;
            negative = true;
        }

        for (let i = 0; i < p; i++){
            res *= n;
        }

        if(negative) {
            res = 1/res;
        }

        setResult(String(res));
    }

    return (
        <CalculatorContainer>
            <ResultContainer>
                <Result id ="resultdiv" negative={Number(result) < 0}>{result}</Result>
            </ResultContainer>
            <UserInput>
                <NumInputParent >
                    <label>First Number</label><NumInput type='number' id="first-input" />
                </NumInputParent>

                <Operator>
                    <StyledButton onClick={() => {
                        const {firstInput, secondInput} = GetCalcElement();
                        if (firstInput && secondInput) {
                            setResult(String(Number(firstInput.value) + Number(secondInput.value)));
                        }}}>+</StyledButton>
                    <StyledButton onClick={() => {
                        const {firstInput, secondInput} = GetCalcElement();
                        if (firstInput && secondInput) {
                            setResult(String(Number(firstInput.value) - Number(secondInput.value)));
                        }}}>-</StyledButton>
                    <StyledButton onClick={() => {
                        const {firstInput, secondInput} = GetCalcElement();
                        if (firstInput && secondInput) {
                            setResult(String(Number(firstInput.value) * Number(secondInput.value)));
                        }}}>*</StyledButton>
                    <StyledButton onClick={() => {
                        const {firstInput, secondInput} = GetCalcElement();
                        if (firstInput && secondInput) {
                            setResult(String(Number(firstInput.value) / Number(secondInput.value)));
                        }}}>/</StyledButton>
                    <StyledButton onClick={MyPow}>**</StyledButton>
                    <StyledButton onClick={() => {
                        const {firstInput, secondInput} = GetCalcElement();
                        if (firstInput && secondInput) {
                            firstInput.value = "";
                            secondInput.value = "";
                        }
                        setResult("")
                    }}>clear</StyledButton>
                </Operator>

                <NumInputParent>
                    <label>Second Number</label><NumInput type='number' id="second-input" />
                </NumInputParent>
            </UserInput>
        </CalculatorContainer>
    )
}