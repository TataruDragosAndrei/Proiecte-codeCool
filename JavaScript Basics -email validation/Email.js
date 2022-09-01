function ValidateEmail(input) {

 

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   var InvalidRegex1 = /^[@a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   var InvalidRegex2 =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   var InvalidRegex3 = /^@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   var InvalidRegex4 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@/;
   var InvalidRegex5 =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
  
      alert("Valid email address!");
  
      document.form1.text1.focus();
  
      return true;
  
    } else if (input.value.match(InvalidRegex1)) {
  
      alert(" An email address cannot contain more than one '@' characters!");
  
      document.form1.text1.focus();
  
      return false;
  
    } else if (input.value.match(InvalidRegex2)) {
      alert(" An email address has to contain a '@' character!");
  
      document.form1.text1.focus();
  
      return false;
    } else if (input.value.match(InvalidRegex3)) {
      alert(" The username before the '@' character cannot be empty!");
  
      document.form1.text1.focus();
  
      return false;
    } else if (input.value.match(InvalidRegex4)) {
      alert(" The domain after the '@' character cannot be empty!");
  
      document.form1.text1.focus();
  
      return false;
    } else if (input.value.match(InvalidRegex5)) {
      alert(" An email address has to contain at least one '.' character!");
  
      document.form1.text1.focus();
  
      return false;
    }
  
   

  }