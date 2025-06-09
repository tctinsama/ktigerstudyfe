import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import UserInfoOne from "../../components/tables/BasicTables/UserInfoOne";

export default function ViewLearners() {
  return (
    <>
      <PageMeta title="Learner List" description="View all learners" />
      <PageBreadcrumb pageTitle="Danh sách học viên" />
      <div className="space-y-6">
        <ComponentCard title="Bảng học viên">
          <UserInfoOne />
        </ComponentCard>
      </div>
    </>
  );
}
