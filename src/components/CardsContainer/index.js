import './cardsContainer.css';
import {Card} from './Card';
import html from '../../assets/techs/html-logo.png';
import css from '../../assets/techs/css-logo.png';
import react from '../../assets/techs/react-logo.png';
import js from '../../assets/techs/js-logo.png';


export function CardsContainer(){
    return(
        <div className="techs">
            <h2>💻 Tecnologias</h2>
            <main className="cards-container">
                <Card image={html} alt="logo do HTML"/>
                <Card image={css} alt="logo do CSS"/>
                <Card image={js} alt="logo do Javascript"/>
                <Card image={react} alt="logo do React"/>
            </main>
        </div>
    )
}