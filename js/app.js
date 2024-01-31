const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function(){
const cityName = document.getElementById('city-name').value;


fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=9f4236b48a5571ce9eb267d8af6f329b')
.then(res => res.json())
.then(data => {
    const cityName = data.name;
    const tem = data.main.temp;
    const temp = tem - 273.15;
    const condition = data.weather[0].main;

    document.getElementById('city').innerText = cityName;
    document.getElementById('temperature').innerText = temp.toFixed(2);
    document.getElementById('des').innerText = condition;
    })
    .catch(res => alert('Please enter valid city name!'));

})