import './style.css';
import './topics/11-optional-chaining.ts';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = 'Hello World!';

console.log(app.innerHTML);