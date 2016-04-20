
var game = new Phaser.Game('100', '100', Phaser.CANVAS, 'phaser', { preload: preload, create: create, update: update, render: render });

//var timeScale = 3.154E7;        //  1s == 1year
var timeScale = 3.154E7 / 5;        //  5s == 1year

function preload() {
    game.load.image('sun', 'images/sun.png');
    game.load.image('earth', 'images/earth.png');
}

var sun;
var earth;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#0072bc';

    sun = game.add.sprite(game.width/2, game.height/2, 'sun');
    earth = game.add.sprite((game.width/2) + 400, (game.height/2), 'earth');

    sun.anchor.setTo(0.5, 0.5);
    earth.anchor.setTo(0.5, 0.5);

    sun.scale.setTo(0.4, 0.4);
    earth.scale.setTo(0.1, 0.1);

    //earth.body.angularVelocity = 100;



    game.physics.enable(sun, Phaser.Physics.ARCADE);
    game.physics.enable(earth, Phaser.Physics.ARCADE);


    earth.body.angularVelocity = Earth.angularVelocity * timeScale;
    sun.body.angularVelocity = Sun.angularVelocity * timeScale;

}

function update() {

    earth.body.velocity = 100;
    //earth.body.velocity.y = 100;

    /*sun.body.velocity.x = 0;
    sun.body.velocity.y = 0;
    sun.body.angularVelocity = 0;

    earth.body.velocity.x = 0;
    earth.body.velocity.y = 0;
    earth.body.angularVelocity = 0;

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        sun.body.angularVelocity = -200;
        earth.body.angularVelocity = -200;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        sun.body.angularVelocity = 200;
        earth.body.angularVelocity = 200;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        game.physics.arcade.velocityFromAngle(sun.angle, 300, sun.body.velocity);
        game.physics.arcade.velocityFromAngle(earth.angle, 300, earth.body.velocity);
    }*/

}

function render() {

    //game.debug.spriteInfo(sun, 32, 32);
    //game.debug.text('angularVelocity: ' + sun.body.angularVelocity, 32, 200);
    //game.debug.text('angularAcceleration: ' + sun.body.angularAcceleration, 32, 232);
    //game.debug.text('angularDrag: ' + sun.body.angularDrag, 32, 264);
    //game.debug.text('deltaZ: ' + sun.body.deltaZ(), 32, 296);

}

function gravitationalForceOfSunOnEarth() {

  var G = 0;

}

var Sun = {
  angularVelocity: 2.904E-6,      //  rad/s
  mass: 0.0,
  radius: 0.0
};



var Earth = {
  angularVelocity: 7.292115E-5,      //  rad/s
  mass: 0.0,
  radius: 0.0
};
