import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 274px;

    background: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    border-radius: 10px;
    padding: 19px 16px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
`