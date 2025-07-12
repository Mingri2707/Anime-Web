import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, HomeClick } from "./Menu";
const animeType = [
  { label: "TV/Series" },
  { label: "Movie/OVA" },
  { label: "HH Trung Quốc" },
  { label: "Anime Sắp Chiếu" },
  { label: "Anime Đang Chiếu" },
  { label: "Anime Trọn Bộ" },
];

const topAnime = [
  { label: "Theo Ngày" },
  { label: "Theo Tháng" },
  { label: "Theo Năm" },
  { label: "Theo Mùa" },
  { label: "Yêu Thích" },
];
function Header() {
  return (
    <div className="p-4 bg-black flex items-center justify-center w-full h-[70px] ">
      {/* Header */}
      <div className="flex items-center space-x-4">
        {/* logo */}
        <a
          href="#"
          className="py-[12px] text-[30px] uppercase font-bold text-red-700"
        >
          Anime
        </a>
        {/* Điều hướng */}
        <nav className="flex items-center space-x-4 font-alata">
          {/* Nút home */}
          <HomeClick title="Trang Chủ" />
          {/* Menu Hover */}
          <Menu title="Dạng Anime" items={animeType} />
          <Menu title="Top Anime" items={topAnime} />
        </nav>
      </div>
    </div>
  );
}
export default Header;
