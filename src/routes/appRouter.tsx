import { ScrollToTop } from "helpers";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RouteBuilder, Routes as RouteList } from ".";

/**
 * MAIN ROUTER COMPONENT
 *
 * ===============================================
 *
 * This component houses all routes and their respective layouts.
 * To add a route navigate to the route builder and add to the existing list.
 *
 *
 */

const MainRouter: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to={RouteList.home} />} />
        {RouteBuilder?.length > 0 &&
          RouteBuilder.map((item, idx) => {
            const { Element, path, caseSensitive, Layout, props } = item;
            // Checks if a layout exists or not
            const PageComponent = Layout ? (
              <Layout {...props}>
                <Element />
              </Layout>
            ) : (
              <Element />
            );

            return (
              <Route key={idx} path={path} element={PageComponent} caseSensitive={caseSensitive} />
            );
          })}
      </Routes>
    </>
  );
};

export { MainRouter };
