export default async function middlewareAuth(req) {
  let strCookies = "";
  req.cookies.getAll().forEach((item) => {
    strCookies += `${item?.name}=${item?.value}; `;
  });

  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: strCookies,
      },
    }
  ).then((res) => res.json());
  const { user } = data || {};
  return user;
}
