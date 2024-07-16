$(document).ready(function () {
  $(".accor").click(function () {
    $("section>p").slideToggle(400, function () {
      let a = $(".accor").val();
      if (a == `<i class="fa-solid fa-chevron-right bg-dark text-light"></i>`) {
        $(".accor").val(`<i class="fa-solid fa-angle-down bg-dark text-light"></i>`);

      }
      else {
        $(".accor").val(`<i class="fa-solid fa-chevron-right bg-dark text-light"></i>`)
      }
    })
  })
})



// Function to validate email format
function isValidEmail(email) {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


document.getElementById('emailInput').addEventListener('change', function () {
  const email = this.value.trim();

  if (isValidEmail(email)) {
    alert(`Thankyou for you time : ${email}`);
    email.value = '';

  } else {
    alert(`please provide valid email : ${email}`);

  }
  email.innerHTML = '';
});

function openNewPage() {

  window.open('http://127.0.0.1:5500/index2.html', '_blank'); // '_blank' opens in a new tab
}
function openShopPage() {

  window.open('http://127.0.0.1:5500/slide.html', '_blank'); // '_blank' opens in a new tab
}

