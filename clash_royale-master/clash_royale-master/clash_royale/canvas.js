const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// gebouwen en kaarten
const towerLeft = document.getElementById("towerLeft");
const towerRight = document.getElementById("towerRight");
const archers = document.getElementById("archers");
const placeholder = document.getElementById("placeholder");
const ice_spirit = document.getElementById("ice_spirit");
const musketiers = document.getElementById("musketiers");
const skelet = document.getElementById("skelet");
const valkerie = document.getElementById("valkerie");
const wizzard = document.getElementById("wizzard");



c.fillStyle = 'blue';
c.fillRect(650, 0, 50, 660);

c.fillStyle = "brown";
c.fillRect(350, 100, 630, 80);
c.fillRect(350, 420, 630, 80);



window.onload = function(){
c.drawImage(towerLeft, 200, 80);
c.drawImage(towerLeft, 200, 400);

c.drawImage(towerRight, 1000, 80);
c.drawImage(towerRight, 1000, 400);
c.drawImage(archers, 400, 510, 120, 150);
c.drawImage(ice_spirit, 540, 510, 120, 150);
c.drawImage(musketiers, 680, 520, 110, 140);
c.drawImage(skelet, 820, 520, 110, 140);

c.drawImage(placeholder, 395, 500, 140, 180);
c.drawImage(placeholder, 535, 500, 140, 180);
c.drawImage(placeholder, 675, 500, 140, 180);
c.drawImage(placeholder, 810, 500, 140, 180);

};