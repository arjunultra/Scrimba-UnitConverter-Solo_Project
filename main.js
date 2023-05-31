const convertBtn = document.getElementById("convert-btn");
const lengthPara = document.getElementById("length-para");
const volumePara = document.getElementById("volume-para");
const massPara = document.getElementById("mass-para");
let inputValue = document.getElementById("input-text");
convertBtn.addEventListener("click", function () {
  getLength();
  getVolume();
  getMass();
});
function getLength() {
  // 1 meter = 3.281 feet
  const lengthConvertFactor = 3.281;
  const meterInFeet = inputValue.value * lengthConvertFactor;
  const feetAnswer = Number(meterInFeet.toFixed(2));
  const feetInMeter = inputValue.value / lengthConvertFactor;
  const meterAnswer = Number(feetInMeter.toFixed(2));
  const baseString = `${inputValue.value} meters = ${feetAnswer} feet | ${inputValue.value} feet = ${meterAnswer} meters`;
  lengthPara.innerHTML = baseString;
}
function getVolume() {
  // 1 liter = 0.264 gallon
  const volumeConvertFactor = 3.785;
  const literInGallon = inputValue.value / volumeConvertFactor;
  const gallonAnswer = Number(literInGallon.toFixed(2));
  const gallonInLiter = inputValue.value * volumeConvertFactor;
  const literAnswer = Number(gallonInLiter.toFixed(2));
  const baseString = `${inputValue.value} liters = ${gallonAnswer} gallons | ${inputValue.value} gallons = ${literAnswer} liters`;
  volumePara.innerHTML = baseString;
}
function getMass() {
  const massConvertFactor = 2.205;
  const kiloInPounds = inputValue.value * massConvertFactor;
  const poundAnswer = Number(kiloInPounds.toFixed(2));
  const poundInKilo = inputValue.value / massConvertFactor;
  const kiloAnswer = Number(kiloInPounds.toFixed(2));
  const baseString = `${inputValue.value} kilos = ${poundAnswer} pounds | ${inputValue.value} pounds = ${kiloAnswer} kilos`;
  massPara.innerHTML = baseString;
}
