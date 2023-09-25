import { useEffect } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "./portal-props.interface";

export function Portal({ children, wrapperId }: PortalProps) {
  const mount = document.getElementById(wrapperId)!;
  const el = document.createElement("div");
  el.className = "portal-wrapper";

  useEffect(() => {
    mount.appendChild(el);
    return () => {
      mount.removeChild(el);
    };
  }, [el, mount]);

  return createPortal(children, el);
}
