/**
 * cookie操作
 * @param obj 需拷贝到对象
 * 
 * @category 函数
 */
function saveCookie(name:string, value: string, exdays: number) {
  const cookie = `${name}=${value};`;
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cookie + expires}; path=/`;
}

function getCookie(name: string) {
  const reg = new RegExp(`\\s*${name}=([^;]*)`);
  const match = document.cookie.match(reg);
  return match && match.length ? match[1] : undefined;
}

const cookie = {
  saveCookie,
  getCookie
}

export default cookie
