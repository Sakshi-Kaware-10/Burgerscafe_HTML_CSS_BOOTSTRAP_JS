/*const name = document.querySelector(".name");*/
const name = document.getElementById("order");
const remove=  document.getElementById("remove");
/*const btn = document.querySelector("button");

      btn.addEventListener("click", function () {
        name.style.color = "blue";
 });
 */
name.addEventListener('click', function handleClick(){
  name.innerHTML=`<span style="background-color:green"> Added to Cart</span>`;
  name.className='btn btn-success';

  remove.disabled=false;
});

/*
name.addEventListener('click', function RemoveClick(){
  remove.disabled=true;
});
*/