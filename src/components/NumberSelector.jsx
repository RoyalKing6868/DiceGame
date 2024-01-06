import styled from "styled-components";
const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber}) =>{
    const numbers = [1,2,3,4,5,6];
    const numberSelectorHandler = (value) =>{
        setSelectedNumber(value);
        setError("");
    }

    return (
    <NumberSelectorContainer>
        <p className="errMsg">{error}</p>
        <div className="numberBox">
            {numbers.map((value,i) => (
                <Box key={i} isSelected={value===selectedNumber} onClick={() =>numberSelectorHandler(value)}>{value}</Box>
            ))}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:end;
    .numberBox{
        display :flex;
        gap:1.5rem;
    }
    p{
        font-size:1.5rem;
        font-weight:700;
    }
    .errMsg{
        color:red;
        font-size:1rem;
        margin-bottom:2rem;
    }
`;
const Box = styled.div`
    height:4.5rem;
    width:4.5rem;
    border:0.2rem solid black;
    font-size:1.5rem;
    display:grid;
    place-items:center;
    font-weight:700;
    cursor:pointer;
    background-color:${(props)=>(props.isSelected?"black":"white")};
    color:${(props)=>(props.isSelected?"white":"black")};
`;