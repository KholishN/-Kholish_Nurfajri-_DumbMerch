import {Container,Button,Table} from "react-bootstrap";


function Category() {
  return (
    <Container className="ContCat">
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
                        <Button className="bg-success  btneditcat">Edit</Button>
                        <Button className="bg-danger  btndeletecat">Delete</Button>
                    </td>
                </tr>
                <tr >
                    <td className="catno">2</td>
                    <td className="catname">Keyboard</td>
                    <td className="cataction">
                        <Button className="bg-success  btneditcat">Edit</Button>
                        <Button className="bg-danger  btndeletecat">Delete</Button>
                    </td>
                </tr>
                <tr >
                    <td className="catno">3</td>
                    <td className="catname">Monitor</td>
                    <td className="cataction">
                        <Button className="bg-success  btneditcat">Edit</Button>
                        <Button className="bg-danger  btndeletecat">Delete</Button>
                    </td>
                </tr>

                </tbody>
        </Table>
    </Container>

  )
}

export default Category