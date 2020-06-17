
var elements    = document.querySelectorAll( 'time[data-time]' ),
    updateDates = function()
    {
        Array.prototype.forEach.call( elements, function( entry )
        {
            var out = '';
           
            entry.textContent = out;
        });
        setTimeout( updateDates, 1000 * 60 );
    };
setTimeout( updateDates, 1000 * 60 );
