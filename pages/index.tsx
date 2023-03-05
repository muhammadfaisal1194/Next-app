import axios from "axios";
import Head from "next/head";
import { getCookie } from "cookies-next";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

Home.layout = "public";
export default Home;

export async function getServerSideProps(context: any, req: any, res: any) {
  const token = context.req.cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const result = await axios.get(`http://localhost:4000/api/me`, config);
  return {
    props: {},
  };
}
