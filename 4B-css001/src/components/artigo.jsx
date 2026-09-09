import'./Artigo.css'
export default function Artigo (props) {
    return(
     <article>
        <h1 className="titulo">{props.titulo}</h1>
        <p>Item 01</p>
        <p>Item 02</p>
     </article>
    )
}