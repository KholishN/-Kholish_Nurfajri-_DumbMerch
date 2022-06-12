import {Container,Button,InputGroup,Form} from "react-bootstrap";
import NavigationBarAdmin from "../NavigationBarAdmin"


function EditProductList() {
  return (
    <Container >

    <NavigationBarAdmin />
        <div className="editlp">
        <div>
            <h3 className="editcattit">Edit Product</h3>
            </div>


        <Form.Control type="file" size="md" className="btnfile" />

        <InputGroup >
        <Form.Control
            placeholder="Category"
            aria-label="Category"
            aria-describedby="basic-addon1"
            className="editcatinput"
        />
        </InputGroup>

        <InputGroup>
        <Form.Control
        as="textarea"
        aria-label="With textarea"
        className="editcatinput tareaedit"
            />
        </InputGroup>

        <InputGroup >
        <Form.Control
            placeholder="Category"
            aria-label="Category"
            aria-describedby="basic-addon1"
            className="editcatinput"
        />
        </InputGroup>

        <InputGroup >
        <Form.Control
            placeholder="Category"
            aria-label="Category"
            aria-describedby="basic-addon1"
            className="editcatinput"
        />
        </InputGroup>

        <Button className="editcatbtn">Save</Button>
        </div>
    </Container>
  )
}

export default EditProductList