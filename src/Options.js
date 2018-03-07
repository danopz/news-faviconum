/**
 * News FavicoNum
 *
 * @link      https://github.com/danopz/news_faviconum
 * @copyright Copyright (c) 2017-2018 Daniel Opitz
 * @license   https://github.com/danopz/news_faviconum/blob/master/LICENSE (MIT License)
 */
export default class Options
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
