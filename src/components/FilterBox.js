import React from "react";
import club from "../data/Clubs";
import nationality from "../data/Nationality";
import team_position from "../data/TeamPositions";
class FilterBox extends React.Component {
  state={
    change:{
      nationality:[],
      club:[],
      team_position:[]
    }
  }
  checkInput=(e)=>{
    const {id,value,checked}=e.target;
    //add 
    if(checked){
    const newChange=[...this.state.change[id]].concat(value);
    this.setState({...this.state,change:{...this.state.change,[id]:newChange}},()=>{
      this.props.changeFilters(this.state.change)
    })
    //remove
    }else{
      const updateFilter=[...this.state.change[id]].filter(item=>item!==value);
      this.setState({...this.state,change:{...this.state.change,[id]:updateFilter}},()=>{
        this.props.changeFilters(this.state.change)
      })
    }
  }
  render()
  {
    const filters = ["nationality", "club", "team_position"];
    const components = [nationality, club, team_position];
    
  return (
    <div className="filter-box">
      <div>
        <h5 className="card-title">Filter Box</h5>
        <div class="accordion" id="accordionExample">
          {filters.map((filter, index) => {
            return (
              <div class="card">
                <div class="card-header" id={`heading${index}`}>
                  <h2 class="mb-0">
                    <button
                      id={`btn-${filter}-collapse`}
                      class="btn"
                      type="button"
                      data-toggle="collapse"
                      data-target={`#collapse${index}`}
                      aria-expanded="true"
                      aria-controls={`collapse${index}`}
                    >
                      {filter}
                    </button>
                  </h2>
                </div>
                <div
                  id={`collapse${index}`}
                  class={index == 0 ? "collapse show" : "collapse"}
                  aria-labelledby={`heading${index}`}
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    {components[index].map((item) => {
                      return (
                        <div class="form-check">
                          <label for={filter+"-"+item} style={{ marginLeft: "5px" }}>
                          <input value={item} class="form-check-input" type="checkbox" id={filter} onChange={this.checkInput}/>
                          {item}</label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
}
export default FilterBox;
