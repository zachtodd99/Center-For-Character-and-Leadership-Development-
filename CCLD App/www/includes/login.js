/**
 * Created by C16Lucas.Lambrecht on 4/5/2016.
 */
var Submit = function()  {
  var input_username = document.getElementById("Username").value;
  var input_password = document.getElementById("Password").value;
  var info = $.ajax({
    url: "http://ec2-54-191-2-186.us-west-2.compute.amazonaws.com/login.php",
    type:"GET",
    data: {username:input_username,
    password:input_password},
    dataType:'jsonp',
    complete: function(data, textStatus, jqXHR)
            {
              console.log(data);
                if (data.valid == input_username ) {
                    window.location.replace('index.htm');
                }
                else {
                    alert(data);
                }
            },
    error: function()
          {
            console.log("Error error");
          }
  });

  //$.get("http://ec2-54-191-2-186.us-west-2.compute.amazonaws.com/login.php",
  //  {username : input_username, password : input_password},
  //  function(data){
  //    alert('page content: ' + data);
  //  });


};