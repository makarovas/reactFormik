import React, { Component } from "react";
import Select from "react-select";

export default class DropList extends Component {
  handleChange = (value) => {
    this.props.onChange("topics", value);
  };
  handleBlur = () => {
    this.props.onBlur("topics", true);
  };

  render() {
    const { value, options } = this.props;
    return (
      <Select
        value={value}
        onChange={this.handleChange}
        onBLur={this.handleBlur}
        options={options}
        isMulti
      />
    );
  }
}
