function login(){
  const authUsrName= "admin";
  const authPswd= "123";
  const usrNameInput= document.getElementById("usrName").value;
  const usrPswdInput= document.getElementById("pswd").value;
  // const notif = document.getElementById("notification");

  if(usrNameInput === authUsrName && usrPswdInput === authPswd){
    document.write("<h2>Welcome</h2>");
    // var text = document.createTextNode("Welcome");
    // notif.appendChild(text);
    

  }else{
    document.write("Not Registered");
    // var text = document.createTextNode("Not Registered");
    // notif.appendChild(text);

  }

}