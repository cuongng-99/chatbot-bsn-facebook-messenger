
$("#frmFchatWebForm").submit((event) => {
   event.preventDefault();
   var check = false;
   var full_name = $('.full_name').val();
   var email = $('.email').val();
   var phone = $('.phone').val();
   var address = $('.address').val();
   var number_check = $('.number_check').val();
   var button_name = $('.hidden_button_name').val();
   var checkbox = $('.checkbox_origanal');
   var action = $('.action').val();

   if (checkbox.length > 0) {
      var checked = false;
      $(".checkbox_origanal").each(function () {
         if ($(this).is(":checked")) {
            checked = true;
         }
      });
      if (checked == false) {
         $('.alert-checkbox').html('<div class="alert alert-danger">Vui lòng chọn 1 giá trị lựa chọn!</div>');
         return false;
      }
   }

   if (checkUndefined(full_name)) {
      if (!full_name) {
         $('.alert-name').html('<div class="alert alert-danger">Vui lòng nhập họ & tên </div>');
         $('.btn-order').html(button_name);
         return false;
      }
      else {
         $('.alert-name').html('');
      }
   }
   if (checkUndefined(email)) {
      if (!email) {
         $('.alert-email').html('<div class="alert alert-danger">Vui lòng nhập địa chỉ email!</div>');
         $('.btn-order').html(button_name);
         return false;
      } else {
         $('.alert-email').html('');
      }
   }
   if (checkUndefined(number_check)) {
      if (!checkNumber(number_check)) {
         $('.alert-number').html('<div class="alert alert-danger">Dữ liệu nhập vào phải là số!</div>');
         $('.btn-order').html(button_name);
         return false;
      }
      else {
         $('.alert-number').html('');
      }
   }
   if (checkUndefined(phone)) {
      if (!phone) {
         $('.alert-phone').html('<div class="alert alert-danger">Vui lòng nhập số điện thoại!</div>');
         $('.btn-order').html('Đăng ký');
         return false;
      }
      else {
         $('.alert-phone').html('');
      }
      if (!checkPhoneNumber(phone)) {
         $('.alert-phone').html('<div class="alert alert-danger">Số điện thoại không đúng định dạng!</div>');
         $('.btn-order').html('Đăng ký');
         return false;
      }
   }
   $("[required]").each((index, item) => {
      if ($(item).val() == '') {
         $(item).css('border', '1px solid red');
         check = true;
      } else {
         $(item).css('border', '1px solid #c5c5c5');
      }
   })
   if (check) {
      return false;
   }
   var form = $("#frmFchatWebForm");
   var data = {};
   var arr_ckbox = [];
   form.find('input, textarea').each((index, item) => {
      if (!data[$(item).attr('name')]) {
         data[$(item).attr('name')] = [];
      }
      if ($(item).attr('type') == 'checkbox' || $(item).attr('type') == 'radio') {
         if ($(item).is(":checked")) {
            if ($(item).attr('type') == 'checkbox') {
               data[$(item).attr('name')].push(item.value);
            } else {
               data[$(item).attr('name')] = item.value;
            }
         }
      } else {
         data[$(item).attr('name')] = item.value;
      }

   })
   form.find('select').each((index, item) => {
      var v;
      $(item).find('option[value="' + item.value + '"]').each((index, i) => {
         if (item.name == 'city' || item.name == 'district' || item.name == 'ward') {
            v = $(i).text();
         }
         else {
            v = $(i).val();
         }
         // console.log("= DEBUG");
         // console.log(item.value);
         // console.log(index);
         // console.log(i);
         // console.log(v);
      });
      data[$(item).attr('name')] = v;

   })
   $(".btn-order").html("<i class='fa fa-spinner fa-spin '></i> Đang xử lý...")
   $.post('', data, function (response) {
      response = JSON.parse(response);
      if (!response.error) {
         if (response.url) {
            location.href = response.url;
         }
         if (response.url_top) {
            window.top.location = response.url_top;
         }
         window.parent.postMessage({
            'close_mess': true,
         }, "*");
         var clone = document.createElement('DIV');
         if (response.html) {
            clone.innerHTML = '<div>' + response.html + '</div>';
         }

         $('.btn-order').html('Đăng ký thành công');
         if (clone.querySelector('#url_thankyou')) {
            window.parent.postMessage({
               'url_thankyou': clone.querySelector('#url_thankyou').value,
               'text_thankyou': clone.querySelector('#text_thankyou').value,
               'url_mess': clone.querySelector('#url_mess').value
            }, "*");
         }
         if (clone.querySelector('#open_new_window')) {
            window.open(clone.querySelector('#open_new_window').value);
         }
         if (self == top) {
            window.close();
         }

         (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/vi_VN/messenger.Extensions.js";
            fjs.parentNode.insertBefore(js, fjs);
         }(document, "script", "Messenger"));

         window.extAsyncInit = function () {
            MessengerExtensions.requestCloseBrowser(function success() {
            }, function error(err) {
            });
            return false;
         };
      }
   }, 'text')
})
if (typeof call_noti == 'function') {
   call_noti();
}

