const Login = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-1/4 space-y-8 border p-4">
        <h1 className="text-xl text-center">Đăng nhập không cần đăng ký!</h1>
        <input type="email" className="border w-full p-2 rounded" placeholder="Nhập email của bạn" />
        <button className="w-full bg-blue-400 text-white p-2 rounded hover:bg-blue-500">
          Xác nhận
        </button>
      </div>
    </div>
  );
};
export default Login;
