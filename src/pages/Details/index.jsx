import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { FiArrowLeft, FiClock } from 'react-icons/fi'

import { Container, Content } from "./styles";

import { Star } from '../../components/Star/Star';
import { Tag } from '../../components/Tag/Tag';
import { Header } from "../../components/Header/Header";
import { ButtonText } from "../../components/ButtonText/ButtonText";

export function Details() {
    const { user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [data, setData] = useState({})

    const params = useParams()
    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data)
        }
        fetchNote()
    })

    return (
        <Container>
            <Header />
            {
                data &&
                <Content>
                    <ButtonText 
                        title="Voltar" 
                        icon={ FiArrowLeft }
                        onClick={ handleBack }
                    />

                    <div className='titleStarts'>
                        <h2>{ data.title }</h2>
                        <Star star="1" rating={ data.rating } />
                        <Star star="2" rating={ data.rating } />
                        <Star star="3" rating={ data.rating } />
                        <Star star="4" rating={ data.rating } />
                        <Star star="5" rating={ data.rating } />
                    </div>

                    <div className='info'>
                        <div className='userInfo'>
                            <img src={ avatarUrl } alt="user avatar" />
                            <p>Por <span>{ user.name }</span></p>
                        </div>
                        <div className='createdAt'>
                            <FiClock />
                            <p>{ data.created_at }</p>
                        </div>
                    </div>

                    <div className='tags'>
                        {
                            data.tags &&
                            data.tags.map(tag => (
                                <Tag 
                                    key={ String(tag.id) }
                                    name={ tag.name }
                                />
                            ))
                        }
                    </div>

                    <p>{ data.description }</p>
                    
                </Content>
            }

        </Container>
    )
}