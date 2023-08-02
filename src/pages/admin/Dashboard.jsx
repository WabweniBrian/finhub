import RecentTransactions from "../../components/admin/home/RecentTransactions";
import Cards from "../../components/admin/home/Cards";
import BarChart from "../../components/admin/home/BarChart";
import PopularPackages from "../../components/admin/home/PopularPackages";

const AdminDashboard = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
      <Cards />
      <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <BarChart />
        </div>
        <div className="lg:col-span-1 h-fit sticky top-0">
          <PopularPackages />
        </div>
      </div>
      <div className="mt-5 card">
        <div className="mt-4">
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
