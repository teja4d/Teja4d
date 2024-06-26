import React, { useEffect, useState } from "react";
import DeviceDetector from "device-detector-js";
import { RiPsychotherapyFill } from "react-icons/ri";
import "./AboutYou.css";
import { Container, Spinner } from "react-bootstrap";

export default function AboutYou({ itemClicked }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [userData, setUserdata] = useState({});
  const [batteryData, setBattery] = useState({});
  const [fetchData, setFetch] = useState(false);
  //const [isDataFetched, setFetchData] = useState(false);
  const device = new DeviceDetector().parse(window.navigator.userAgent);
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const connection = window.navigator.connection;
  const memory = window.navigator.deviceMemory;
  const height = window.innerHeight;
  const width = window.innerWidth;
  //const padding = width > 480 ? "10px 32px" : "10px 12px";
  const angle = window.screen?.orientation?.angle; //window.screen?.orientation?.angle
  const mode =
    window.screen?.orientation?.type.indexOf("landscape") > -1
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

    setTimeout(() => setFetch(true), 2000);
  }, []);

  if (device.device.brand !== "Apple" && device.device.model !== "iPhone") {
    navigator.getBattery().then((data) => setBattery(data));
  }
  return (
    <Container className="text-center">
      <div onClick={itemClicked}>
        <h1 className="display-1 text-center" style={{ color: "#F2E3D5" }}>
          <RiPsychotherapyFill />
        </h1>
        <p className="text-center" style={{ color: "#F2E3D5" }}>
          About you
        </p>
        <div className="aboutyou-text">
          {fetchData ? (
            <>
              <p>
                Hi! visitor, You seem to be accessing my website from the ip
                address 📡 <span>{userData.ip}</span>, your internet service
                provider is <span>{userData.org}</span>
              </p>
              <p>
                I see that you are using a{" "}
                <span>
                  {device.device.brand}&nbsp;{device.device.type}
                </span>
                &nbsp;💻&nbsp; specifically a{" "}
                <span>{device.client.name} browser 🌐</span>, which is on
                version 🚥
                <span>{device.client.version}</span>
              </p>
              <p>
                Your OS 💿 seems to be <span>{device.os.name}</span>, which is
                on version 🚥<span>{device.os.version}</span>&nbsp;having at
                least <span>{memory}GB</span> of RAM
              </p>
              <p>
                I sense that you are currently at &nbsp;🌎
                <span>{userData.latitude}&#176;</span> latitude and&nbsp;🌎
                <span>{userData.longitude}&#176;</span> longitude, which is
                around 🗺️<span>{userData.city},</span>&nbsp;
                <span>{userData.region},</span>
                &nbsp;<span>{userData.country_name}</span> with the 🏙 zipcode{" "}
                <span>{userData.postal}</span>
              </p>
              <p>
                Your device's screen ↕️ height is <span>{height}</span>
                &nbsp;pixels and screen ↔️ width is <span>{width}</span>
                &nbsp;pixels, Your device is currently in the{" "}
                <span>{mode}</span>&nbsp;
                {mode === "landscape" ? "🖥" : "📱"}&nbsp;mode and seems to be
                tilted at a <span>{angle}&#176;</span>angle
              </p>
              {batteryData ? (
                <p>
                  Your battery 🔋 seems to be having{" "}
                  <span>{Math.round(batteryData.level * 100)}%</span>
                  &nbsp;charge and is currently{" "}
                  <span>{batteryData.charging ? "is 🔌" : "not"} </span>
                  charging
                </p>
              ) : (
                <p>
                  you might be using <span>Safari </span> browser,Unfortunately
                  I cannot fetch you <span>battery</span> data.Please use{" "}
                  <span>chrome</span> for more information
                </p>
              )}

              {connection ? (
                <p>
                  Your network speed 🏃🏾‍♂️ seems to be around{" "}
                  <span>{connection.downlink}&nbsp;mbps ⚡️</span>&nbsp;which is
                  effectively a&nbsp;<span>{connection.effectiveType}</span>
                  &nbsp;connection 🔗
                </p>
              ) : null}

              <p>
                Your browser/device is set to&nbsp;
                <span>{isDark ? "dark🌚" : "light🌞"} mode</span>&nbsp;
              </p>
            </>
          ) : (
            <Spinner animation="border" variant="info" />
          )}
        </div>
      </div>
    </Container>
  );
}
