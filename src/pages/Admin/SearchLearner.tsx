import { useState } from "react";
import axios from "axios";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

interface Learner {
  userId: number;
  fullName: string;
  email: string;
}

export default function SearchLearner() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<Learner[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await axios.get(`/api/admin/learners/search?keyword=${keyword}`);
    setResults(res.data);
  };

  return (
    <>
      <PageMeta title="Search Learner" description="Search learner" />
      <PageBreadcrumb pageTitle="Tìm kiếm học viên" />
      <form onSubmit={handleSearch} className="space-y-4 max-w-sm mb-6">
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="Tên hoặc Email"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
          Tìm kiếm
        </button>
      </form>
      {results.length > 0 && (
        <ul className="space-y-2">
          {results.map((l) => (
            <li key={l.userId} className="border-b pb-1">
              {l.fullName} ({l.email})
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
