import React, { useEffect, useRef } from 'react';
import ModelItem from '../components/ModelItem';
import Chart from 'chart.js/auto';
import axios from 'axios';
import './Model.css';

function Model() {
  const barChartRef = useRef(null);

  useEffect(() => {
    const obtenerDatosMarcas = async () => {
      const response = await axios.get('/api/cars');
      const datos = response.data;
      const labels = datos.map(d => d.make);
      const data = datos.map(d => d.total_sold);

      new Chart(barChartRef.current, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Ventas Totales por Marca',
            data,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'x',
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    };

    obtenerDatosMarcas();
  }, []);

  return (
    <div className="model">
      {/* Galería de Logos Inicial */}
      <h1 className="gallery-title">Marcas más vendidas</h1>
      <div className="model-gallery">
        <ModelItem name="Toyota" src="/logo_toyota.jpeg" />
        <ModelItem name="Nissan" src="/logo_nissan.jpeg" />
        <ModelItem name="Hyundai" src="/logo_hyundai.jpeg" />
        <ModelItem name="Honda" src="/logo_honda.jpeg" />
        <ModelItem name="Ford" src="/logo_ford.png" />
        <ModelItem name="Dodge" src="/logo_dodge.jpeg" />
        <ModelItem name="Chevrolet" src="/logo_chevrolet.jpeg" />
        <ModelItem name="Toyota" src="/logo_toyota.jpeg" />
        <ModelItem name="BMW" src="/logo_bmw.jpeg" />
      </div>

      {/* Descripción Extensa de Cada Marca en Cuadros Blancos Separados */}
      <section className="brand-details">
        <div className="brand-item">
          <h2>Toyota</h2>
          <p>
            Toyota es una de las marcas japonesas más respetadas en el mundo por su fiabilidad y durabilidad. Fundada en 1937,
            Toyota ha liderado el desarrollo de tecnologías de vehículos híbridos con su icónico modelo Prius, introduciendo la
            eficiencia de combustible como un estándar en la industria. Sus modelos Corolla y Camry son ampliamente conocidos por
            su longevidad y bajo costo de mantenimiento, lo que los convierte en favoritos a nivel mundial.
          </p>
          <div className="model-cars">
            <img src="/fotos_carros/toyota1.webp" alt="Toyota" />
            <img src="/fotos_carros/toyota2.jpg" alt="Toyota" />
            <img src="/fotos_carros/toyota3.webp" alt="Toyota" />
          </div>
        </div>

        <div className="brand-item">
          <h2>Nissan</h2>
          <p>
            Nissan es conocida por su innovación en tecnología y eficiencia de combustible. Su modelo eléctrico, el Nissan Leaf, es
            especialmente popular entre los consumidores que buscan vehículos amigables con el medio ambiente. Fundada en 1933,
            Nissan ha ganado un lugar destacado en el mercado global.
          </p>
          <div className="model-cars">
            <img src="/fotos_carros/nissan1.webp" alt="Nissan" />
            <img src="/fotos_carros/nissan2.webp" alt="Nissan" />
            <img src="/fotos_carros/nissan3.jpg" alt="Nissan" />
          </div>
        </div>

        <div className="brand-item">
          <h2>Hyundai</h2>
          <p>
            Hyundai, originaria de Corea del Sur, ha transformado su reputación en los últimos años, pasando de ser una marca de
            bajo costo a una opción competitiva de alta calidad. Con modelos populares como el Elantra y el Tucson, Hyundai ha
            incorporado características avanzadas a precios accesibles, incluyendo sistemas de asistencia al conductor.
          </p>
          <div className="model-cars">
            <img src="/fotos_carros/hyundai1.webp" alt="Hyundai" />
            <img src="/fotos_carros/hyundai2.jpg" alt="Hyundai" />
            <img src="/fotos_carros/hyundai3.jpg" alt="Hyundai" />
          </div>
        </div>

        <div className="brand-item">
          <h2>Honda</h2>
          <p>
            Honda es reconocida mundialmente no solo por sus automóviles, sino también por sus motocicletas y equipos de motor.
            Fundada en 1948, Honda ha ganado reputación por su alta calidad y rendimiento con modelos como el Civic y el CR-V.
            La marca también ha sido pionera en el desarrollo de motores eficientes y vehículos ecológicos.
          </p>
          <div className="model-cars">
            <img src="/fotos_carros/honda1.jpg" alt="Honda" />
            <img src="/fotos_carros/honda2.webp" alt="Honda" />
            <img src="/fotos_carros/Honda3.jpg" alt="Honda" />
          </div>
        </div>

        <div className="brand-item">
          <h2>Ford</h2>
          <p>
            Ford, fundada en 1903 en Estados Unidos, es conocida por revolucionar la industria automotriz con la producción en
            masa de su modelo T. Actualmente, Ford mantiene una fuerte presencia en el mercado de camionetas con su serie F,
            especialmente el F-150, uno de los vehículos más vendidos en Norteamérica. Ford ha expandido su línea con modelos
            eléctricos como el Mustang Mach-E.
          </p>
          <div className="model-cars">
            <img src="/fotos_carros/ford1.jpg" alt="Ford" />
            <img src="/fotos_carros/ford2.jpeg" alt="Ford" />
            <img src="/fotos_carros/ford3.jpeg" alt="Ford" />
          </div>
        </div>

        <div className="brand-item">
          <h2>Dodge</h2>
          <p>
            Dodge se destaca en el mercado con su línea de muscle cars y vehículos de alto rendimiento. Modelos como el Charger y el
            Challenger son populares entre los entusiastas de los autos deportivos. Fundada en 1900, Dodge ofrece potencia y velocidad.
          </p>
          <div className="model-cars">
            <img src="/fotos_carros/dodge1.jpeg" alt="Dodge" />
            <img src="/fotos_carros/dodge2.jpeg" alt="Dodge" />
            <img src="/fotos_carros/dodge3.jpeg" alt="Dodge" />
          </div>
        </div>

        <div className="brand-item">
          <h2>Chevrolet</h2>
          <p>
            Chevrolet, una marca confiable de Estados Unidos, es conocida por su durabilidad y accesibilidad. Fundada en 1911, Chevrolet
            ha dominado el mercado de camionetas con modelos como el Silverado, y ofrece una amplia gama de vehículos que se
            adaptan a diversas necesidades y presupuestos.
          </p>
          <div className="model-cars">
            <img src="/fotos_carros/chevrolet1.webp" alt="Chevrolet" />
            <img src="/fotos_carros/chevrolet2.webp" alt="Chevrolet" />
            <img src="/fotos_carros/chevrolet3.webp" alt="Chevrolet" />
          </div>
        </div>

        <div className="brand-item">
          <h2>BMW</h2>
          <p>
            BMW, fundada en 1916 en Alemania, es sinónimo de lujo y rendimiento. Con modelos como el Serie 3 y el X5, BMW ha
            consolidado su posición en el mercado premium, ofreciendo una experiencia de conducción de alta calidad, tecnología
            avanzada y un diseño icónico.
          </p>
          <div className="model-cars">
            <img src="/fotos_carros/bmw1.jpg" alt="BMW" />
            <img src="/fotos_carros/bmw2.jpeg" alt="BMW" />
            <img src="/fotos_carros/bmw3.jpeg" alt="BMW" />
          </div>
        </div>
      </section>

      {/* Gráfica al Final */}
      <div className="chart-section">
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'normal' }}>Gráfica de las Marcas Más Vendidas</h2>
        <p>
          La gráfica a continuación muestra las ventas totales por marca, permitiendo visualizar la popularidad y preferencia de
          los consumidores.
        </p>
        <div className="chart-wrapper">
          <canvas ref={barChartRef}></canvas>
        </div>
      </div>
    </div>
  );
}

export default Model;
