import { useEffect, useState } from "react";
import axios from "axios";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../components/ui/table";

interface Level {
  id: number;
  name: string;
  requiredXP: number;
}

export default function LearnerLevels() {
  const [levels, setLevels] = useState<Level[]>([]);

  useEffect(() => {
    axios.get("/api/admin/levels").then((res) => setLevels(res.data));
  }, []);

  return (
    <>
      <PageMeta title="Learner Levels" description="Levels" />
      <PageBreadcrumb pageTitle="Các cấp độ" />
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell isHeader className="px-5 py-3 text-theme-xs font-medium text-gray-500 dark:text-gray-400">Cấp độ</TableCell>
                <TableCell isHeader className="px-5 py-3 text-theme-xs font-medium text-gray-500 dark:text-gray-400">XP yêu cầu</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {levels.map((lv) => (
                <TableRow key={lv.id} className="hover:bg-gray-50 dark:hover:bg-white/5">
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-800 dark:text-white/90">{lv.name}</TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">{lv.requiredXP}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
