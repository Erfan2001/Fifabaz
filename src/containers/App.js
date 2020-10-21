import React from "react";
import Table from "../components/Table";
import FilterBox from "../components/FilterBox";
import SortBox from "../components/SortBox";
import Players from "../data/Players";
class App extends React.Component {
  state = {
    players: [],
    prevPlayers: [],
    changePlayers: [],
  };
  componentDidMount() {
    const playersState = [...Players];
    this.setState({
      ...this.state,
      players: playersState,
      prevPlayers: playersState,
    });
  }
  changeSort = (classSort, id) => {
    let a = [];
    let b = [...this.state.players];
    if (id === "short_name") {
      switch (classSort) {
        case "btn-info":
          a = b
            .slice(0)
            .sort((a, b) =>
              a[id].toUpperCase() < b[id].toUpperCase() ? -1 : 1
            );
          break;
        case "btn-success":
          a = b
            .slice(0)
            .sort((a, b) =>
              a[id].toUpperCase() > b[id].toUpperCase() ? -1 : 1
            );
          break;
        case "btn-outline-primary":
          if(this.state.changePlayers.length){
          a = [...this.state.changePlayers];
          }else{
            a = [...this.state.prevPlayers];
          }
          break;
      }
    } else {
      switch (classSort) {
        case "btn-info":
          a = b.slice(0).sort((a, b) => (a[id] < b[id] ? -1 : 1));
          break;
        case "btn-success":
          a = b.slice(0).sort((a, b) => (a[id] > b[id] ? -1 : 1));
          break;
        case "btn-outline-primary":
          if(this.state.changePlayers.length){
            a = [...this.state.changePlayers];
            }else{
              a = [...this.state.prevPlayers];
            }
          break;
      }
    }
    this.setState({ ...this.state, players: a });
  };
  changeFilters = (changePlayers) => {
    const {nationality,club,team_position}=changePlayers;
    let update=[...Players];
    //1
    if(nationality.length){
      update=update.filter(player=>{
        return nationality.some(item=>player.nationality===item)
      })
    }
    //2
    if(club.length){
      update=update.filter(player=>{
        return club.some(item=>player.club===item)
      })
    }
    //3
    if(team_position.length){
      update=update.filter(player=>{
        return team_position.some(item=>player.team_position===item)
      })
    }
    //final
      this.setState({ ...this.state, players: update ,changePlayers:update});
  };
  renderTable = () => {
    return <Table players={this.state.players} />;
  };
  render() {
    return (
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-lg-2 col-12">
            <FilterBox changeFilters={this.changeFilters} />
          </div>
          <div className="col-lg-10 col-12">
            <SortBox changeSort={this.changeSort} />
            {this.renderTable()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
