import styled from 'styled-components';

export const StyledContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  max-width: 1920px;
  align-items: center;
  width: 100%;
  height: auto;
  border-radius: 6px;
  transition: border 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    border: 2px solid #3F51B5;
    color: #3F51B5;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    padding: 1rem; 
  }

  @media (max-width: 600px) {
    padding: 1rem;
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

  @media (max-width: 600px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  @media (max-width: 350px) {
    font-size: 0.75rem;
    line-height: 1rem;
  }
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