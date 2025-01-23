export default function Container({ children, className }) {
  return <div className={`font-montserrat ${className} max-w-7xl mx-auto px-5`}>{children}</div>;
}
