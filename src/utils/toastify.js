import {toast} from "react-toastify"

class toastify {
    successMessage(message){
        toast.success(message);
    }
    errorMessage(message){
        toast.error(message);
    }
    warningMessage(message){
        toast.warn(message);
    }
    infoMessage(message){
        toast.info(message);
    }
}

export default new toastify();