const root = document.getElementById('root');

const para = document.createElement('p');
const node = document.createTextNode('Hello from root, Natera.');
para.appendChild(node);
root.appendChild(para);
