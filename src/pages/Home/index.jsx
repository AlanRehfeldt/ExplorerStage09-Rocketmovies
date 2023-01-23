import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Content } from "./styles";

import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import { Preview } from '../../components/Preview/Preview'
import { Input } from '../../components/Input/Input';

export function Home() {
    const [notes, setNotes] = useState([])
    const [search, setSearch] = useState("")

    const navigate = useNavigate()

    function handleAddMovie() {
        navigate("/create")
    }

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`)
            setNotes(response.data)
        }
        fetchNotes()
    }, [search])

    return (
        <Container>
            <Header>
                <Input 
                    placeholder="Pesquisar pelo título"
                    icon={ FiSearch }
                    onChange={ e => setSearch(e.target.value) }
                />
            </Header>
            <Content>
                <div>
                    <h2>Meus Filmes</h2>
                    <Button  
                        title="Adicionar filme"
                        icon={ FiPlus }
                        onClick={ handleAddMovie }
                    />
                </div>
                {
                    notes.map(note => (
                        <Preview 
                            key={ String(note.id) }
                            data={ note }
                            onClick={ () => {handleDetails(note.id)} }
                        />
                    ))
                }
            </Content>
        </Container>
    )
}