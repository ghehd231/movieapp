import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header``;

const List = styled.ul`
    display: flex;
    &:hover {
        background-color: blue;
    }
`;

const Item = styled.li``;
const SLink = styled(Link)``;


export default () => (
    <header>
       <List>
           <Item>
               <Slink to="/">Movies</Slink>
           </Item>
           <Item>
               <Slink to="/tv">TV</Slink>
           </Item>
           <Item>
               <Slink to="/search">Search</Slink>
           </Item>
       </List>
    </header>
);