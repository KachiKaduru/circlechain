export default function Container({ children, className }) {
  return <div className={`font-montserrat ${className}`}>{children}</div>;
}
