var canvas = document.getElementById("cartoon");
var ctx = canvas.getContext("2d");

// Background Fill
ctx.fillStyle = "#dfac30";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Sun
ctx.beginPath();
ctx.arc(70, 280, 70, 0, 2 * Math.PI);
ctx.fillStyle = "#d75c2e";
ctx.fill();

// Clouds
ctx.beginPath();
ctx.arc(200, 50, 20, 0, 2 * Math.PI);
ctx.arc(230, 55, 25, 0, 2 * Math.PI);
ctx.arc(265, 50, 20, 0, 2 * Math.PI);
ctx.fillStyle = "#8f462b";
ctx.fill();

// Filling in ground
ctx.fillStyle = "green";
ctx.fillRect(0, 350, canvas.width, 150);

// House
ctx.fillStyle = "#660000";
ctx.fillRect(300, 250, 150, 100);
ctx.fillStyle = "yellow";
ctx.fillRect(325, 275, 25, 25);
ctx.fillRect(400, 275, 25, 25);
ctx.fillStyle = "black";
ctx.fillRect(358, 275, 35, 75);

// For loop to make "fences"
for (var i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(100 + i * 40, 320);
    ctx.lineTo(100 + i * 40, 350);
    ctx.stroke();
}

ctx.fillStyle = "black";
ctx.font = "30px Arial";
ctx.fillText("Sundown", 150, 400);