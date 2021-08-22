import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: null,
      searchInput: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          users,
        });
      })
      .catch(() =>
        this.setState({
          users: [],
        })
      );
  }

  handleChange(e) {
    this.setState({ searchInput: e.target.value });
  }

  render() {
    const { users, searchInput } = this.state;
    const filteredUser = users
      ? users.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      : null;

    return (
      <div className="App">
        <div className="main">
          <h1 className="title">Find Your Profile!</h1>
          <SearchBox
            placeholder="search profile.."
            handleChange={this.handleChange}
          />
          <CardList data={filteredUser} />
        </div>
      </div>
    );
  }
}

export default App;
