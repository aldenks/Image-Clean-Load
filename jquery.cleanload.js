/* Fade in images after they are fully loaded. */
(function ($) {
    $.fn.cleanLoad = function ( animate_options ) {

        animate_options = $.extend({
            duration: 0
        }, animate_options);


        /* Call user's "complete" callback when all animations are finished. */
        var self = this, loaded = 0;
        self.all_complete = animate_options.complete;
        animate_options.complete = function () {
            loaded++;
            if (loaded == self.length) self.all_complete(this);
        };

        return this.each(function () {
            $(this).css( 'visibility', 'hidden' )
                 .attr( 'src', $(this).attr('data-src') )
                 .load(function () {
                     $(this).css( {visibility: 'visible', opacity: 0} )
                        .animate( {opacity: 1}, animate_options );
                 });

        });
    };
})(jQuery);
