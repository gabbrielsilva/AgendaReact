import style from './PostAtividade.module.css';

import { Trash } from 'phosphor-react';

interface Props{
    content: string;
    deleteAtividade: (atividade: string) => void;
    deleteHandleAtivCriada: () => void;
    handleAtivConcluida: () => void

}

export function PostAtividades({content, deleteAtividade, deleteHandleAtivCriada, handleAtivConcluida}: Props){
    function handleDeleteAtivivade(){
        deleteAtividade(content)
        deleteHandleAtivCriada()
    }

    return (
        <div>
           <div className={style.containerAtividades}>
                <div className={style.nomesAtividades}>
                    <label>
                        <input type="checkbox" onClick={handleAtivConcluida} />
                        <span>{content}</span>
                    </label>
                    <button onClick={handleDeleteAtivivade}>
                        <Trash size={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}

