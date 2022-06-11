import admin from "../../images/admin.png"
import {Container} from "react-bootstrap";


function CustomerComplain() {
  return (
    <Container className="contcc    ">
        <div className="admin a">
            
           <div className="d-grid b">
           <div className="d-flex">
            <div className="ccleft">
            <img src={admin} alt="admin" className="adminphoto"/>
            </div>
            <div className="ccright">
            <p className="nameComplain">Nata</p>
            <p className="messageComplain">Lorem ipsum dolor sit amet.</p>
            </div>
            </div>
           </div>
            
           <div className="d-grid b">
           <div className="d-flex">
            <div className="ccleft">
            <img src={admin} alt="admin" className="adminphoto"/>
            </div>
            <div className="ccright">
            <p className="nameComplain">Nata</p>
            <p className="messageComplain">Lorem ipsum dolor sit amet.</p>
            </div>
            </div>
           </div>

            <div className="garis">
            </div>
            
            
            <div className="costcontent">
                <div className="p">

                <div className="warpbubble warpend">
                        <div className="chat">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eum?.</p>
                        </div>
                        <div className="triangle-right"></div>
                    </div>

                <div className="warpbubble">
                        <div className="bubble">
                            <img src={admin} alt="chat" className="imgmsgcost" />
                        </div>
                        <div className="triangle-left"></div>
                        <div className="chat">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eum?.</p>
                        </div>
                    </div>

                

                <input type="text" className="messagecost" placeholder="Sand Message.."/>
                </div>
            </div>
            </div>
        
    </Container>
  )
}

export default CustomerComplain