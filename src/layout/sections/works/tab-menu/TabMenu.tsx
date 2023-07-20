import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";


type MenuPropsType = {
    menuItems: string[]
}

export const TabMenu = ({menuItems}: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {menuItems.map((el, i) => {
                    return (
                        <ListItem key={i}>
                            <Link href="">{el}</Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
  margin-bottom: 40px;

  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`
const ListItem = styled.li`
`

