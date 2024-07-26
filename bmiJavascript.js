const form=document.querySelector('form')
console.log(form);

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#result');
    const result_guide=document.querySelector('#weight_guide');
    if(height<0 || height==='' || isNaN(height)){
        results.innerHTML=`Please Enter Valid Height: ${height}`;
        
    }else if(weight<0 || weight==='' || isNaN(weight)){
        results.innerHTML=`Please Enter Valid weight: ${weight}`;
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`
    
        if(bmi<18.5){
            result_guide.innerHTML=`You are Under Weight ${bmi}`;
        }else if(bmi<=24){
            result_guide.innerHTML=`You are in Normal Weight ${bmi}`;
        }else{
            result_guide.innerHTML=`You are Over Weight : ${bmi}`;
        }
    }
})