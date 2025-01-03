import React from "react";
import { useRouteError } from "react-router";

export default function Error() {
  let error = useRouteError();
  return <div>Something went wrong {error.status} </div>;
}
