import "./HOMEHT.css";

function HOMEHT() {



    return (
        <>
        <div className="total">
          <nav className="relative-navbar">
            <div className="absolute brand-title font-space-mono text-2xl uppercase tracking-wide">
              <img src="../assets/newneb.png" alt="" className="shark1"></img>
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
                    <a href="https://www.twitter.com/nebulus_co">Twitter</a>
                  </li>
                  <li className="t-white">
                    <a href="https://www.instagram.com/nebulus.co/">Instagram</a>
                  </li>
                  <li className="t-white">
                    <a href="mailto:news@nebulus.co">Contact</a>
                  </li>
                  <li className="t-white">
                    <a href="https://calendly.com/nebulusnews">Schedule A Meeting</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          </nav>
        </div>
        
        <div className="stylo absolute text-white text-center" id="logo2">
          <div><h1  id="title" >
          <img src="../assets/l3.png" alt="" className="shark2"></img>
            </h1></div>
            <div> <p className="font-space-mono1 text-2xl uppercase tracking-wide" id="title" style={{ color: '#c934b0'}}>
            {" "}
            A Blockchain and Cryptocurrency News Aggregator
          </p></div>
<div /*className="button" */>
 

</div>
        </div>
      </>
      
    );
}

export default HOMEHT;


