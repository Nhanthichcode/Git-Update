const btn_return = document.getElementById("button_return");
btn_return.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const btn_click_here = document.getElementById("button_Click_here");
const resualt_rs = document.getElementById("resualt");
btn_click_here.addEventListener("click", () => {
  resualt.textContent = "Xin chào";
});

const btn_maytinh = document.getElementById("may_tinh");
btn_maytinh.addEventListener("click", () => {
  window.location.href = "maytinhdongian.html";
});

function GiaiThua(n) {
  if (n <= 0) return 1;
  else {
    return GiaiThua(n - 1) * n;
  }
}
const btn_tinh_giaithua = document.getElementById("btn_tinh_giaithua");
btn_tinh_giaithua.addEventListener("click", () => {
  let number_inputt = document.getElementById("txt_soN");
  let number = parseInt(number_inputt.value);
  let txt_result = document.getElementById("txt_result_giaithua");
  txt_result.textContent = " " + GiaiThua(number);
});

const btn_reset = document.getElementById("btn_reset");
btn_reset.addEventListener("click", () => {
  const txt_input = document.getElementById("txt_soN");
  const txt_result1 = document.getElementById("txt_result_giaithua");
  txt_input.value = 0;
  txt_result1.value = 0;
});
