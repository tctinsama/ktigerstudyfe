import { useEffect, useState } from "react";
import axios from "axios";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../components/ui/table";

interface XPRow {
  userId: number;
  fullName: string;
  xp: number;
  level: string;
}

export default function LearnerXP() {
  const [data, setData] = useState<XPRow[]>([]);

  useEffect(() => {
    axios.get("/api/admin/learners/xp").then((res) => setData(res.data));
  }, []);

  return (
    <>
      <PageMeta title="Learner XP" description="Experience points" />
      <PageBreadcrumb pageTitle="Điểm kinh nghiệm học viên" />
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell isHeader className="px-5 py-3 text-theme-xs font-medium text-gray-500 dark:text-gray-400">Học viên</TableCell>
                <TableCell isHeader className="px-5 py-3 text-theme-xs font-medium text-gray-500 dark:text-gray-400">XP</TableCell>
                <TableCell isHeader className="px-5 py-3 text-theme-xs font-medium text-gray-500 dark:text-gray-400">Cấp</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {data.map((row) => (
                <TableRow key={row.userId} className="hover:bg-gray-50 dark:hover:bg-white/5">
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-800 dark:text-white/90">{row.fullName}</TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">{row.xp}</TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">{row.level}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
