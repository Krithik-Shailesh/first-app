
class StorageUtils {

    static setToLocalStorage(key, data){
        localStorage.setItem(key, data)
    }

    static getFromLocalStorage(key){
        let data =  localStorage.getItem(key)
        return data
    }
}

module.exports = StorageUtils