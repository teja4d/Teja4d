import React, { useEffect, useState } from "react";
import DeviceDetector from "device-detector-js";

import "./AboutYou.css";
import Headertext from "../../components/Headertext/Headertext";
export default function AboutYou({ itemClicked }) {
  const [userData, setUserdata] = useState({});
  const [batteryData, setBattery] = useState({});
  //const [isDataFetched, setFetchData] = useState(false);
  const device = new DeviceDetector().parse(window.navigator.userAgent);
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const connection = window.navigator.connection;
  const memory = window.navigator.deviceMemory;
  const height = window.innerHeight;
  const width = window.innerWidth;
  //const padding = width > 480 ? "10px 32px" : "10px 12px";
  const angle = window.screen.orientation.angle; //window.screen?.orientation?.angle
  const mode =
    window.screen.orientation.type.indexOf("landscape") > -1
      ? "landscape"
      : "portrait";
  //const referrer = window.document.referrer;
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        //.then(setFetchData(true))
        .then((data) => setUserdata(data));
    };
    fetchData();
    navigator.getBattery().then((data) => setBattery(data));
  }, []);

  //console.log(userData);

  //const paddingValue = window.innerWidth > 480 ? "32px 300px" : "90px 20px";

  return (
    <div className="aboutyou-container">
      <div className="aboutyou-wrapper" onClick={itemClicked}>
        <Headertext color="blue" size={42}>
          About You
        </Headertext>
        <div className="aboutyou-text">
          <p>
            Hi visitor, You seem to be accessing my website from the ip address
            📡 <span>{userData.ip}</span>, your internet service provider is{" "}
            <span>{userData.org}</span>
          </p>
          <p>
            I see that you are using a{" "}
            <span>
              {device.device.brand}&nbsp;{device.device.type}
            </span>
            &nbsp;💻&nbsp; specifically a{" "}
            <span>{device.client.name} browser 🌐</span>, which is on version 🚥
            <span>{device.client.version}</span>
          </p>
          <p>
            Your OS 💿 seems to be <span>{device.os.name}</span>, which is on
            version 🚥<span>{device.os.version}</span>&nbsp;having at least{" "}
            <span>{memory}GB</span> of RAM
          </p>
          <p>
            I sense that you are currently at &nbsp;🌎
            <span>{userData.latitude}&#176;</span> latitude and&nbsp;🌎
            <span>{userData.longitude}&#176;</span> longitude, which is around
            🗺️<span>{userData.city},</span>&nbsp;<span>{userData.region},</span>
            &nbsp;<span>{userData.country_name}</span> with the 🏙 zipcode{" "}
            <span>{userData.postal}</span>
          </p>
          <p>
            Your device's screen ↕️ height is <span>{height}</span>&nbsp;pixels
            and screen ↔️ width is <span>{width}</span>&nbsp;pixels, Your device
            is currently in the <span>{mode}</span>&nbsp;
            {mode === "landscape" ? "🖥" : "📱"}&nbsp;mode and seems to be tilted
            at a <span>{angle}&#176;</span>angle
          </p>

          <p>
            Your battery 🔋 seems to be having{" "}
            <span>{Math.round(batteryData.level * 100)}%</span>&nbsp;charge and
            is currently <span>{batteryData.charging ? "is 🔌" : "not"} </span>
            charging
          </p>
          <p>
            Your network speed 🏃🏾‍♂️ seems to be around{" "}
            <span>{connection.downlink}&nbsp;mbps ⚡️</span>&nbsp;which is
            effectively a&nbsp;<span>{connection.effectiveType}</span>
            &nbsp;connection 🔗
          </p>

          <p>
            Your browser/device is set to&nbsp;
            <span>{isDark ? "dark🌚" : "light🌞"} mode</span>&nbsp;
          </p>
        </div>
      </div>
    </div>
  );
}
