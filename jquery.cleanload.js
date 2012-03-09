(function ($) {
    $.fn.cleanLoad = function ( options ) {
        var settings = $.extend({

        }, options);

        return this.each(function () {
            var $this = $(this);
            $this.css( 'visibility', 'hidden' )
                 .attr( 'src', $this.attr('data-src') )
                 .load(function () {
                     $(this).css( {visibility: 'visible', opacity: 0} )
                        .animate( {opacity: 1}, 700 );
                 });

        });
    }
})(jQuery);
