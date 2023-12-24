const sunriseTimeElement = document.getElementById("sunrise")
const fajrTimeElement = document.getElementById("fajr")
const dhuhrTimeElement = document.getElementById("dhuhr")
const asrTimeElement = document.getElementById("asr")
const maghribTimeElement = document.getElementById("maghrib")
const ishaTimeElement = document.getElementById("isha")
const todayDateElement = document.getElementById("date")

const date = new Date()

todayDateElement.innerHTML = date.toDateString().substring(4)
console.log()

document.querySelectorAll(".city").forEach((city) => {
    city.addEventListener("click", () => {
        const cityName = city.dataset.name
        const country = city.dataset.country
        document.querySelectorAll(".selected-city").forEach((city) => city.classList.remove("selected-city"))
        city.classList.add("selected-city")
        getPrayersTimeByCity(country, cityName)
    })
})

getPrayersTimeByCity("SA", "Mecca")

function getPrayersTimeByCity(country, city) {
    axios.get(`http://api.aladhan.com/v1/calendarByCity/${date.getFullYear()}/${date.getMonth()}?city=${city}&country=${country}`)
    .then((response) => {   
        const prayersTimingsObj = response.data.data[date.getDate()].timings
        sunriseTimeElement.innerHTML = prayersTimingsObj.Sunrise.substring(0,5)
        fajrTimeElement.innerHTML = prayersTimingsObj.Fajr.substring(0,5)
        dhuhrTimeElement.innerHTML = prayersTimingsObj.Dhuhr.substring(0,5)
        asrTimeElement.innerHTML = prayersTimingsObj.Asr.substring(0,5)
        maghribTimeElement.innerHTML = prayersTimingsObj.Maghrib.substring(0,5)
        ishaTimeElement.innerHTML = prayersTimingsObj.Isha.substring(0,5)
    }).catch((error) => console.log(error))
    
}   