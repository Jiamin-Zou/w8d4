import FlappyBird from './game';

const canvas = document.getElementById('bird-game');

const flappyBird = new FlappyBird(canvas);

flappyBird.restart();