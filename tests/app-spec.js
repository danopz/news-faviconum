/**
 * News FavicoNum
 *
 * @link      https://github.com/danopz/news_faviconum
 * @copyright Copyright (c) 2017-2018 Daniel Opitz
 * @license   https://github.com/danopz/news_faviconum/blob/master/LICENSE (MIT License)
 */
import App from '../src/App';

describe('App', function () {
    let app;
    let favicon;
    let title;

    beforeEach(function () {
        favicon = document.createElement('link');
        favicon.setAttribute('href', 'http://example.com/favicon.ico');
        favicon.setAttribute('type', 'image/ico');

        title = document.createElement('title');
        title.text = 'News (123) - Nextcloud';

        app = new App(title, favicon);
    });

    it('should ', function () {

    });
});
