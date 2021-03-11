import styled from "@emotion/styled";

const StyledImage = styled.img`
  position: absolute;
  right: 0;
  transform: translateY(50%);
  bottom: 0;

  @media (max-width: 1050px) {
    left: 0;
    bottom: 0;
    transform: translateY(0);
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

export default function DotsBg() {
  return <StyledImage src="/assets/desktop/bg-pattern-dots.svg" />;
}
