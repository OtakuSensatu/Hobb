const Enmap = require("enmap");
module.exports = client => {

    //Each Database gets a own file and folder which is pretty handy!



    client.stats = new Enmap({
        name: "stats",
        dataDir: "./databases/stats"
    })
    client.settings = new Enmap({
        name: "settings",
        dataDir: "./databases/settings"
    })
    client.setups = new Enmap({
        name: "setups",
        dataDir: "./databases/setups",
    })
    client.queuesaves = new Enmap({
        name: "queuesaves",
        dataDir: "./databases/queuesaves",
        ensureProps: false
    })
}