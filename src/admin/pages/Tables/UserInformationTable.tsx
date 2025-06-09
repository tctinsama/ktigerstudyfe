import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import UserInfoOne from "../../components/tables/BasicTables/UserInfoOne";

export default function UserInformationTable() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Quản lí thông tin học viên " />
      <div className="space-y-6">
        <ComponentCard title="Bảng quản lí thông tin học viên">
          <UserInfoOne />
        </ComponentCard>
      </div>
    </>
  );
}
