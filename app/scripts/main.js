require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        isotope: '../bower_components/isotope/jquery.isotope',
        game: 'game'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        isotope: {
            deps:['jquery']
        }
    }
});

require(['app', 'jquery', 'bootstrap', 'isotope'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);

    var $container = $('#container');
        // initialize isotope
    $container.isotope({
          // options...
    });

    // filter items when filter link is clicked
    $('#filters a').click(function(){
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });
});
