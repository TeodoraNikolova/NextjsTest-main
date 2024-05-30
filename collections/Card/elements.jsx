import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledDescription = styled.div`
  font-family: Poppins;
  font-size: 1.25rem;
  line-height: 1.875rem;
  font-weight: 300;
  text-align: center;
`;

export const StyledInnerHeading = styled.h1`
  font-family: Poppins;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 700;
  text-decoration: underline;
  text-align: center;
`;

export const StyledTinyText = styled.p`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: black;
  text-align: center;
`;

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;

  img {
    max-width: 100%;
    height: auto;
  }
`;