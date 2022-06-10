import {Container,CardGroup,Card} from "react-bootstrap";
import dataProduct from "./dummydata/datadummy";
import { useState } from "react";
import {Link} from "react-router-dom";




function HomePage() {

    const [datas] = useState(dataProduct);

  return (
   
    <Container>
        <div>
        <h3 className="product">Product</h3>
        </div>

        <CardGroup className="cardCatalogGroup">
            {datas.map((data,id) =>(
            <Card className="cardCatalog" key={id}>
                <Card.Img className="cardImg"  variant="top" src={data.img} />
                <Card.Body>
                <Link to={`/detail-page/${id}`} > <Card.Title className="cardTitle">{data.title}</Card.Title></Link>
                <Card.Text className="cardText">
                    <span>Rp.{data.price}</span>
                    <span>Stock : {data.stock}</span>
                </Card.Text>
                </Card.Body>
                </Card>
                ))}
            </CardGroup>
        </Container>
)
}

export default HomePage