// Styled elements for the Card go here

import styled from 'styled-components'

export const StyledContainer = styled(({ ...props }) => <div {...props} />)`
display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px; 
  height: 400px; 
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1100px) {
    max-width: 90%;
    height: auto;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }

  @media (max-width: 350px) {
    padding: 0.5rem;
  }
`;

export const StyledDescription = styled(({ ...props }) => <div {...props} />)`
font-family: Poppins;
font-size: 1.25rem;
line-height: 1.875rem;
font-weight: 300;
text-align: center;

@media (max-width: 600px) {
  font-size: 1rem;
  line-height: 1.5rem;
}

@media (max-width: 350px) {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
`;

export const StyledInnerHeading = styled(({ ...props }) => <h1 {...props} />)`
font-family: Poppins;
font-size: 1.5rem;
line-height: 1.5rem;
font-weight: 700;
text-decoration: underline;
text-align: center;

@media (max-width: 600px) {
  font-size: 1.25rem;
  line-height: 1.25rem;
}

@media (max-width: 350px) {
  font-size: 1rem;
  line-height: 1rem;
}
`;

export const StyledTinyText = styled((props) => <p {...props} />)`
font-family: Poppins;
font-size: 1rem;
line-height: 1.5rem;
font-weight: 400;
color: black;
text-align: center;

@media (max-width: 600px) {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

@media (max-width: 350px) {
  font-size: 0.75rem;
  line-height: 1rem;
}
`;

export const StyledImageContainer  = styled(({ ...props }) => <div {...props} />)`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: auto;
padding: 1rem;

img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 600px) {
  padding: 0.5rem;
}

@media (max-width: 350px) {
  padding: 0.25rem;
}
`;


