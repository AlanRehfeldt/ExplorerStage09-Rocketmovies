import { Container } from "./styles";

export function Button({ title, secondary = false, loading, icon: Icon, ...rest }) {
    return(
        <Container
            type="button"
            disabled={ loading }
            secondary = { secondary }
            { ...rest }
        >
            { Icon && <Icon size={20} /> }
            { loading ? "Carregando..." : title }
        </Container>
    )
}