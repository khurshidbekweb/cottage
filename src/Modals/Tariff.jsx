import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { TariffUtils } from "../utils/tariff.utilis";
import { QUERY_KEYS } from "../Query/query-keys";
import toastify from "../utils/toastify";
import { ALL_DATA } from "../Query/get_all";

const Tariff = (props) => {
  const userCottage = ALL_DATA.useCottageUserId();
  const singleUser = ALL_DATA.useSingleUser()?.data
  const [isOpen, setIsOpen] = useState(false)
  // console.log(props);
  const activete = useRef();
  const queryClient = useQueryClient();
  const addCottage = useMutation({
    mutationFn: TariffUtils.addTariffActive,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.tariff] });
      toastify.successMessage("Muvaffaqiyatli ulandi 😍");
      setIsOpen(false)
    },
    onError: (err) =>{
      toastify.errorMessage(err.response.data.message.message)
      console.log(err);
      console.log(err.response.data.message.message);
    }
  });
  const handleCottage = (e) => {
    e.preventDefault()
    addCottage.mutate({
      cottageId: e.target.tariff_cottage.value,
      tariffId: props.tariff.id,
      assignedBy: singleUser.id
    });
    console.log(addCottage.variables);
    activete.current.classList.remove("disabled");
  };
  return (
    <div>
      <button
        className="tarif-btn border-0"
        onClick={() => setIsOpen(true)}
        type="button"
        data-bs-target={`#editCottageModal${props.id}`}
      >
        Активировать за {props.tariff.price}$
      </button>
      <div
        className={isOpen ? "": "d-none"}
        id={`editCottageModal${props.id}`}
        tabIndex="-1"
        aria-labelledby={`editCottageModal${props.id}Label`}
        aria-hidden="true"  
      >
        <span className="modal-wrap"></span>
        <div className="tariff-modal-wrap modal-dialog text-light p-3">
          <div className="modal-content">
          <div className="tarif-modal-head justify-content-between py-2 align-items-lg-start  px-1  d-flex">
            <h2 id={`editCottageModal${props.id}Label`} className="text-light fs-1">Tariff</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="close-btn-modal btn d-block"
            >
              <i className="bx fs-1 link-light  bx-x"></i>
            </button>
            <div className="tarif-info text-light mt-5 ">
              <p
                className="bg-light text-center text-dark fs-2 ms-5  rounded-5 w-50"
              >
                {props.tariff.days} дней
              </p>
              <p className="fs-5 fw-bold text-center w-75 ">
                Price: {props.tariff.price}
              </p>
            </div>            
          </div>
          <hr className="text-light" />
          <h5 className="px-3">Dachani tanlang</h5>
          <form onSubmit={handleCottage}>
            <select
              onChange={() => activete.current.classList.remove("disabled")}
              defaultValue="default"
              name="tariff_cottage"
              className="mb-3 w-100 w-lg-50  mx-auto  form-select form-select-sm mt-3"
            >
              <option value="default" selected>
                Dachani tanlang
              </option>
              {userCottage.data?.length &&
                userCottage.data.map((el) => {
                  return (
                    <option key={el.id} value={el.id} className="">
                      {el.name}
                    </option>
                  );
                })}
            </select>
            <button
              type="submit"
              ref={activete}
              className="btn disabled btn-success w-50  mx-auto d-block fw-bold "
            >
              Activite
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tariff;
