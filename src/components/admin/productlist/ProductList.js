import {Container,Button,Table} from "react-bootstrap";
import NavigationBarAdmin from "../NavigationBarAdmin"
import {useNavigate} from "react-router-dom"
import {useState,useEffect} from "react"
import DeleteData from "./ModalPeoduct"





function ProductList() {

    const navigate = useNavigate();
    const handleNavigateToEditProduct = () => {
        navigate("/edit-product-list")
    }

    const [confirmDelete, setConfirmDelete] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (id) => {
        handleShow();
      };

      useEffect(() => {
        if (confirmDelete) {

          handleClose();
          
          setConfirmDelete(null);
        }
      }, [confirmDelete]);

  return (
    
    <Container >
        <NavigationBarAdmin />

        <div className="contlp">
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
                        <Button className="bg-success  btneditcat btn-sm" onClick={handleNavigateToEditProduct}>Edit</Button>
                        <Button className="bg-danger  btndeletecat btn-sm" onClick={handleDelete}>Delete</Button>
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
                        <Button className="bg-success  btneditcat btn-sm" onClick={handleNavigateToEditProduct}>Edit</Button>
                        <Button className="bg-danger  btndeletecat btn-sm" onClick={handleDelete}>Delete</Button>
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
                        <Button className="bg-success  btneditcat btn-sm" onClick={handleNavigateToEditProduct}>Edit</Button>
                        <Button className="bg-danger  btndeletecat btn-sm" onClick={handleDelete}>Delete</Button>
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
                        <Button className="bg-success  btneditcat btn-sm" onClick={handleNavigateToEditProduct}>Edit</Button>
                        <Button className="bg-danger  btndeletecat btn-sm" onClick={handleDelete}>Delete</Button>
                    </td>
                </tr>
                </tbody>
        </Table>
        </div>
        <DeleteData
        setConfirmDelete={setConfirmDelete}
        show={show}
        handleClose={handleClose}
      />
    </Container>
  )
}

export default ProductList