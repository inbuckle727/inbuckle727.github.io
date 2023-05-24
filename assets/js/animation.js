
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const background = new Image();
background.src = 'https://source.unsplash.com/random/1600x900';
background.onload = function () {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
};

const items = [
    { x: 750, y: 150, text: 'Hey, "photo!"' },
    { x: 1300, y: 400, text: 'What now?' },
    { x: 750, y: 780, text: 'You guys never shut up..' },

];

function animate() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 200, 50);
    ctx.fillText("Welcome", 10, canvas.height * canvas.height);
 
}

animate();
