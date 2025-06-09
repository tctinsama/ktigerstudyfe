import { useEffect, useState } from "react";
import axios from "axios";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../components/ui/table";

interface Vocab {
  id: number;
  word: string;
  meaning: string;
}

export default function VocabularyList() {
  const [items, setItems] = useState<Vocab[]>([]);

  useEffect(() => {
    axios.get("/api/admin/vocabulary").then((res) => setItems(res.data));
  }, []);

  return (
    <>
      <PageMeta title="Vocabulary List" description="List vocabulary" />
      <PageBreadcrumb pageTitle="Danh sách từ vựng" />
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell isHeader className="px-5 py-3 text-theme-xs font-medium text-gray-500 dark:text-gray-400">Từ vựng</TableCell>
                <TableCell isHeader className="px-5 py-3 text-theme-xs font-medium text-gray-500 dark:text-gray-400">Nghĩa</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {items.map((v) => (
                <TableRow key={v.id} className="hover:bg-gray-50 dark:hover:bg-white/5">
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-800 dark:text-white/90">{v.word}</TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">{v.meaning}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
