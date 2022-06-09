import {Button,Card,InputGroup,FormControl,Container} from "react-bootstrap"
import Logo from "../images/Frame.png"
import {useNavigate} from "react-router-dom"
import {useState} from "react"



const Register = () => {

    const [registers, setRegisters] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleOnChange = (e) =>{
        setRegisters({
            ...registers,
            [e.target.name]: e.target.value
        })

    }

    const handleOnSubmit = (e) =>{
        e.preventDefault()

        navigate("/Login")

        console.log(registers)
    }

    const navigate = useNavigate();
    const handleNavigateToLogin = () => {
        navigate("/Login")
    }




    return(
        
            <Container className="d-flex loginCard">
            <div className="left me-5">
                <img src={Logo} alt="logo" className="mb-5" />
                <h1 className="text-light mb-3">Easy,Fast and Reliable</h1>
                <p className="text-secondary mb-5">Go shopping for merchandise,just go merch shopping.
                                                the biggest merchandise in <b>Indonesia</b></p>
                <Button className="me-5 py-1" onClick={handleNavigateToLogin}>Login</Button>
                <a href="/Register" className="mt-5 text-light text-decoration-none">Register</a>
                </div>
            <form onSubmit={handleOnSubmit}>
            <div className="right ms-5">
                <Card style={{ width: '20rem' }} className="formLogin text-light p-2">
                    <Card.Body>

                        <Card.Title className="mb-4 fs-2">Register</Card.Title>

                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Name"
                            aria-label="Name"
                            aria-describedby="basic-addon1"
                            type="text"
                            className="loginInput"
                            name="name"
                            onChange = {handleOnChange}
                            value={registers.name}
                            />
                            </InputGroup>

                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            type="email"
                            className="loginInput"
                            name="email"
                            onChange = {handleOnChange}
                            value={registers.email}
                            />
                            </InputGroup>

                        <InputGroup className="mb-3" >
                            <FormControl
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                            type="password"
                            className="loginInput"
                            name="password"
                            onChange = {handleOnChange}
                            value={registers.password}
                            />
                            </InputGroup>

                        <Button className="mt-4 loginbtn"
                                type="submit"
                                >Register</Button>
                        </Card.Body>
                    </Card>
            </div>
            </form>
            </Container>

    )
}
export default Register