// PWA Service Worker
self.addEventListener('install', function(event) {
    // 自然完成安装，不强行跳过等待，避免打断首屏页面初始化
});

self.addEventListener('activate', function(event) {
    // 自然激活，严禁调用 clients.claim()，彻底解决强行夺权导致的 IndexedDB 挂起卡死
});

self.addEventListener('fetch', function(event) {
    // 满足手机浏览器 PWA 安装校验标准，不拦截正常请求
});
