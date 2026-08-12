import { Layout } from "antd";

import { Footer } from "../Footer";
import { Header } from "../Header";

const { Content } = Layout;

type Props = {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            padding: 24,
            height: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};
