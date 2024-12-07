const btn_return = document.getElementById("button_return");
btn_return.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const resualt_rs = document.getElementById("resualt");

const btn_click_here = document.getElementById("button_Click_here");
btn_click_here.addEventListener("click", () => {
  resualt.textContent = "Xin chào";
});

const btn_maytinh = document.getElementById("may_tinh");
btn_maytinh.addEventListener("click", () => {
  window.location.href = "maytinhdongian.html";
});
function giaithua() {
  const number_input = document.getElementById("txt_soN").value;
  const number = parseInt(number_input);
  if (number < 0) {
    return;
  }
  let n = 1;
  for (let i = 2; i < number; i++) {
    giaithua *= i;
  }
  const result = document.getElementById("result_giaithua");
  result.textContent = giaithua();
}

const btn_reset = document.getElementById("btn_reset");
result.textContent = "";
