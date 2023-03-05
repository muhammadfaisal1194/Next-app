import Header from "./components/header";

const Public = (props: any) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Public;
