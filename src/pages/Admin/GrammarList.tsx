import { useEffect, useState } from "react";
import axios from "axios";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../components/ui/table";

interface Grammar {
  id: number;
  level: string;
  content: string;
}

export default function GrammarList() {
  const [items, setItems] = useState<Grammar[]>([]);

  useEffect(() => {
    axios.get("/api/admin/grammar").then((res) => setItems(res.data));
  }, []);

  return (
    <>
      <PageMeta title="Grammar List" description="List grammar" />
      <PageBreadcrumb pageTitle="Danh sách ngữ pháp" />
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell isHeader className="px-5 py-3 text-theme-xs font-medium text-gray-500 dark:text-gray-400">Cấp độ</TableCell>
                <TableCell isHeader className="px-5 py-3 text-theme-xs font-medium text-gray-500 dark:text-gray-400">Nội dung</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {items.map((g) => (
                <TableRow key={g.id} className="hover:bg-gray-50 dark:hover:bg-white/5">
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-800 dark:text-white/90">{g.level}</TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">{g.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
