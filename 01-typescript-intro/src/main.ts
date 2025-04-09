import './style.css';
import './topics/10-decorators.ts';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = 'Hello World!';

console.log(app.innerHTML);