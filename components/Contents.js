import styled from "@emotion/styled";
import DotsBg from "./DotsBg";
import HostImage from "./HostImage";
import Logo from "./Logo";
import TextContents from "./TextContents";
import useWindowSize from "../hooks/useWindowSize";

const Wrapper = styled.div`
  background-color: inheirt;
  position: relative;
  width: 100%;
  height: 640px;
  text-align: end;

  @media only screen and (max-width: 1050px) {
    height: 100%;
  }
`;

export default function Contents({ textData }) {
  const size = useWindowSize();

  if (size.width <= 425) {
    return (
      <>
        <TextContents textData={textData} size={size} />
      </>
    );
  }

  return (
    <>
      <Wrapper>
        <Logo />
        <HostImage size={size} />
        <TextContents textData={textData} size={size} />
        <DotsBg />
      </Wrapper>
    </>
  );
}
