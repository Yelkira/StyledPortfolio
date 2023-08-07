import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {StatusTabsItemsType, TabsItemsType} from "../Works";


type MenuPropsType = {
    tabsItems: TabsItemsType[]
    curentFilterStatus: StatusTabsItemsType
    changeFilterStatus: (value: StatusTabsItemsType)=>void
}

export const TabMenu = (props: MenuPropsType) => {
    const {tabsItems, changeFilterStatus, curentFilterStatus} = props
    return (
        <StyledMenu>
            <ul>
                {tabsItems.map((el, i) => {
                    return (
                        <ListItem key={i}>
                            <Link active={curentFilterStatus === el.status} as={'button'} onClick={()=>changeFilterStatus(el.status)}>{el.title}</Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`


  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`
const ListItem = styled.li`
`

