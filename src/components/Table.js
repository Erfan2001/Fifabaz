import React from "react";

class Table extends React.Component {
  fields = [
    "#",
    "short_name",
    "age",
    "nationality",
    "club",
    "overall",
    "value",
    "preferred_foot",
    "team_position",
  ];
  render() {
    return (
      <table id="players-table" className="table table-bordered">
        <thead>
          <tr>
            {this.fields.map((field) => {
              return <th>{field}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {this.props.players.map((player) => {
            return (
              <tr>
                <th>{this.props.players.indexOf(player) + 1}</th>
                <th>{player.short_name}</th>
                <th>{player.age}</th>
                <th>{player.nationality}</th>
                <th>{player.club}</th>
                <th>{player.overall}</th>
                <th>{player.value}</th>
                <th>{player.preferred_foot}</th>
                <th>{player.team_position}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
