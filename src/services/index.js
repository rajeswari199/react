import CALCULATOR from '../store/action';

export const calculator = async (fname, sname) => {
    const response = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "love-calculator.p.rapidapi.com",
            "x-rapidapi-key": "8748ffe5b7msh5358ac3edcfa346p1f8c20jsnead576b03eed"
        }
    });
    const data = await response.json();
    CALCULATOR(data)
}

export const weatherAPI = async (dispatch) => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Chennai,IN&appid=16251f7122ebfee82455ad435fa46da3`);
    const data = await api_call.json();
    dispatch(data);
}

export const trainAPI = async (train) => {
    const apiData = await fetch("https://trains.p.rapidapi.com/", {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "trains.p.rapidapi.com",
            "x-rapidapi-key": "8748ffe5b7msh5358ac3edcfa346p1f8c20jsnead576b03eed",
            "content-type": "application/json",
            "accept": "application/json"
        },
        "body": JSON.stringify({ "search": `${train.name}` })
    })
    return await apiData.json();
}
