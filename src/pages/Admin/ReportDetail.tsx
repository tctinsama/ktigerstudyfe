import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

interface Report {
  id: number;
  reporter: string;
  content: string;
}

export default function ReportDetail() {
  const { id } = useParams<{ id: string }>();
  const [report, setReport] = useState<Report | null>(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/admin/reports/${id}`).then((res) => setReport(res.data));
    }
  }, [id]);

  if (!report) return <p>Đang tải...</p>;

  return (
    <>
      <PageMeta title="Report Detail" description="Report detail" />
      <PageBreadcrumb pageTitle="Chi tiết báo cáo" />
      <div className="space-y-2 text-theme-base">
        <div><strong>Người báo cáo:</strong> {report.reporter}</div>
        <div><strong>Nội dung:</strong> {report.content}</div>
      </div>
    </>
  );
}
