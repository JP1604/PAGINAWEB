// App.jsx
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Tech from './pages/Tech';
import Model from './pages/Model';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Header siempre visible */}
        <Header />

        {/* Configuración de Rutas */}
        <Routes>
          {/* Página principal */}
          <Route path="/" element={
            <main>
              <div className="hero">
                <h2>Análisis de vehículos</h2>
                <p>Puedes Observar conjuntos de datos de ventas de vehículos y tendencias del mercado</p>
              </div>
              <section className="about-us">
                <h3>Sobre Nosotros</h3>
                <p>
                  En nuestra página de ventas de automóviles, somos un equipo de tres apasionados por la tecnología y los autos, con la misión de conectar a personas con el vehículo ideal. Creemos que encontrar el auto perfecto debería ser una experiencia fácil, transparente y, sobre todo, personalizada. Aquí te presentamos un poco sobre cada uno de nosotros:
                </p>
                <div className="team">
                    <div className="member">
                        <h4>Camilo</h4>
                        <img src="/camilo.jpg" alt="Camilo" className="team-photo" />
                        <p>Camilo es el estratega del equipo, con un fuerte enfoque en la innovación tecnológica. Ha trabajado en empresas como Tesla, donde lideró proyectos de energía limpia, y en Ford, optimizando la eficiencia de los vehículos eléctricos. En su tiempo libre, disfruta explorar nuevas tendencias de tecnología y probar innovaciones en inteligencia artificial.</p>
                    </div>
                    <div className="member">
                        <h4>Vanessa</h4>
                        <img src="/vanessa.jpg" alt="Vanessa" className="team-photo" />
                        <p>Vanessa es experta en atención al cliente y se asegura de que cada cliente reciba una experiencia única y personalizada. Con un enfoque en marketing y servicio, ha trabajado en empresas como Toyota y Nissan. Además, le apasiona el arte y la fotografía, lo cual influye en su habilidad para presentar los vehículos de una forma visualmente atractiva.</p>
                    </div>
                    <div className="member">
                        <h4>Juan Pablo</h4>
                        <img src="/juanpablo.jpg" alt="Juan Pablo" className="team-photo" />
                        <p>Juan Pablo es el mecánico y experto en tecnología automotriz del equipo. Con más de 10 años en el sector, ha colaborado en el diseño de motores híbridos para empresas como BMW y Audi. Fuera del trabajo, es un amante del automovilismo y ha participado en varias competencias de rally.</p>
                    </div>
                </div>
                <p>
                  Nuestro equipo trabaja en conjunto para ofrecerte una experiencia única para que puedas encontrar las mejores recomendaciones y obtener tu próximo automóvil. ¡Gracias por confiar en nosotros!
                </p>
              </section>
            </main>
          } />

          {/* Ruta para la página de Tecnología */}
          <Route path="/tech" element={<Tech />} />
          <Route path="/model" element={<Model />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
