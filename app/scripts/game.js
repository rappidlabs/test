/*global define:true*/
'use strict';
define('game', function(){
	var Game = function(){
		this._score=0;
	};

	Game.prototype.roll = function (pins) {
        if (typeof pins !== 'number') {
            throw new Error('expeced a number');
        }
        this._score +=pins;
    };

    Game.prototype.score = function () {
        return this._score;
    };

	return Game;
});