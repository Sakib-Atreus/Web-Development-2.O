import logo from './logo.svg';
import './App.css';

const number = 727;
const singer = {name: "AS", job: "Singer"};

const numberStyle={
  backgroundColor: 'orange'
}
const singerStyle={
  color : 'purple'
}

function App() {
  const hero = ['Riyaz', 'Rubel', 'Bappa Raj', 'Salman Shah', 'Jashim'];
  const profession = ['Hero','Hero','Hero','Hero','Hero'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h2>Hello DUDE, How are you React?</h2>
        </div>
        <div className="music">
          <p style={numberStyle}>Singer Code : {number}</p>
          <p style={singerStyle}>Name : {singer.name} & Job : {singer.job}</p>
          <p style={{color: 'black', backgroundColor: 'white', borderRadius: '20px'}}>Life Cycle Thugs!!!</p>
        </div>
      </header>
      <div>
        {
          hero.map(nayok => <Hero name={nayok}></Hero>)
        }

        <Person hero="SS" heroin="SS"></Person>
        <Person hero="SS" heroin="SR"></Person>
        <Person hero="SS" heroin="SA"></Person>
        <p>Rock Mama React Mama...!</p>
        <Friend name="Samiul" profession="Software Engineer" heroine="Who are you?"></Friend>
        <Friend name="Sakib" profession="Web Developer" heroine="Where are you?"></Friend>
        <Friend name="Rudro" profession="Problem Solving"></Friend>
      </div>
    </div>
  );
}

function Hero(props) {
  console.log(props);
  return(
    <div className="stylePerson">
        <p>{props.name}</p>
        <p>{props.profession}</p>
    </div>
  )
}

function Person(props) {
  console.log(props);
  return (
    <div className="stylePerson">
      <p>Name : Sakib Atreus</p>
      <p>Profession : Developer</p>
    </div>
  );
}

function Friend(props) {
  console.log(props);
  return (
    <div className="styleFriend">
      <p>Name : {props.name}</p>
      <p>Profession : {props.profession}</p>
      <p>Heroine : {props.heroine}</p>
    </div>
  );
}

export default App;
