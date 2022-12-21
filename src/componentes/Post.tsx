import style from './Post.module.css';

import fotoCriar from '../assets/Layer.png'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Atividades } from './Atividades';
import { PostAtividades } from './PostAtividade';
import { PostAtividadesNull } from './PostAtivadadeNull';


export function Post() {
    const [atividades, SetAtividades] = useState([

    ])

    const [newAtivadadeText, setNewAtivadadeText] = useState('')

    function CreateNewAtividade(event: FormEvent) {
        event?.preventDefault()

        SetAtividades([...atividades, newAtivadadeText])
        setNewAtivadadeText('')
    }

    function handleNewAtividadeChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewAtivadadeText(event?.target.value)
    }


    function deleteAtividade(atividadeToDelete: string) {
        const atividadesWithoutDeleteOne = atividades.filter(atividade => {
            return atividade !== atividadeToDelete
        })

        SetAtividades(atividadesWithoutDeleteOne)
    }

    const [AtividadeCriada, setAtividadeCriada] = useState(0);

    function handleAtivCriada() {
        setAtividadeCriada(AtividadeCriada + 1)
    }

    function deleteHandleAtivCriada() {
        setAtividadeCriada(AtividadeCriada - 1)
    }

    const [atividadeConcluida, setAtividadeConcluida] = useState(0)

    function handleAtivConcluida() {
        setAtividadeConcluida(atividadeConcluida + 1)
    }


    return (
        <div className={style.post}>
            <form onSubmit={CreateNewAtividade} className={style.butonsForm}>
                <textarea
                    name='atividade'
                    placeholder='Adicione uma tarefa'
                    value={newAtivadadeText}
                    onChange={handleNewAtividadeChange}
                    required
                />
                <button
                    type='submit'
                    title='Criar'
                    className={style.buttonCriar} 
                    disabled={newAtivadadeText.length === 0}
                    onClick={handleAtivCriada}
                    >
                    <p>Criar</p>
                    <img src={fotoCriar} />
                </button>

            </form>

            <main>
                <header>
                    {AtividadeCriada === 0 ? (
                        <PostAtividadesNull />
                    ) :
                        <Atividades
                            handleAtivCriada={handleAtivCriada}
                            AtividadeCriada={AtividadeCriada}
                            setAtividadeCriada={setAtividadeCriada}
                            handleAtivConcluida={handleAtivConcluida}
                            atividadeConcluida={atividadeConcluida}
                        />}

                </header>
                <section>

                    {atividades.map(atividade => {
                        return <PostAtividades key={atividade}
                            content={atividade}
                            deleteAtividade={deleteAtividade}
                            handleAtivCriada={handleAtivCriada}
                            deleteHandleAtivCriada={deleteHandleAtivCriada}
                            handleAtivConcluida={handleAtivConcluida}
                        />
                    })}
                </section>
            </main>
        </div>
    )
}