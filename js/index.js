$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 100, 300 ],
        slide: function( event, ui ) {
            $( "#min" ).val(ui.values[ 0 ] + "грн");
            $( "#max" ).val(ui.values[ 1 ] + "грн");
        }
    });
    $( "#min" ).val( $( "#slider-range" ).slider( "values", 0 ) + " грн");
    $( "#max" ).val( $( "#slider-range" ).slider( "values", 1 ) + " грн");
} );

const buttonMenu = document.querySelector('.header-burger');

buttonMenu.addEventListener('click', () => {
    const burger = document.querySelector('.header-burger');
    const menu = document.querySelector('.header-menu');
    const body = document.querySelector('body');
    burger.classList.toggle('js-active');
    menu.classList.toggle('js-active');
    body.classList.toggle('js-active');
})
