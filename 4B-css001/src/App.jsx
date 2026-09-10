import "./App.css"
import Artigo from "./components/Artigo"

export default function App() {
    return (
        <>
            <h1>Título do site</h1>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolore dolorem modi architecto tenetur impedit eveniet, fugiat quaerat laborum eius sint, rem praesentium reiciendis quasi nihil tempora odio eligendi quidem?</p>

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>

            <Artigo titulo="Teste titulo"/>
        </>
    )
}