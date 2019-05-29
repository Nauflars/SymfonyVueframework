var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .autoProvidejQuery()
    .autoProvideVariables({
        "window.Bloodhound": require.resolve('bloodhound-js'),
        "jQuery.tagsinput": "bootstrap-tagsinput"
    })
    .enableSassLoader()
    .enableVersioning(Encore.isProduction())
    .addEntry('app', './assets/js/app.js')
    .addEntry('login', './assets/js/login.js')
    .addEntry('admin', './assets/js/admin.js')
    .addEntry('search', './assets/js/search.js')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .enableIntegrityHashes()
    .configureBabel(null, {
        useBuiltIns: 'usage',
        corejs: 3,
    })
;

module.exports = Encore.getWebpackConfig();
