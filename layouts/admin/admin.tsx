import Sidebar from "./components/sidebar";

const Admin = (props: any) => {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">{props.children}</div>
    </>
  );
};

export default Admin;
