import { SocialLink} from "./SocialLink";
import './styles.css';

export function Header() {
    return (
        <header>
            <h1>Éder Oliveira de Rosso</h1>

            <nav>
                <SocialLink url="https://github.com/EderRosso" 
                icon="fa-brands fa-github" 
                />
                <SocialLink url="https://www.linkedin.com/in/eder-oliveira-de-rosso-716954127/" 
                icon="fa-brands fa-linkedin" 
                />
                <SocialLink url="https://www.youtube.com/channel/UCckkuW4o0xb6kAb1SzhnVzQ" 
                icon="fa-brands fa-youtube"
                />
            </nav>
        </header>
    )
}