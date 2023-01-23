import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    min-width: fit-content;

    background: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.INPUT_BACKGROUND};
    color: ${({ theme }) => theme.COLORS.GRAY_700};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_700}` : "none"};

    padding-right: 16px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 16px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_700};
        }
    }

    > button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.PINK};
    }


`