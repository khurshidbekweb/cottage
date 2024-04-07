import Bell from "../assets/images/bell.svg";
import MiniBell from "../assets/images/mini-bell.svg";
import "./modal.css";
import { ALL_DATA } from "../Query/get_all";

function Natification() {
  const user = JSON.parse(localStorage.getItem("user")) || undefined;


  const notification = ALL_DATA.useNotificationUser(user?.id);

  return (
    <>
      <button
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
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
      <div
        className="modal modal-notification fade modal-natif"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-natif-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Notifications
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {notification?.data?.length &&
                notification.data.map((mes) => {
                  return (
                    <div
                      className="d-flex justify-content-between  align-items-center"
                      key={mes.id}
                    >
                      <p className="text-notif w-75">{mes.message}</p>
                      {mes.type === "personal" ? (
                        <span className="pesonal-notif btn text-white d-block btn-sm btn-success">
                          {mes.type}
                        </span>
                      ) : (
                        ""
                      )}
                      <hr />
                    </div>
                  );
                })}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-notif btn btn-primary"
                data-bs-dismiss="modal"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Natification;
