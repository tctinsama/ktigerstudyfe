import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
// Admin pages
import FreezeLearner from "./pages/Admin/FreezeLearner";
import UnfreezeLearner from "./pages/Admin/UnfreezeLearner";
import SearchLearner from "./pages/Admin/SearchLearner";
import ViewLearners from "./pages/Admin/ViewLearners";
import DeleteMaterial from "./pages/Admin/DeleteMaterial";
import ViolationReports from "./pages/Admin/ViolationReports";
import LearnerXP from "./pages/Admin/LearnerXP";
import LearnerLevels from "./pages/Admin/LearnerLevels";
import SystemStats from "./pages/Admin/SystemStats";
import AddGrammar from "./pages/Admin/AddGrammar";
import DeleteGrammar from "./pages/Admin/DeleteGrammar";
import EditGrammar from "./pages/Admin/EditGrammar";
import AddVocabulary from "./pages/Admin/AddVocabulary";
import DeleteVocabulary from "./pages/Admin/DeleteVocabulary";
import EditVocabulary from "./pages/Admin/EditVocabulary";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import UserInformationTable from "./pages/Tables/UserInformationTable";
import StudenProcessTables from "./pages/Tables/StudenProcessTables";


export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

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

            {/* Admin Learner Management */}
            <Route path="/admin/freeze" element={<FreezeLearner />} />
            <Route path="/admin/unfreeze" element={<UnfreezeLearner />} />
            <Route path="/admin/search" element={<SearchLearner />} />
            <Route path="/admin/learners" element={<ViewLearners />} />
            <Route path="/admin/delete-material" element={<DeleteMaterial />} />
            <Route path="/admin/reports" element={<ViolationReports />} />
            <Route path="/admin/xp" element={<LearnerXP />} />
            <Route path="/admin/levels" element={<LearnerLevels />} />
            <Route path="/admin/stats" element={<SystemStats />} />
            <Route path="/admin/grammar/add" element={<AddGrammar />} />
            <Route path="/admin/grammar/delete" element={<DeleteGrammar />} />
            <Route path="/admin/grammar/edit" element={<EditGrammar />} />
            <Route path="/admin/vocabulary/add" element={<AddVocabulary />} />
            <Route path="/admin/vocabulary/delete" element={<DeleteVocabulary />} />
            <Route path="/admin/vocabulary/edit" element={<EditVocabulary />} />


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
