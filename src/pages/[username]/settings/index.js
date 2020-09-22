import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";

const Settings = () => {
  const router = useRouter();
  const { query } = router;

  if (JSON.stringify(query) != "{}") {
    if (query.username != "zhangwei") {
      return <DefaultErrorPage statusCode={404} />;
    } else {
      return <div>{query.username}</div>;
    }
  } else {
    return <>Loading</>;
  }
};

export default Settings;
