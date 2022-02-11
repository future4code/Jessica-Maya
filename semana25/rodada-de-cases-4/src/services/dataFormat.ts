const formatDate = (todayDate: any) => {

    let nwd = todayDate 

    let currentData = ((nwd.getDate() )) + "/" + ((nwd.getMonth() + 1)) + "/" + nwd.getFullYear(); 

    return currentData

}

export default formatDate 