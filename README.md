使用 next.js 的动态路由就解决了，
文件夹目录：pages/[username]就可以了，下面是页面代码，这样就可以获取用户名，并且判断是否有该用户，没有则跳转到 404

```
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";

const Settings = () => {
  const router = useRouter();
  const { query } = router;

  if (JSON.stringify(query) != "{}") {
    if (query.username != "zhangwei") {
      return <DefaultErrorPage statusCode={404} ></DefaultErrorPage>;
    } else {
      return <div>{query.username}</div>;
    }
  } else {
    return <>Loading</>;
  }
};

export default Settings;

```
