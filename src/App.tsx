import { useState } from 'react'
import "./global.css"

import style from './App.module.css'
import { Header } from './componentes/Header'
import { Post } from './componentes/Post'


function App() {

  return (

    <div>
      <Header />
      <div className={style.wrapper}>
        <Post />
      </div>

    </div>
  )
}

export default App
