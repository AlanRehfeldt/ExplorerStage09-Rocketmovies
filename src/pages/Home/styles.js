import styled from 'styled-components'

export const Container = styled.div`    
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: "header" "reviews";
`

export const Content = styled.div`
    grid-area: reviews;

    overflow-y: auto;

    padding: 40px 123px;
    > div {
        margin-bottom: 40px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        > button {
            width: fit-content;
            padding: 16px 32px;
        }
    }
`