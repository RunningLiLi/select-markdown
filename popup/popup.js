chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // 处理来自页面的消息
  console.log("收到来自页面的消息:", message);

  // 发送回复消息给页面
  sendResponse("收到消息了！");
});
// const sendMessageId = document.getElementById("sendmessageid");
// if (sendMessageId) {
//   sendMessageId.onclick = function () {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.tabs.sendMessage(
//         tabs[0].id,
//         {
//           url: chrome.runtime.getURL("images/stars.jpeg"),
//           imageDivId: `${guidGenerator()}`,
//           tabId: tabs[0].id,
//         },
//         function (response) {
//           // window.close();
//         }
//       );
//       function guidGenerator() {
//         const S4 = function () {
//           return (((1 + Math.random()) * 0x10000) | 0)
//             .toString(16)
//             .substring(1);
//         };
//         return (
//           S4() +
//           S4() +
//           "-" +
//           S4() +
//           "-" +
//           S4() +
//           "-" +
//           S4() +
//           "-" +
//           S4() +
//           S4() +
//           S4()
//         );
//       }
//     });
//   };
// }
