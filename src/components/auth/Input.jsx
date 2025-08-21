import { useState } from "react";
import { User, Mail, KeyRound, Eye, EyeOff } from "lucide-react";

function Input({ type, label, id, placeholder, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  const renderIcon = () => {
    switch (type) {
      case "email":
        return <Mail size={24} className="text-slate-500" />;
      case "password":
        return <KeyRound size={24} className="text-slate-500" />;
      default:
        return <User size={24} className="text-slate-500" />;
    }
  };

  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className="input-box">
        {renderIcon()}
        <input
          type={inputType}
          id={id}
          className="w-full bg-transparent outline-none text-[14px] placeholder:text-slate-400"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="focus:outline-none"
          >
            {showPassword ? (
              <Eye size={24} className="text-slate-500" />
            ) : (
              <EyeOff size={24} className="text-slate-500" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;
