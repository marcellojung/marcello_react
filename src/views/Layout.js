import {NavLink, Outlet} from 'react-router-dom'
import styled from 'styled-components'
import './Layout.css'

const Nav = styled.div``
const Main = styled.div`
display:flex;
`
const SideMenu = styled.div`
min-width:300px;
background-color:black;
`
const Content = styled.div``
export default function layout() {
    return (
        <>  
        {/* fragment를 줄여 쓰는 표현 <></> */}
            <Nav>
                <NavLink to="/">Home</NavLink><br/>
                {/* vue 의 router-link react-foute에서 제공  */}
                <NavLink to="/about">About</NavLink><br/>
                <NavLink to="/user">Users</NavLink>
            </Nav>
            <Main>
                <SideMenu />
                <Content>
                    <Outlet />
                </Content>
            </Main>
        </>
    )
}