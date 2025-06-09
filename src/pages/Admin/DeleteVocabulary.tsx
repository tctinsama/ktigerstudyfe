import { useState } from "react";
import axios from "axios";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

export default function DeleteVocabulary() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.delete(`/api/admin/vocabulary/${id}`);
      setMessage("Đã xóa từ vựng");
    } catch (err) {
      setMessage("Xóa thất bại");
    }
  };

  return (
    <>
      <PageMeta title="Delete Vocabulary" description="Delete vocabulary" />
      <PageBreadcrumb pageTitle="Xóa từ vựng" />
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="ID từ vựng"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit" className="rounded bg-red-600 px-4 py-2 text-white">Xóa</button>
        {message && <p className="text-sm text-gray-500">{message}</p>}
      </form>
    </>
  );
}
