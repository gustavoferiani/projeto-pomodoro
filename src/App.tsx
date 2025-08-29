import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {/* contador -- contagem regressiva */}
      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText="Tarefa"
              id="meuInput"
              type="text"
              placeholder="Nome da Tarefa"
            />
          </div>

          <div className="formRow">
            <p>
              Nesse ciclo <b>descanse</b> por <b>5 min.</b>
            </p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            {/* Componente do React Sem Children */}
            <DefaultButton icon={<PlayCircleIcon />} />
            {/* <DefaultButton icon={<StopCircleIcon/>} color='red' /> */}
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
