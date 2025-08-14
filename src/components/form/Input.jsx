import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Input({
  type,
  id,
  name,
  value,
  onChange,
  label,
  htmlFor,
  placeholder,
  arialabel,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={htmlFor} className="text-sm text-slate-600 mb-1">
        {label}
      </label>
      <div className="input-box">
        <input
          type={
            type == "password" ? (showPassword ? "text" : "password") : type
          }
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-label={arialabel}
          className="w-full bg-transparent outline-none"
        />

        {type === "password" && (
          <>
            {showPassword ? (
              <Eye
                size={22}
                className="text-slate-600"
                onClick={() => toggleShowPassword()}
              />
            ) : (
              <EyeOff
                size={22}
                className="text-slate-400"
                onClick={() => toggleShowPassword()}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Input;
