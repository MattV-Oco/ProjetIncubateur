<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\Container69zpAYD\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/Container69zpAYD/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/Container69zpAYD.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\Container69zpAYD\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \Container69zpAYD\App_KernelDevDebugContainer([
    'container.build_hash' => '69zpAYD',
    'container.build_id' => '8ceec40f',
    'container.build_time' => 1695794436,
], __DIR__.\DIRECTORY_SEPARATOR.'Container69zpAYD');
