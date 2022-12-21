
import { useState } from 'react';
import style from './Atividades.module.css';


interface Props{
    AtividadeCriada: number;
    atividadeConcluida: number;
}

export function Atividades({AtividadeCriada, atividadeConcluida }: Props) {
    
    return (
        <header className={style.atividades}>
            <div className={style.infoAtividades}>
                <p className={style.atividadesParagrafo}>
                    Tarefas criadas
                    <span className={style.contagemAtividades}>{AtividadeCriada}</span>
                </p>
                <p className={style.atividadesParagrafo2}>
                    Concluidas
                    <span className={style.contagemAtividades}>{atividadeConcluida} de {AtividadeCriada}</span>
                </p>
            </div>

            <div className={style.postPublicAtividades}></div>
        </header>

    )
}