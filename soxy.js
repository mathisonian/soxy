"use strict"

window.Soxy = (function() {

    function Soxy(url) {
        if (!(this instanceof Soxy)) {
            return new Soxy(options);
        }

        var defaults = {
            url: 'http://localhost:8000'
        };

        this.url = url || defaults.url;

        this.socket = io.connect(this.url);

        this.socket.on('get', function (data) {
            console.log(data);
        });
    }


    /*
     * GET request
     */
    Soxy.prototype.get = function(url, data) {
        this.socket.emit('get', { url: url, data: data });
    };

    return Soxy;

})()
