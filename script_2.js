function GiaiThua(n) {
  if (n <= 0) {
    console.log("Nhập lại");

    return 1;
  } else {
    return n * GiaiThua(n - 1);
  }
}
const btn_tinh = document.getElementById("btn_tinh_giaithua");
btn_tinh.addEventListener("click", () => {
  let number_inputt = document.getElementById("txt_input");
  let number = parseInt(number_inputt.value);
  let txt_result = document.getElementById("txt_result");
  txt_result.textContent = "Giai thừa của " + number + " = " + GiaiThua(number);
});

const btn_reset = document.getElementById("btn_reset");
btn_reset.addEventListener("click", () => {
  const txt_input = document.getElementById("txt_input");
  const txt_result1 = document.getElementById("txt_result");
  txt_input.value = " ";
  txt_result1.textContent = "Nhập 1 số nguyên dương khác ";
});

const btn_tienhanh = document.getElementById("btn_user");
btn_tienhanh.addEventListener("click", () => {
  let input = document.getElementById("username");
  let output = document.getElementById("txt_ketqua");
  output.textContent =
    "Chào bạn " + input.value + " rất vui được làm việc với bạn !";
});
