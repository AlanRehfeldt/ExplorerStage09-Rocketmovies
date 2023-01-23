import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { Container } from "./styles";

export function Star({ rating = 0, star = 0 }) {
    return (
        <Container
            star = { star }
            rating = { rating }
        >
            { rating >= star ? <AiFillStar /> : <AiOutlineStar /> }
        </Container>
    )
}