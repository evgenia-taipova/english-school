function TopBg({ backgroundUrl, top = "0px" }) {
  return (
    <>
      <div
        className="bg__image"
        style={{ backgroundImage: `url(${backgroundUrl})`, top: top }}
      ></div>
      <div className="bg__footer"></div>
      <div className="bg__section"></div>
      <div className="bg__left">
        <div className="bg__left-gradient"></div>
        <div className="bg__left-image"></div>
      </div>
    </>
  );
}
export default TopBg;
