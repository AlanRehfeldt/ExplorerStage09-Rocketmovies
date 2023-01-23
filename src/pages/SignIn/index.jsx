import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { FiMail, FiLock } from 'react-icons/fi'

import { Container, Form, Background } from './styles'

import { Input } from "../../components/Input/Input" 
import { Button } from '../../components/Button/Button'
import { ButtonText } from '../../components/ButtonText/ButtonText'

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const { SignIn } = useAuth()

    function handleCreateAccount() {
        return navigate("/register")
    }

    function handleSignIn() {
        SignIn({ email, password })
    }

    function handleEnterKey(e) {
        if(e.key === "Enter") {
            handleSignIn()
        }
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

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
                    title="Entrar"
                    onClick={ handleSignIn }
                />

                <ButtonText 
                    title="Criar conta" 
                    className="btnSignUp"
                    onClick={ handleCreateAccount }
                />
            </Form>

            <Background />
        </Container>
    )
}