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
