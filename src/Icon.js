/**
 * News FavicoNum
 *
 * @link      https://github.com/danopz/news_faviconum
 * @copyright Copyright (c) 2017-2018 Daniel Opitz
 * @license   https://github.com/danopz/news_faviconum/blob/master/LICENSE (MIT License)
 */
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Options$" }]*/
import Options from './Options';

export default class Icon
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
