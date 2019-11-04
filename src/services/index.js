
exports.calculator = async (fname, sname) => {
    const response = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "love-calculator.p.rapidapi.com",
            "x-rapidapi-key": "8748ffe5b7msh5358ac3edcfa346p1f8c20jsnead576b03eed"
        }
    });
    return response;
}

exports.weatherAPI = async (dispatch) => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Chennai,IN&appid=16251f7122ebfee82455ad435fa46da3`);
    const data = await api_call.json();
    dispatch(data);}
