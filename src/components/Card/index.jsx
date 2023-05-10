
import Stamp from "../Stamp4"
import "./index.css"
import ntpu_stone from "./ntpu-stone.svg"
import "./wish.css"
export default function Card({ user }) {
  const { name, grade, imgSrc, wish } = user
  return (
    <div className="card">
      <div className="card-content">
        <div class="sender">
          <div class="label text-shadow">Sender:</div>
          <div class="sender-info">
            <div class="sender-name">
              <div class="sender-name-text text-shadow">{name}</div>
            </div>
            <div class="sender-grade">
              <div class="sender-grade-text text-shadow">{grade}</div>
            </div>
          </div>
        </div>
        <div className="stamp-holder">
          <Stamp imgSrc={imgSrc} />
          <div className="seal">

            <div className="seal-icon"><img class="seal-color" src={ntpu_stone} /></div>
          </div>
        </div>
        <div className="wish">
          <div className="right-quotation">”</div>
          <div className="left-quotation">“</div>
          <div className="wish-text">{wish}</div>
        </div>

      </div>
    </div>

  )
}