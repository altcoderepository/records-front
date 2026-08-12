import { routes } from "@app/routing";
import { Link } from "@tanstack/react-router";
import { Layout } from "antd";

export const Header = () => (
  <Layout.Header
    style={{
      position: "sticky",
      top: 0,
      zIndex: 1,
      width: "100%",
      display: "flex",
      alignItems: "center",
    }}
  >
    <div className="demo-logo" />
    <div>
      {routes.map((route) => (
        <Link key={route.path} to={route.path}>
          {route.label}
        </Link>
      ))}
    </div>
  </Layout.Header>
);
