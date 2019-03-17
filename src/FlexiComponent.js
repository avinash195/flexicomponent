import React from 'react';

class Flexi extends React.Component {
  handleSubmit = () => {
    this.props.onSubmit();
  }
  render() {
    
    const items = this.props.config.items;

    const names = items.reduce((names, value)=> {
      return 
    },[]);
    const states = this.props.config.items[1];
    return (
      <div>
        <label>
          Name:
        </label>
        <label>
          States: 
        </label>
        <button onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Flexi;