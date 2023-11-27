document.addEventListener('DOMContentLoaded', function () {
    function changeTheme() {
        
        var body = document.body;
        var currentTheme = 'light';
        console.log(body.classList)
        if (body.classList.contains('dark-theme')){
            currentTheme = 'dark';
        }
      
        if (currentTheme === 'light') {
          body.classList.add('dark-theme');
          localStorage.setItem('theme', 'dark');
        } else {
          body.classList.remove('dark-theme');
          localStorage.setItem('theme', 'light');
        }
      }
      
      var savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
      }
    
    
    var changeThemebtn = document.getElementById('theme');
    if (changeThemebtn) {
        changeThemebtn.addEventListener('click', changeTheme);
    }
    var formErrors = [];
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var comments = document.getElementById("comments");
    var error = document.getElementById("error_mes");
    var info = document.getElementById("info_mes");
    var fe = document.getElementById("form-errors");

    var myButton = document.getElementById('submit_btn');

    myButton.addEventListener('click', function() {
        if(!name.checkValidity()){
            formErrors.push({
                field: 'name',
                message: name.validationMessage});
        }
        else if(!email.checkValidity()){
            formErrors.push({
                field: 'email',
                message: email.validationMessage});
        }
        else if(!comments.checkValidity()){
            formErrors.push({
                field: 'comment',
                message: comments.validationMessage});
        }
        else{
            fe.value = JSON.stringify(formErrors);
            formErrors = [];
        }
    });

    name.addEventListener("input", function (event) {
        if (comments.validity.valueMissing) {
            comments.setCustomValidity("Please fill in your comment!");
        } 
        else if (comments.validity.patternMismatch) {
            comments.setCustomValidity('Please only include numbers, english letters and punctuations!');
        } else {
            comments.setCustomValidity('');
        }
        if (email.validity.valueMissing) {
            email.setCustomValidity("Please fill in your email!");
        } 
        else if (email.validity.typeMismatch) {
            email.setCustomValidity("Please provide a valid email!");
        } else {
            email.setCustomValidity("");
        }
        if (name.validity.valueMissing) {
            name.setCustomValidity("Please fill in your name!");
        } else {
            name.setCustomValidity("");
        }
        
    });

    

    email.addEventListener("input", function (event) {
        if (comments.validity.valueMissing) {
            comments.setCustomValidity("Please fill in your comment!");
        } 
        else if (comments.validity.patternMismatch) {
            comments.setCustomValidity('Please only include numbers, english letters and punctuations!');
        } else {
            comments.setCustomValidity('');
        }
        if (email.validity.valueMissing) {
            email.setCustomValidity("Please fill in your email!");
        } 
        else if (email.validity.typeMismatch) {
            email.setCustomValidity("Please provide a valid email!");
        } else {
            email.setCustomValidity("");
        }
        if (name.validity.valueMissing) {
            name.setCustomValidity("Please fill in your name!");
        } else {
            name.setCustomValidity("");
        }
    });

    

    comments.addEventListener("input", function (event) {
        if (comments.validity.valueMissing) {
            comments.setCustomValidity("Please fill in your comment!");
        } 
        else if (comments.validity.patternMismatch) {
            comments.setCustomValidity('Please only include numbers, english letters and punctuations!');
            error.textContent = 'Please only include numbers, english letters and punctuations!';
            if(error.classList.contains('invalid_error')){
                error.classList.remove('invalid_error');
                error.classList.add('invalid_error2');
            }
            else if(error.classList.contains('invalid_error2')){
                error.classList.remove('invalid_error2');
                error.classList.add('invalid_error');
            }
            else{
                error.classList.add('invalid_error');
            }
        } else {
            comments.setCustomValidity('');
            if(error.classList.contains('invalid_error')){
                error.classList.remove('invalid_error');
            }
            if(error.classList.contains('invalid_error2')){
                error.classList.remove('invalid_error2');
            }
            error.textContent = '';
        }
        if (email.validity.valueMissing) {
            email.setCustomValidity("Please fill in your email!");
        } 
        else if (email.validity.typeMismatch) {
            email.setCustomValidity("Please provide a valid email!");
        } else {
            email.setCustomValidity("");
        }
        if (name.validity.valueMissing) {
            name.setCustomValidity("Please fill in your name!");
        } else {
            name.setCustomValidity("");
        }

        var remainingChars = comments.maxLength - comments.value.length;
        if(remainingChars<50){
            info.textContent = remainingChars + ' characters remaining!';
            if(!comments.classList.contains('warning')){
                comments.classList.add('warning');
            }
        }
        else{
            if(comments.classList.contains('warning')){
                comments.classList.remove('warning');
            }
            info.textContent = '';
        }

    });
});

