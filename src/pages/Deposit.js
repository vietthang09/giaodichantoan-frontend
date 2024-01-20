import { useState } from "react";
import { toast } from "react-toastify";

import qrcode from "../assets/images/qrcode.png";
import GoogleRecaptcha from "../components/GoogleRecaptcha";

const Deposit = () => {
  const user = null;
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [amount, setAmount] = useState(0);
  const [history, setHistory] = useState([]);
  const [reload, setReload] = useState(false);

  const confirmHandler = () => {
    if (amount > 0) {
      const newDeposit = {
        Content: "WEBDAUGIA " + user.Username.toUpperCase(),
        Amount: amount,
      };
      // deposit(user.AccessToken, axiosJWT, newDeposit, toast, setReload);
    } else {
      toast("Hãy nhập số tiền đã nạp");
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleClick = () => {
    if (recaptchaValue) {
      confirmHandler();
    } else {
      toast("Hãy xác thực bạn không phải người máy");
    }
  };
  return (
    <div className="my-16 lg:w-1/2 p-2 mx-auto space-y-4 border rounded">
      <div className="lg:flex justify-between p-8">
        <div className="my-auto space-y-4">
          <img
            src="https://portal.vietcombank.com.vn/resources/no-image-news.jpg"
            className="w-40 object-cover"
          />
          <p>
            Người nhận: <span className="font-bold">LE VIET THANG</span>
          </p>
          <p>
            Nội dung chuyển khoản:{" "}
            <span className="font-bold">
              NAPTIEN {user?.Username.toUpperCase()}
            </span>
            <button
              onClick={(e) => {
                navigator.clipboard.writeText(
                  `NAPTIEN ${user?.Username.toUpperCase()}`
                );
                e.target.textContent = "Đã copy";
              }}
              className="ml-2 bg-gray-200 hover:bg-gray-300 p-2 text-sm font-bold rounded"
            >
              Copy
            </button>
          </p>
        </div>
        <div>
          <img src={qrcode} className="w-64 h-64 mx-auto" />
        </div>
      </div>
      <p className="font-bold text-center">
        <span className="text-red-500">*</span>Sau khi chuyển khoản thành công,
        bạn phải bấm nút ở dưới để xác nhận
      </p>
      <div className="flex justify-center">
        <GoogleRecaptcha onChange={handleRecaptchaChange} />
      </div>
      <div className="grid grid-cols-12 gap-2">
        <input
          className="col-span-8 w-full px-2 py-3 ring-slate-300 ring-1 focus:outline-none focus:ring-slate-600 rounded"
          type="number"
          placeholder="Nhập số tiền đã nạp"
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <button
          onClick={handleClick}
          className="text-xs lg:text-sm col-span-4 w-full mx-auto font-bold p-3 rounded text-white bg-yellow-400 hover:bg-yellow-500"
        >
          Xác nhận
        </button>
      </div>

      <h1 className="text-xl font-bold">Lịch sử nạp tiền</h1>
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
                    }).format(request.Amount)}
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
export default Deposit;
