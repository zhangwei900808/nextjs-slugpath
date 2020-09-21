import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";

const Username = () => {
  const router = useRouter();
  const { query } = router;

  function back() {
    router.push("/");
  }
  if (JSON.stringify(query) != "{}") {
    if (query.username != "zhangwei") {
      return <DefaultErrorPage statusCode={404} />;
    } else {
      return <div onClick={back}>{query.username}</div>;
    }
  } else {
    return <>Loading</>;
  }
};

export default Username;
