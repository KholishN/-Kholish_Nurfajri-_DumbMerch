import {Container,Card} from "react-bootstrap";
import mouse from "../../images/mouse.png";
import Logo from "../../images/Frame.png"
import keyboard from "../../images/keyboard.png"
import NavbarCustomer from "./NavigationBarCustomer"




function Profile() {
  return (
    <Container >
        <NavbarCustomer />
        <div className="containerProfile">
        <div className="profileLeft">
            <div className="block">
            <h3 className="d-block myProfile">My Profile</h3>
            <img src={mouse} className="profileImage" alt="foto" />
            </div>
            <ul className="biodata">
                <li className="biodataTitle">Name</li>
                <li className="biodataContent">Kholish Nurfajri</li>
                <li className="biodataTitle">Email</li>
                <li className="biodataContent">kholisnurfajri1@gmail.com</li>
                <li className="biodataTitle">Phone</li>
                <li className="biodataContent">085780075142</li>
                <li className="biodataTitle">Gende</li>
                <li className="biodataContent">Mele</li>
                <li className="biodataTitle">Address</li>
                <li className="biodataContent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</li>
            </ul>
        </div>
        
        <div className="profileRight">
            <div className="d-block">
                <h3 className="profileTrans">My Transaction</h3>
                <Card className="profileCard d-flex px-4 py-2">
                <Card.Img className="profilePicture d-flex" variant="left" src={keyboard} />
                <div className="profile-card-text">
                    <div className="profile-card-content">
                    <h3 className="profile-card-title">Mouse</h3>
                    <p className="profile-card-date"><b>Saturday</b> 11 Juni 2022</p>
                    <p className="profile-card-price">Price : Rp.500.000</p>
                    <p className="profile-card-sub-price">Sub Total : Rp.500.000</p>
                    </div>
                <Card.Img src={Logo} className="profileLogo"/>
                </div>
            </Card>

            <Card className="profileCard d-flex px-4 py-2">
                <Card.Img className="profilePicture d-flex" variant="left" src={keyboard} />
                <div className="profile-card-text">
                    <div className="profile-card-content">
                    <h3 className="profile-card-title">Mouse</h3>
                    <p className="profile-card-date"><b>Saturday</b> 11 Juni 2022</p>
                    <p className="profile-card-price">Price : Rp.500.000</p>
                    <p className="profile-card-sub-price">Sub Total : Rp.500.000</p>
                    </div>
                <Card.Img src={Logo} className="profileLogo"/>
                </div>
            </Card>

            <Card className="profileCard d-flex px-4 py-2">
                <Card.Img className="profilePicture d-flex" variant="left" src={keyboard} />
                <div className="profile-card-text">
                    <div className="profile-card-content">
                    <h3 className="profile-card-title">Mouse</h3>
                    <p className="profile-card-date"><b>Saturday</b> 11 Juni 2022</p>
                    <p className="profile-card-price">Price : Rp.500.000</p>
                    <p className="profile-card-sub-price">Sub Total : Rp.500.000</p>
                    </div>
                <Card.Img src={Logo} className="profileLogo"/>
                </div>
            </Card>
        </div>  
        
            </div>
            </div>
    </Container>
  )
}

export default Profile