import styled from "styled-components"
export const Button = styled.button`
background-color:black;
color:white;
min-width:12rem;
padding : .7rem 1rem;
border-radius : .5rem;
border: .2rem solid transparent;
transition : .4s background ease-in;
font-size:1rem;
&:hover{
    background-color:white;
    border:.2rem solid black;
    color:black;
    transition : .3s background ease-in;
}
`;
export const OutlineButton = styled(Button)`
background-color:white;
color:black;
border: .2rem solid black;
&:hover{
    background-color:black;
    border:.2rem solid transparent;
    color:white;
}
`;