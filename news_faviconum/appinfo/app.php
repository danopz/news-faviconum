<?php

if (\OCP\App::isEnabled('news') && class_exists('OCA\News\Plugin\Client\Plugin')) {
    \OCA\News\Plugin\Client\Plugin::registerScript('news_faviconum', 'faviconum');
}
