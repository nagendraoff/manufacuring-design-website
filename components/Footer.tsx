export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} ABC Manufacturing. All rights reserved.</p>
      </div>
    </footer>
  );
}
