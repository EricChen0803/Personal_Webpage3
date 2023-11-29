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
      function editTheme(){
        var body = document.body;
        var currentTheme = 'light';
        if (body.classList.contains('dark-theme')){
            currentTheme = 'dark';
        }
        var background = document.getElementById('background_picker');
        var text = document.getElementById('text_picker');
        var font = document.getElementById('font_picker');
        if(currentTheme=='light'){
            document.documentElement.style.setProperty('--text-light', text.value);
            document.documentElement.style.setProperty('--background-light', background.value);
            document.documentElement.style.setProperty('--font-light', font.value);
            localStorage.setItem('text-light', text.value);
            localStorage.setItem('background-light', background.value);
            localStorage.setItem('font-light', font.value);
        }
        else{
            document.documentElement.style.setProperty('--text-dark', text.value);
            document.documentElement.style.setProperty('--background-dark', background.value);
            document.documentElement.style.setProperty('--font-dark', font.value);
            localStorage.setItem('text-dark', text.value);
            localStorage.setItem('background-dark', background.value);
            localStorage.setItem('font-dark', font.value);
        }
      }
      
      var savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
      }

      var light_background = localStorage.getItem('background-light');
      if(light_background!=null){
        document.documentElement.style.setProperty('--background-light', light_background);
      }
      var light_text = localStorage.getItem('text-light');
      if(light_text!=null){
        document.documentElement.style.setProperty('--text-light', light_text);
      }
      var light_font = localStorage.getItem('font-light');
      if(light_font!=null){
        document.documentElement.style.setProperty('--font-light', light_font);
      }
      var dark_background = localStorage.getItem('background-dark');
      if(dark_background!=null){
        document.documentElement.style.setProperty('--background-dark', dark_background);
      }
      var dark_text = localStorage.getItem('text-dark');
      if(dark_text!=null){
        document.documentElement.style.setProperty('--text-dark', dark_text);
      }
      var dark_font = localStorage.getItem('font-dark');
      if(dark_font!=null){
        document.documentElement.style.setProperty('--font-dark', dark_font);
      }
    
    
    var changeThemebtn = document.getElementById('theme');
    if (changeThemebtn) {
        changeThemebtn.addEventListener('click', changeTheme);
    }

    var editThemebtn = document.getElementById('edit_theme');
    if (editThemebtn) {
        editThemebtn.addEventListener('click', editTheme);
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
            var inputField = document.getElementById('comments');
            inputField.classList.add('flash-comment');

            setTimeout(function() {
                inputField.classList.remove('flash-input');
            }, 500);
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
