import React from "react";
import Content from "./partial/content";
import SideLeft from "./partial/side-left";
import SideRight from "./partial/side-right";

export default function IndexHome() {
  return (
    <div className="grid home-layout h-screen">
      <SideLeft />
      <Content />
      <SideRight />
    </div>
  );
}
