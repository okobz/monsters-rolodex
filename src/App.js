import React, { Component } from 'react';
import  { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component {

  constructor () {
    super(); 
    
      this.state = {
        monsters: [],
        
        searchField: ''

      };

      //this.handleChange = this.handleChange.bind (this);
  }


//FETCHING/GETTING DATA (DYNAMIC DATA) FROM API/EXTERNAL-URL  AND THEN FORMATTING IT USING JSON
  componentDidMount (){
    fetch('https://jsonplaceholder.typicode.com/users')
    //.then (response => console.log (response))
    .then (response => response.json())
    //.then (users => console.log(users))
    .then (users => this.setState({monsters: users}))

  }

  //*NOTE THE USAGE OF ARROW FUNCTION, IT HELP US AVOID NEEDING TO USING "BIND" TO EXTEND THIS METHOD'S SCOPE TO APP-COMPONENT'S CONTEXT. ARROW FUNCTIONS AUTOMATICALLY GET LEXICAL SCOPING. 
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });    
  }


  render () {

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase()
    ));

    return  (
      <div className="App">
        <h1> Monsters Rolodex </h1>

        {/* THIS CALLS THE SEARCHBOX COMPONENT TO THE APP PAGE  */}
        <SearchBox 
          placeHolder='Search Monsters by Name' 
          handleChange= {this.handleChange}

          //handleChange={e => this.setState({ searchField: e.target.value }, () => console.log (this.state) )}           
        />

        {/* THIS CALLS THE CARDLIST COMPONENT TO THE APP PAGE  */}
        <CardList monsters={filteredMonsters} />

             
      </div>
    )
  }
}

export default App;



/* OLD CODE


      //import logo from './logo.svg';


      /*function App() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Hello Man; Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        );
      } */



        // constructor () {
        //   super(); 
          
        //     this.state = {
        //       string: 'Hello People it\'s Okobz; Do Edit src App.js and save to reload.' 
        //     };
        // }

        // {
                //   name: 'Frankenstein',
                //   id: '1aaa'
                // },          
                // {
                //   name: 'Dracula',
                //   id: '2bbb'
                // },          
                // {
                //   name: 'Zombie',
                //   id: '3ccc'
                // }


          
        /* THIS HANDLES THE SEARCH COMPONENT ON THE APP PAGE  */
        /* <input 
          type='search' 
          placeholder='Search Monsters by Name' 
          onChange={e => this.setState({ searchField: e.target.value }, () => console.log (this.state) )} 
        /> */ 
        
        /*<CardList monsters={this.state.monsters} />*/


        /* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              {this.state.string}
            </p>
            <p>
              {this.state.string}
            </p>

            <button onClick={ () => this.setState({string: 'Strong Men of React it\'s Okobz; Do Edit src App.js and save to reload.' }) }> Switch Text</button>

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header> */
