// App Configuration
const fs = require('fs');

exports.AppConfig = (app) => {
    return {
        create: (req, res, next) => {
            console.log(`Writing a new default config.json file to ${app.getPath('userData')}\\test.json}...`);
            try {
                const appDefaultConfig = Object.freeze({
                    version: '1.0.1',
                    theme: 'theme-default',
                    language: 'en-us',
                    factorioInstallPath: null,
                    factorioModsPath: null,
                    factorioProfilesPath: null,
                    debug: true,
                    autoUpdate: true,
                    updateUrl: "",
                    collectAnonymousData: true,
                    officialRepositories: [
                    ],
                    repositories: [
                    ],
                    supports: [
                        '16.x'
                    ]
                });
                fs.writeFileSync(`${app.getPath('userData')}\\config.json`, JSON.stringify(appDefaultConfig));
                res.json(appDefaultConfig);
            } catch (err) {
                console.error(err);
                next(err);
            }
        }
    }
};