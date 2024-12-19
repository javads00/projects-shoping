export interface ToggleInterface {
  readonly onHide?: (callback: () => void) => void;
  readonly onShow?: (callback: () => void) => void;
  setMode?: (mode: "dark" | "white") => void;
  show: "dark" | "white";
}

export * from "./context";
