import React from "react";
import Body from "./Body/Body";
import Loading from "./Loading/Loading";
import Topbar from "./TopBar/Topbar";

export default function Design() {
  const [state, setstate] = React.useState(false);
  setTimeout(() => {
    setstate(true);
  }, 3000);
  return (
    <div>
      {!state && <Loading />}
      {state && <Topbar />}
      {state && <Body />}
    </div>
  );
}
