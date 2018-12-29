import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ""};
  }

  onInputChange = e => {
    this.setState({term: e.target.value});
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
    // TODO: Make sure we call
    // callback from parent component
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
