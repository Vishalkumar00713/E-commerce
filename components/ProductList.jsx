export default function ProductList({product,addToCart})
{



    return (
         
        
       <div className="fine">
        {
        product.map((i)=>{

           
           return(
              <div style={{width:"25%"}}>

                <div className="product-item">

               <img src={i.url} alt=""  style={{width:"100%"}}/>
               <p>{i.name}|{i. category}</p>
               <p>{i.seller}</p>
               <p>Rs. {i.price} /-</p>
               <button  type="button" class="btn btn-dark" onClick={()=>addToCart(i)}>Add to Cart</button>


               </div>
               

                </div>


           )


        })
    }


       </div>

    )


}