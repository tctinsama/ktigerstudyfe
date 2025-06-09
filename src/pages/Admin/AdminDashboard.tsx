import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

export default function AdminDashboard() {
  return (
    <>
      <PageMeta title="Admin Dashboard" description="Admin dashboard" />
      <PageBreadcrumb pageTitle="Dashboard" />
      <div className="text-theme-base">Chào mừng tới trang quản trị</div>
    </>
  );
}
