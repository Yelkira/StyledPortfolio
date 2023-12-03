import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {theme} from "../../../styles/Theme";

const StyledSkills = styled.section`
    position: relative;
  ${FlexContainer}{
      @media ${theme.media.desktop}{
          justify-content: space-between;
      }
  }
`
const StyledSkill = styled.div`
  width: 330px;
  padding: 62px 20px 40px;
  flex-grow: 1;
  @media ${theme.media.mobile}{
    padding: 62px 0 40px;
  }
`
export const IconWrapper = styled.div`
  position: relative;
  z-index: 1;
  color: ${theme.colors.accentColor};

  &::before {
    content: '';
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    background-color: ${theme.colors.iconColor};
    left: 50%;
    top: 50%;
    transform-origin: top left;


    position: absolute;
    z-index: -1;
  }

`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;

`
const SkillText = styled.p`
  text-align: center;
  line-height: 1.4;
`

export const S ={
    StyledSkills,
    StyledSkill,
    IconWrapper,
    SkillTitle,
    SkillText
}