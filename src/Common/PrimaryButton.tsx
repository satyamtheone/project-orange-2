import { ButtonHTMLAttributes } from "react";

export type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  className?: string;
  fullWidth?: boolean;
  icon?: JSX.Element;
  loading?: boolean;
  variant?: "contained" | "outline";
};

function PrimaryButton({
  fullWidth,
  variant = "contained",
  className,
  icon,
  loading,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className={`btn gap-2 font-inter bg-gradient-to-r rounded-md ${
        fullWidth ? "w-full" : ""
      } ${
        variant === "outline" ? "btn-outline" : "  btn-primary  "
      }  ${className} ${loading ? "loading" : ""}`}
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      {...props}
    >
      {props.text}
      {icon}
    </button>
  );
}

export default PrimaryButton;
