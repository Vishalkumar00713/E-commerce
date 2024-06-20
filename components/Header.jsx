
export default function Header({count,showcarts}){

    return (
         <div className="fine shopping-card">
                <div onClick={()=>showcarts(false)}>Shopping cart app</div>
                <div   style={{cursor:"pointer"}}onClick={()=>showcarts(true)}><b>cart</b><sup style={{border:"2px solid black",borderRadius:"5%",backgroundColor:"black",color:"white"}}>{count}</sup></div>

         </div>
    
    )
}