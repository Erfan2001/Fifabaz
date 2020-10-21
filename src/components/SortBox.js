import React from "react";
import sortType from "../data/SortType";
class SortBox extends React.Component {
  state={
    age:"btn-outline-primary",
    short_name:"btn-outline-primary",
    value:"btn-outline-primary"
  }
  fields = ["age", "short_name", "value"];
  classes = ["btn-outline-primary", "btn-info", "btn-success"];
  setClassName = (e) => {
    const {id,className}=e.target;
    const [btnOutlinePrimary,btnInfo,btnSuccess]=this.classes;
    let a=this.fields.filter(field=>field!=id);
    switch(className.split(" ")[2]){
      //1
      case btnInfo:
        this.setState({[id]:btnOutlinePrimary,[a[0]]:btnOutlinePrimary,[a[1]]:btnOutlinePrimary},()=>{
          this.props.changeSort(this.state[id],id);
        })
        break;
      //2
      case btnSuccess:
        this.setState({[id]:btnInfo,[a[0]]:btnOutlinePrimary,[a[1]]:btnOutlinePrimary},()=>{
          this.props.changeSort(this.state[id],id);
        })
        break;
      //3
        case btnOutlinePrimary:
          this.setState({[id]:btnSuccess,[a[0]]:btnOutlinePrimary,[a[1]]:btnOutlinePrimary},()=>{
            this.props.changeSort(this.state[id],id);
          })
          break;
    }
  };
  render(){
  return (
    <div id="sort-box-container" className="d-flex py-2">
      {this.fields.map(field=>{
        return(
         <button
         id={field}
         type="button"
         className={`btn mx-2 ${this.state[field]}`}
         onClick={this.setClassName}
       >
         {field}
       </button>
        )
      })}
    </div>
  );
}
}
export default SortBox;
