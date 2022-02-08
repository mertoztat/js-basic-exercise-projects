const weight= document.getElementById('weight')
const height= document.getElementById('height')
const getResult = document.getElementById('result')
const error = document.getElementsByClassName('error')
const calculateButton = document.getElementById('calculate')


calculateButton.addEventListener("click", calculateBMI) // Calculate Butonu Click Özelliği


function calculateBMI(){
       

    const bmi = (weight.value / ((height.value * height.value)/10000)).toFixed(2)

     if (bmi <= 18.4) {
        getResult.innerText = `${bmi} 
        You are underweight`
	} else if (bmi >= 18.5 && bmi <= 24.9) {
        getResult.innerText = `${bmi} 
        You are normal`
	} else if (bmi >= 25 && bmi <= 29.9) {
        getResult.innerText = `${bmi} 
        You are overweight`
	} else if (bmi >= 30) {
        getResult.innerText = `${bmi} 
        You are obese`
	}

}




