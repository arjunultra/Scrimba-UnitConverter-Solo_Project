const convertBtn = document.getElementById("convert-btn");
let inputValue = document.getElementById("input-text");
convertBtn.addEventListener("click", function () {
  getLength();
});
function getLength() {
  // 1 meter = 3.281 feet
  let oneMeter = 3.281;
  let oneFeet = 0.304;
  let myMeter = inputValue.value * oneMeter;
  console.log(myMeter);
}
