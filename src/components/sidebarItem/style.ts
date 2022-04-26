import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    padding: 0px 30px;

    li {
        display: flex;
        align-items: center;
        list-style: none;
        justify-content: space-between;
        width: 100%;
        padding: 5px 10px;

        &:hover {
            background-color: ${({ theme }) => theme.colors.lightBlack};
            border-radius: 5px;
        }

        & a {
            display: flex;
            align-items: center;
            text-decoration: none;
            font-size: 1.5rem;
            color: ${({ theme }) => theme.colors.white};
        }

        & a img {
            margin-right: 1rem;
            color: ${({ theme }) => theme.colors.primary};
        }

        & button {
            opacity: 0;
            background-color: transparent;
            border: none;
            font-size: 1.5rem;
            color: ${({ theme }) => theme.colors.white};
            cursor: pointer;
        }

        &:hover button {
            opacity: 1;
        }
    }
`
