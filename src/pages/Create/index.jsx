import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi'

import { Container, Form } from "./styles";

import { Input } from '../../components/Input/Input'
import { Header } from '../../components/Header/Header'
import { Button } from '../../components/Button/Button'
import { Textarea } from '../../components/Textarea/Textarea'
import { ButtonText } from '../../components/ButtonText/ButtonText'
import { CreateTag } from '../../components/CreateTag/CreateTag';

export function Create() {
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(removed) {
        setTags(prevState => prevState.filter(tag => tag !== removed))
    }

    async function handleCreateNote() {
        if(!title || !rating) {
            return alert("Informe o título e uma nota para o filme")
        }

        if(rating < 0 || rating > 5) {
            return alert("A nota não pode ser menor que 0 ou maior que 5")
        }

        if(newTag) {
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio")
        }

        await api.post("/notes", { title, rating, description, tags })
        alert("Filme cadastrado com sucesso!")
        navigate(-1)
    }

    function handleDeleteNote() {
        const confirm = window.confirm("Deseja excluir as aleterações realizadas?")
        if(confirm) {
            navigate(-1)
        }
    }

    return (
        <Container>
            <Header />
            <Form>
                <ButtonText 
                    title="Voltar" 
                    icon={ FiArrowLeft } 
                    onClick={ handleBack }
                />
                <h2>Novo filme</h2>

                <div>
                    <Input 
                        type="text"
                        placeholder="Título"
                        onChange={ e => setTitle(e.target.value) }
                    />
                    <Input
                        type="number"
                        placeholder="Sua nota (0 a 5)"
                        onChange={ e => setRating(e.target.value) }
                    />
                </div>

                <Textarea 
                    placeholder="Observações"
                    onChange={ e => setDescription(e.target.value) }
                />

                <section>
                    <h3>Marcadores</h3>
                    <div>
                        {
                            tags.map((tag, index) => (
                                <CreateTag
                                    value={ tag }
                                    key={ String(index) }
                                    onClick={ () => handleRemoveTag(tag) }
                                />
                            ))
                        }
                        <CreateTag 
                            isNew
                            value={ newTag }
                            placeholder="Nova tag"
                            onClick={ handleAddTag }
                            onChange={ e => setNewTag(e.target.value) }
                        />
                    </div>
                </section>

                <div>
                    <Button 
                        secondary 
                        title="Excluir filme" 
                        onClick={ handleDeleteNote }
                    />
                    <Button 
                        title="Salvar alterações" 
                        onClick={ handleCreateNote }
                    />
                </div>
            </Form>
        </Container>
    )
}