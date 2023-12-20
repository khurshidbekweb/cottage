import React, { useRef } from 'react'
import Bell from "../assets/images/bell.svg";
import MiniBell from "../assets/images/mini-bell.svg";
import './modal.css'
function Natification() {
    const notificationModal = useRef(null)
  return (
    <>       
        <button className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div className="bell">
            <img
              className="minibell-img"
              src={MiniBell}
              width="14.77"
              height="16.88"
              alt="bell"
            />
            <img
              className="bell-img"
              src={Bell}
              width="26.25"
              height="30"
              alt="bell"
            />
          </div>
        </button>       
        <div className="modal fade modal-natif" ref={notificationModal} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-natif-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Notifications</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur  
                            {/* <Link to='notification'> More info</Link> */}
                        </p>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea molestiae laborum debitis deleniti.
                        </p>
                        <hr />
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione rerum esse eligendi repellendus. Quibusdam iusto fuga placeat eum sit nobis amet suscipit.
                        </p>
                        <hr />
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est illum amet fugit eligendi facilis aliquid totam iste sapiente!                       </p>
                    </div>
                    <div className="modal-footer">
                        {/* <button type="button" class="btn btn-secondary" >Close</button> */}
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Understood</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Natification