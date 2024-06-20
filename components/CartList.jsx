import {useState} from "react"
export default function CartList({cart}){
    const[add,setAdd]=useState(cart);


    let sum=0;

function plus(id){
    
  setAdd(  add.map((i)=>i.id===id?{...i,quantity:i.quantity+1}:i));
}
function minus(id){
    
    setAdd(  add.map((i)=>i.id===id?{...i,quantity:i.quantity-(i.quantity>1?1:0)}:i));
  }

  

  function remove(id){

   let item= add.filter((i)=>{

        return i.id!==id

    })

    setAdd(item);
  }

  cart.length=add.length;
  


    return(
     <div>
         <div>
            {
                add.map((i)=>{
                    sum=sum+(i.price)*(i.quantity);

                   return(
                     <div style={{marginTop:"50px",width:"100%",display:"flex",flexWrap:"wrap",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
                      <div>
                       <img src={i.url} alt="" style={{width:"40px"}} />
                       <span>{i.name}</span>
                       <button type="button" class="btn btn-primary" onClick={()=>minus(i.id)}>-</button>
                       <span >{i.quantity}</span>
                       <button type="button" class="btn btn-primary" onClick={()=>plus(i.id)}>+</button>
                       <span>Rs. {(i.price)*(i.quantity)}</span>
                       <button type="button" class="btn btn-danger" onClick={()=>remove(i.id)}>Remove</button>
                       </div>
                       </div>
                   )


                  
                })
            }
         </div >
         <div style={{margin:"50px",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <p  type="button" class="btn btn-light" style={{marginRight:"20px"}}>Total Amount:{sum}</p>
            <button type="button" class="btn btn-success">Pay</button>
            </div>

     </div>


    )
}