import Paper from '@mui/material/Paper';
import { LineChart } from '@mui/x-charts/LineChart';

const sells = [100, 30, 70, 40,10, 12, 89, 30,10, 43, 32, 140];
const xLabels = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

export default function SellsLineChart() {
    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column'
            }}
        >

            {/* Componente para un gráfico de líneas */}
            <LineChart
                width={600}
                height={450}
                series={[
                    { data: sells, label: 'Ventas mensuales' },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
            />
        </Paper>
    );
}