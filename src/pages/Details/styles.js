import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: "header" "details";
`

export const Content = styled.div`
    grid-area: details;

    margin-top: 40px;
    padding: 0 123px;

    overflow-y: auto;

    > .titleStarts {
        margin: 24px 0;

        display: flex;
        align-items: center;
        h2 {
            font-size: 36px;
            font-weight: 500;
            color: ${({ theme }) => theme.COLORS.WHITE};
            margin-right: 20px;
        }
        svg {
                color: ${({ theme }) => theme.COLORS.PINK};
                font-size: 20px;
            }
    }

    > .info {
        margin-bottom: 40px;

        display: flex;
        align-items: center;
        gap: 8px;
        > .userInfo {
            display: flex;
            align-items: center;
            gap: 8px;
            img {
                width: 16px;
                height: 16px;
                border-radius: 50%;
            }
        }
        > .createdAt {
            display: flex;
            align-items: center;
            gap: 8px;

            svg {
                color: ${({ theme }) => theme.COLORS.PINK};
            }
        }
    }

    .tags {
        margin-bottom: 40px;

        display: flex;
        flex-direction: row;
    }

    p {
        text-align: justify;
    }
`