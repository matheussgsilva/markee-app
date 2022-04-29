import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.white};
`

export const ContentLeft = styled.div`
    width: 550px;
    padding: 25px 50px;  

    img {
        width: 25px;
        height: 25px;
        margin-right: 3px;
    }
`

export const LeftHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
`

export const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-size: 1.8rem;
    font-weight: 500;
    padding: 0px;
    background-color: ${({ theme }) => theme.colors.white};
`

export const TextArea = styled.textarea`
    font-family: 'Inconsolata', monospace;
    font-size: 1.8rem;
    font-weight: 500;
    width: 100%;
    height: 85%;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.white};
`

export const ContentRight = styled.div`
    width: 550px;
    height: 80%;
    margin-top: 90px;
    border-left: 2px solid rgba(30, 41, 59, 0.12);
    padding: 0px 30px;
`

export const Content = styled.article`
    font-size: 1.8rem;
    font-weight: 400;

    h1, h2, h3, h4, h5, h6 {
        margin-top: 0px;
    }
`
