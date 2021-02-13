import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './scss/style.scss';
import Particles from 'react-particles-js';
import Banner from './components/Banner'

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
						color: "#ABABAB"
					}
				},
				line_linked: {
						color: "none"
				}
			}
		}}
	/>
	<Banner />
	</>
  );
}

export default App;
