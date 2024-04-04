import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useRef } from 'react';
import { TariffUtils } from '../utils/tariff.utilis';
import { QUERY_KEYS } from '../Query/query-keys';
import toastify from '../utils/toastify';
import { ALL_DATA } from '../Query/get_all';

const Tariff = (props) => {
    const activete = useRef()
    const queryClient = useQueryClient()
    const userCottage = ALL_DATA.useCottageUserId()
    console.log(userCottage.data);
    const addCottage = useMutation({
        mutationFn: TariffUtils.deletTariffDisable,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [QUERY_KEYS.tariff]})
            toastify.successMessage("Muvaffaqiyat qo'shildi 😍")
        }
    })
    console.log(props.tariff.data);
    const handleCottage = (e) => {
        addCottage.mutate({
            cottageId: e.target.tariff_cottage.value,
            tariffId: props.tariff.data.id,
        })
        activete.current.classList.remove('disabled')
    }
    return (
        <div className={props.modal ? "":"d-none"}>
            <span className='modal-wrap'></span>
            <div className="tariff-modal-wrap text-light p-3 ">
                <div className="tarif-modal-head justify-content-between py-2 align-items-lg-start  px-1  d-flex">
                    <h2 className='text-light fs-1'>Tariff</h2>
                    <div className="tarif-info text-light mt-5 ">                        
                        <p className="bg-light text-center text-dark fs-2 ms-5  rounded-5 w-50">15  дней</p>
                        <p className='fs-5 fw-bold text-center w-75 '>Price: 50,000 UZS</p>
                    </div>
                    <button onClick={()=>props.modalFn(false)} className='close-btn-modal btn d-block '><i className='bx fs-1 link-light  bx-x'></i></button>
                </div>
                <hr className='text-light'/>
                <h5 className='px-3'>Dachani tanlang</h5>
                <form onSubmit={handleCottage}>
                <select onChange={()=> activete.current.classList.remove('disabled')} defaultValue='default' name="tariff_cottage" className='mb-3 w-100 w-lg-50  mx-auto  form-select form-select-sm mt-3'>
                    <option value='default' selected>Dachani tanlang</option>
                    {userCottage.data?.length && userCottage.data.map(el => {
                        return <option value={el.id} className=''>{el.name}</option>
                    })}
                </select>
                <button type='submit' ref={activete}  className='btn disabled btn-success w-50  mx-auto d-block fw-bold '>Activite</button>
                </form>
            </div>
        </div>
    );
};

export default Tariff;