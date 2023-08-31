import React from "react";
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const Container = styled.div`
    height:60px;
    padding-bottom: 10px;
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Left=styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchComponent=styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left:25px;
    padding:5px;
`;
const Input=styled.input`
    border: none;
`;
const Center=styled.div`
    flex:1;
    text-align: center;
`;
const Logo=styled.h1`
    font-weight: bold;
`;
const Right=styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const Cart=styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;
const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchComponent>
                        <Input/>
                        <SearchIcon style={{color:'gray',fontSize:16}}/>
                    </SearchComponent>         
                </Left>
                <Center>
                    <Logo>ARTHI.</Logo>
                </Center>
                <Right>
                    <Cart>Login</Cart>
                    <Cart>Register</Cart>
                    <Cart>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon color="action" />
                        </Badge>
                    </Cart>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar;