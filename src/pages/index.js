import { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";
// import Nav from "../components/nav";
import { wrapper } from "../redux/store";
import { changename } from "../redux/actions";
var date = new Date();

const Home = props => {
  const router = useRouter();
  const dispatch = useDispatch();
  const myreducer = useSelector(store => store.myreducer);
  console.log("myreducer=", myreducer);

  function goto() {
    router.push("/zhangwei");
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 onClick={goto}>{myreducer.name}</h1>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch(changename("zhangwei"));
});

export default Home;
