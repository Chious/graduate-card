
import "./index.css"
import "./wish.css"
import { Avatar } from "@mui/material"
import Image from 'mui-image'

export default function Card({ user, key }) {
  const { name, grade, imgSrc, wish } = user
  var FindFirst = function FindFirst(){
    var first_name =name[0]
    return(first_name)}
  var {firstname} = FindFirst()
  return (<>
<div className="card3">
  <div className="card-content">
    <div className="card-wish">
      <div className="wish">
        <div className="time" />
        <div className="Picture" >
          <Image 
            src={imgSrc}
            height = "305px"
            width = "305px"
            duration = {0}
          />
        </div>
        <div className="wish-text">{wish}</div>
      </div>
    </div>
    <div className="sender-info">
      <div className="group">
        <div className="sender-name">{name}</div>
        <div className="sender-grade">{grade}</div>
        <div className="Avator"><Avatar
          sx={{ width: 68, height: 68 , fontSize : 40}}
        >H</Avatar></div>
      </div>
    </div>
  </div>
</div>

</>
  )
}