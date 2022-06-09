import {Button,Card,InputGroup,FormControl,Container} from "react-bootstrap"
import Logo from "../images/Frame.png"
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import {useState} from "react"




const Login = () => {

    const [login, setLogin] = useState({
        isLogin : false,
        user: {
            email: "",
            password: ""
        }
    })

    


    return(
        
            <Container className="d-flex loginCard">
            <div className="left me-5">
                <img src={Logo} alt="logo" className="mb-5" />
                <h1 className="text-light mb-3">Easy,Fast and Reliable</h1>
                <p className="text-secondary mb-5">Go shopping for merchandise,just go merch shopping. 
                                                the biggest merchandise in <b>Indonesia</b></p>
                <Button className="me-5  py-1">Login</Button>
                <Link to="/Register"className="mt-5 text-light text-decoration-none">Register</Link>
                </div>
            <div className="right ms-5">
                <Card style={{ width: '20rem' }} className="formLogin text-light p-2">
                    <Card.Body>
                        <Card.Title className="mb-4 fs-2">Login</Card.Title>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            type="text"
                            className="loginInput"
                            />
                            </InputGroup>
                        <InputGroup className="mb-3" >
                            <FormControl
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                            type="password"
                            className="loginInput"
                            />
                            </InputGroup>
                        <Button className="mt-4 loginbtn" type="submit">Login</Button>
                        </Card.Body>
                    </Card>
            </div>
            </Container>

    )
}
export default Login