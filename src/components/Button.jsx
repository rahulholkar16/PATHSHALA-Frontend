const Button = ({ children, variant = "primary", className = "", ...props }) => {
    const baseClasses =
        "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em]";

    const variants = {
        primary: "bg-[#1179d4] text-slate-50",
        secondary: "bg-[#e7eef3] text-[#0d151b]",
    };

    return (
        <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
            <span className="truncate">{children}</span>
        </button>
    );
};

export default Button;
