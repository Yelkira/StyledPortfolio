import styled from "styled-components";
import {Button} from "../../../components/button/Button";
import {FlexContainer} from "../../../components/FlexContainer";
import {Link} from "../../../components/Link";
import {theme} from "../../../styles/Theme";

//Works
const StyledWorks = styled.section`
  position: relative;
  ${FlexContainer}{
    gap: 30px;
  }
`

//Work
const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 330px;
  flex-grow: 1;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }

  @media ${theme.media.desktop} {
    max-width: 540px;
  }
`
const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;

    &::before {
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }

  @media ${theme.media.tablet} {
      &::before {
        opacity: 1;
      }

      ${Button} {
        opacity: 1;
      }
    }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Description = styled.div`
  padding: 25px 20px;
`
const Title = styled.h3`

`
const Text = styled.p`
  margin: 14px 0 10px;
`

export const S = {
    StyledWorks,
    StyledWork,
    ImageWrapper,
    Image,
    Description,
    Title,
    Text
}