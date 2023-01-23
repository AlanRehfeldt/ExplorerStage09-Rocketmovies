import { Container } from "./styles";

import { Star } from "../Star/Star";
import { Tag } from "../Tag/Tag";

export function Preview({ data, ...rest }) {
    return (
        <Container
            { ...rest }
        >
            <h2>{ data.title }</h2>
            <div>
                <Star star="1" rating={ data.rating } />
                <Star star="2" rating={ data.rating } />
                <Star star="3" rating={ data.rating } />
                <Star star="4" rating={ data.rating } />
                <Star star="5" rating={ data.rating } />
            </div>
            <p>
                { data.description }
            </p>
            <footer>
                { 
                    data.tags &&
                    data.tags.map(tag => <Tag key={ tag.id } name={ tag.name }/>) 
                }
            </footer>
        </Container>
    )
}