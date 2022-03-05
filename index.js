var checkLove = document.getElementById('checkLove');
var heading = document.getElementById('heading');
var inputs = document.querySelectorAll('input');
lovePercentage = parseInt(Math.random() * 100 + 1);
checkLove.addEventListener('click' , function() {
  if(!(inputs[0].value == '' || inputs[1].value == '')) {
  lovePercentage = parseInt(Math.random() * 100 + 1);
  heading.innerHTML = "You Both Are " + lovePercentage + "%" + " Compatible";
}
else{
  heading.innerHTML = "Enter Your Name First"
}

})
