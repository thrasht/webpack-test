
import '../css/my-style.css'
import {firstMessage, delayedMessage} from './message.js'
import screenShot from '../images/ss.png'

document.write(firstMessage);
delayedMessage();

const img = document.createElement('img');
img.setAttribute('src', screenShot);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);
console.log('Hola mundo!, desde webpack con babel');
