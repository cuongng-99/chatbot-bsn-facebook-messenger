(function (d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) { return; }
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'Messenger'));

window.extAsyncInit = function () {
   // the Messenger Extensions JS SDK is done loading 

   MessengerExtensions.getContext('496044859129937',
      function success(thread_context) {
         // success
         //set psid to input
         $("#psid").val(thread_context.psid);
         handleClickButtonOrder();
      },
      function error(err) {
         // error
         console.log("Lỗi đặt hàng:", err);
         console.log(senderId);
         $("#psid").val(senderId);
         handleClickButtonOrder();
      }
   );
};



function handleClickButtonOrder() {
   $("#btnOrderNow").submit((e) => {
      let data = {
         psid: $("#psid").val(),
         customerName: $("#customerName").val(),
         address: $("#address").val(),
         phoneNumber: $("#phoneNumber").val(),
         receivedTime: $("#receivedTime").val(),
         letterOnCake: $("#letterOnCake").val(),
         paymentType: $("#paymentType").val()
      };


      // //close webview
      // MessengerExtensions.requestCloseBrowser(function success() {
      //    // webview closed
      // }, function error(err) {
      //    // an error occurred
      //    console.log("Lỗi đóng browser: ", err);
      // });

      //send data to node.js server 

      $.ajax({
         url: `${window.location.origin}/post-order-form`,
         type: "POST",
         data: data,
         success: function (data) {
            console.log(data);
            window.extAsyncInit = function () {
               MessengerExtensions.requestCloseBrowser(function success() {
               }, function error(err) {
               });
               return false;
            };
         },
         error: function (error) {
            console.log(error);
         }
      })
   });
}