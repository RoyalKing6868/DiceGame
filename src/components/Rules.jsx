import styled from "styled-components"
function Rules() {
  return (
    <RulesContainer>
        <h1>How to play dice game</h1>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>After click on  dice  if selected number is equal to dice number you will get same point as dice 
        if you get wrong guess then  2 point will be dedcuted </p>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    background-color:#FBF1F1;
    padding:1rem;
    max-width:800px;
    margin:2rem auto;
    border-radius:1rem;
    h1{
        font-size:2rem;
        font-weight:700
    }
    p{
        font-size:1rem;
        font-weight:500;
    }
`