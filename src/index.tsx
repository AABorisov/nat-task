import * as styles3 from './styles.scss';

import styles = require('./styles.scss');

function AppWithClassList() {
  const root = document.getElementById('root');
  const para = document.createElement('p');
  const node = document.createTextNode('Hello from root, Natera.');
  para.appendChild(node);
  root.appendChild(para);
  root.classList.add(styles.className);
}

function App() {
  const root = document.getElementById('root');
  const para = document.createElement('p');
  para.innerHTML = `<p class= ${styles3.className}>Hello from root, Natera.</p>`;
  root.appendChild(para);
}

AppWithClassList();
App();
