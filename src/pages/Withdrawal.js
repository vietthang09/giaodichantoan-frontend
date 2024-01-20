import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import GoogleRecaptcha from "../components/GoogleRecaptcha";

const WithDrawal = () => {
  const user = null;

  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [amount, setAmount] = useState(0);
  const [reload, setReload] = useState(false);
  const [history, setHistory] = useState([]);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const confirmHandler = () => {
    if (amount > 0 && amount % 1000 == 0) {
      const newWithDrawal = {
        Content: "WEBDAUGIA " + user.Username.toUpperCase(),
        Amount: -amount,
      };
      //   withdrawal(user.AccessToken, axiosJWT, newWithDrawal, toast, setReload);
    } else {
      toast("Số tiền muốn rút phải là bội của 1.000đ");
    }
  };

  const handleClick = () => {
    if (recaptchaValue) {
      confirmHandler();
    } else {
      toast("Hãy xác thực bạn không phải người máy");
    }
  };

  return (
    <div className="my-16 lg:w-1/2 mx-auto space-y-4 border rounded p-2">
      <div className="flex justify-center py-4">
        <input
          className="w-56 px-2 py-3 ring-slate-300 ring-2 focus:outline-none focus:ring-slate-600 rounded"
          type="number"
          placeholder="Nhập số tiền muốn rút"
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
      </div>
      <p className="font-bold text-center">
        <span className="text-red-500">*</span>Số tiền muốn phút phải là bội của
        1.000đ
      </p>
      <div className="lg:flex justify-center items-center space-x-8">
        <GoogleRecaptcha onChange={handleRecaptchaChange} />
        <button
          onClick={handleClick}
          className="w-56 h-12 font-bold rounded text-white bg-yellow-400 hover:bg-yellow-500"
        >
          Xác nhận
        </button>
      </div>

      <h1 className="text-xl font-bold">Lịch sử rút tiền</h1>
      <table className="w-full table-auto text-left">
        <thead>
          <tr>
            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <p className="block antialiased font-sans text-xs lg:text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                Nội dung
              </p>
            </th>
            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <p className="block antialiased font-sans text-xs lg:text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                Số tiền
              </p>
            </th>
            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <p className="block antialiased font-sans text-xs lg:text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                Thời gian yêu cầu
              </p>
            </th>
            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <p className="block antialiased font-sans text-xs lg:text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                Trạng thái
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {history?.map((request, index) => {
            return (
              <tr key={index}>
                <td className="lg:p-4 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs lg:text-sm leading-normal text-blue-gray-900 font-normal">
                    {request.Content}
                  </p>
                </td>
                <td className="lg:p-4 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs lg:text-sm leading-normal text-blue-gray-900 font-normal">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(-request.Amount)}
                  </p>
                </td>
                <td className="lg:p-4 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs lg:text-sm leading-normal text-blue-gray-900 font-normal">
                    {new Date(request.CreatedAt).toLocaleString()}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <span
                    className={`p-1 ${
                      request.Status === "success"
                        ? "text-green-400"
                        : "text-red-400"
                    } text-xs font-bold leading-normal font-bold rounded `}
                  >
                    {request.Status === "success"}
                    {request.Status === "success" ? "Đã duyệt" : "Đợi duyệt"}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default WithDrawal;
