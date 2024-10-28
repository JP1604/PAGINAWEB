import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
import './Tech.css';

function Tech() {
  const lineChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const horizontalBarChartRef = useRef(null);
  const transmissionChartRef = useRef(null);

  useEffect(() => {
    const obtenerDatosLineas = async () => {
      const response = await axios.get('/api/lineas');
      const datos = response.data;
      const labels = datos.map(d => d.year);
      const data = datos.map(d => d.total_sold);

      new Chart(lineChartRef.current, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'Ventas Totales por Año',
            data,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            fill: false,
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    };

    const obtenerDatosColores = async () => {
      const response = await axios.get('/api/colors');
      const datos = response.data;
      const labels = datos.map(d => d.color_group);
      const data = datos.map(d => d.total_sold);

      new Chart(pieChartRef.current, {
        type: 'pie',
        data: {
          labels,
          datasets: [{
            label: 'Colores de Carros Más Vendidos',
            data,
            backgroundColor: [
              'black', 'white', 'silver', 'gray', 'blue', 'red', 'green', 'yellow', 'purple', 'rgba(255, 206, 86, 0.2)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true
        }
      });
    };

    const obtenerTopMarcasCaras = async () => {
      const response = await axios.get('/api/top_marcas_caras');
      const datos = response.data;
      const labels = datos.map(d => d.make);
      const data = datos.map(d => d.average_price);

      new Chart(horizontalBarChartRef.current, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Precio Promedio ($)',
            data,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'y',
          scales: {
            x: { beginAtZero: true }
          }
        }
      });
    };

    const obtenerDatosTransmision = async () => {
      const response = await axios.get('/api/transmission');
      const datos = response.data;
      const labels = datos.map(d => d.transmission);
      const data = datos.map(d => d.total_sold);

      new Chart(transmissionChartRef.current, {
        type: 'pie',
        data: {
          labels,
          datasets: [{
            label: 'Ventas por Tipo de Transmisión',
            data,
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true
        }
      });
    };

    obtenerDatosLineas();
    obtenerDatosColores();
    obtenerTopMarcasCaras();
    obtenerDatosTransmision();
  }, []);

  return (
    <div className="tech">
      <h1>Análisis Completo del Mercado Automotriz</h1>
      <section className="intro">
        <p>
          El mercado automotriz es un sector en constante transformación, influenciado por las preferencias de los consumidores,
          avances tecnológicos y cambios económicos. Este artículo analiza facetas clave de este mercado, como las tendencias de
          ventas anuales, preferencias de colores, el costo de las marcas de lujo y la elección entre transmisión automática y manual.
        </p>
      </section>

      <section className='content-sections'>
        <section className="content-section">
          <h2>Tendencias de Ventas por Año</h2>
          <p>
            Las ventas de automóviles han experimentado fluctuaciones significativas en las últimas décadas, influenciadas por eventos
            globales como la crisis financiera de 2008 y la pandemia de COVID-19. Estas crisis redujeron la demanda y la producción de
            vehículos, pero también impulsaron cambios en la industria, como la digitalización de las ventas y la adopción de vehículos
            personales para evitar el transporte público.
          </p>
          <div className="chart-wrapper">
            <canvas ref={lineChartRef}></canvas>
          </div>
        </section>

        <section className="content-section">
          <h2>Preferencia de Colores en los Automóviles</h2>
          <p>
            La elección de color refleja la personalidad y preferencias estéticas de los consumidores. Colores clásicos como negro, blanco
            y gris son comunes por su versatilidad, mientras que colores más vibrantes como rojo y azul son populares entre los compradores
            jóvenes. Curiosamente, el blanco es preferido en zonas cálidas por su capacidad de reflejar el calor.
          </p>
          <div className="chart-wrapper">
            <canvas ref={pieChartRef}></canvas>
          </div>
        </section>

        <section className="content-section">
          <h2>Marcas de Autos de Mayor Costo Promedio</h2>
          <p>
            Las marcas de lujo como Mercedes-Benz, BMW y Lexus dominan el mercado premium. Estas marcas ofrecen vehículos con tecnologías
            avanzadas, confort y una percepción de exclusividad que justifica sus altos precios. En los últimos años, Tesla ha emergido
            como una alternativa de lujo más accesible, democratizando el acceso a vehículos de alta gama y tecnología eléctrica.
          </p>
          <div className="chart-wrapper">
            <canvas ref={horizontalBarChartRef}></canvas>
          </div>
        </section>

        <section className="content-section">
          <h2>Preferencia entre Transmisión Automática y Manual</h2>
          <p>
            La transmisión automática ha ganado popularidad en el segmento de vehículos familiares y urbanos por su facilidad de manejo.
            Sin embargo, la transmisión manual sigue siendo preferida por los entusiastas de los deportivos, que valoran el control
            directo. También existe la opción de transmisión semiautomática, que combina la comodidad de una automática con el control
            de una manual.
          </p>
          <div className="chart-wrapper">
            <canvas ref={transmissionChartRef}></canvas>
          </div>
        </section>

        <section className="content-section">
          <h2>El Impacto de la Tecnología en el Mercado Automotriz</h2>
          <p>
            La tecnología ha cambiado radicalmente la industria automotriz, especialmente con la introducción de sistemas de asistencia al
            conductor, navegación GPS, conectividad en tiempo real y conducción autónoma. La digitalización de los vehículos es ahora una
            norma, y los consumidores valoran cada vez más la presencia de estas características avanzadas en sus autos.
          </p>
          {/* Incluir una imagen de un tablero digital aquí */}
        </section>

        <section className="content-section">
          <h2>El Auge de los Autos Eléctricos</h2>
          <p>
            Los vehículos eléctricos (VE) están revolucionando el mercado automotriz al ofrecer una alternativa más limpia y eficiente
            frente a los vehículos de combustión. Incentivos gubernamentales, la creciente infraestructura de carga y la conciencia
            ambiental han impulsado la adopción de VE en los últimos años. Tesla, Nissan y ahora incluso marcas tradicionales como Ford y
            Volkswagen están lanzando modelos eléctricos competitivos.
          </p>
          {/* Incluir una imagen de un cargador de vehículo eléctrico aquí */}
        </section>

        <section className="content-section">
          <h2>Impacto Ambiental y Futuro de la Movilidad</h2>
          <p>
            Con el cambio climático como una preocupación global, los fabricantes están adoptando prácticas de producción más sostenibles
            y diseñando vehículos con huellas de carbono reducidas. Además de los VE, el desarrollo de biocombustibles y tecnologías
            híbridas también está en auge, brindando opciones para quienes buscan reducir su impacto ambiental sin comprometer el
            rendimiento o la autonomía.
          </p>
          {/* Incluir una imagen de una planta de fabricación sostenible o un vehículo híbrido aquí */}
        </section>

        <section className="content-section conclusion">
          <h2>Reflexión Final</h2>
          <p>
            El mercado automotriz continúa evolucionando hacia una mayor sostenibilidad, digitalización y eficiencia. Con el auge de los
            autos eléctricos, tecnologías avanzadas y un enfoque creciente en la sostenibilidad, el futuro de la movilidad parece ser más
            prometedor y respetuoso con el medio ambiente que nunca. Adaptarse a estos cambios será clave para que las marcas prosperen en
            un mercado que ya está muy avanzado en innovación.
          </p>
        </section>
      </section>
    </div>
  );
}

export default Tech;
