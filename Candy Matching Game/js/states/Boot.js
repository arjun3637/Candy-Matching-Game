var Match3 = Match3 || {};

Match3.BootState = {
    init: function(){
        this.game.stage.backgroundColor = 'fff';

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAllignHorizontally = true;
        this.scale.pageAllignVertically = true;
    },

    preload: function(){
        this.load.image('bar', 'images/preloader-bar.png');
    },

    create: function(){
        this.state.start('Preload');
    }
};