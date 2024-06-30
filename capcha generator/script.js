let first=document.querySelector("#first")
let refresh=document.querySelector(".refresh")
let second = document.querySelector("#second");
let submit = document.querySelector(".btn");

let toastBox=document.getElementById("toastBox")
let successsMsg='Successfully submitted'
let errorMsg='Please fix the error'
let invalidMsg='Invalid input,check again'
  

function generateCaptcha(){
    let captcha = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    let randomStringArray = captcha.split("");
    let changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
    let captchaText = changeString.join("  ");
    console.log(captchaText)
    first.value=captchaText
}

const refreshBtnClick = () => {
    generateCaptcha();
    second.value=''
  };
  
  const submitBtnClick = () => {
    let firstValue=first.value.split("").filter((char) => char !== " ").join("");
    if (second.value === firstValue) {
        showToast(successsMsg)
    } else {
        showToast(errorMsg)
    }
  }




  
  function showToast(msg){
    let toast=document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML=msg
    toastBox.appendChild(toast)
    if(msg.includes('error')){
      toast.classList.add('error')
    }
    setTimeout(()=>{
      toast.remove()
    },6000)
  }






refresh.addEventListener("click", refreshBtnClick);
submit.addEventListener("click", submitBtnClick);

generateCaptcha()