/**
 * News FavicoNum
 *
 * @link      https://github.com/danopz/news_faviconum
 * @copyright Copyright (c) 2017 Daniel Opitz
 * @license   https://github.com/danopz/news_faviconum/blob/master/LICENSE (MIT License)
 */
/*global OCA*/

import App from './App';
import Icon from './Icon';
import Options from './Options';

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
