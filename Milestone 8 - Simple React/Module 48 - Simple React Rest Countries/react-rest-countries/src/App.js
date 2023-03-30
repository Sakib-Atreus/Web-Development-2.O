import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <RestCountries></RestCountries> */}
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

/*function RestCountries() {
  const [countries, setCountries] = useState([]);
  useEffect ( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  return(
    <div>
      <h2>Visiting Every Countries Of The World...!!!</h2>
      <h3>Total Countries : {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return(
    <div>
      <h2>Name : {props.name}</h2>
      <h3>Population : {props.population}</h3>
    </div>
  )
}*/

export default App;
