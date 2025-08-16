import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

function App() {
  return (
    <>
      <Heading>
        Chronos Pomodoro
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum minus a
        officia natus repudiandae neque quas asperiores velit impedit libero
        veniam, in placeat, laboriosam perspiciatis nihil deserunt. Illum, optio
        non?
      </p>
    </>
  );
}

export default App;
