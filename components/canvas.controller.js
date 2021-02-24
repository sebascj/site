const Tendril = function (options) {
  this.init(options || {});
};

Tendril.prototype = (function () {
  function Node() {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
  }
  return {
    init: function (options) {
      this.spring = options.spring + Math.random() * 0.1 - 0.05;
      this.friction = settings.friction + Math.random() * 0.01 - 0.005;
      this.nodes = [];
      for (let i = 0, node; i < settings.size; i++) {
        node = new Node();
        node.x = target.x;
        node.y = target.y;
        this.nodes.push(node);
      }
    },
    update: function () {
      let spring = this.spring,
        node = this.nodes[0];

      node.vx += (target.x - node.x) * spring;
      node.vy += (target.y - node.y) * spring;

      for (let prev, i = 0, n = this.nodes.length; i < n; i++) {
        node = this.nodes[i];

        if (i > 0) {
          prev = this.nodes[i - 1];

          node.vx += (prev.x - node.x) * spring;
          node.vy += (prev.y - node.y) * spring;
          node.vx += prev.vx * settings.dampening;
          node.vy += prev.vy * settings.dampening;
        }

        node.vx *= this.friction;
        node.vy *= this.friction;

        node.x += node.vx;
        node.y += node.vy;

        spring *= settings.tension;
      }
    },
    draw: function () {
      let x = this.nodes[0].x,
        y = this.nodes[0].y,
        a,
        b,
        n = this.nodes.length - 2;

      ctx.beginPath();
      ctx.moveTo(x, y);

      for (let i = 1; i < n; i++) {
        a = this.nodes[i];
        b = this.nodes[i + 1];
        x = (a.x + b.x) * 0.5;
        y = (a.y + b.y) * 0.5;

        ctx.quadraticCurveTo(a.x, a.y, x, y);
      }

      a = this.nodes[n];
      b = this.nodes[n + 1];

      ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
      ctx.stroke();
      ctx.closePath();
    }
  };
})();

let ctx,
  color,
  target = {},
  tendrils = [];

const settings = {
  friction: 0.5,
  trails: 30,
  size: 50,
  dampening: 0.25,
  tension: 0.98
};

const resize = () => {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
};

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const loop = () => {
  if (!ctx.running) return;

  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = '#1D1D1D';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.globalCompositeOperation = 'lighter';
  ctx.lineWidth = 1;

  if (color == 1) {
    ctx.strokeStyle = 'hsla(346,98%,56%,0.25)';
  } else {
    ctx.strokeStyle = 'hsla(171,98%,56%,0.25)';
  }

  for (let i = 0, tendril; i < settings.trails; i++) {
    tendril = tendrils[i];
    tendril.update();
    tendril.draw();
  }

  requestAnimationFrame(loop);
};

const startAnimation = () => {
  if (!ctx.running) {
    ctx.running = true;
    loop(ctx, color);
  }
};

const stopAnimation = () => {
  ctx.running = false;
};

const mousemove = (event) => {
  if (event.touches) {
    target.x = event.touches[0].pageX;
    target.y = event.touches[0].pageY;
  } else {
    target.x = event.clientX;
    target.y = event.clientY;
  }
  event.preventDefault();
};

const touchstart = (event) => {
  if (event.touches.length == 1) {
    target.x = event.touches[0].pageX;
    target.y = event.touches[0].pageY;
  }
};

const reset = () => {
  tendrils = [];
  for (let i = 0; i < settings.trails; i++) {
    tendrils.push(
      new Tendril({
        spring: 0.45 + 0.025 * (i / settings.trails)
      })
    );
  }
};

const init = (e) => {
  document.removeEventListener('mousemove', init);
  document.removeEventListener('touchstart', init);

  document.addEventListener('mousemove', mousemove);
  document.addEventListener('touchmove', mousemove);
  document.addEventListener('touchstart', touchstart);

  resize();
  mousemove(e);
  reset();
  loop(ctx, color);
};

const stopTendril = () => {
  document.body.removeEventListener('orientationchange', resize);
  window.removeEventListener('resize', resize);

  window.removeEventListener('focus', startAnimation);
  window.removeEventListener('blur', stopAnimation);

  document.removeEventListener('mousemove', mousemove);
  document.removeEventListener('touchmove', mousemove);
  document.removeEventListener('touchstart', touchstart);
};

export default function startTendril(context) {
  color = randomIntFromInterval(1, 2);
  ctx = context;
  ctx.running = true;

  document.addEventListener('mousemove', init);
  document.addEventListener('touchstart', init);

  document.body.addEventListener('orientationchange', resize);
  window.addEventListener('resize', resize);
  window.addEventListener('focus', startAnimation);
  window.addEventListener('blur', stopAnimation);

  return stopTendril;
}
