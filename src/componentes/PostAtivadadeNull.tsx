import fotoClipboard from '../assets/Clipboard.png'

import style from './PostAtivadadeNull.module.css';

export function PostAtividadesNull() {
    return (
        <div >
            <div className={style.containerAtividadesNull}>
                <img src={fotoClipboard} />
                <p className={style.Bold}>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}

