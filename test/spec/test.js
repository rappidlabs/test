/*global describe, it, expect */
/* jshint smarttabs:true */
'use strict';
(function () {
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function (){
                var test=2;
                expect(test, 'test moet 2 zijn !').to.equal(2);
                expect(test, 'test moet niet 2 zijn !').not.to.equal(8);
            });
        });
    });
})();
