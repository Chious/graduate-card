import "./index.css"
import pigeonstamp from './pigeon-stamp.svg'


import Image from "mui-image"

export default function Card(user, key) {

  const { name, grade, imgSrc, wish } = user

  return (<>
    <div className="card">
      <div className="card-content">
        <div className="stamp-section" style={{ display: "flex", flexDirection: "column" }}>
          <div className="main-image" >
            <Image
              src={imgSrc}
              height="305px"
              width="305px"
              duration={0}
            />
          </div>
          <img src={pigeonstamp} alt="" style={{ maxWidth: 100, position: "absolute", right: 70, top: 290, transform: "rotate(28deg)" }}></img>
        </div>
        <div className="sender-info" style={{ marginTop: 50 }}>
          <div className="sender-name" style={{ fontFamily: 'Inter', fontStyle: "normal", fontWeight: 600, fontSize: 32 }}>{name}</div>
          <div className="sender-grade" style={{ color: "gray", fontFamily: 'Inter', fontStyle: "normal", fontWeight: 600, fontSize: 20 }}>{grade}</div>
          <div className="wish-text" style={{
            width: 300, height: 150,
            color: "gray", fontFamily: 'Inter', fontStyle: "normal", fontWeight: 300, fontSize: 20,
            overflow: "hidden", textOverflow: "ellipsis"
          }}>{wish}</div>
        </div>
      </div>
    </div >


  </>
  )
}