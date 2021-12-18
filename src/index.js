import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し。初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liタグを生成
  const li = document.createElement("li");
  // li.innerText = inputText;
  //divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);
  //liタグの子要素に各要素を設定
  li.appendChild(div);
  console.log(div);
  console.log(li);
  //pタグを生成
  const p = document.createElement("p");
  p.className = "list-item";
  p.innerText = inputText;
  //pタグの子要素に各要素を設定
  div.appendChild(p);
  alert(inputText);

  document.getElementById("imcomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
