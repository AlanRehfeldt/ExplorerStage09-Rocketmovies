import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    width: 340px;

    margin: auto 150px;

    > h1 {
        font-size: 48px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-size: 14px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_800};
        margin-bottom: 48px;
    }

    > h2 {
        font-size: 24px;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-bottom: 48px;
    }

    > button {
        margin: 20px 0 42px;
    }

    .btnSignIn {
        margin: 0 auto;
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${ backgroundImg }) no-repeat center center;
    background-size: cover;
`