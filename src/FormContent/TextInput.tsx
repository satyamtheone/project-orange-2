import { InputHTMLAttributes } from "react";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  ref?: React.Ref<HTMLInputElement>;
};

function TextInput({
  label,
  placeholder,
  className,
  type,
  disabled,
  ...props
}: TextInputProps) {
  return (
    <div className="flex flex-col relative w-full">
      <input
        type={type}
        className={`input input-bordered input-lg input-primary text-gray-500 w-full px-2.5 pb-2.5 pt-2 focus:ring-0 focus:text-gray-900 focus:border-none peer font-inter placeholder:text-gray-500 disabled:bg-gray-100 disabled:text-gray-400 rounded-md ${className}`}
        placeholder={placeholder || label}
        disabled={disabled}
        {...props}
      />
      <label
        className={`font-inter pointer-events-none absolute  duration-300 transform -translate-y-2 scale-75 top-2  z-10 origin-[0] bg-transparent px-2 ${
          !disabled && !props.value && "invisible"
        } peer-focus:visible ${
          disabled
            ? "ml-1.5 text-gray-400 peer-placeholder-shown:-translate-y-2.5"
            : "text-gray-500 peer-focus:px-2 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 left-1 "
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export default TextInput;
