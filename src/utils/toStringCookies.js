export  function toStrCookies(cookies) {
  let strCookies = "";
   cookies.getAll().forEach((item) => {
    strCookies += `${item?.name}=${item?.value}; `;
  });
  return strCookies;
}
