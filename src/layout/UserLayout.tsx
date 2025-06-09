import Header from "../components/header/Header";
import { Outlet } from "react-router";

const UserLayout: React.FC = () => {
  const handleToggle = () => {};
  return (
    <div className="min-h-screen">
      <Header onToggle={handleToggle} />
      <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
