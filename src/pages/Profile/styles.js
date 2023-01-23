import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > header {
        width: 100%;
        height: 144px;

        background: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

        display: flex;
        align-items: center;

        > button {
            margin-left: 144px;
        }
    }
`

export const Form = styled.form`
    max-width: 340px;
    margin: -84px auto 0;

    div:nth-child(3), div:nth-child(5) {
        margin-bottom: 24px;
    }
`

export const Avatar = styled.div`
    position: relative;

    height: 186px;
    width: 186px;

    margin: 0 auto 64px;

    > img {
        height: 186px;
        width: 186px;

        object-fit: cover;

        border-radius: 50%;
    }

    > label {
        cursor: pointer;

        width: 48px;
        height: 48px;

        background: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;
        
        > input {
            display: none;
        }

        > svg {
            width: 20px;
            height: 20px;

            color: ${({ theme }) => theme.COLORS.GRAY_500};
        }
    }
`