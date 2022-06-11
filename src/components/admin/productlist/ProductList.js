import {Container,Button,Table} from "react-bootstrap";
import {Link} from "react-router-dom";



function ProductList() {

  return (
    
    <Container className="contlp">
        <h3 className="lp">List Product</h3>
        <Table striped  hover variant="dark">
            <thead>
                <tr>
                <th className="plno">No</th>
                <th className="plimg">Photo</th>
                <th className="plname">Product Name</th>
                <th className="pldesc">Product Desc</th>
                <th className="plprice">Price</th>
                <th className="plqty">Qty</th>
                <th className="plact">Action</th>
                </tr>
                </thead>
            <tbody>
                <tr >
                    <td className="plno">1</td>
                    <td className="plimg">image</td>
                    <td className="plname">Mouse</td>
                    <td className="pldesc">Lorem, ipsum dmouse ...</td>
                    <td className="plprice">500.000</td>
                    <td className="plqty">600</td>
                    <td className="plact">
                        <Button className="bg-success  btneditcat">Edit</Button>
                        <Button className="bg-danger  btndeletecat">Delete</Button>
                    </td>
                </tr>

                <tr >
                    <td className="plno">1</td>
                    <td className="plimg">image</td>
                    <td className="plname">Mouse</td>
                    <td className="pldesc">Lorem, ipsum dmouse ...</td>
                    <td className="plprice">500.000</td>
                    <td className="plqty">600</td>
                    <td className="plact">
                        <Button className="bg-success  btneditcat">Edit</Button>
                        <Button className="bg-danger  btndeletecat">Delete</Button>
                    </td>
                </tr>

                <tr >
                    <td className="plno">1</td>
                    <td className="plimg">image</td>
                    <td className="plname">Mouse</td>
                    <td className="pldesc">Lorem, ipsum dmouse ...</td>
                    <td className="plprice">500.000</td>
                    <td className="plqty">600</td>
                    <td className="plact">
                        <Button className="bg-success  btneditcat">Edit</Button>
                        <Button className="bg-danger  btndeletecat">Delete</Button>
                    </td>
                </tr>

                <tr >
                    <td className="plno">1</td>
                    <td className="plimg">image</td>
                    <td className="plname">Mouse</td>
                    <td className="pldesc">Lorem, ipsum dmouse ...</td>
                    <td className="plprice">500.000</td>
                    <td className="plqty">600</td>
                    <td className="plact">
                        <Button className="bg-success  btneditcat">Edit</Button>
                        <Button className="bg-danger  btndeletecat">Delete</Button>
                    </td>
                </tr>
                </tbody>
        </Table>
    </Container>
  )
}

export default ProductList