export default function FormCard({ heading, children }) {
  return (
    <div className="shadow-[0_0_5px_rgba(0,0,0,0.1)] p-4 rounded-md bg-white">
      <h2 className="text-gray-800 text font-bold mb-4">{heading}</h2>
      {children}
    </div>
  );
}
