import styled from "styled-components";
const TotalScore = ({score}) =>{
    return(
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Score</p>
        </ScoreContainer>
    );
}
export default TotalScore;

const ScoreContainer = styled.div`
    margin: 1rem;
    max-width:12rem;
    text-align:center;
    h1{
        font-size:6rem;
        line-height:6rem;
        font-weight:500;
    }
    p{
        font-size:2rem;
        font-weight:500;
    }
`