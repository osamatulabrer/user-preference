// find element

const selectFontSize= document.getElementById('selectFontSize');
const selectBgColor= document.getElementById('selectBgColor');
const mainElement = document.querySelector('.main');
const button = document.querySelector('.div')



// for(let i = 16;i <= 70;i +=2){
//     let outpot = selectFontSize.innerHTML = `<option value="16px">${i + 'px'}</option>`;
    
//      document.write(outpot) 
// }  





// changeFont function
const updateFont = (event)=>{
    const selectedFontSize = event.target.value
   mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem('fontSize',selectedFontSize)
}



// changeBgColor function
const updateBgColor = (event)=>{
    const selectedBgColor = event.target.value
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem('bgColor',selectedBgColor)
}
// clearLocalStorage function
const clearLocalStorage = ()=>{
    localStorage.removeItem('fontSize')
    localStorage.removeItem('bgColor')
}
// initial setup
const initialSetup = ()=>{
   const bgColor = localStorage.getItem('bgColor')
   const fontSize = localStorage.getItem('fontSize');
   if(fontSize && bgColor){

       selectBgColor.value = bgColor;
       selectFontSize.value = fontSize;
       mainElement.style.fontSize = fontSize;
       mainElement.style.backgroundColor = bgColor;
   }else{
        selectBgColor.value = 'awua';
       selectFontSize.value = '18px';
       mainElement.style.fontSize = '18px';
       mainElement.style.backgroundColor = 'aqua';
   }



}
// add event listener
selectFontSize.addEventListener('change',updateFont);
selectBgColor.addEventListener('change',updateBgColor);
button.addEventListener('click',clearLocalStorage);
initialSetup();