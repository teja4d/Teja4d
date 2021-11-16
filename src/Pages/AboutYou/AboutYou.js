import React, { useEffect, useState } from 'react'
import DeviceDetector from 'device-detector-js'
export default function AboutYou() {
    let  [userData,setUserdata] = useState({})
    const device = new DeviceDetector().parse(window.navigator.userAgent)
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const connection = window.navigator.connection
    const memory = window.navigator.deviceMemory
    const height = window.innerHeight
    const width = window.innerWidth
    const angle = window.screen?.orientation?.angle
    const mode = window.screen?.orientation?.type?.indexOf('landscape') > -1 ? 'landscape' : 'portrait'
    const referrer = window.document.referrer
    useEffect(()=>{
        fetch('https://ipapi.co/json/')
    .then(res => res.json()).
    then(data => {
      setUserdata({ ...data,device,connection, memory, height, width, angle, mode, darkMode: isDark, referrer })
    })
    },[])
    console.log(userData)
    return (
        <div>
             
            <p>Hi visitor, You seem to be accessing my website from the ip address 📡 <i>{userData.ip}</i>, your internet service provider is <i>{userData.org}</i></p>
       
          {/*<h1><p>I see that you are using a <i>{userData.device.brand}&nbsp;{userData.device.type}</i>&nbsp;💻&nbsp;specifically a <i>{userData.client.name}</i> browser 🌐 , which is on version 🚥<i>{userData.client.version}</i></p>
       <p>Your OS 💿 seems to be <i>{userData.os.name}</i>, which is on version 🚥<i>{userData.os.version}</i>&nbsp;<span>having at least <i>{userData.memory}GB</i> of RAM</span></p>
        <p>I sense that you are currently at &nbsp;🌎<i>{userData.latitude}&#176;</i> latitude and&nbsp;🌎<i>{userData.longitude}&#176;</i> longitude, which is around 🗺️<i>{userData.city},</i>&nbsp;<i>{userData.region},</i>&nbsp;<i>{userData.country_name}</i><span> with the 🏙 zipcode <i>{userData.postal}</i></span></p>
        <p>Your device's screen ↕️ height is <i>{userData.height}</i>&nbsp;pixels and screen ↔️ width is <i>{userData.width}</i>&nbsp;pixels, <span > Your device is currently in the <i>{userData.mode}</i>&nbsp;{userData.mode === 'landscape' ? '🖥' : '📱'}&nbsp;mode</span><span v-if="userData.angle"> and seems to be tilted at a <i>{userData.angle}&#176;</i>angle</span></p>
        <p >
          Your device's current orientation is x:&nbsp;<i>{userData.orientation.alpha}</i>&nbsp;y:&nbsp;<i>{userData.orientation.beta}</i>&nbsp;z:&nbsp;<i>{userData.orientation.gamma}</i>
        </p>
        <p>
          <span>Your battery 🔋 seems to be having <i>{Math.round(userData.battery.level*100)}%</i>&nbsp;charge and is currently 🔌&nbsp;<i><span >not&nbsp;</span>charging</i></span>
        </p>
        <p >
          <span>Your network speed 🏃🏾‍♂️ seems to be around <i>{userData.connection.downlink}&nbsp;mbps ⚡️</i>&nbsp;which is effectively a&nbsp;<i>{userData.connection.effectiveType}</i>&nbsp;connection 🔗</span>
        </p>
        <p >
          <span>You seem to have arrived here from the website  📣 <i>{userData.referrer}</i>&nbsp;</span>
        </p>
        <p >
          <span>You seem to have the following content copied in your clipboard 📋 "<i class="ellipsis">{userData.clipboard}</i>"&nbsp;</span>
        </p>
        <p>Your browser / device is set to&nbsp;<i>{userData.darkMode ? 'dark' : 'light'}</i>&nbsp;{userData.darkMode ? '🌚' : '🌞'}&nbsp;mode</p>
            </h1> */}
        </div>
    )
}
