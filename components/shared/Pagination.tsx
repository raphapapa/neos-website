import Link from "next/link";
import type { Pagination as PaginationType } from "@/lib/types";

export default function Pagination({
  pagination,
  basePath,
}: {
  pagination: PaginationType;
  basePath: string;
}) {
  if (pagination.totalPages <= 1) return null;

  const pages = Array.from({ length: pagination.totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center gap-2 mt-12">
      {pages.map((page) => (
        <Link
          key={page}
          href={page === 1 ? basePath : `${basePath}?page=${page}`}
          className={`w-10 h-10 rounded flex items-center justify-center text-sm transition-all ${
            page === pagination.page
              ? "bg-neos-red text-white"
              : "bg-white/5 text-neos-gray hover:bg-white/10 hover:text-white"
          }`}
        >
          {page}
        </Link>
      ))}
    </nav>
  );
}
