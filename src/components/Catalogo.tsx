import camisa1 from '../assets/catalogo/camisa1.png'
import camisa2 from '../assets/catalogo/camisa2.png'
import camisa3 from '../assets/catalogo/camisa3.png'
import camisa4 from '../assets/catalogo/camisa4.png'
import zapatos1 from '../assets/catalogo/zapatos1.png'
import zapatos2 from '../assets/catalogo/zapatos2.png'
import zapatos3 from '../assets/catalogo/zapatos3.png'
import zapatos4 from '../assets/catalogo/zapatos4.png'

import '../Catalogo.css'

export default function Catalogo() {
    return (
        <div>
        <div className="catalogo-container">
            <h4>Camisas</h4>
            <div className="options-container">
                <div className="option">
                    <img src={camisa1} alt="" />
                    <p>Camisa blanca masculina $5</p>
                </div>
                <div className="option">
                    <img src={camisa2} alt="" />
                    <p>Camisa negra unisex $5</p>
                </div>
                <div className="option">
                    <img src={camisa3} alt="" />
                    <p>Camisa cafe femenina $4</p>
                </div>
                <div className="option">
                    <img src={camisa4} alt="" />
                    <p>camisas con mangas $10</p>
                </div>
            </div>
        </div>
        <div className="catalogo-container">
            <h4>Zapatos</h4>
            <div className="options-container">
                <div className="option">
                    <img src={zapatos1} alt="" />
                    <p>Zapatos blancos $10</p>
                </div>
                <div className="option">
                    <img src={zapatos2} alt="" />
                    <p>Nike rojos $12</p>
                </div>
                <div className="option">
                    <img src={zapatos3} alt="" />
                    <p>Tacones rosas $15</p>
                </div>
                <div className="option">
                    <img src={zapatos4} alt="" />
                    <p>Zapatos de cuero $12</p>
                </div>
            </div>
        </div>
        </div>

        

        
    );
}