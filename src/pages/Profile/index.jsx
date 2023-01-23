import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi'

import { Container, Form, Avatar } from "./styles";

import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { ButtonText } from '../../components/ButtonText/ButtonText'

export function Profile() {
    const { user, UpdateProfile } = useAuth()
    const navigate = useNavigate()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)


    function handleBack() {
        navigate(-1)
    }

    async function handleUpdateProfile() {
        const updated = {
            name,
            email,
            password: newPassword,
            oldPassword: oldPassword
        }

        const userUpdated = Object.assign(user, updated)
        await UpdateProfile({ user: userUpdated, avatarFile })
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }
    
    function handleEnterKey(e) {
        if(e.key === "Enter") {
            handleUpdateProfile()
        }
    }

    return (
        <Container>
            <header>
                <ButtonText
                    title="Voltar"
                    icon={ FiArrowLeft } 
                    onClick={ handleBack }
                />
            </header>
            <Form>
                <Avatar>
                    <img src={ avatar } alt='User avatar' />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                            type="file" 
                            id='avatar' 
                            onChange={ handleChangeAvatar }
                        />
                    </label>
                </Avatar>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={ FiUser }
                    value={ name }
                    onChange={ e => setName(e.target.value) }
                    onKeyPress={ e => handleEnterKey(e) }
                /> 
                <Input 
                    placeholder="E-mail"
                    type="email"
                    icon={ FiMail }
                    value={ email }
                    onChange={ e => setEmail(e.target.value) }
                    onKeyPress={ e => handleEnterKey(e) }
                /> 
                <Input 
                    placeholder="Senha atual"
                    type="password"
                    icon={ FiLock }
                    onChange={ e => setOldPassword(e.target.value) }
                    onKeyPress={ e => handleEnterKey(e) }
                /> 
                <Input 
                    placeholder="Nova senha"
                    type="password"
                    icon={ FiLock }
                    onChange={ e => setNewPassword(e.target.value) }
                    onKeyPress={ e => handleEnterKey(e) }
                /> 

                <Button 
                    title="Salvar" 
                    onClick={ handleUpdateProfile }
                />
            </Form>
        </Container>
    )
}