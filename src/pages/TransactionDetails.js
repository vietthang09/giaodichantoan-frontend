const TransactionDetails = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="lg:w-1/2 space-y-8 border p-4">
        <div className="space-y-4">
          <label>Đang giao dịch với</label>
          <input
            className="border w-full p-2 rounded"
            type="email"
            disabled
            value={"b@example.com"}
          />
        </div>
        <div className="space-y-4">
          <label>Được chi trả bởi</label>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6 p-8 border-2 rounded">
              <span>a@example.com</span>
            </div>
            <div className="col-span-12 lg:col-span-6 p-8 border-2 rounded">
              <span>b@example.com</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <label>Mức độ trung gian</label>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6 p-8 border-2 rounded">
              <span>Cơ bản</span>
            </div>
            <div className="col-span-12 lg:col-span-6 p-8 border-2 rounded">
              <span>Nâng cao</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <label>Các yêu cầu đề ra</label>
          <div className="flex items-center space-x-2">
            <span className="font-bold">1-</span>
            <textarea
              className="border w-full p-2 rounded"
              placeholder="Yêu cầu 1"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-bold">2-</span>
            <textarea
              className="border w-full p-2 rounded"
              placeholder="Yêu cầu 2"
            />
          </div>
        </div>

        <div className="space-y-4">
          <label>Giá trị đơn hàng</label>
          <input
            className="border w-full p-2 rounded"
            type="number"
            placeholder="Nhập giá trị đơn hàng"
          />
        </div>

        <div className="space-y-4">
          <label>Khi nào giao dịch kết thúc?</label>
          <input
            className="border w-full p-2 rounded"
            type="date"
            placeholder="Nhập giá trị đơn hàng"
          />
        </div>

        <button className="w-full bg-blue-400 text-white p-2 rounded hover:bg-blue-500">
          Xác nhận
        </button>
      </div>
    </div>
  );
};
export default TransactionDetails;
