import React from 'react';
import NavBar from './Components/NavBar';
import 'tachyons';
import {connect} from 'react-redux';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
import Loader from 'react-loader-spinner';
import ScrollCard from './Components/ScrollCard';
//import ErrorBoundary from './Components/ErrorBoundary';
import {setSearchField} from './action';


const mapStateToProps = (state)=>{
  return{
    searchField : state.searchField
  }
}

const mapDispatchToProps = (dispatch) =>{
   return {onSearchChange : (e) => {dispatch(setSearchField(e.target.value))}}
}

class App extends React.Component{




  state = {
      robots: [],
  }

  componentWillMount(){    
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{return response.json()}).then(users=>{  this.setState({robots: users})})
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
    
    return (
      <>  
       {this.state.robots.length === 0 ?
       <div className='tc'>
      <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
      </div>
    :
      <div className='tc'>
          <NavBar/>
          <h1>Robo friends</h1>
          <SearchBox SearchChange = {this.props.onSearchChange}/>
          <ScrollCard>
          
            <CardList robots={filteredRobots}/>
          
          </ScrollCard>
          
          </div>
  }
       </>
    );
    
  }
 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
