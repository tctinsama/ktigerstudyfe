import { useEffect, useState } from "react";
import axios from "axios";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

interface Stats {
  totalUsers: number;
  newSignups: number;
  inactiveUsers: number;
}

export default function SystemStats() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    axios.get("/api/admin/stats").then((res) => setStats(res.data));
  }, []);

  return (
    <>
      <PageMeta title="Statistics" description="System stats" />
      <PageBreadcrumb pageTitle="Thống kê hệ thống" />
      {stats ? (
        <ul className="space-y-2 text-theme-sm">
          <li>Tổng người dùng: {stats.totalUsers}</li>
          <li>Đăng ký mới: {stats.newSignups}</li>
          <li>Người dùng không hoạt động: {stats.inactiveUsers}</li>
        </ul>
      ) : (
        <p>Đang tải...</p>
      )}
    </>
  );
}
