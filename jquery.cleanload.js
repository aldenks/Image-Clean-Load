/* Fade in images after they are fully loaded.
 *   Images must have their intended src attribute set as attribute data-src
 *      and not have a src attr.
 *
 *   Takes an animations options object with the properties defined here:
 *   http://api.jquery.com/animate/
 *
 *   Usage Example:
 *     $('img').cleanLoad({
 *                      duration: 'fast',
 *                      easing: 'swing',
 *                      complete: function (){ console.log("complete."); }
 *                   });
 *
 */
(function ($) {
    $.fn.cleanLoad = function ( animate_options ) {

        /* lambda, used as animate's callback. Calls user's
         *   "complete" callback when we're all done. */
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
