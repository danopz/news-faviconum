<?php

if (\OC::$server->getAppManager()->isEnabledForUser('news') && class_exists(\OCA\News\Plugin\Client\Plugin::class)) {
    \OCA\News\Plugin\Client\Plugin::registerScript('news_faviconum', 'faviconum');
}
