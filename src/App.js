/**
 * News FavicoNum
 *
 * @link      https://github.com/danopz/news_faviconum
 * @copyright Copyright (c) 2017-2018 Daniel Opitz
 * @license   https://github.com/danopz/news_faviconum/blob/master/LICENSE (MIT License)
 */
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Icon" }]*/
import Icon from './Icon';

export default class App
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
