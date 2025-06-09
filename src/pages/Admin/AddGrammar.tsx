import { useState } from "react";
import axios from "axios";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

export default function AddGrammar() {
  const [level, setLevel] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/admin/grammar", { level, content });
      setMessage("Đã thêm ngữ pháp");
      setContent("");
    } catch (err) {
      setMessage("Thêm thất bại");
    }
  };

  return (
    <>
      <PageMeta title="Add Grammar" description="Add grammar" />
      <PageBreadcrumb pageTitle="Thêm ngữ pháp" />
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="Cấp độ"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <textarea
          className="w-full rounded border px-3 py-2"
          placeholder="Nội dung"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Thêm</button>
        {message && <p className="text-sm text-gray-500">{message}</p>}
      </form>
    </>
  );
}
