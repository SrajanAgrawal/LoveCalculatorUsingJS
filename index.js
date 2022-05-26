// love calculator api 
class LOVE{
  getResult(firstName, secondName){
      return new Promise( (resolve, reject) => {     
          fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${firstName}&fname=${secondName}`, {
              "headers": {"x-rapidapi-key": "0988c3b4admsh7cc82e6e92882eap19c2abjsnb4ed3302c211"}
          })
          .then(response => response.json())
          .then(result => resolve(result))
          .catch(err => reject(err));
      })
  }
}
var checkLove = document.getElementById('checkLove');
var heading = document.getElementById('heading');
var inputs = document.querySelectorAll('input');
lovePercentage = parseInt(Math.random() * 100 + 1);

const love = new LOVE();



checkLove.addEventListener('click' , function() {
  var firstName = inputs[0].value.toUpperCase();
  var secondName = inputs[1].value.toUpperCase();
  if(!(firstName == '' || secondName == '')) {
  // lovePercentage = parseInt(Math.random() * 100 + 1);
  console.log("up till here success !! ");
  heading.innerHTML = '.......Loading result......';
  heading.style.fontSize = '24px';
  love.getResult(firstName, secondName)
  .then(response => 
    heading.innerHTML = response.fname + " & " + response.sname + " Are <b>" +  response.percentage + "%" + "</b> Compatible")
    inputs[0].value='';
    inputs[1].value='';
}
else{
  heading.innerHTML = "Enter Your Name First"
}

})

