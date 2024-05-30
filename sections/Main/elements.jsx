import styled from 'styled-components';
import {
  SectionSubheading,
  StyledSectionContainer,
  SectionHeading
} from '../../components'

export const StyledMainContainer = styled((props) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto;
  background-image: url('/img/background.png');
  background-size: cover;
  background-position: center;
`;

export const StyledHeading = styled((props) => <SectionHeading {...props} />)`
  color: black;
  margin: 0;
`;

export const StyledSubHeading  = styled((props) => <SectionSubheading {...props} />)`
  color:black;
  margin: 0;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const StyledDescriptionContainer  = styled((props) => <div {...props} />)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 20px;
  max-width: 1024px;
  width: 100%;

  @media (max-width: 1100px) {
    flex-direction: column;
    padding: 1rem;
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

export const StyledContainer = styled((props) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 600px) {
    gap: 0.5rem;
  }

  @media (max-width: 350px) {
    gap: 0.25rem;
  }
`;