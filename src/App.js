import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
         
    </div>
  );
}


export default App;

// function Countries() {
//   const [country, setCountry] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountry(data))
//   },[])

  
//   return (
//     <>
//       <h1>Welcome to traveling world</h1>
//       <h1>Countries available: {country.length}</h1>
//       {
//         country.map(countries => <Country name={countries.name.common} flag={countries.flags.png}></Country>)
//       }
//     </>
//   );
// }
// function Country(props){
//   return(
//     <>
//     <h3>Name: {props.name}</h3>
//     <img src={props.flag}></img>
//     </>
//   )
// }


