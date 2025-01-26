import '../Configuration.css';
import SellsLineChart from './SellsLineChart';
import Grid from '@mui/material/Grid2';

export default function Configuration() {
    return (
        <div className="configuration">
            <div className="options">
                <h4 className="option">Ventas</h4>
                <h4 className="option">Compras</h4>
                <h4 className="option">Prefencias</h4>
                <h4 className="option">Seguridad</h4>
                <h4 className="option">Terminos y condiciones</h4>
                <h4 className="option">Accesibilidad</h4>
                <h4 className="option">Editar perfil</h4>
                <h4 className="option">Cerrar sesión</h4>

            </div>
            <div className="Graphic">
                <Grid>
                <SellsLineChart />
                </Grid>
                <div className='total'>
                    <p>$606</p>
                </div>
            </div>
            
        </div>
    )
}