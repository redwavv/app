import React from "react";
import "./Settings.css";
import { useState, useRef, useEffect } from "react";
import { Input } from "web3uikit";
import { defaultImgs } from "../defaultimgs";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const Settings = () => {

  const [selectedpfps, setSelectedPfps] = useState(defaultImgs[0]);
  const [thePFile, setThePFile] = useState();
  const inputFile = useRef(null);
  const inputFile2 = useRef(null);
  const [selectedFile, setSelectedFile] = useState(defaultImgs[1]);
  const [theFile, setTheFile] = useState();
  const [username, setUsername] = useState();
  const { Moralis, isAuthenticated, account } = useMoralis();
  const Web3Api = useMoralisWeb3Api();


  const resolveLink = (url) => {
    if (!url || !url.includes("ipfs://")) return url;
    return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
  };


    

  const onBannerClick = () => {
    inputFile.current.click();
  };

  const onPfpClick = () => {
    inputFile2.current.click();
  };

  const changeHandler = (event) => {
    
    const img = event.target.files[0];
    setTheFile(img);
    setSelectedFile(URL.createObjectURL(img));
  };

  const changeHandler2 = (event) => {
    
    const img = event.target.files[0];
    setThePFile(img);
    setSelectedPfps(URL.createObjectURL(img));
  };

  const saveEdits = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

 

    if (thePFile){
      const data = thePFile;
      const file = new Moralis.File(data.name, data);
      await file.saveIPFS();
      myDetails.set("pfpOption", file.ipfs());
    }

    if (username){
      myDetails.set("username", username);
    }

    if (theFile) {
      const data = theFile;
      const file = new Moralis.File(data.name, data);
      await file.saveIPFS();
      myDetails.set("bannerr", file.ipfs());
    }

    await myDetails.save();
    window.location.reload();
  }

  return (
    <>
      <div className="pageIdentify">Settings</div>
      <div className="settingsPage">
        <Input
          label="Username"
          name="NameChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setUsername(e.target.value)}
        />


        <div className="pfp">
          Profile Image 

          <div className="pfpOptions">
          <img
              src={selectedpfps}
              onClick={onPfpClick}
              className="pfpOption"
            ></img>
            <input
              type="file"
              name="file"
              ref={inputFile2}
              onChange={changeHandler2}
              style={{ display: "none" }}
              
              
            />
          </div>
        </div>

        <div className="pfp">
          Profile Banner
          <div className="pfpOptions">
            <img
              src={selectedFile}
              onClick={onBannerClick}
              className="bannerr"
            ></img>
            <input
              type="file"
              name="file"
              ref={inputFile}
              onChange={changeHandler}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <div className="save" onClick={() => saveEdits()}>
          Save
        </div>
      </div>
    </>
  );
};

export default Settings;
