import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

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
    return (
      <>
        <Spin indicator={antIcon} />
      </>
    );
  }
};

export default Username;
