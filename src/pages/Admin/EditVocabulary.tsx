import { useState } from "react";
import axios from "axios";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

export default function EditVocabulary() {
  const [id, setId] = useState("");
  const [meaning, setMeaning] = useState("");
  const [pronunciation, setPronunciation] = useState("");
  const [example, setExample] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/api/admin/vocabulary/${id}`, {
        meaning,
        pronunciation,
        example,
      });
      setMessage("Đã cập nhật");
    } catch (err) {
      setMessage("Cập nhật thất bại");
    }
  };

  return (
    <>
      <PageMeta title="Edit Vocabulary" description="Edit vocabulary" />
      <PageBreadcrumb pageTitle="Chỉnh sửa từ vựng" />
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="ID từ vựng"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="Nghĩa"
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
        />
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="Phát âm"
          value={pronunciation}
          onChange={(e) => setPronunciation(e.target.value)}
        />
        <textarea
          className="w-full rounded border px-3 py-2"
          placeholder="Ví dụ"
          value={example}
          onChange={(e) => setExample(e.target.value)}
        />
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Lưu</button>
        {message && <p className="text-sm text-gray-500">{message}</p>}
      </form>
    </>
  );
}
