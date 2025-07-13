import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, HomeClick } from "./Menu";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
const categoryAnime = [
  { label: "Action" },
  { label: "Adventure" },
  { label: "Cartoon" },
  { label: "Comedy" },
  { label: "Dementia" },
  { label: "Demons" },
  { label: "Drama" },
  { label: "Ecchi" },
  { label: "Fantasy" },
  { label: "Game" },
  { label: "Harem" },
  { label: "Historical" },
  { label: "Horror" },
  { label: "Josei" },
  { label: "Kids" },
  { label: "Live Action" },
  { label: "Magic" },
  { label: "Martial Arts" },
  { label: "Mecha" },
  { label: "Military" },
  { label: "Music" },
  { label: "Mystery" },
  { label: "Parody" },
  { label: "Police" },
  { label: "Psychological" },
  { label: "Romance" },
  { label: "Samurai" },
  { label: "School" },
  { label: "Sci-Fi" },
  { label: "Seinen" },
  { label: "Shoujo" },
  { label: "Shoujo Ai" },
  { label: "Shounen" },
  { label: "Shounen Ai" },
  { label: "Slice of Life" },
  { label: "Space" },
  { label: "Sports" },
  { label: "Super Power" },
  { label: "Supernatural" },
  { label: "Suspense" },
  { label: "Thriller" },
  { label: "Tokusatsu" },
  { label: "Vampire" },
  { label: "Yaoi" },
  { label: "Yuri" },
];
function Header() {
  return (
    <div className="p-4 bg-black flex items-center justify-center w-full h-[70px] sticky top-0 z-50">
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
          <Menu title="Thể loại" items={categoryAnime} />
          {/* Nút điều hướng tương tự home*/}
          <HomeClick title="Thư viện" />
          <HomeClick title="Lịch chiếu" />
          {/* Phần Search */}
          <div className="relative space-x-4">
            {/* Icon kính lúp */}
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400 "
            />

            <input
              type="text"
              className="w-[230px] h-[30px] pl-9 text-[13px] bg-black text-white 
               border border-gray-700 placeholder:text-gray-400 
            focus:placeholder:text-white focus:outline-none"
              placeholder="Tìm: tên tiếng nhật, anh, việt"
            />
            <button className="p-2 bg-red-700 text-white w-[100px] rounded text-[13px] hover:bg-gray-600">
              Tìm Kiếm
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Header;
