import { useState } from "react"
import "./index.css"
import pigeonstamp from './pigeon-stamp.svg'

import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

import Image from "mui-image"
import { Typography } from "@mui/material"



export default function Card({ user }) {

  const { name, grade, imgSrc, wish } = user

  const [inside, setInside] = useState(false)

  function Outside() {
    return (<>
      <div className="stamp-section" style={{ display: "flex", flexDirection: "column" }}>
        <div className="main-image" >
          <Image
            src={imgSrc}
            height="305px"
            width="305px"
            duration={0}
            style={{ position: "relative", top: 25 }}
          />
        </div>
        <img src={pigeonstamp} alt="" style={{ maxWidth: 100, position: "absolute", right: 70, top: 310, transform: "rotate(28deg)" }}></img>
      </div>
      <div className="sender-info" style={{ marginTop: 50 }}>
        <div className="sender-name" style={{ fontFamily: 'Inter', fontStyle: "normal", fontWeight: 600, fontSize: 32 }}>{name}</div>
        <div className="sender-grade" style={{ color: "gray", fontFamily: 'Inter', fontStyle: "normal", fontWeight: 600, fontSize: 20 }}>{grade}</div>
        <button className="wish-text" style={{
          width: 300, height: 150,
          color: "gray", fontFamily: 'Inter', fontStyle: "normal", fontWeight: 300, fontSize: 20,
          overflow: "hidden", textOverflow: "ellipsis"
        }}
          onClick={function (e) {
            e.preventDefault();
            setInside(true)
          }}>{wish}</button>
      </div>
    </>)
  }

  function Inside() {
    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
      width: 62,
      height: 34,
      padding: 7,
      '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
          color: '#fff',
          transform: 'translateX(22px)',
          '& .MuiSwitch-thumb:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
          },
          '& + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
          },
        },
      },
      '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
      },
      '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
      },
    }));

    const [view, setView] = useState("text")

    const showtext = function (e) {
      if (e.target.checked) {
        setView("text")
      } else {
        setView("picture")
      }
    }

    return (<>
      <div className="stamp-section" style={{ display: "flex", flexDirection: "column" }}>
        <Image
          src={imgSrc}
          height="653px"
          width="386px"
          duration={0}
          style={{ position: "relative" }}
        />
        {(view === "text") ? <Typography color={"white"} sx={{ zIndex: 1, position: "absolute", width: 300, top: 200, right: 75 }}>{wish}</Typography> : ""}

        <FormControlLabel
          sx={{ zIndex: 1, position: "absolute", bottom: 100, right: 150, color: "white" }}
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          onChange={showtext}
          label="顯示圖片"
        />


        {(view === "text") ? <div className="background" style={{ height: 653, width: 386, background: "#0e0d0d96", position: "absolute" }}></div> : ""}
      </div>
    </>)
  }

  return (<>
    <div className="card">
      <div className="card-content">
        {(inside == true) ? <Inside /> : <Outside />}
      </div>
    </div >


  </>
  )
}