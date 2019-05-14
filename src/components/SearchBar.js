import React from 'react';


class SearchBar extends React.Component  {

    state = {term: ''};

    onFormSubmit = event => {
        event.preventDefault();
        //console.log(this.state.term);
        this.props.onFormSubmit (this.state.term)

    }

    onInputChange = (e) => {
        this.setState({term: e.target.value})
    }


    render () {
        return (
            <div className="ui segment">
            <form className="ui form" onSubmit ={this.onFormSubmit}>
            <div className="ui field">
            <label> Video Search:</label>
        <input type="text"
        value = {this.state.form}
        onChange = {this.onInputChange}
        />
        </div>
        </form>
        </div>
    );
    }


};

export default SearchBar;