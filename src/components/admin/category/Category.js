import {Container,Button,Table} from "react-bootstrap";
import NavigationBarAdmin from "../NavigationBarAdmin"
import {useNavigate} from "react-router-dom"
import {useState,useEffect} from "react"
import DeleteData from "./ModalsCategory";



function Category() {

    const navigate = useNavigate();
    const handleNavigateToEditCategory = () => {
        navigate("/edit-category")
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

        <div className="ContCat">
        <h4 className="listcat">List Category</h4>
        <Table striped  hover variant="dark">
            <thead>
                <tr>
                <th className="catno">No</th>
                <th className="catname">Category Name</th>
                <th className="cataction">Action</th>
                </tr>
                </thead>
            <tbody>
                <tr >
                    <td className="catno">1</td>
                    <td className="catname">Mouse</td>
                    <td className="cataction">
                        <Button className="bg-success  btneditcat btn-sm" onClick={handleNavigateToEditCategory}>Edit</Button>
                        <Button className="bg-danger  btndeletecat btn-sm" onClick={handleDelete} >Delete</Button>
                    </td>
                </tr>
                <tr >
                    <td className="catno">2</td>
                    <td className="catname">Keyboard</td>
                    <td className="cataction">
                        <Button className="bg-success  btneditcat btn-sm" onClick={handleNavigateToEditCategory}>Edit</Button>
                        <Button className="bg-danger  btndeletecat btn-sm" onClick={handleDelete}>Delete</Button>
                    </td>
                </tr>
                <tr >
                    <td className="catno">3</td>
                    <td className="catname">Monitor</td>
                    <td className="cataction">
                        <Button className="bg-success  btneditcat btn-sm" onClick={handleNavigateToEditCategory}>Edit</Button>
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

export default Category