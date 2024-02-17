import React, { useEffect } from "react";
import router from "next/router";
// import "bootstrap-icons/font/bootstrap-icons.css";

export default function Home() {
  useEffect(() => {
    router.push("/list/list");
  }, []);
  return <></>;
}
