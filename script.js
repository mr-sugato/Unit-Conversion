  // Conversion rates
  // 1 meter = 3.281 feet
  // 1 liter = 0.264 gallon
  // 1 kilo = 2.204 pound

  let mass = document.getElementById("js-mass");
  let length = document.getElementById("js-lenght");
  let volume = document.getElementById("js-volume");
  let btn = document.getElementById("js-btn-con");
  length.textContent = `0 meters = 0 feet | 0 feet = 0 meters`;  
  volume.textContent = `0 liters = 0 gallons | 0 gallons = 0 liters`;
  mass.textContent = `0 kilos = 0 pounds | 0 pounds = 0 kilos`;
  btn.addEventListener("click", function () {
    // x = vl.value;
    let vl = Number(document.getElementById("js-inpt").value);
    render(vl,length,volume,mass);
  });

  function render(value,l,v,m) {
    // Length 
    const metersToFeet = (value * 3.281).toFixed(3);
    const feetToMeters = (value / 3.281).toFixed(3);

    // Volume 
    const litersToGallons = (value * 0.264).toFixed(3);
    const gallonsToLiters = (value / 0.264).toFixed(3);

    // Mass
    const kilosToPounds = (value * 2.204).toFixed(3);
    const poundsToKilos = (value / 2.204).toFixed(3);

    l.textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;
    v.textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;
    m.textContent = `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`;
  }
