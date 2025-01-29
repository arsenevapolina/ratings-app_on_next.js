import React, { JSX, useContext } from "react";
import { AppContext } from "@/components/context/app.context";

export const Menu = (): JSX.Element => {
  const { menu } = useContext(AppContext);
  return (
    <div>
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};
