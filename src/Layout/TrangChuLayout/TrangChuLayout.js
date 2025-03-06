import BangGame from "./BangGame/BangGame";
import Carousel from "./Carousel/Carousel";
import FooterTrangChu from "./FooterTrangChu/FooterTrangChu";
import "./TrangChuLayout.scss";
import Wallet from "./Wallet/Wallet";
function TrangChuLayout() {
  return (
    <div className="trangchu_container">
      <Carousel />
      <div className="marquee-container">
        <div style={{ backgroundColor: "white", zIndex: 1000 }}>
          <img
            src="../assets/images/loa.png"
            alt=""
            style={{ height: "30px" }}
          />
        </div>
        <div className="marquee">
          <span>
            ♥ AE8 - Thách thức mọi giới hạn. Uy tín bảo mật, cược thả ga. ♥ Hoa
            hồng cực lớn. ♥ Nạp rút tự động siêu tốc.♥
          </span>
        </div>
      </div>
      <Wallet/>
      <BangGame/>
      <FooterTrangChu/>
    </div>
  );
}
export default TrangChuLayout;
