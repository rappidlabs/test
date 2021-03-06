/*global describe, it */
/* global expect, beforeEach*/

/*add change branche feature*/

'use strict';
require(['game'], function (Game) {
	describe('Ten-Ping Bowling Kata', function () {

		function rollMany(rolls, pins){
			var i = 0;
            for (i; i < rolls; i ++) {
                this.roll(pins);
            }
        }

        function rollSpare(){
            this.roll(5);
            this.roll(5);
        }

        beforeEach(function(){
            this.game = new Game();
        });

		describe('Gutter Game', function () {
            it('should score 0 for a gutter game, all rolls are 0', function () {
	            var game = new Game(), i = 0;

	            for (i; i < 20; i ++) {
	                game.roll(0);
	            }
	            expect(game.score()).to.equal(0);
	            rollMany.call(this.game, 20,0);
	            expect(this.game.score()).to.equal(0);
			});
        });

		describe('Score game given all rolls hit only one pin', function () {
	        it('should score 20', function () {
	            var game = new Game(), i = 0;

	            for (i; i < 20; i ++) {
	                game.roll(1);
	            }
	            expect(game.score()).to.equal(20);
	            rollMany.call(this.game, 20,1);
				expect(this.game.score()).to.equal(20);
	        });

	    });

	    describe('Score a game with only a spare', function () {
	        it('should score 20 given the first 3 rolls hit 5 pins', function () {
	            rollSpare.call(this.game);
	            this.game.roll(5);
	            rollMany.call(this.game, 17, 0);
	            expect(this.game.score()).to.equal(20);
	        });
		});

    });
});