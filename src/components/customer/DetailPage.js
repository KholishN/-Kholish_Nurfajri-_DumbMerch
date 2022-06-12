import {Container} from "react-bootstrap";
import mouse from "../../images/mouse.png";
import dataProduct from "./dummydata/datadummy";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBarCustomer from "./NavigationBarCustomer"
import Rate from "../features/Rate"


function DetailPage() {

    const {id} = useParams();
    const [data, setData] = useState(null);
    const params = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          .then((response) => response.json())
          .then((json) => setData(json));
        return () => {
          setData(null);
        };
      }, []);
// console.log(id)
// console.log(datas)


const [rating, setRating] = useState(0);


    return (
        <Container >
            <NavigationBarCustomer/>
        <div key={id} className="descContainer d-flex ">
            <div className="detailImg">
                <img src={mouse} alt="img" />
                </div>
            <div className="detailDesc">
                <div>
                    <h2 className="descTitle">{data?.name}</h2>
                    <span className="descText">Stock: 200</span>
                    </div>
                <div>
                    <ul>
                        <li className="descText">Wireless Mouse</li>
                        <li className="descText">Konektivitas wireless 2.4 GHz</li>
                        <li className="descText">Jarak Wireless Hingga 10m</li>
                        <li className="descText">Plug and Play</li>
                        <li className="descText">Baterai tahan hingga 12 bulan</li>
                    </ul>
                    </div>
                <div>
                    <p className="descText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Et optio rerum itaque nostrum possimus veritatis corrupti ad ab deleniti dicta in ipsa placeat consequatur, 
                        tempore laborum quidem quaerat pariatur eaque voluptatum nisi autem tenetur natus explicabo.
                        Alias consequuntur odio maiores tempora sit dolore consectetur tempore itaque, voluptates odit minus unde?</p>
                    </div>
                <div>
                    <h5 className="descPrice mt-5">Rp.300.000</h5>
                </div>
                <div className="descBuy">
                    <button>Buy</button>
                </div>
            </div>
            </div>

        <div className="review">
        <Rate rating={rating} onRating={(rate) => setRating(rate)}/>
        </div>
        </Container>
        
  )
  
}

export default DetailPage