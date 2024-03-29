import React,{FC,useState} from "react";
import { useNavigate,Link} from 'react-router-dom';
const Home:FC =()=>{
   const nav = useNavigate()
  function clickHandler(): void {
    nav('/login')

  }

 return <>
 <h1>Home</h1>
 <div>
  <button onClick={clickHandler}>登录</button>
  <Link to={'/register'} >注册</Link>
 </div>
 </>
}
export default Home
