import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { FiSearch } from 'react-icons/fi'

import { Container, Avatar, Content } from "./styles";

import { Input } from '../Input/Input'
import { ButtonText } from '../ButtonText/ButtonText'

export function Header({ children }) {
    const { SignOut, user } = useAuth()
    const navigate = useNavigate()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function handleSignOut() {
        SignOut()
        navigate("/")
    }

    function handleProfile() {
        navigate("/profile")
    }

    return (
        <Container>
            <h2>RocketMovies</h2>

            { children }

            {/* <Input 
                placeholder="Pesquisar pelo título"
                icon={ FiSearch }
            /> */}

            <Content>
                <div>
                    <h3 onClick={ handleProfile } >
                        { user.name }
                    </h3>
                    <ButtonText 
                        title="Sair" 
                        onClick={ handleSignOut }
                    />
                </div>
                <Avatar 
                    src={ avatarUrl }
                    alt={ user.name }
                    onClick={ handleProfile }
                />
            </Content>
        </Container>
    )
}