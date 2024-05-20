var menuIcon = document.querySelector('#menu-icon');
var closeIcon = document.querySelector('#close_icon');
var linkWrapper = document.querySelector('.link_wrapper');
var menuItems = document.querySelectorAll('.menu_list li a');

menuIcon.onclick = () => {
   linkWrapper.style.display = 'block';
}

closeIcon.onclick = () => {
   linkWrapper.style.display = 'none';
}

menuItems.forEach(item => {
   item.onclick = () => {
      if (innerWidth <= 800) {
         setTimeout(() => {
            linkWrapper.style.display = 'none';
         }, 300);
      }
   }
})
