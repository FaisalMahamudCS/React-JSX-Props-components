import logo from './logo.svg';
import './App.css';

const number =5555;
const singer ={name:"Dr Mahfuz",job:"Singer"}
const singer2={name:"Eva",job:"singer"}
const singers =[
  {name:'Dr mahfuz',job:'Singer'},
  {name:'fahim',job:'programmer'},
  {name:'Agun',job:'Sopno'},
  {name:'Suvro',job:'pathor'}

]

const singerStyle={
  color:'purple',
  backgroundColor:'white',
}
function App() {
  const nayoks=['Rubel','Bapparaj','Kuber','fahim','ananta']
  return (
    <div className="App">
      {
    nayoks.map(nayok=><Person name={nayok}></Person>)
      }

      {
        singers.map(singer =><Singer name={singer.name} job={singer.job}></Singer>)
      }
    <Person></Person>
        <Person name="Rubel" nayika="cheka"></Person>
        <Person name="Bapparaz" nayika="mousumi"></Person>
        <Person></Person>
        <Friend phone="019275488" movie="ata maji"></Friend>
        <Friend></Friend>
        <Friend></Friend>
    </div>
  );
}
function Person(props){
  return (
    <div className="person">
    <h1>{props.name}</h1>
    <p>Nayika {props.nayika}</p>
    </div>
  )

  

}
function Friend(props){
  return (
    <div >
      <h3>Name :Ajay Devgun</h3>
      <p>Movie:{props.movie}</p>
      <p>Phone {props.phone}</p>
    </div>
  )
}
function Singer(props){
  return (
    <div>
      <h3>name:{props.name}</h3>
      <p>Job:{props.job}</p>
    </div>
  )
}

export default App;
