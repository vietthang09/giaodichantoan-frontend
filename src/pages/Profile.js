import avatar from "../assets/images/avatar.png";

const Profile = () => {
  return (
    <div>
      <img src={avatar} className="ml-2 w-12 h-12 rounded-full" />
      <p>Tên: vietthang</p>
      <p>Email: vthcvn@gmail.com</p>
      <p>Uy tín: 100</p>
      <p>Đã thực hiện 100 giao dịch</p>
    </div>
  );
};
export default Profile;
