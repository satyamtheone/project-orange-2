import React from "react";
import DialogContainer from "./DialogContainer";
type ProviderContext = {
  openDialog: (option: DialogOption) => void;
  closeDialog: () => void;
};
const EMPTY_FUNC = () => {};
const DialogContext = React.createContext<ProviderContext>({
  openDialog: EMPTY_FUNC,
  closeDialog: EMPTY_FUNC,
});
export const useDialog = () => React.useContext(DialogContext);

export type DialogParams = {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
};
export type DialogOption = Omit<DialogParams, "open">;
export type DialogContainerProps = DialogParams & {
  onClose: () => void;
};
const DialogProvider = ({ children }: { children: JSX.Element }) => {
  const [dialogs, setDialogs] = React.useState<DialogParams[]>([]);
  const createDialog = (option: DialogOption) => {
    const dialog = { ...option, open: true };
    setDialogs((dialogs) => [...dialogs, dialog]);
  };

  const closeDialog = () => {
    setDialogs((dialogs: DialogParams[]) => {
      let latestDialog = dialogs.pop();
      if (latestDialog?.open === false) {
        latestDialog = dialogs.pop();
      }
      if (!latestDialog) return dialogs;
      if (latestDialog.onClose) latestDialog.onClose();
      return [...dialogs].concat({ ...latestDialog, open: false });
    });
  };

  const contextValue = React.useRef({
    openDialog: createDialog,
    closeDialog,
  } as const);

  return (
    <DialogContext.Provider value={contextValue.current}>
      {children}
      {dialogs.map((dialog, i) => {
        const { ...dialogParams } = dialog;

        return (
          <DialogContainer key={i} onClose={closeDialog} {...dialogParams} />
        );
      })}
    </DialogContext.Provider>
  );
};

export default DialogProvider;
