// Styled elements for the Card go here

import styled from 'styled-components'

export const StyledContainer = styled(({ ...props }) => <div {...props} />)`
display: flex;
max-width: 1920px;
align-items: center;
width: 100%;
height: auto;
border-radius: 6px;

&:hover {
  border: 2px solid #3F51B5; 
  color: #3F51B5; 
}
`;

export const StyledDescription = styled(({ ...props }) => <div {...props} />)`
font-family: Poppins;
font-size: 1.25rem;
line-height: 1.875rem;
font-weight: 300;
`;

export const StyledInnerHeading = styled(({ ...props }) => <h1 {...props} />)`
font-family: Poppins;
font-size: 1.5rem;
line-height: 1.5rem;
font-weight: 700;
text-decoration: underline;
`;

export const StyledTinyText = styled((props) => <p {...props} />)`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: black;
`;

export const StyledImageContainer  = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  max-width: auto;
  max-height: auto;
  width: 70%;
  height: 70%;
  justify-content: center;
  padding: 3rem;
`;


