import { useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { Container, Form, Background } from './styles'

import { Input } from "../../components/Input/Input" 
import { Button } from '../../components/Button/Button'
import { ButtonText } from '../../components/ButtonText/ButtonText'

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos")
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso")
                navigate("/")
            })
            .catch((e) => {
                if(e.response) {
                    alert(e.response.data.message)
                } else {a
                    alert("Não foi possível cadastrar")
                }
            })
    }

    function handleBack() {
        return navigate("/")
    }

    function handleEnterKey(e) {
        if(e.key === "Enter") {
            handleSignUp()
        }
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={ FiUser }
                    onChange={ e => setName(e.target.value) }
                    onKeyPress={ e => handleEnterKey(e) }
                />
                <Input 
                    placeholder="E-mail"
                    type="email"
                    icon={ FiMail }
                    onChange={ e => setEmail(e.target.value) }
                    onKeyPress={ e => handleEnterKey(e) }
                />
                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={ FiLock }
                    onChange={ e => setPassword(e.target.value) }
                    onKeyPress={ e => handleEnterKey(e) }
                />

                <Button 
                    title="Cadastrar"
                    onClick={ handleSignUp }
                />

                <ButtonText 
                    title="Voltar para o login" 
                    icon={ FiArrowLeft }
                    className="btnSignIn"
                    onClick={ handleBack }
                />
            </Form>

            <Background />
        </Container>
    )
}