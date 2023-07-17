let mdres = "";
let labelres = "";
const selectCallback = debounce(function () {
  var selection = window.getSelection();
  var selectedText = selection.toString();
  // document.execCommand("Copy");
  let newNode = selection.anchorNode.parentElement.cloneNode(true);
  newNode.innerHTML = selectedText;
  if (selectedText) {
    selection.anchorNode.parentElement.style.borderBottom = "5px solid skyblue";
    const label = DOMPurify.sanitize(newNode);
    document
      .querySelector("#previewMDContent")
      .insertAdjacentHTML("beforeend", label);
    labelres += label;
    mdres += html2md(label, { skipTags: ["div"] }) + "\n\n";
    localStorage.setItem("mdres", mdres);
    localStorage.setItem("labelres", labelres);
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
    `<div id="previewMD"><div id="delMd">❌</div><div id="copyMd">📑</div>
    <main id="previewMDContent">${
      localStorage.getItem("labelres") || ""
    }</main></div>`
  );
}
createView();
document.querySelector("#copyMd").addEventListener("click", function () {
  navigator.clipboard.writeText(mdres);
});
document.querySelector("#delMd").addEventListener("click", function () {
  document.querySelector("#previewMDContent").innerHTML = "";
  localStorage.removeItem("mdres");
  localStorage.removeItem("labelres");
});
