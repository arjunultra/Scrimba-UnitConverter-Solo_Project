const convertBtn = document.getElementById("convert-btn");
let inputValue = document.getElementById("input-text");
convertBtn.addEventListener("click", function () {
  getLength();
});
function getLength() {
  // 1 meter = 3.281 feet
  let oneMeter = 3.281;
  let myMeter = inputValue.value * oneMeter;
  console.log(myMeter);
  let myFoot = inputValue.value / oneMeter;
  console.log(Number(myFoot.toFixed(2)));
}
