import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Board from './components/Board';

const boards = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '임재형',
    'birthday' : '900522',
    'gender' : '남자',
    'job' : '애기'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '서성경',
    'birthday' : '960915',
    'gender' : '여자',
    'job' : '애깅이'
  },{
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '임정현',
    'birthday' : '920911',
    'gender' : '남자',
    'job' : '붕삼'
  }
]

class App extends Component {
  render(){
    return (
      <div>
        {
          boards.map(c => {
            return(
              <Board
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }

      </div>
    );
  }
}

export default App;
