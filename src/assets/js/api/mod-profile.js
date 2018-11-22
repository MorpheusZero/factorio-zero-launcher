// Mod Profile represents the properties and behaviours that a profile should have.
exports.ModProfile = (app) => {
    return {
        create: (req, res, next) => {
            console.log(`Creating a new mod profile...`);
            try {
                const formData = req.body;
                if (formData) {
                const modProfile = Object.freeze({
                    name: formData.name || new Date().valueOf().toString(),
                    mods: []
                });
                fs.writeFileSync(`${app.getPath('userData')}\\${modProfile.name.toLowerCase().replace('/ /g', '_')}.json`, JSON.stringify(modProfile));
                res.json(modProfile);
                } else {
                    throw new Error('No mod information was passed into the request!');
                }
            } catch (err) {
                console.error(err);
                next(err);
            }
        }
    }
};