import styled from 'styled-components'

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
