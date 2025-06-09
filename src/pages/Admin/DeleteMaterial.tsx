import { useState } from "react";
import axios from "axios";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

export default function DeleteMaterial() {
  const [materialId, setMaterialId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.delete(`/api/admin/materials/${materialId}`);
      setMessage("Đã xóa tài liệu");
    } catch (err) {
      setMessage("Xóa thất bại");
    }
  };

  return (
    <>
      <PageMeta title="Delete Material" description="Delete learning material" />
      <PageBreadcrumb pageTitle="Xóa tài liệu vi phạm" />
      <form onSubmit={handleDelete} className="space-y-4 max-w-sm">
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="ID tài liệu"
          value={materialId}
          onChange={(e) => setMaterialId(e.target.value)}
        />
        <button type="submit" className="rounded bg-red-600 px-4 py-2 text-white">
          Xóa
        </button>
        {message && <p className="text-sm text-gray-500">{message}</p>}
      </form>
    </>
  );
}
