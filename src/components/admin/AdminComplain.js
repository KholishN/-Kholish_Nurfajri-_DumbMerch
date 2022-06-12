import {Container} from "react-bootstrap";
import customer from "../../images/customer.jpg"
import NavigationBarAdmin from "./NavigationBarAdmin"


function AdminComplain() {
  return (
    
    <Container >
        <NavigationBarAdmin />
        <div className="contccadmin">
        <div className="adminpage ab">
            
           <div className="d-grid ba">
           <div className="d-flex">
            <div className="ccleftadmin">
            <img src={customer} alt="admin" className="adminphoto"/>
            </div>
            <div className="ccrightadmin">
            <p className="nameComplainadmin">Nata</p>
            <p className="messageComplainadmin">Lorem ipsum dolor sit amet.</p>
            </div>
            </div>
           </div>
            
           <div className="d-grid ba">
           <div className="d-flex">
            <div className="ccleftadmin">
            <img src={customer} alt="admin" className="adminphoto"/>
            </div>
            <div className="ccrightadmin">
            <p className="nameComplainadmin">Nata</p>
            <p className="messageComplainadmin">Lorem ipsum dolor sit amet.</p>
            </div>
            </div>
           </div>

            <div className="garisadmin">
            </div>
            
            
            <div className="costcontentadmin">
                <div className="pz">

                <div className="warpbubbleadmin warpendadmin">
                        <div className="chatadmin">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eum?.</p>
                        </div>
                        <div className="triangle-right"></div>
                    </div>

                <div className="warpbubbleadmin">
                        <div className="bubble">
                            <img src={customer} alt="chatadmin" className="imgmsgcostadmin" />
                        </div>
                        <div className="triangle-left"></div>
                        <div className="chatadmin">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eum?.</p>
                        </div>
                    </div>

                

                <input type="text" className="messagecostadmin" placeholder="Sand Message.."/>
                </div>
            </div>
            </div>
            </div>
    </Container>
  ) 
}

export default AdminComplain