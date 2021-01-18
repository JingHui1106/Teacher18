 // 轮播图
 var currentIndex = 0;
 var id;
 var len = document.querySelector('.carousel').childElementCount;

 function carousel(index) {
     if (currentIndex === len) {
         currentIndex = index = 0
     }
     if (currentIndex < 0) {
         currentIndex = index = 2
     }
     document.querySelector('.current').className = '';
     document.querySelector('.circle li:nth-child(' + (index + 1) + ')').className = 'current'
     document.querySelector('.selection').className = '';
     document.querySelector('.carousel li:nth-child(' + (index + 1) + ')').className =
         'selection'
 }

 function prev() {
     currentIndex--;
     carousel(currentIndex);
 }

 function next() {
     currentIndex++;
     carousel(currentIndex);
 }
 var lis = document.querySelectorAll('.circle li');
 for (var i = 0; i < lis.length; i++) {
     lis[i].index = i;
     lis[i].onclick = function () {
         currentIndex = this.index;
         carousel(currentIndex);
     }
 }

 function auto() {
     id = setInterval(next, 3000);
 }

 function stop() {
     clearInterval(id);
 }
 auto();
 document.querySelector('.prev').onclick = prev;
 document.querySelector('.next').onclick = next;
 document.querySelector('.sildeDiv').onmouseover = stop;
 document.querySelector('.sildeDiv').onmouseout = auto;

 // 回到顶部
 var asideDivContent = document.getElementById("asideDivContent");
 asideDivContent.onclick = function () {
     var y = getScroll().scrollTop;
     var step = y / 10;
     var interId = setInterval(function () {
         if (getScroll().scrollTop <= 0) {
             clearInterval(interId);
             return;
         }
         scrollBy(0, -step);
     }, 10)
 }