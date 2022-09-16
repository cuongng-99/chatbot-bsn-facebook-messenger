(function (d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) { return; }
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'Messenger'));

window.extAsyncInit = function () {
   // the Messenger Extensions JS SDK is done loading 

   MessengerExtensions.getContext('3298370930452071',
      function success(thread_context) {
         // success
         //set psid to input
         $("#psid").val(thread_context.psid);
         handleClickButtonOrder();
      },
      function error(err) {
         // error
         console.log("Lỗi đặt hàng:", err);
      }
   );
};


function handleClickButtonOrder() {
   $("#btnOrderNow").on("click", function (e) {
      let data = {
         psid: $("#psid").val(),
         customerName: $("#customerName").val(),
         address: $("#address").val(),
         phoneNumber: $("#phoneNumber").val(),
         receivedTime: $("#receivedTime").val()
      };


      //close webview
      MessengerExtensions.requestCloseBrowser(function success() {
         // webview closed
      }, function error(err) {
         // an error occurred
         console.log(err);
      });

      //send data to node.js server 

      axios({
         method: 'post',
         url: "https://chatbot-bsn.herokuapp.com/post-order-form",
         data: data
      })
         .then(function (response) {
            console.log(response);
         })
         .catch(function (error) {
            console.log(error);
         });

   });
}