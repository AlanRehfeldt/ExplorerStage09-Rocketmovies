import styled from 'styled-components'

export const Container = styled.div`
    grid-area: header;
    
    width: 100%;
    height: 116px;

    padding: 0 123px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 64px;

    border-bottom: 1px solid ${({ theme}) => theme.COLORS.BORDER};

    > h2 {
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`

export const Content = styled.div`
    display: flex;
        align-items: center;
        gap: 9px;

        background: none;
        border: none;

        > div {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            > h3 {
                cursor: pointer;
                white-space: nowrap;
                font-size: 14px;
                font-weight: 700;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }
            > button {
                font-size: 14px;
                font-weight: 400;
                color: ${({ theme }) => theme.COLORS.GRAY_700};

            }
        }
`

export const Avatar = styled.img`
    cursor: pointer;

    width: 64px;
    height: 64px;

    object-fit: cover;

    border-radius: 50%
`