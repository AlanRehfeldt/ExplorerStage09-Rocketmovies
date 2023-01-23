import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
    color: ${({ theme }) => theme.COLORS.GRAY_700};

    margin-bottom: 8px;
    border-radius: 10px;
    
    > input {
        height: 56px;
        width: 100%;
        
        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_700};
        }

    }
    
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;

    }

    > svg {
        margin-left: 12px;
    }
`