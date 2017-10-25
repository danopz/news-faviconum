(function (document, OCA) {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        var bg = OCA.Theming.color || '#000',
            color = OCA.Theming.inverted ? '#000' : '#fff',
            strokeColor = OCA.Theming.inverted ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
            title = document.querySelector('title'),
            favicon = document.querySelector('head > link[rel="icon"]'),
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            origFavicon = '',
            size,
            padding,
            drawFavicon = function(){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                var text = getText();
                var href = origFavicon;

                if (text) {
                    ctx.fillStyle = bg;
                    ctx.beginPath();
                    ctx.arc(size/2, size/2, size/1.6, 0, 2*Math.PI);
                    ctx.fill();
                    ctx.closePath();

                    ctx.strokeStyle = strokeColor;
                    ctx.lineWidth = 4;
                    ctx.fillStyle = color;

                    var xHundred = parseInt(text / 100);
                    text = text % 100;
                    var xTen = parseInt(text / 10);
                    var xOne = text % 10;

                    drawText(xOne, size / 3 * 2.1, 'end', 'alphabetic', size-padding, size-padding);
                    drawText(xTen, size / 3 * 2.1, 'start', 'alphabetic', padding, size-padding);
                    drawText(xHundred, size / 3 * 1.7, 'center', 'hanging', size/2, padding);

                    href = canvas.toDataURL('image/png');
                }

                favicon.setAttribute('href', href);
                favicon.setAttribute('type', 'image/png');
            },
            drawText = function(text, fontSize, textAlign, textBaseline, x, y){
                ctx.font = 'bold ' + fontSize + 'px Arial';
                ctx.textAlign = textAlign;
                ctx.textBaseline = textBaseline;
                ctx.strokeText(text, x, y);
                ctx.fillText(text, x, y);
            },
            getText = function(){
                var matches = document.title.match(/\((\d+)\)/);

                return matches ? matches.pop() : false;
            },
            observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    drawFavicon();
                });
            }),
            setSize = function(s) {
                padding = s/16;
                size = s;

                canvas.width = s;
                canvas.height = s;
            };

        setSize(64);

        origFavicon = favicon.getAttribute('href');

        observer.observe(title, {
            childList: true
        });
    });
})(document, OCA);
