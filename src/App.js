import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.css';
import './scss/style.scss';
import 'aos/dist/aos.css';
import './fontawesome-free-5.15.2-web/css/all.css';
import Banner from './components/Banner';
import Content from './components/Content';
import Content2 from './components/Content2';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from 'react-particles-js';

function App() {
  return (
	<>
	<Particles 
		params={{
			particles:{
				number: {
					value: 30,
					density: {
						enable: true,
						value_area: 900
					}
				},
				shape: {
					type: "circle",
					stroke: {
						width: 2,
						color: "#fffff"
					}
				},
				line_linked: {
						color: "none"
				}
			}
		}}
	/>
	<Banner />
	<Content />
	<Content2 />
	<Gallery />
	<Skills />
	<Testimonials />
	<Contact />
	<Footer />
	</>
  );
}

export default App;
