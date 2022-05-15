import styled from 'styled-components/macro'
import { theme } from 'resources/theme'

export const Container = styled.aside<{setSidebar: boolean}>`
    position: relative;
    width: 20%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.black};
    transition: 500ms;

    @media (max-width: 500px) {
        width: ${props => props.setSidebar ? '15%' : '70%'};
    }
`

export const Logo = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-left: 12px;

    img{
        width: 165px;
        margin-top: 45px;
        margin-bottom: 55px;
    }

    @media (max-width: 500px) {
        img {
            margin-bottom: 25px;
        }
    }
`

export const ShowButton = styled.button<{setSidebar : boolean}>`
    display: none;
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    background-color: ${({ theme }) => theme.colors.black};
    margin-left: auto;
    margin-right: -15px;
    transform: ${props => props.setSidebar ? 'rotate(-135deg)' : 'rotate(45deg)'};
    transition: 500ms;
    margin-bottom: 20px;
    padding-bottom: 5px;
    padding-right: 4px;
    z-index: 2;

    &::after {
        position: absolute;
        content: '';
        width: 2px;
        height: 10px;
        background-color: ${({ theme }) => theme.colors.gray};
        margin-top: -4px;
        margin-left: -5px;
    }

    &::before {
        position: absolute;
        content: '';
        width: 2px;
        height: 10px;
        background-color: ${({ theme }) => theme.colors.gray};
        margin-top: 0px;
        margin-right: -4px;
        transform: rotate(90deg);
    }

    @media (max-width: 500px) {
        display: block;
    }
`

export const Divider = styled.div<{setSidebar : boolean}>`
    padding: 0px 30px;
    transition: 400ms;

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

    @media (max-width: 500px) {
        padding: ${props => props.setSidebar ? '0px 10px' : '0px 25px'};

       span {
        opacity: ${props => props.setSidebar ? '0' : '1'};
        font-size: 1.2rem;
        margin-top: -5px;
        transition: 500ms;
       }
    }
`

export const Button = styled.button<{setSidebar: boolean}>`
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

    span {
        display: inline-block;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
    }

    @media (max-width: 500px) {
        width: ${props => props.setSidebar ? '40%' : '78%'};
        margin: 20px;
        font-size: 1.2rem;

        span {
            display: ${props => props.setSidebar ? 'none' : 'inline-block'};
            transition: 350ms;
        }
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

    @media (max-width: 500px) {
        overflow-x: hidden;
    }
`

export const SidebarList = styled.ul`
    list-style: none;
    margin: 0px;
    padding: 0px 25px;

    @media (max-width: 500px) {
        padding: 0px 15px;
    }
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

export const SidebarItemLink = styled.a<{setSidebar: boolean}>`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};

    img {
        margin-right: 10px;
        margin-top: -5px;
        color: ${({ theme }) => theme.colors.primary};
    }

    span {
        display: inline-block;
        transition: 500ms;
    }

    @media (max-width: 500px) {
        margin-left: ${props => props.setSidebar ? '-5px' : '0px'};

        span {
            opacity: ${props => props.setSidebar ? '0' : '1'};
            transition: 600ms;
        }

        img {
            margin-right: ${props => props.setSidebar ? '20px' : '10px'};
        }
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

    @media (max-width: 500px) {
        opacity: 1;
    }
`
