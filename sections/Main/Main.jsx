import Image from "next/image";
import { StyledMainContainer, StyledHeading, StyledSubHeading, StyledDescriptionContainer, StyledContainer, StyledImageContainer } from "../Main/elements";
import { Card } from "../../collections/Card/Card";

export const Main =({ image, heading, subHeading, cards, ...props }) => {
  return (
    <StyledMainContainer {...props}>
      <StyledHeading>{heading}</StyledHeading>
      <StyledSubHeading>{subHeading}</StyledSubHeading>
      <StyledDescriptionContainer>
        <StyledImageContainer>
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </StyledImageContainer>
        <StyledContainer>
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </StyledContainer>
      </StyledDescriptionContainer>
    </StyledMainContainer>
  );
}; 