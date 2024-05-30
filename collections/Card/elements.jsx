import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  gap: 0.5rem; 

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 70%;
    padding: 1rem;
  }

  @media (max-width: 350px) {
    padding: 0.5rem;
  }
`;

export const StyledDescription = styled.div`
  font-family: Poppins;
  font-size: 0.875rem; 
  line-height: 1.25rem;
  font-weight: 300;
`;

export const StyledInnerHeading = styled.h1`
  font-family: Poppins;
  font-size: 1rem; 
  line-height: 1rem; 
  font-weight: 700;
  text-decoration: underline;
`;

export const StyledTinyText = styled.p`
  font-family: Poppins;
  font-size: 0.75rem; 
  line-height: 1rem; 
  font-weight: 400;
`;

export const StyledImageContainer = styled.div`
  display: flex;
  max-width: 100%;
  width: 70%;
  height: auto;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 80%;
    padding: 1rem;
  }

  @media (max-width: 350px) {
    padding: 0.5rem;
  }
`;