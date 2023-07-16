let res = "";
const selectCallback = debounce(function () {
  var selection = window.getSelection();
  var selectedText = selection.toString();
  // document.execCommand("Copy");
  let newNode = selection.anchorNode.parentElement.cloneNode(true);
  newNode.innerHTML = selectedText;
  if (selectedText) {
    selection.anchorNode.parentElement.style.borderBottom = "5px solid skyblue";
    console.log("selectedText", selectedText);
    document
      .querySelector("#previewMD")
      .insertAdjacentHTML("beforeend", DOMPurify.sanitize(newNode));
    res += html2md(DOMPurify.sanitize(newNode), { skipTags: ["div"] }) + "\n";
  }
}, 1000);

document.addEventListener("selectionchange", selectCallback);
//防抖
function debounce(fn, wait) {
  var timeout = null;
  return function () {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  };
}
//创建视图
function createView() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div id="previewMD"><div id="copyMd">复制</div></div>`
  );
}
createView();
document.querySelector("#copyMd").addEventListener("click", function () {
  navigator.clipboard.writeText(res);
});
