import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    padding: 32px;
    margin-bottom: 24px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    border-radius: 16px;
    border: none;

    > h2 {
        margin-bottom: 8px;

        text-align: left;
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > div {
        display: flex;
        > div {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    > p {
        height: 46px;
        overflow-y: auto;
        margin: 15px 0 15px;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.GRAY_600};
    }

    > footer {
        width: 100%;
        display: flex;

        > span {
            background: ${({ theme }) => theme.COLORS.GRAY_500};
        }
    }
`