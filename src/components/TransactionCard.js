import { Link } from "react-router-dom";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

const TransactionCard = () => {
  return (
    <div className="relative border p-4 rounded space-y-2">
      <p className="absolute bottom-1 right-1 p-1 flex items-center backdrop-blur-xl bg-white/80 rounded-full">
        <ShieldCheckIcon className="w-6 text-blue-600 drop-shadow-xl" />
      </p>
      <h1>Giao dịch với B</h1>
      <p>
        {`Trị giá: ${new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(1000000)}`}
      </p>
      <p>Kết thúc vào 01/01/2025</p>
      <Link
        to={"/giao-dich/0"}
        className="text-blue-400 font-bold rounded hover:text-blue-500"
      >
        Chi tiết
      </Link>
    </div>
  );
};
export default TransactionCard;
