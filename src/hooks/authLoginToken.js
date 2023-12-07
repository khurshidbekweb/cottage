const token = localStorage.getItem("token")

export const authToken = () =>{
    if(!token){
        return false
    }
    return true
}