import { createContext } from "react";
import { ToggleInterface } from ".";

export const DrawerContext = createContext<ToggleInterface>({
  show: "dark",
});
