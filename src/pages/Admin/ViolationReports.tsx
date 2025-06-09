import { useEffect, useState } from "react";
import axios from "axios";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../components/ui/table";

interface Report {
  id: number;
  reporter: string;
  content: string;
}

export default function ViolationReports() {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    axios.get("/api/admin/reports").then((res) => setReports(res.data));
  }, []);

  return (
    <>
      <PageMeta title="Violation Reports" description="User reports" />
      <PageBreadcrumb pageTitle="Báo cáo vi phạm" />
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell isHeader className="px-5 py-3 text-theme-xs font-medium text-gray-500 dark:text-gray-400">Người báo cáo</TableCell>
                <TableCell isHeader className="px-5 py-3 text-theme-xs font-medium text-gray-500 dark:text-gray-400">Nội dung</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {reports.map((r) => (
                <TableRow key={r.id} className="hover:bg-gray-50 dark:hover:bg-white/5">
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-800 dark:text-white/90">{r.reporter}</TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">{r.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
