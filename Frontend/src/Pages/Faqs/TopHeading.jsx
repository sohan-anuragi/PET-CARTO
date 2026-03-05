import { Link } from "react-router-dom";

export default function TopHeading() {
  return (
    <section className="w-full bg-gray-100 py-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 text-center">
        <div className="flex items-center gap-2 text-1xl font-medium text-gray-900">
          <Link to="/" className="transition-colors hover:text-red-500">
            Home
          </Link>
          <span>/</span>
          <span>FAQs</span>
        </div>
        <h1 className="mt-1 text-4xl font-[500] text-gray-900">FAQs</h1>
      </div>
    </section>
  );
}
