export default function Container({ children, className }) {
  return <div className={`font-montserrat ${className} max-w-7xl mx-auto`}>{children}</div>;
}
