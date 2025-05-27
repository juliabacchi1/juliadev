const Button = ({ children, onClick, className = "", href, ...props }) => {
  const baseClasses = "font-medium px-7 py-3 rounded-full shadow transition";

  return href ? (
    <a href={href} className={`${baseClasses} ${className}`} {...props}>
      {children}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
