import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: "header" "form";
`

export const Form = styled.div`
    grid-area: form;
    overflow-y: auto;

    width: 100%;

    padding: 40px 123px 85px; 

    > h2 {
        margin: 24px 0 40px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > div {
        display: flex;
        gap: 40px;
    }

    > textarea {
        margin: 40px 0;
    }

    > section {
        margin-bottom: 40px;

        > h3 {
            margin-bottom: 24px;
            color: ${({ theme }) => theme.COLORS.GRAY_600};
        }
        > div {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 24px;

            padding: 16px;

            background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            border-radius: 8px;
        }
    }
`