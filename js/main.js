$('.mobtoggle').click(function(){
  $('.mobtoggle').toggleClass('open');
  $('.MenuBar').toggleClass('show');
});



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("pr-active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



document.querySelectorAll(".has-sub .menu-head").forEach(function (head) {
    head.addEventListener("click", function () {
        let parent = this.parentElement;

        parent.classList.toggle("active");

        let submenu = parent.querySelector(".submenu");
        
        if (parent.classList.contains("active")) {
            submenu.style.maxHeight = submenu.scrollHeight + "px";
        } else {
            submenu.style.maxHeight = "0px";
        }
    });
});
