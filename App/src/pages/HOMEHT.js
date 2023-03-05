import "./HOMEHT.css";
import image1 from "../assets/redwav-worded-logo-site-1.png";
import image2 from "../assets/redwav-main-logo-site-1.png";
function HOMEHT() {
  return (
    <>
      <div className="total">
        <nav className="relative-navbar">
          <div className="absolute brand-title font-space-mono text-2xl uppercase tracking-wide">
            <img src={image1} alt="" className="shark1"></img>
          </div>
          <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
              <div />
            </div>
            <div className="menu">
              <div>
                <div>
                  <ul>
                    <li className="t-red">
                      <a href="">About</a>
                    </li>
                    <li className="t-white">
                      <a href="https://www.twitter.com/redwavio">Twitter</a>
                    </li>
                    <li className="t-white">
                      <a href="https://www.instagram.com/redwav.io/">
                        Instagram
                      </a>
                    </li>
                    <li className="t-white">
                      <a href="mailto:ceo@redwav.io">Contact</a>
                    </li>
                    <li className="t-white">
                      <a href="https://calendly.com/redwav">
                        Schedule A Meeting
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="stylo absolute text-white text-center" id="logo2">
        <div>
          <h1 id="title">
            <img src={image2} alt="" className="shark2"></img>
          </h1>
        </div>
        <div>
          {" "}
          <p
            className="font-space-mono1 text-2xl uppercase tracking-wide"
            id="title"
            style={{ color: "#ffffff" }}
          >
            {" "}
            A Metaverse Experience
          </p>
        </div>
        <div>
          <button className="enter-button" type="button">
            Enter
          </button>
        </div>
      </div>
    </>
  );
}

export default HOMEHT;
