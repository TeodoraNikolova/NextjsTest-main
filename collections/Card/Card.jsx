import Image from 'next/image';
import { StyledContainer, StyledDescription, StyledInnerHeading, StyledTinyText, StyledImageContainer } from "./elements";

export const Card = ({ card }) => {
  const { image, title, description } = card;
  return (
    <StyledContainer>
      <StyledImageContainer>
        <Image src={image.src} alt={title} width={image.width} height={image.height} />
      </StyledImageContainer>
      <StyledDescription>
        <StyledInnerHeading>{title}</StyledInnerHeading>
        <StyledTinyText dangerouslySetInnerHTML={{ __html: description }} />
      </StyledDescription> 
    </StyledContainer>
  );
}; 