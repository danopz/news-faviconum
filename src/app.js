/**
 * News FavicoNum
 *
 * @link      https://github.com/danopz/news_faviconum
 * @copyright Copyright (c) 2017 Daniel Opitz
 * @license   https://github.com/danopz/news_faviconum/blob/master/LICENSE (MIT License)
 */

class Icon
{
    /**
     * @param document {Document}
     * @param options {Options}
     */
    constructor(document, options)
    {
        this.options = options;

        this.canvas = document.createElement('canvas');
        this.canvas.width = options.size;
        this.canvas.height = options.size;

        this.context = this.canvas.getContext('2d');
    }

    /**
     * @param count {int}
     */
    render(count)
    {
        let size = this.options.size;
        let size2 = size / 2;
        let padding = this.options.padding;
        let padSize = size - padding;

        this.context.clearRect(0, 0, size, size);
        this.context.fillStyle = this.options.background;
        this.context.beginPath();
        this.context.arc(size2, size2, size/1.6, 0, 2*Math.PI);
        this.context.fill();
        this.context.closePath();

        this.context.strokeStyle = this.options.strokeColor;
        this.context.lineWidth = 4;
        this.context.fillStyle = this.options.color;

        let xHundred = parseInt(count / 100);
        count = count % 100;
        let xTen = parseInt(count / 10);
        let xOne = count % 10;

        this.drawText(xOne, size * this.options.fontModifierBottom, 'end', 'alphabetic', padSize, padSize);
        this.drawText(xTen, size * this.options.fontModifierBottom, 'start', 'alphabetic', padding, padSize);
        this.drawText(xHundred, size * this.options.fontModifierTop, 'center', 'hanging', size2, padding);

        return {
            favicon: this.canvas.toDataURL('image/png'),
            type: 'image/png',
        };
    }

    drawText(text, fontSize, textAlign, textBaseline, x, y)
    {
        this.context.font = 'bold ' + fontSize + 'px Arial';
        this.context.textAlign = textAlign;
        this.context.textBaseline = textBaseline;
        this.context.strokeText(text, x, y);
        this.context.fillText(text, x, y);
    }
}

class App
{
    /**
     * @param titleElem {HTMLTitleElement}
     * @param faviconElem {HTMLLinkElement}
     */
    constructor(titleElem, faviconElem)
    {
        this.origFavicon = faviconElem.getAttribute('href');
        this.origType = faviconElem.getAttribute('type');
        this.title = titleElem;
        this.favicon = faviconElem;
    }

    /**
     * @param icon {Icon}
     */
    update(icon)
    {
        let matches = this.title.text.match(/\((\d+)\)/);
        let favicon = this.origFavicon;
        let type = this.origType;

        if (matches) {
            let match = matches.pop();
            let data = icon.render(match);
            favicon = data.favicon;
            type = data.type;
        }

        this.favicon.setAttribute('href', favicon);
        this.favicon.setAttribute('type', type);
    }
}

class Options
{
    strokeColor = 'rgba(0,0,0,0.6)';
    fontModifierTop = 1 / 3 * 1.7;
    fontModifierBottom = 1 / 3 * 2.1;
    size = 64;
    padding = this.size/16;
    color = '#fff';
    background = '#000';

    /**
     * @param OCA {object}
     */
    constructor(OCA)
    {
        if (OCA.hasOwnProperty('Theming')) {
            this.background = OCA.Theming.color;

            if (OCA.Theming.inverted) {
                this.color = '#000';
                this.strokeColor = 'rgba(255,255,255,0.6)';
            }
        }
    }
}

(function(document, OCA){
    document.addEventListener('DOMContentLoaded', function() {
        let options = new Options(OCA);
        let icon = new Icon(document, options);

        let title = document.querySelector('title');
        let app = new App(title, document.querySelector('head > link[rel="icon"]'));

        let observer = new MutationObserver(function() {
            app.update(icon);
        });

        observer.observe(title, {
            childList: true
        });
    });
})(document, OCA);
