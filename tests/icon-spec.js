/**
 * News FavicoNum
 *
 * @link      https://github.com/danopz/news_faviconum
 * @copyright Copyright (c) 2017 Daniel Opitz
 * @license   https://github.com/danopz/news_faviconum/blob/master/LICENSE (MIT License)
 */
import Icon from '../src/Icon';

describe('Icon', function () {
    let icon;

    beforeEach(function () {
        icon = new Icon(document, {size: 42});
    });

    it('should return favicon data', function () {
        let data = icon.render(123);

        expect(typeof data).toBe('object');
        expect(Object.keys(data).length).toBe(2);

        let favicon = expect(data.favicon);
        let type = expect(data.type);

        favicon.not.toBeUndefined();
        favicon.toMatch(/^data:image\/png;base64,/);

        type.not.toBeUndefined();
        type.toBe('image/png');
    });

    it('should return nothing for draw', function () {
        expect(icon.drawText(123, 42, 'center', 'hanging', 0, 0)).toBeUndefined();
    });
});
