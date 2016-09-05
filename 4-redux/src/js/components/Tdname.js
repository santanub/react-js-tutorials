import React from "react";

class Tdname extends React.Component {
  constructor() {
    super()

    this.state = {
      disable: true,
      name: ""
    }

    this.updateName = this.updateName.bind(this);
    this.setDisable = this.setDisable.bind(this);
  }

  updateName(e) {

  }

  setDisable(e) {
    let disable = this.state.disable
    //return unless disable
    this.setState({ disable: false })
  }

  render() {
    return(
      <td onClick={this.setDisable}>
        <input type="text" value={this.state.name} onChange={this.updateName} className={this.state.disable ? 'disable' : 'enable' } />
      </td>
    )
  }
}

export default Tdname;
