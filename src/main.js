import kaboom from "kaboom";

// Initialize kaboom
let k = kaboom();

// Set gravity
k.gravity(2400);

// Load the sprite
k.loadSprite("bean", "sprites/bean.png");

// Add the bean character with the body component for physics
const bean = k.add([k.sprite("bean"), k.pos(80, 40), k.area(), k.body()]);

// Add ground for the bean to stand on
k.add([
  k.rect(640, 48),
  k.pos(0, k.height() - 48),
  k.outline(4),
  k.area(),
  k.body({
    isStatic: true,
  }),
]);

// Make the bean jump when the space key is pressed
k.onKeyPress("space", () => {
  if (bean.isGrounded()) {
    bean.jump();
  }
});
