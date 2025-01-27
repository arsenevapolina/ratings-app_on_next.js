import React, { JSX } from "react";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      sidebar
    </div>
  );
};
