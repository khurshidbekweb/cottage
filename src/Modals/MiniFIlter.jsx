import React, { useContext, useState } from 'react';
import { ALL_DATA } from '../Query/get_all';
import { FilterLeng } from '../configs/language';
import { LanguageContext } from '../helper/languageContext';
import { FaSearch } from "react-icons/fa";
import Search from "../assets/images/search.svg";
import MiniSearch from "../assets/images/mini-search.svg";

const MiniFIlter = () => {

    const cottageType = ALL_DATA.useCottageType()?.data;

  const place = ALL_DATA.usePlace()?.data;

  const [filter, setFilter] = useState({
    place: "",
    type: "",
    price: "",
  });

  const cottageFilter = ALL_DATA.useCottageFilter(filter);


    const handleFilterCottage = (e) => {
        e.preventDefault();
        setFilter({
          place: e.target.place.value,
          type: e.target.type.value,
          price: e.target.price.value,
        });
      };
  const { languageChange } = useContext(LanguageContext);

    return (
        <>
        <button
        className="btn"
        style={{marginRight:"30px"}}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >hebfvher
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
};

export default MiniFIlter;