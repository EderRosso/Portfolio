import foto from './../../assets/eder.jpg'
import './profile.css';

export function Profile(){
    return(
        <figure>
            <img src={foto} alt="Imagem de Ãƒâ€°der de Rosso"/>
            <figcaption>Éder Oliveira de Rosso</figcaption>
        </figure>
    )
}