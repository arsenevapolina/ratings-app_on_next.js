import React, { JSX } from "react";
import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu/>
    </div>
  );
};
