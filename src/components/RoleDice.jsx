import styled from 'styled-components';
const RoleDice = ({currentDice,roleDice}) =>{
    
    return (
        <DiceContainer>
            <div className='dice'>
                <img src={`/Images/dice/dice_${currentDice}.png`} onClick={() => roleDice()} alt="dice_1" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    );
}
export default RoleDice;

const DiceContainer = styled.div`
    .dice{
        cursor:pointer;
    }
    margin:3rem;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    p{
        font-size:1.5rem;
    }

`