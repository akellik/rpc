const RPC = require ("discord-rpc");
const rpc = new RPC.Client({transport:"ipc"});

rpc.on("ready", () => {
    rpc.setActivity({
        details:"str1",
        state:"str2",
        startTimestamp:new Date(),
        largeImageKey:"31"
     
    });
console.log("rpc");
});
rpc.login({
    clientId:"702070386325717045"
});
