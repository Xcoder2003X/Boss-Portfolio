import "./aboutContent.css"
import { Link } from "react-router-dom"
function AboutContent() {
    return (
      <div className="about">
        <div className="left">
        <h1> WHO AM I ?</h1>
            <p>i am a software Enginner student at ensao , passionate by developping secure website and apps</p>
            <Link to ="/contact">
            <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                <img className ="img" alt="img-top" src ="https://img.freepik.com/photos-gratuite/vue-dessus-du-cahier-bleu-crayons-colores-dessin-surface-sombre-inspirer-web-du-cahier-stylo-bloc-notes-scolaire_140725-108874.jpg?ga=GA1.1.1041549040.1725707744&semt=ais_hybrid"/>
                </div>

                <div className="img-stack bottom">
                <img className ="img" alt="img-bottom" src ="https://img.freepik.com/vecteurs-libre/modele-page-destination-commerciale-photo_23-2148250866.jpg?ga=GA1.1.1041549040.1725707744&semt=ais_hybrid"/>
                </div>
            </div>
        </div>

      </div>
    )
}
          
  
  export default AboutContent