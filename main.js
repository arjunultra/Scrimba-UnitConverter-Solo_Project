const convertBtn = document.getElementById("convert-btn");
const lengthPara = document.getElementById("length-para");
let inputValue = document.getElementById("input-text");
convertBtn.addEventListener("click", function () {
  getLength();
});
function getLength() {
  // 1 meter = 3.281 feet
  const lengthConvertFactor = 3.281;
  let meterInFeet = inputValue.value * lengthConvertFactor;
  const feetAnswer = Number(meterInFeet.toFixed(2));
  let feetInMeter = inputValue.value / lengthConvertFactor;
  const meterAnswer = Number(feetInMeter.toFixed(2));
  let baseString = `${inputValue.value} meters = ${feetAnswer} feet | ${inputValue.value} feet = ${meterAnswer} meters`;
  lengthPara.innerHTML = baseString;
}
function getVolume() {
  // 1 liter = 0.264 gallon
  const volumeConvertFactor = 0.264;
}
