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
        "url": "pages/page_Consumer_protection/tb_consumer_protection.txt",
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
        "url": "pages/page_Consumer_protection/tb_OutsideConsumer_Protection.txt",
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
        "url": "pages/page_Consumer_protection/tb_complaintsExInt.txt",
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
        "url": "pages/page_Consumer_protection/tb_complaintsOtherPhones.txt",
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
if (window.location.href.indexOf("#table_Consumer_Protection") > -1) {
    $("#modal_tb_consumer_protection").modal("show");
}
//Open Modal modal_tb_Outside_consumer_protection From index page
if (window.location.href.indexOf("#table_Outside_consumer_protection") > -1) {
    $("#modal_tb__outside_consumer_protection").modal("show");
}
/// Active in sideNav

