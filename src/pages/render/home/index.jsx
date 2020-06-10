import React from "react"
import {Button} from "antd"
class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data:222
        }
    }

    render(){
        const {data} = this.state
        return (
            <div>
                这是render页面{data}
                <Button type="primary" danger>按钮</Button>
            </div>
        )
    }
}
export default Home