function calculateBMI() {
    // Get user input for weight and height
    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);
  
    // Convert height from cm to meters
    const heightM = heightCm / 100;
  
    // Validation
    if (isNaN(weight) || isNaN(heightM) || weight <= 0 || heightCm <= 0) {
      document.getElementById("result").innerText = "Please enter valid numbers for both weight and height!";
      return;
    }
  
    // Calculate BMI
    const bmi = weight / (heightM * heightM);
  
    // Determine BMI category
    let category = "";
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    // Display result
    document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
  }
  