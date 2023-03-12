import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
width: 100px;
height: 100px;
perspective: 600px;
`;

export const CardFront = styled.div`
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
transition: transform 0.5s;
transform: ${props => props.rotated ? "rotateY(180deg)" : null};
opacity: ${props => props.opacity};
`;

export const CardBack = styled.div`
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
transition: transform 0.5s;
transform: ${props => props.rotated ? "rotateY(0deg)" : "rotateY(180deg)"};
opacity: ${props => props.opacity};
`;
