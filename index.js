var square1 = document.getElementById('square1');
var ctx = square1.getContext('2d');

function write() {
    ctx.font = '48px Righteous';
    ctx.fillText('MiniMath', 300, 150);
  }write();

  function writeSubtext() {
    ctx.font = '30px Righteous';
    ctx.fillText('a little excercise for mental muscles', 200, 200);
    ctx.fillStyle = 'purple';
  }writeSubtext();
  