var discount_percentage=[];
discount_percentage.push({'noofcourse':1,'discount':0,'total':24000},{'noofcourse':2,'discount':0,'total':51000},{'noofcourse':3,'discount':0,'total':75000});

var links = [];
links['P']='https://learn.ahaguru.com/student/paymentlink/NDg2IyNUIyMxNjE5NTQyNzc1Mjk4';
links['C']='https://learn.ahaguru.com/student/paymentlink/NDg3IyNUIyMxNjE5NTQzMDEyMjY1';
links['B']='https://learn.ahaguru.com/student/paymentlink/NDg4IyNUIyMxNjE5NTQzMjI0MTc1';
links['PC']='https://learn.ahaguru.com/student/paymentlink/NDg2LDQ4NyMjVCMjMTYxOTU0MzgyMzc3OQ%3D%3D';
links['PB']='https://learn.ahaguru.com/student/paymentlink/NDg2LDQ4OCMjVCMjMTYxOTU0Mzk0OTM5Mg%3D%3D';
links['CB']='https://learn.ahaguru.com/student/paymentlink/NDg3LDQ4OCMjVCMjMTYxOTU0NDEwODI3Mw%3D%3D';
links['PCB']='https://learn.ahaguru.com/student/paymentlink/NDg2LDQ4Nyw0ODgjI1QjIzE2MTk1NDM1ODcwMjE%3D';


  
function select_all(){
  $.each($('.buyBtn'),function(e){
    $(this).click();
  });
  // $('html, body').animate({
  //               scrollTop: $('.ag_teacher').offset().top-500
  //                }, 1000);
  buynow_link();
  
}

function buynow_link(){
  var key=[];
  $('.tick').each(function(i,obj){
    key.push($(this).parents('.card').attr('id'));
  });
  var keyindex = key.join('');
  window.location.href=links[keyindex];
}


// function sendEnquiry(form){  
//     grecaptcha.ready(function() {
//              grecaptcha.execute('6LfxG1waAAAAAKrfaxm9S5tguv5p5CvufflL99Pu', {action: 'submit'}).then(function(token) {     
//      var formData = $(form).serializeArray();
//      formData.push({'name':'token','value':$.trim(token)});                    
//      // console.log(formData);
//        $(".ajaxload").show();
//        $.ajax({
//            type: "POST",
//            url: "https://learn.ahaguru.com/Staticapi/enquiries.json",
//            data: formData,
//            cache: false,                  
//            xhrFields: {withCredentials: true}, //to preserver session in cros                      
//            success: function(data){
//             //  console.log(data);
//            get_data = data;
//            // console.log(get_data);
//              $(".ajaxload").hide();
//             if(get_data.status !=200)
//                alert(get_data.data.display_text);
//            else{        
//              $("#getsamplevideo-btn").modal('hide');
//              $('#thankyou').modal('show');
//                $(form)[0].reset(); 
   
//            }
//            return false;
//            }});
//      });});
//     return false;
//      }
   