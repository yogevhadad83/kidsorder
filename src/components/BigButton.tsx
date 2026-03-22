"use client";

interface BigButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "success";
  disabled?: boolean;
  ariaLabel?: string;
}

export default function BigButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  ariaLabel,
}: BigButtonProps) {
  const baseClasses =
    "min-h-[60px] px-8 py-4 text-xl font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";

  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    success: "bg-green-500 text-white hover:bg-green-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}
