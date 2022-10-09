
import { Header } from './components/Header';
import { Description } from './components/Description';
import {CardsContainer} from './components/CardsContainer';
import { Profile } from './components/Profile';
import { Footer } from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <main className='main-container'>
          <section className='content'>
            <Description />
            <CardsContainer/>
          </section>
          <Profile />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
