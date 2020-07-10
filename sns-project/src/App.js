import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customer=[
{
  'id':1,
  'image':'http://placeimg.com/64/64/1',
  'name': '도라지',
  'birthday': '940125',
  'gender': '여',
  'job': '직장인'
},
{
  'id':2,
  'image':'http://placeimg.com/64/64/2',
  'name': '여명교',
  'birthday': '940521',
  'gender': '남',
  'job': '백수'
},
{
  'id':3,
  'image':'http://placeimg.com/64/64/3',
  'name': '윤푱푱',
  'birthday': '941125',
  'gender': '남',
  'job': '취준생'
}
]

function App() {
  return (
    <div>
      {customer.map(c=>{
        return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday}/>
      })
      }
    </div>

    /*
    <Customer
      id={customer[0].id}
      image={customer[0].image}
      name={customer[0].name}
      birthday={customer[0].birthday}
      gender={customer[0].gender}
      job={customer[0].job}
    />
    <Customer
    id={customer[1].id}
    image={customer[1].image}
    name={customer[1].name}
    birthday={customer[1].birthday}
    gender={customer[1].gender}
    job={customer[1].job}
  />
      <Customer
      id={customer[2].id}
      image={customer[2].image}
      name={customer[2].name}
      birthday={customer[2].birthday}
      gender={customer[2].gender}
      job={customer[2].job}
    />
*/
/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          도라지 편식하면 안된다!?
        </p>
        <a
          className="App-link"
          href="https://ndb796.tistory.com/214?category=1030599"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

*/
  );
}


export default App;
