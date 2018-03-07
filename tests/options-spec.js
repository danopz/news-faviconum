/**
 * News FavicoNum
 *
 * @link      https://github.com/danopz/news_faviconum
 * @copyright Copyright (c) 2017-2018 Daniel Opitz
 * @license   https://github.com/danopz/news_faviconum/blob/master/LICENSE (MIT License)
 */
import Options from '../src/Options';

describe('Options', function () {
    it('should have default data', function () {
        let options = new Options({});

        expect(options.strokeColor).toBe('rgba(0,0,0,0.6)');
        expect(options.fontModifierTop).toBe(1 / 3 * 1.7);
        expect(options.fontModifierBottom).toBe(1 / 3 * 2.1);
        expect(options.size).toBe(64);
        expect(options.padding).toBe(4);
        expect(options.color).toBe('#fff');
        expect(options.background).toBe('#000');
    });

    it('should set colors for theming', function () {
        let options = new Options({
            Theming: {
                color: '#f00',
                inverted: false
            }
        });

        expect(options.background).toBe('#f00');
        expect(options.color).toBe('#fff');
        expect(options.strokeColor).toBe('rgba(0,0,0,0.6)');
    });

    it('should set colors for theming', function () {
        let options = new Options({
            Theming: {
                color: '#0f0',
                inverted: true
            }
        });

        expect(options.background).toBe('#0f0');
        expect(options.color).toBe('#000');
        expect(options.strokeColor).toBe('rgba(255,255,255,0.6)');
    });
});
