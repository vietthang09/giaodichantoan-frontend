import { Link } from "react-router-dom";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const user = null;
  return (
    <div className="hidden lg:block p-16 border-t-2 divide-y">
      <div className="py-4 lg:flex justify-between">
        <div className="space-y-4">
          <h1 className="text-lg font-bold">Liên kết nhanh</h1>
          <ul className="space-y-4 text-gray-600">
            <li>
              <Link to={"/"}>Trang chủ</Link>
            </li>
            <li>
              <Link to={"/dang-bai"}>Đăng tin</Link>
            </li>
            <li>
              <Link to={"/bai-viet"}>Các bài đăng</Link>
            </li>
            <li>
              <Link to={`/nguoi-dung/${user?.Username}`}>Cá nhân</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h1 className="text-lg font-bold">Hướng dẫn</h1>
          <ul className="space-y-4 text-gray-600">
            <li>Nạp tiền</li>
            <li>Đăng tin</li>
            <li>Đấu giá</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h1 className="text-lg font-bold">Chính sách</h1>
          <ul className="space-y-4 text-gray-600">
            <li>Giới thiệu về BidRe</li>
            <li>Điều khoản</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h1 className="text-lg font-bold">Thanh toán</h1>
          <img
            src="https://portal.vietcombank.com.vn/resources/no-image-news.jpg"
            className="w-24 object-cover"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-lg font-bold">Liên hệ</h1>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center space-x-2">
              <EnvelopeIcon className="w-6" />
              <span>contact@deli.vn</span>
            </li>
            <li className="flex items-center space-x-2">
              <PhoneIcon className="w-6" />
              <span>0377196605</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-4 flex justify-between items-center">
        <Link to={"/"} className="font-bold text-xl">
          GIAODICHANTOAN
        </Link>
        <p className="text-sm">
          Sản phẩm thuộc <span className="font-bold">Deli Creations Studio</span>
        </p>
        <div className="flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
            className="w-6"
            alt="temp_img"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"
            className="w-6"
            alt="temp_img"
          />
          <img
            src="https://thesustainableangle.org/wp-content/uploads/2015/01/Stunning-Instagram-Logo-Vector-Free-Download-43-For-New-Logo-with-Instagram-Logo-Vector-Free-Download-1.png"
            className="w-6"
            alt="temp_img"
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
