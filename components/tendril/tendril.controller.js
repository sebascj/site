import Tendril from '../tendril/tendril.model';

let ctx,
  target = {},
  tendrils = [],
  animationFrame;

const defaultSettings = {
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98
};

const resize = () => {
  ctx.canvas.width = document.body.offsetWidth;
  ctx.canvas.height = document.body.offsetHeight;
};

const loop = () => {
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = '#f8f8f8';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.globalCompositeOperation = 'new content';
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#ff3a22';

  for (let i = 0, tendril; i < defaultSettings.trails; i++) {
    tendril = tendrils[i];
    if (tendril) {
      tendril.update(target.x, target.y);
      tendril.draw(ctx);
    }
  }

  animationFrame = requestAnimationFrame(loop);
};

const startAnimation = () => {
  loop();
};

const stopAnimation = () => {
  cancelAnimationFrame(animationFrame);
};

const mousemove = (event) => {
  if (event.touches) {
    target.x = event.touches[0].pageX;
    target.y = event.touches[0].pageY;
  } else {
    target.x = event.clientX;
    target.y = event.clientY;
  }
  // Unable to cal prevent default: passive issue
  // event.preventDefault();
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

  document.addEventListener('mousemove', mousemove, { passive: true });
  document.addEventListener('touchmove', mousemove, { passive: true });
  document.addEventListener('touchstart', touchstart, { passive: true });

  resize();
  mousemove(e);
  reset(target.x, target.y);
  loop();
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
  ctx = context;

  document.addEventListener('mousemove', init, { passive: true });
  document.addEventListener('touchstart', init, { passive: true });

  document.body.addEventListener('orientationchange', resize);
  window.addEventListener('resize', resize);
  window.addEventListener('focus', startAnimation);
  window.addEventListener('blur', stopAnimation);

  return stopTendril;
}
