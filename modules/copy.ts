function copy(target: string) {
  let cop_txt = null;
  let element = document.getElementById(`${target}`);

  if (element) {
    cop_txt = element.innerText || (element as any).value;
  } else {
    cop_txt = target
  }

  const input = document.createElement("textarea");

  if (typeof cop_txt === "string") {
    input.value = cop_txt; // 修改文本框的内容
  }

  document.body.appendChild(input);
  input.select(); // 选中文本
  document.execCommand("copy"); // 执行浏览器复制命令
  document.body.removeChild(input);
}

export default copy ;
