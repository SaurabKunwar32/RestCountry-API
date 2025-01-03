import { useContext } from "react";
import { modes } from "../Contexts/modes";

export function useModes() {
  return useContext(modes);
}
