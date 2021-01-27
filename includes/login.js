/**
 * Created by C16Lucas.Lambrecht on 4/5/2016.
 */

//var Submit = function() {
//  $(document).ready(function () {
//
//    $('#Submit').click(function () {
//      var username = $("#Username").val();
//      var password = $("#Password").val();
////var dataString = 'username='+username+'&password='+password;
//      if ($.trim(username).length > 0 && $.trim(password).length > 0) {
//        $.ajax({
//          type: "GET",
//          url: "http://ec2-54-191-2-186.us-west-2.compute.amazonaws.com/login.php",
//          data: {
//            username: username,
//            password: password
//          },
//          dataType: 'jsonp',
//          beforeSend: function () {
//            $("#Submit").val('Connecting...');
//          },
//          complete: function (data) {
//            if (data) {
//              console.log("valid: " + data[1]);
//              var parsed = JSON.parse(data);
//
//              console.log("parsed: " + parsed);
//              //alert(JSON.stringify(data));
//              $("body").load("index.html").hide().fadeIn(1500).delay(6000);
////or
//              window.location.href = "index.html";
//            }
//            else {
////Shake animation effect.
//              $('#Submit').shake();
//              //$("#Submit").val('Login')
//              $("#new_user").html("<span style='color:#cc0000'>Error:</span> Invalid username and password. ");
//            }
//          }
//        });
//
//      }
//      return false;
//    });
//
//  });
//}

var Submit = function()  {
  var input_username = document.getElementById("Username").value;
  var input_password = document.getElementById("Password").value;
  /*var info = $.ajax({
    url: "http://ec2-54-191-2-186.us-west-2.compute.amazonaws.com/login.php",
    type:"GET",
    data: {username:input_username,
    password:input_password},
    dataType:'jsonp',
    complete: function(ret)
            {
              console.log(ret);

                if (ret.valid == input_username ) {
                    window.location.replace('index.htm');
                }
                else {
                    alert(ret);
                }
            },
    error: function()
          {
            console.log("Error error");
          }
  });*/

  var success = function(data)
  {
    console.log(data);

      if (data.valid == input_username ) {
          window.location.replace('index.htm');
      }
      else {
          alert(data);
      }
  };

  $.getJSON("http://ec2-54-191-2-186.us-west-2.compute.amazonaws.com/login.php", {username:input_username, password:input_password}, success);


  //console.log(info);

  //$.get("http://ec2-54-191-2-186.us-west-2.compute.amazonaws.com/login.php",
  //  {username : input_username, password : input_password},
  //  function(data){
  //    alert('page content: ' + data);
  //  });


};