
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");


function readFormData(form){
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    return {
        email,
        message
    } 
}  


form.addEventListener("submit",(event) => {
    event.preventDefault();
   
    if(form.email.value.trim() === "" && form.message.value.trim() ===""){
        console.log('Заповніть форму !!!')
    } else
    if(form.email.value.trim() === ""  ){
        
        console.log('Заповніть email !!!')
    
    } else 
    if (form.message.value.trim() === "" ){
        console.log('Заповніть message !!!')
    }
    console.log(readFormData(event.currentTarget))
    localStorage.removeItem(STORAGE_KEY);
    form.reset()
})

form.addEventListener('input',(event) => {
    event.preventDefault();
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY,jsonData);
   
})
const rawData = localStorage.getItem(STORAGE_KEY);
if (rawData){
    const data = JSON.parse(rawData);
    form.email.value = data.email;
    form.message.value = data.message;

}



