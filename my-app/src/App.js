import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
      gitProfs:[]
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/roberttierie')
    .then((res) => {
      console.log(res)
      this.setState({
        gitProfs:res.data
      })
    })
    .catch(err=> console.log(err));

    axios.get('https://api.github.com/users/roberttierie/followers')
    .then((resp) => {
      this.setState({
        followers:resp.data.map(follower=>{
          return(follower.avatar_url)
        })
      })
    })

    axios.get('https://api.github.com/users/roberttierie/followers')
    .then((respo) => {
      this.setState({
        nameF:respo.data.map(fName=>{
          return(fName.login)
        })
      })
    })
  }


  render() {
  return (
      <div>
        <div>
        <p>Meet {this.state.gitProfs.name}</p>
  <img src={this.state.gitProfs.avatar_url} alt={this.state.gitProfs.avatar_url} key={this.state.gitProfs.avatar_url} placeh/>
      </div>
      <div>
        <p>Meet his followers {this.state.nameF}</p>
        <img src={this.state.followers} alt={this.state.followers}></img>
      </div>
      </div>
  );
}
} 

export default App;
