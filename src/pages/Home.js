import { Link } from "react-router-dom";
import TransactionCard from "../components/TransactionCard";

const Home = () => {
  return (
    <div className="lg:py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-xl font-bold">Các giao dịch đang thực hiện</h1>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-3">
            <TransactionCard />
          </div>

          <div className="col-span-12 lg:col-span-3">
            <TransactionCard />
          </div>

          <div className="col-span-12 lg:col-span-3">
            <TransactionCard />
          </div>

          <div className="col-span-12 lg:col-span-3">
            <TransactionCard />
          </div>

          <div className="col-span-12 lg:col-span-3">
            <TransactionCard />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-xl font-bold">Tất cả giao dịch</h1>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-3">
            <TransactionCard />
          </div>

          <div className="col-span-12 lg:col-span-3">
            <TransactionCard />
          </div>

          <div className="col-span-12 lg:col-span-3">
            <TransactionCard />
          </div>

          <div className="col-span-12 lg:col-span-3">
            <TransactionCard />
          </div>

          <div className="col-span-12 lg:col-span-3">
            <TransactionCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
