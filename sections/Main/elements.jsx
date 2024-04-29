import styled from 'styled-components';
import{
  SectionSubheading,
  StyledSectionContainer,
  SectionHeading
} from '../../components'


export const StyledMainContainer = styled((props) => <div {...props} />)`
	display: flex;
	align-items: center;
	flex-direction: column;
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
`;

export const StyledContainer = styled((props) => <div {...props} />)`
display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  gap: 1rem;
  max-width: 1920px;

  & > div:nth-child(1) {
    width: 70%;
    background-color: #F2F2F2;
  }

  & > div:nth-child(2) {
    width: 80%;
    background-color: #E6E6E6; 
  }

  & > div:nth-child(3) {
    width: 90%;
    background-color: #D9D9D9;
  }
  `;


