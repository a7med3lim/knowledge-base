
// UI Fix  //fix Table Header in modal
$(document).on('shown.bs.modal', function () {

    dt_CP2.columns.adjust();
    dt_CP1.columns.adjust();
});
// UI Fix //fix Table Header in tabs
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    e.target // newly activated tab
    e.relatedTarget // previous active tab
    dt_CP3.columns.adjust();
    dt_CP4.columns.adjust();
})
/******************************************************* */
// //call Data ConsumerProtection
var dt_CP1 = $('#dt-vertical-scroll-ConsumerProtection').DataTable({
    scrollY: 400,
    paging: true,
    "pagingType": "simple_numbers",
    "ajax": {
        "url": "pages/page_Consumer_protection/data-update/tb_consumer_protection.txt",
        "dataSrc": ""
    },
    "columns": [
        { "data": "number" },
        { "data": "position" },
        { "data": "notes" }
    ]
});
// //call Data ConsumerProtection
var dt_CP2 = $('#dt-vertical-scroll-OutsideConsumerProtection').DataTable({
    scrollY: 400,
    paging: true,
    "pagingType": "simple_numbers",
    "ajax": {
        "url": "pages/page_Consumer_protection/data-update/tb_OutsideConsumer_Protection.txt",
        "dataSrc": ""
    },
    "columns": [
        { "data": "theSide" },
        { "data": "phone" },
        { "data": "notes" },
        { "data": "address" }
    ]
});
// //call Data complaintsExInt
var dt_CP3 = $('#dt-vertical-scroll-complaintsExInt').DataTable({
    scrollY: 400,
    paging: true,
    "pagingType": "simple_numbers",
    "ajax": {
        "url": "pages/page_Consumer_protection/data-update/tb_complaintsExInt.txt",
        "dataSrc": ""
    },
    "columns": [
        { "data": "theSide" },
        { "data": "phone" },
        { "data": "notes" },
        { "data": "address" }
    ]
});
// // Call Data complaintsOtherPhones
var dt_CP4 = $('#dt-vertical-scroll-complaintsOtherPhones').DataTable({
    scrollY: 400,
    paging: true,
    "pagingType": "simple_numbers",
    "ajax": {
        "url": "pages/page_Consumer_protection/data-update/tb_complaintsOtherPhones.txt",
        "dataSrc": ""
    },
    "columns": [
        { "data": "theSide" },
        { "data": "phone" },
        { "data": "notes" },
        { "data": "address" }
    ]
});
/******************************************************* */
// UI Fix // set layout Table ConsumerProtection
$("#dt-vertical-scroll-ConsumerProtection").ready(function () {
    $("#dt-vertical-scroll-ConsumerProtection_wrapper").find(".row .col:nth-child(2)").addClass('col-2');
    $("#dt-vertical-scroll-ConsumerProtection_wrapper").find(".form-control").css("height", "41px")
    $("#dt-vertical-scroll-ConsumerProtection_wrapper").find(".form-control").attr("placeholder", "اكتب هنا كلمات المراد البحث عنها");
    $("#dt-vertical-scroll-ConsumerProtection_wrapper").find(".form-control").focus();
});
// UI Fix // set layout Table OutsideConsumerProtection
$("#dt-vertical-scroll-OutsideConsumerProtection").ready(function () {
    $("#dt-vertical-scroll-OutsideConsumerProtection_wrapper").find(".row .col:nth-child(2)").addClass('col-2');
    $("#dt-vertical-scroll-OutsideConsumerProtection_wrapper").find(".form-control").css("height", "41px")
    $("#dt-vertical-scroll-OutsideConsumerProtection_wrapper").find(".form-control").attr("placeholder", "اكتب هنا كلمات المراد البحث عنها");
    $("#dt-vertical-scroll-OutsideConsumerProtection_wrapper").find(".form-control").focus();
});
// UI Fix // set layout Table complaintsExInt
$("#dt-vertical-scroll-complaintsExInt").ready(function () {
    $("#dt-vertical-scroll-complaintsExInt_wrapper").find(".row .col:nth-child(2)").addClass('col-2');
    $("#dt-vertical-scroll-complaintsExInt_wrapper").find(".form-control").css("height", "41px")
    $("#dt-vertical-scroll-complaintsExInt_wrapper").find(".form-control").attr("placeholder", "اكتب هنا كلمات المراد البحث عنها");
    $("#dt-vertical-scroll-complaintsExInt_wrapper").find(".form-control").focus();
});
// UI Fix // set layout Table complaintsOtherPhones
$("#dt-vertical-scroll-complaintsOtherPhones").ready(function () {
    $("#dt-vertical-scroll-complaintsOtherPhones_wrapper").find(".row .col:nth-child(2)").addClass('col-2');
    $("#dt-vertical-scroll-complaintsOtherPhones_wrapper").find(".form-control").css("height", "41px")
    $("#dt-vertical-scroll-complaintsOtherPhones_wrapper").find(".form-control").attr("placeholder", "اكتب هنا كلمات المراد البحث عنها");
    $("#dt-vertical-scroll-complaintsOtherPhones_wrapper").find(".form-control").focus();
});
//*From Index Page*//
//check if the URL(Browser) contains a given from index page
//Open Modal modal_tb_consumer_protection From index page
// if (window.location.href.indexOf("#table_Consumer_Protection") > -1) {
//     $("#modal_tb_consumer_protection").modal("show");
// }
// //Open Modal modal_tb_Outside_consumer_protection From index page
// if (window.location.href.indexOf("#table_Outside_consumer_protection") > -1) {
//     $("#modal_tb__outside_consumer_protection").modal("show");
// }
$(document).ready(function () {

    $("button").click(function(){
        $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success")
            alert("External content loaded successfully!");
          if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
      })


      var erorrMsgBody = ("<i class='fas fa-exclamation-triangle' style='color: white; margin-right:10px; margin-left:10px;'></i>" + " <span class='text-large'> Error |  خطأ</span>");
      var erorrMsgHeader = ("<p>There is an error in download the file</p>" + "<p>هناك خطأ في تحميل الملف</p>");

    // btn openTouristComlaintPopup
    $('#openPopupFromData-TouristComlaintPopup').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "pages/page_Consumer_protection/data-update/openTouristComlaintPopup.txt",
            success: function (data) {
                $('#modal_FormAjax').modal('show');
                $(".heading").html("Tourist complaint | شكوى سائح")
                $(".modalBodyFromAjax").html(data);
                alert(response['response']);
            },
            error: function () {
                $('#errorModal_FormAjax').modal('show');
                $("#errorModal_FormAjax").find(".heading").html(erorrMsgBody);
                $("#errorModal_FormAjax").find(".errorModalFormAjax").html(erorrMsgHeader);
                return true;
            }
        });
    });
    // btn New complaint
    $('#openPopupFromData-NewcCmplaint').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "pages/page_Consumer_protection/data-update/openNewComplaintPopup.txt",
            success: function (data) {
                $('#modal_FormAjax').modal('show');
                $(".heading").html("New complaint | شكوى جديدة")
                $(".modalBodyFromAjax").html(data);
                alert(response['response']);
            },
            error: function () {
                $('#errorModal_FormAjax').modal('show');
                $("#errorModal_FormAjax").find(".heading").html(erorrMsgBody);
                $("#errorModal_FormAjax").find(".errorModalFormAjax").html(erorrMsgHeader);
                return true;
            }
        });
        return false;
    },
    );
    // btn New complaint
    $('#openPopupFromData-followUpComplaint').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "pages/page_Consumer_protection/data-update/followUpComplaintPopup.txt",
            success: function (data) {
                $('#modal_FormAjax').modal('show');
                $(".heading").html("Follow up on a complaint | متابعة شكوى")
                $(".modalBodyFromAjax").html(data);
                alert(response['response']);
                return true;
            },
            error: function () {
                $('#errorModal_FormAjax').modal('show');
                $("#errorModal_FormAjax").find(".heading").html(erorrMsgBody);
                $("#errorModal_FormAjax").find(".errorModalFormAjax").html(erorrMsgHeader);
                return true;
            }
        });
        return false;
    },
    );
    // btn followUpCRM
    $('#openPopupFromData-followUpCRM').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "pages/page_Consumer_protection/data-update/followUpCRMPopup.txt",
            success: function (data) {
                $('#modal_FormAjax').modal('show');
                $(".heading").html(" (CRM Assignment) |  كيفية تخصيص متابعة على النظام")
                $(".modalBodyFromAjax").html(data);
                alert(response['response']);
                return true;
            },
            error: function () {
                // alert('Error');
                $('#errorModal_FormAjax').modal('show');
                $("#errorModal_FormAjax").find(".heading").html(erorrMsgBody);
                $("#errorModal_FormAjax").find(".errorModalFormAjax").html(erorrMsgHeader);
                return true;
            }
        });
        return false;
    },
    );
      // btn Dealing with the Alternate Inspector
      $('#openPopupFromData-dealingAlternateInspector').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "pages/page_Consumer_protection/data-update/dealingAlternateInspectorPopup.txt",
            success: function (data) {
                $('#modal_FormAjax').modal('show');
                $(".heading").html(" Dealing with the Alternate Inspector |  آلية التعامل مع المفتش المناوب")
                $(".modalBodyFromAjax").html(data);
                alert(response['response']);
                return true;
            },
            error: function () {
                // alert('Error');
                $('#errorModal_FormAjax').modal('show');
                $("#errorModal_FormAjax").find(".heading").html(erorrMsgBody);
                $("#errorModal_FormAjax").find(".errorModalFormAjax").html(erorrMsgHeader);
                return true;
            }
        });
        return false;
    },
    );
});