document.addEventListener('DOMContentLoaded', function () {
    const chatConfig = KoreChatSDK.chatConfig;
    const botOptions = chatConfig.botOptions;

    botOptions.koreAPIUrl = "https://platform.kore.ai/api/";
    botOptions.JWTUrl = "https://mk2r2rmj21.execute-api.us-east-1.amazonaws.com/dev/users/sts";
    botOptions.userIdentity = "shivani.vellanki@staples.com";
    botOptions.botInfo = {
        name: "Reactive_POC",
        _id: "st-cd7dc0d8-c4e2-58a8-be49-95e0d97dfffd"
    };
    botOptions.clientId = "cs-de247d47-4b00-54b7-9261-eddaa39a754e";
    botOptions.clientSecret = "e5WPiFqgun567KGjzq2LoUqvwnULI2q48/DrJnxdK1Q=";
    chatConfig.botOptions.API_KEY_CONFIG.KEY = "9cb93b446f3744c0b678238a901b8aa18f904e3593184563a7e00e53d305ff8cstcd";

    // ✅ Completely disable bubble and avoid minimize mode
    chatConfig.branding = chatConfig.branding || {};
    chatConfig.branding.chat_bubble = { style: { display: "none" } };
    chatConfig.minimizeMode = false;

    // ✅ Show the chat ONCE (only now)
    const instance = new KoreChatSDK.chatWindow().show(chatConfig);

    // ✅ On button click, manually simulate chat open
    document.getElementById('chatBtn').onclick = function () {
        const checkReady = setInterval(() => {
            if (KoreChatSDK.dependencies?.jQuery) {
                try {
                    KoreChatSDK.dependencies.jQuery('.kore-chat-window .minimized').click();
                    clearInterval(checkReady);
                } catch (err) {
                    console.error("Error opening chat window:", err);
                }
            }
        }, 300);
    };
});
