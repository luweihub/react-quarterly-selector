import React from "react"

import Home from "./home"

class Render extends React.Component{
    constructor(props){
        super(props)
        this.state= {
        }
    }
    render(){
        return (
            <>
            <Home></Home>
            </>
        )
    }
}

export default Render

/* 
import React from "react"

import Cat from 'components/cat'
class DataProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { target: 'Zac' };
  }

  render() {
    return (
      <div>
        {this.props.render(this.state)}
      </div>
    )
  }
}

<DataProvider render={data => (
  <Cat target={data.target} />
)}/>


*/