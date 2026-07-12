export default function AuthLayout({ children }) {
  return (
    <main className="w-full min-h-dvh bg-white p-10 flex items-center">
      {children}
    </main>
  );
}
