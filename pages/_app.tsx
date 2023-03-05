import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Admin from "@/layouts/admin/admin";
import Public from "@/layouts/public/public";
import Empty from "@/layouts/empty/empty";

interface Layouts {
  [key: string]: React.FunctionComponent;
}

const layouts: Layouts = {
  admin: Admin,
  public: Public,
  empty: Empty,
};

export default function App({ Component, pageProps }: AppProps) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
