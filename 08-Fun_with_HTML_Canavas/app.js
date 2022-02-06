const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();

  ctx.moveTo(lastX, lastY);

  ctx.lineTo(e.offsetX, e.offsetY);

  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 32 || ctx.lineWidth <= 7) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

// ----------------------------------------------------------------------------------- //

function myFunction(x) {
  if (x.matches) {
    canvas.height = 500;
  }
}
var x = window.matchMedia("(max-width: 700px)");
myFunction(x);

canvas.addEventListener(
  "touchstart",
  function (e) {
    this.down = true;
    this.X = e.touches[0].pageX;
    this.Y = e.touches[0].pageY;
  },
  0
);

canvas.addEventListener(
  "touchend",
  function () {
    this.down = false;
  },
  0
);

canvas.addEventListener(
  "touchcancel",
  function () {
    this.down = false;
  },
  0
);

canvas.addEventListener(
  "touchmove",
  function (e) {
    if (this.down) {
      with (ctx) {
        strokeStyle = `hsl(${hue}, 100%, 50%)`;
        lineWidth = 10;
        lineCap = "round";
        lineJoin = "round";
        beginPath();
        moveTo(this.X, this.Y);
        lineTo(e.touches[0].pageX, e.touches[0].pageY);
        stroke();
        hue++;
        if (hue >= 360) {
          hue = 0;
        }
      }
      this.X = e.touches[0].pageX;
      this.Y = e.touches[0].pageY;
    }
  },
  0
);
