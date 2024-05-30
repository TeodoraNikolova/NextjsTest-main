import styled from 'styled-components';

export const StyledContainer = styled(({ ...props }) => <div {...props} />)`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: auto;
margin: 0 auto;
gap: 0.5rem; 

@media (max-width: 600px) {
  padding: 0.5rem;
}

`;


export const StyledDescription = styled(({ ...props }) => <div {...props} />)`
font-family: Poppins;
font-size: 0.875rem; 
line-height: 1.25rem;
font-weight: 300;

@media (max-width: 600px) {
  font-size: 0.75rem; 
  line-height: 1rem; 
}
`;

export const StyledInnerHeading = styled(({ ...props }) => <h1 {...props} />)`
font-family: Poppins;
font-size: 1rem; 
line-height: 1rem; 
font-weight: 700;
text-decoration: underline;
`;

export const StyledTinyText = styled((props) => <p {...props} />)`
font-family: Poppins;
font-size: 0.75rem; 
line-height: 1rem; 
font-weight: 400;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  width: 70%;
  height: 70%;
  justify-content: center;
  padding: 3rem;

  @media (max-width: 1100px) {
    width: 90%;
    height: auto;
    padding: 2rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 1rem;
  }

  @media (max-width: 350px) {
    padding: 0.5rem;
  }
`;