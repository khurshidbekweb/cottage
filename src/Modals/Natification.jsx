import React, { useRef } from 'react'
import Bell from "../assets/images/bell.svg";
import MiniBell from "../assets/images/mini-bell.svg";
import './modal.css'
import { Link } from 'react-router-dom';
function Natification() {
    const notificationModal = useRef(null)
  return (
    <>       
        <button class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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

       
        <div class="modal fade modal-natif" ref={notificationModal} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-natif-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Notifications</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur
                            <Link to='notification'> More info</Link>
                        </p>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea molestiae laborum debitis deleniti optio perspiciatis itaque praesentium! Dolore dolores ab, culpa nihil maxime esse explicabo laborum eos perspiciatis minima.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione rerum esse eligendi repellendus, sit iste enim laboriosam quis fugiat vel alias. Quibusdam iusto fuga placeat eum sit nobis amet suscipit.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est illum amet fugit eligendi facilis aliquid totam iste sapiente. Illum impedit dolor obcaecati nesciunt, harum praesentium explicabo voluptas quia tempore eveniet!
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Natification