$(document).ready(function(){

   // for category selection
  $('#category_selection').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
//    console.log(optionSelected);
//    console.log(valueSelected);

//    $.ajax({
//        url: "/home_category_item/",
//        data: {
//          'category': valueSelected
//        },
//        dataType: 'json',
//        success: function (data) {
//          if (data) {
//          }
//        }
//      });
//    url = "?category=" + valueSelected
//    window.location = url

    this.form.submit();

    return false;
  });

});