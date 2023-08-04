import { DialogContainerProps } from "./DialogProvider";

const DialogContainer = (props: DialogContainerProps) => {
  const { children, ...dialogParams } = props;

  return (
    <div className={`modal ${dialogParams.open ? "model-open" : ""}`}>
      {children}
    </div>
  );
};

export default DialogContainer;
