
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { create: create, render: render });

var floor;

function create() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.setScreenSize( true );

    floor = new Phaser.Rectangle(0, 550, 800, 49);

}

function render () {

    game.debug.geom(floor,'#0fffff');

}
