import React,{useState,useEffect}from "react"
function Home(){
    const [time,setTime] = useState(new Date().toLocaleTimeString())
    useEffect(()=>{
     /*   const id =  setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
       },1000)
  
       return ()=>{
           if(id){
               clearInterval(id)
           }
       } */
    })
    
    return (
    <div>这是home页面 {time}</div>
    )
    
}
export default Home;