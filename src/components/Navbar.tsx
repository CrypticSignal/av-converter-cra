import gitHubLogo from "../images/GitHub-Mark-Light-32px.png";

const Navbar = () => {
  return (
    <div id="links" className="top">
      <a href="https://github.com/CrypticSignal/av-converter" id="github_link">
        <img src={gitHubLogo} alt="github logo" />
      </a>
    </div>
  );
};

export default Navbar;
