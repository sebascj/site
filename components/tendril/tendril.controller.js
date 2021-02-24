import Tendril from '../tendril/tendril.model';

let ctx,
  color,
  target = {},
  tendrils = [],
  animationFrame;

const defaultSettings = {
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

  for (let i = 0, tendril; i < defaultSettings.trails; i++) {
    tendril = tendrils[i];
    tendril.update(target.x, target.y);
    tendril.draw(ctx);
  }

  animationFrame = requestAnimationFrame(loop);
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

const reset = (targetX, targetY) => {
  tendrils = [];
  for (let i = 0; i < defaultSettings.trails; i++) {
    tendrils.push(
      new Tendril(
        Object.assign({ targetX, targetY }, defaultSettings, {
          spring: 0.45 + 0.025 * (i / defaultSettings.trails)
        })
      )
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
  reset(target.x, target.y);
  loop(ctx, color);
};

const stopTendril = () => {
  stopAnimation();
  cancelAnimationFrame(animationFrame);
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
