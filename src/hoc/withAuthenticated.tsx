import React, { useEffect } from "react";
import Router from "next/router";

const withAuthenticated = <P extends object>(
  Component: React.ComponentType<P>
): React.ComponentType<P> => {
  const WrappedComponent: React.ComponentType<P> = (props) => {
    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        Router.push("/");
      }
    }, []);
    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default withAuthenticated;
