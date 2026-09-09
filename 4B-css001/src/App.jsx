import './App.css'
import Artigo from './components/artigo'

export default function App(){
  return(
    <>
    <h1>Titulo do Site</h1>
    <p>PROGRAMAÇÃO E TECNOLOGIAS PARA APLICAÇÕES CLIENTE 2</p>
    <ul>
      <li>Item 01</li>
      <li>Item 02</li>
      <li>Item 03</li>
    </ul>
    <Artigo titulo="teste titulo"/>
    </>
  )
}