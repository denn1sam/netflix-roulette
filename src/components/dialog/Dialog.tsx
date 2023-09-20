import "./dialog.css";
import { Portal } from "../portal/Portal";

export interface DialogProps extends React.PropsWithChildren {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
}

export function Dialog({ children, title, isOpen, onClose }: DialogProps) {
  if (!isOpen) return null;

  function handleClose() {
    onClose();
  }

  return (
    <Portal wrapperId="portal-root">
      <div className="dialog-backdrop">
        <div className="dialog">
          <div className="dialog-header">
            <div
              className="dialog-close-button-wrapper"
              role="button"
              onClick={handleClose}
            >
              <span className="dialog-close-button">x</span>
            </div>
            {title && <h3 className="dialog-title">{title}</h3>}
          </div>

          <div className="dialog-content">{children}</div>
        </div>
      </div>
    </Portal>
  );
}
