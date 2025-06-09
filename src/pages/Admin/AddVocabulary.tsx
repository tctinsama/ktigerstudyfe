import { useState } from "react";
import axios from "axios";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

export default function AddVocabulary() {
  const [level, setLevel] = useState("");
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/admin/vocabulary", { level, word, meaning });
      setMessage("Đã thêm từ vựng");
      setWord("");
      setMeaning("");
    } catch (err) {
      setMessage("Thêm thất bại");
    }
  };

  return (
    <>
      <PageMeta title="Add Vocabulary" description="Add vocabulary" />
      <PageBreadcrumb pageTitle="Thêm từ vựng" />
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="Cấp độ"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="Từ vựng"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="Nghĩa"
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
        />
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Thêm</button>
        {message && <p className="text-sm text-gray-500">{message}</p>}
      </form>
    </>
  );
}
