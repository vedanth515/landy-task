
import Cards from "../../App";
import  './props.css'

function Props(cardInfo){
    console.log(cardInfo);
    
    return(
            <div id="cards">
                <img src={cardInfo.imgurl} width="300px" height="300px"/>
                <p>{cardInfo.products.title}</p>
                <p>{cardInfo.products.price}</p>
                <p>{cardInfo.products.category}</p>
                <button>{cardInfo.cartBtn}</button>
                <button>{cardInfo.buyNow}</button>
            </div>
    )
}
export default Props;