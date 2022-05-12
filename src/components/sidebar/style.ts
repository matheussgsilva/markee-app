import styled from 'styled-components/macro'
import { theme } from 'resources/theme'

export const Container = styled.aside`
    width: 20%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.black};
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;

    img{
        width: 165px;
        margin-top: 45px;
        margin-bottom: 55px;
    }
`

export const Divider = styled.div`
    padding: 0px 30px;

    span {
        position: absolute;
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.5rem;
        font-weight: 500;
        margin-left: 25px;
        margin-top: -7px;
        padding: 0px 5px;
        background-color: ${({ theme }) => theme.colors.black};
    }

    hr {
        background-color: ${({ theme }) => theme.colors.primary};
        height: 2px;
        border: none;
    }
`

export const Button = styled.button`
    width: 78%;
    margin: 25px 30px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.5rem;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    padding: 10px 0px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
    }
`

export const SidebarListArea = styled.div<{ showScroll: number }>`
    max-height: 55vh;
    overflow-y: ${props => props.showScroll > 8 ? 'scroll' : 'hidden'};

    &::-webkit-scrollbar {
        background-color: ${({ theme }) => theme.colors.primaryDark};
        border-radius: 5px;
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 5px;
    }
`

export const SidebarList = styled.ul`
    list-style: none;
    margin: 0px;
    padding: 0px 25px;
`

export const SidebarItem = styled.li<{ active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px 10px 5px;
    cursor: pointer;
    background-color: ${props => props.active ? theme.colors.lightBlack : 'transparent'};
    border-radius: 5px;
    margin-bottom: 10px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightBlack};
        border-radius: 5px;
    }

    &:hover button {
        opacity: 1;
    }
`

export const SidebarItemLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};

    & img {
        margin-right: 10px;
        margin-top: -5px;
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const RemoveButton = styled.button`
    opacity: 0;
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    margin-right: -5px;

    &:hover {
        color: ${({ theme }) => theme.colors.primaryDark};
    }
`
