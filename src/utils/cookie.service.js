function setCookie(name, value, hours) {
    const expires = new Date(Date.now() + hours * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

function getCookie(name) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(";");

    for (const cookie of cookies) {
        const trimmedCookie = cookie.trim();

        if (trimmedCookie.startsWith(cookieName)) {
            return trimmedCookie.substring(cookieName.length);
        }
    }

    return null;
}

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function logout(name) {
    deleteCookie(name);
}

function storeDataInLocalStorage(key, data) {
    try {
  
        const dataString = JSON.stringify(data);
        localStorage.setItem(key, dataString);
    } catch (error) {
        return false;
    }
}


function getDataFromLocalStorage(key) {
    try {
      
        const dataString = localStorage.getItem(key);

      
        const data = JSON.parse(dataString);
        return data;
    } catch (error) {
    
        return null;
    }
}

function deleteDataFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        console.log(`Data with key "${key}" deleted from localStorage.`);
    } catch (error) {
        console.error('Error deleting data from localStorage:', error);
    }
}


module.exports = {
    setCookie,
    getCookie,
    deleteCookie,
    logout,
    storeDataInLocalStorage,
    getDataFromLocalStorage,
    deleteDataFromLocalStorage
};