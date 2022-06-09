
import mouse from "../../images/mouse.png"
import keyboard from "../../images/keyboard.png"
import {Container,CardGroup,Card} from "react-bootstrap"
import dataProduct from "./dummydata/datadummy"
import { useState } from "react"



function Homepage() {

    const [datas] = useState(dataProduct)

  return (
   
    <Container>
        <div>
        <h3 className="product">Product</h3>
        </div>

        <CardGroup className="cardCatalogGroup">
            {datas.map((data, index) =>(
            <Card className="cardCatalog" key={index}>
                <Card.Img className="cardImg"  variant="top" src={data.img} />
                <Card.Body>
                <Card.Title className="cardTitle">{data.title}</Card.Title>
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

export default Homepage