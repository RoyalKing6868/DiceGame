import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from 'styled-components';
import { Button, OutlineButton } from "../styled/button";
import Rules from "./Rules";
const GamePlay = () =>{
    const [selectedNumber,setSelectedNumber] = useState();
    const [currentDice,setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState("")
    const [showRules,setShowRules] = useState(false);
    const generateRandom = () => {
        return Math.ceil(Math.random()*6);
    }
    const roleDice = () =>{
        if(!selectedNumber) {
            setError("You have not selected any Number");
            return;
        };
        const randomNo = generateRandom();
        setCurrentDice((prev) => randomNo)
        if(randomNo===selectedNumber){
            setScore((prev) => prev+randomNo);
        }
        else{
            setScore((prev) => prev);
        }
        setSelectedNumber(undefined);
    };
    const resetScore = () =>{
        setScore(0);
    }

    return (
        <MainContainer>
            <div className="topSection">
                <TotalScore score={score}/>
                <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice}/>
            <div className="controlButton">
                <OutlineButton onClick={resetScore}>Restore</OutlineButton>
                <Button onClick={()=>setShowRules((prev) => !prev)}>{showRules? "Hide":"Show"} Rules</Button>
            </div>
            {showRules && <Rules/>}
        </MainContainer>
    );
}
export default GamePlay;
const MainContainer = styled.main`
    margin: 1rem;
    .topSection{
        display:flex;
        justify-content:space-between;
        align-items:end;
    }
    .controlButton{
        display:flex;
        flex-direction : column;
        gap:1rem;
        align-items:center;
    }

`;