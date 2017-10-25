<?php
/**
 * News FavicoNum
 *
 * @link      https://github.com/danopz/news_faviconum
 * @copyright Copyright (c) 2017 Daniel Opitz
 * @license   https://github.com/danopz/news_faviconum/blob/master/LICENSE (MIT License)
 */
if (\OC::$server->getAppManager()->isEnabledForUser('news') && class_exists(\OCA\News\Plugin\Client\Plugin::class)) {
    \OCA\News\Plugin\Client\Plugin::registerScript('news_faviconum', 'faviconum');
}
