import { useState } from "react";
import axios from "axios";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function FreezeLearner() {
  const [identifier, setIdentifier] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/admin/learners/freeze", { identifier });
      setMessage("Tài khoản đã được đóng băng");
    } catch (err) {
      setMessage("Đóng băng thất bại");
    }
  };

  return (
    <>
      <PageMeta title="Freeze Learner" description="Block learner account" />
      <PageBreadcrumb pageTitle="Đóng băng tài khoản" />
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
        <input
          type="text"
          className="w-full rounded border px-3 py-2"
          placeholder="Email hoặc ID"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
          Đóng băng
        </button>
        {message && <p className="text-sm text-gray-500">{message}</p>}
      </form>
    </>
  );
}
