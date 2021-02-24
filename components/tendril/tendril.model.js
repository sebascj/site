const Tendril = function (settings) {
  const Node = function () {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
  };
  const { spring, friction, size, targetX, targetY } = settings;

  this.spring = spring + Math.random() * 0.1 - 0.05;
  this.friction = friction + Math.random() * 0.01 - 0.005;
  this.settings = settings;
  this.nodes = [];
  let node;

  for (let i = 0; i < size; i++) {
    node = new Node();
    node.x = targetX;
    node.y = targetY;
    this.nodes.push(node);
  }
};
Tendril.prototype = {
  update: function (targetX, targetY) {
    let spring = this.spring,
      node = this.nodes[0];

    node.vx += (targetX - node.x) * spring;
    node.vy += (targetY - node.y) * spring;

    for (let prev, i = 0, n = this.nodes.length; i < n; i++) {
      node = this.nodes[i];

      if (i > 0) {
        prev = this.nodes[i - 1];

        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * this.settings.dampening;
        node.vy += prev.vy * this.settings.dampening;
      }

      node.vx *= this.friction;
      node.vy *= this.friction;

      node.x += node.vx;
      node.y += node.vy;

      spring *= this.settings.tension;
    }
  },
  draw: function (ctx) {
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

export default Tendril;
