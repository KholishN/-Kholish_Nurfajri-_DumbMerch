import {Container,Button,InputGroup,Form} from "react-bootstrap";

function EditProductList() {
  return (
    <Container className="editlp">
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

    </Container>
  )
}

export default EditProductList