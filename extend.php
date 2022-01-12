<?php

/*
 * This file is part of fanmingfei/flarum-launch.
 *
 * Copyright (c) 2022 .
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Fanmingfei\FlarumLaunch;

use Flarum\Extend;
use Flarum\FrontEnd\Document;

return [
    (new Extend\Frontend('forum'))
    ->content(function (Document $document) {
        $document->head[] = '<style id="launchStyle">#app {display: none}</style>';
    }),
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Settings())
        ->serializeToForum('ImageUrl', 'fanmingfei-launch.image_url'),
];
