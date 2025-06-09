import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./user/pages/AuthPages/SignIn";
import SignUp from "./user/pages/AuthPages/SignUp";
import NotFound from "./admin/pages/OtherPage/NotFound";
import UserProfiles from "./admin/pages/UserProfiles";
import Videos from "./admin/pages/UiElements/Videos";
import Images from "./admin/pages/UiElements/Images";
import Alerts from "./admin/pages/UiElements/Alerts";
import Badges from "./admin/pages/UiElements/Badges";
import Avatars from "./admin/pages/UiElements/Avatars";
import Buttons from "./admin/pages/UiElements/Buttons";
import LineChart from "./admin/pages/Charts/LineChart";
import BarChart from "./admin/pages/Charts/BarChart";
import Calendar from "./admin/pages/Calendar";
import BasicTables from "./admin/pages/Tables/BasicTables";
import FormElements from "./admin/pages/Forms/FormElements";
import Blank from "./admin/pages/Blank";
import AdminLayout from "./admin/layout/AdminLayout";
import UserLayout from "./user/layout/UserLayout";
import { ScrollToTop } from "./admin/components/common/ScrollToTop";
import Home from "./admin/pages/Dashboard/Home";
import UserInformationTable from "./admin/pages/Tables/UserInformationTable";
import StudenProcessTables from "./admin/pages/Tables/StudenProcessTables";
import UserHome from "./user/pages/User/Home";


export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Admin Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />
            <Route path="/userinfo-table" element={<UserInformationTable />} />
            <Route path="/studentprocess-table" element={<StudenProcessTables />} />


            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
          <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* User Layout */}
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<UserHome />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
