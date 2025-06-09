import { useState } from "react";
import axios from "axios";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

export default function EditGrammar() {
  const [id, setId] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/api/admin/grammar/${id}`, { content });
      setMessage("Đã cập nhật");
    } catch (err) {
      setMessage("Cập nhật thất bại");
    }
  };

  return (
    <>
      <PageMeta title="Edit Grammar" description="Edit grammar" />
      <PageBreadcrumb pageTitle="Chỉnh sửa ngữ pháp" />
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="ID ngữ pháp"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <textarea
          className="w-full rounded border px-3 py-2"
          placeholder="Nội dung"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Lưu</button>
        {message && <p className="text-sm text-gray-500">{message}</p>}
      </form>
    </>
  );
}
