import styled from "styled-components";

export const Container = styled.span`
    height: 30px;

    padding: 16px 8px;
    margin-right: 8px;

    background: ${({ theme }) => theme.COLORS.TAGS_BACKGROUND};
    color: ${({ theme }) => theme.COLORS.GRAY_900};

    border-radius: 8px;

    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 400;

    display: flex;
    align-items: center;
    justify-content: center;
`