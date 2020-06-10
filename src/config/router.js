import React from "react"
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom"
import {Home,Cart,Render} from "@/pages"
// import  Lazy from "@lazy"
function BasicRoute(){
       return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/render" component={Render}></Route>

            <Redirect from="/*" to="/"></Redirect>  {/* 必须放在最后一行，如果上面都匹配不到就跳转到首页 */}
        </Switch>
    </BrowserRouter>
       )
}
export default BasicRoute