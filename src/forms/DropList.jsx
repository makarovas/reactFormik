import React, { Component } from "react";
import Select from "react-select";

const options = [
  { value: "item 1", label: "item 1" },
  { value: "item 2", label: "item 2" },
  { value: "item 3", label: "item 3" },
];

export default class DropList extends Component {
  handleChange = (value) => {};
  handleBlur = (value) => {};

  render() {
    return (
      <Select
        value={options[0]}
        onChange={this.handleChange}
        onBLur={this.handleBlur}
        options={options}
      />
    );
  }
}
