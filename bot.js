var chatConfig = KoreChatSDK.chatConfig;
var chatWindow = KoreChatSDK.chatWindow;
var chatWindowInstance = new chatWindow();

var botOptions = chatConfig.botOptions;
botOptions.koreAPIUrl = "https://platform.kore.ai/api/";
botOptions.JWTUrl = "https://mk2r2rmj21.execute-api.us-east-1.amazonaws.com/dev/users/sts";
botOptions.userIdentity = "shivani.vellanki@staples.com";
botOptions.botInfo = {
  name: "Reactive_POC",
  _id: "st-cd7dc0d8-c4e2-58a8-be49-95e0d97dfffd"
};
botOptions.clientId = "cs-de247d47-4b00-54b7-9261-eddaa39a754e";
botOptions.clientSecret = "e5WPiFqgun567KGjzq2LoUqvwnULI2q48/DrJnxdK1Q=";
KoreChatSDK.chatConfig.botOptions.API_KEY_CONFIG.KEY = "9cb93b446f3744c0b678238a901b8aa18f904e3593184563a7e00e53d305ff8cstcd";

chatConfig.branding.chat_bubble.style = "rounded";

var customer = {
    "name": "Shivani Vellanki",
    "email": "shivani.vellanki@staples.com",
    "phone": "1234567890",
    "address": "123 Main St, Anytown, USA"
}


// <!-- Chat button logic -->
//<script>
  document.getElementById('chatBtn').onclick = function () {
    // Set any custom JSON object
    window.koreChatCfg.botOptions.botInfo.customData = {
      language: "french",
      userId: "12345",
      isReturningUser: true,
      preferences: {
        theme: "dark",
        notifications: false
      }
    };

    window.koreBot.show(window.koreChatCfg);
  };
//</script>

// KoreChatSDK.chatConfig.botOptions.botInfo.customData = { customer };
// chatWindowInstance.show(KoreChatSDK.chatConfig);

// Fetch customer and initialize chat
// fetch('/api/customer')
//   .then(res => res.json())
//   .then(customer => {
//     KoreChatSDK.chatConfig.botOptions.botInfo.customData = { customer };
//     chatWindowInstance.show(KoreChatSDK.chatConfig);
//   })
//   .catch(error => {
//     console.error('Error loading customer data:', error);
//   });