{
  /*
import React from 'react';
import { render } from 'react-dom';
import './style.css';


const App = () => (
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace</h1>
    </header>
    <main>
      <p>Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí <a href="https://www.npmjs.com/package/create-czechitas-app">create-czechitas-app</a>.</p>
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);

render(<App />, document.querySelector('#app'));
*/
}

import React from 'react';
import { render } from 'react-dom';
import './style.css';

const jmeno = 'Jana Voborska';
const obsah = (
  <div className="container">
    <header>
      <h1>{jmeno}</h1>
    </header>
    <main>
      <p className={tridaPismo}>Moje první React aplikace</p>
    </main>
  </div>
);
const tridaPismo = '.intro';

render(obsah, document.querySelector('#app'));
