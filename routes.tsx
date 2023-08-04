import React, { Fragment, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NonLogin from "./src/Layouts/NonLogin";
import Loading from "./src/Loading";

export interface IProps {
  children: JSX.Element;
}
export type TGeneralRoute = {
  exact?: boolean;
  path: string;
  guard?: ({ children }: IProps) => JSX.Element;
  layout?: ({ children }: IProps) => JSX.Element;
  component: React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
};

export type TRoutes = Array<TGeneralRoute>;

const routes: TGeneralRoute[] = [
  {
    exact: true,
    path: "/",
    layout: NonLogin,
    component: () => <Navigate to="/otp" />,
  },
  {
    exact: true,
    path: "/store",
    layout: NonLogin,
    component: lazy(() => import("./src/Screens/Store")),
  },
  {
    exact: true,
    path: "/home",
    layout: NonLogin,
    component: lazy(() => import("./src/Screens/Home")),
  },
  {
    exact: true,
    path: "/otp",
    component: lazy(() => import("./src/Screens/LoginPages/OtpPage")),
  },
  {
    exact: true,
    path: "/promotion",
    layout: NonLogin,
    component: lazy(() => import("./src/Screens/Promotion")),
  },

  {
    exact: true,
    path: "/404",
    layout: NonLogin,
    component: lazy(() => import("./src/Screens/404Page")),
  },
  {
    exact: true,
    path: "*",
    layout: NonLogin,
    component: () => <Navigate to="/404" />,
  },
];

export const renderRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      {routes.map((route, i) => {
        const { path, component, layout, guard } = route;
        const Component = component;
        const Layout = layout || Fragment;
        const Guard = guard || Fragment;
        return (
          <Route
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            path={path}
            element={
              <Guard>
                <Layout>
                  <Component />
                </Layout>
              </Guard>
            }
          ></Route>
        );
      })}
    </Routes>
  </Suspense>
);
