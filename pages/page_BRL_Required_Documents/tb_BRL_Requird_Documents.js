

// UI Fix  //fix Table Header in modal
$(document).on('shown.bs.modal', function () {
	// dt.columns.adjust();
});
$(document).ready(function () {
	// UI Fix //fix Table Header in tabs
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		e.target // newly activated tab
		e.relatedTarget // previous active tab
		dt_BRL1.columns.adjust();
		dt_BRL2.columns.adjust();
		dt_BRL3.columns.adjust();
	})
})

/******************************************************* */
// //call Data ConsumerProtection
var dt_BRL1 = $('#dt-vertical-scroll-BRL-Req-Doc-CreateBusiness').DataTable({
	initComplete: function () {
		this.api().columns().every(function () {
			var column = this;
			var select = $('<select  class="browser-default custom-select form-control-sm"><option value="" selected>Search</option></select>')
				.appendTo($(column.footer()).empty())
				.on('change', function () {
					var val = $.fn.dataTable.util.escapeRegex(
						$(this).val()
					);

					column
						.search(val ? '^' + val + '$' : '', true, false)
						.draw();
				});

			column.data().unique().sort().each(function (d, j) {
				select.append('<option value="' + d + '">' + d + '</option>')
			});
		});
	},
	scrollY: 340,
	paging: true,
	filter: true,
	"pagingType": "simple_numbers",
	"ajax": {
		"url": "pages/page_BRL_Required_Documents/tb_BRL_Req_Doc_CreateBusiness.txt",
		"dataSrc": ""
	},
	"columns": [
		{ "data": "nationality" },
		{ "data": "legalForm" },
		{ "data": "activity" },
		{ "data": "numberOfPartners" }
	]
});
var dt_BRL2 = $('#dt-vertical-scroll-BRL-Req-Doc-editRegistrationLicensing').DataTable({
	scrollY: 340,
	paging: true,
	filter: true,
	"ajax": {
		"url": "pages/page_BRL_Required_Documents/tb_BRL_Req_Doc_editRegistrationLicensing.txt",
		"dataSrc": ""
	},
	"columns": [
		{ "data": "legalForm" },
		{ "data": "popup" }
	]
});
var dt_BRL3 = $('#dt-vertical-scroll-BRL-Req-Doc-cancelRegistrationLicensing').DataTable({
	scrollY: 340,
	paging: true,
	filter: true,
	"ajax": {
		"url": "pages/page_BRL_Required_Documents/tb_BRL_Req_Doc_editRegistrationLicensing.txt",
		"dataSrc": ""
	},
	"columns": [
		{ "data": "legalForm" },
		{ "data": "popup" }
	]
});

/******************************************************* */
// UI Fix // set layout Table ConsumerProtection
$("#dt-vertical-scroll-BRL-Req-Doc-CreateBusiness").ready(function () {
	$("#dt-vertical-scroll-BRL-Req-Doc-CreateBusiness_wrapper").find(".row .col:nth-child(2)").addClass('col-2');
	$("#dt-vertical-scroll-BRL-Req-Doc-CreateBusiness_wrapper").find(".form-control").css("height", "41px")
	$("#dt-vertical-scroll-BRL-Req-Doc-CreateBusiness_wrapper").find(".form-control").attr("placeholder", "اكتب هنا كلمات المراد البحث عنها");
	$("#dt-vertical-scroll-BRL-Req-Doc-CreateBusiness_wrapper").find(".form-control").focus();
	//Set footer table UI
	$("#dt-vertical-scroll-BRL-Req-Doc-CreateBusiness_wrapper").find(".dataTables_scroll").css('position', 'relative');
	$("#dt-vertical-scroll-BRL-Req-Doc-CreateBusiness_wrapper").find(".dataTables_scrollHead").css('margin-top', '5rem');
	$("#dt-vertical-scroll-BRL-Req-Doc-CreateBusiness_wrapper").find(".dataTables_scrollFoot").css({ "position": "absolute", "top": "-75px" });
});
$("#dt-vertical-scroll-BRL-Req-Doc-editRegistrationLicensing").ready(function () {
	$("#dt-vertical-scroll-BRL-Req-Doc-editRegistrationLicensing_wrapper").find(".row .col:nth-child(2)").addClass('col-2');
	$("#dt-vertical-scroll-BRL-Req-Doc-editRegistrationLicensing_wrapper").find(".form-control").css("height", "41px")
	$("#dt-vertical-scroll-BRL-Req-Doc-editRegistrationLicensing_wrapper").find(".form-control").attr("placeholder", "اكتب هنا كلمات المراد البحث عنها");
	$("#dt-vertical-scroll-BRL-Req-Doc-editRegistrationLicensing_wrapper").find(".form-control").focus();
	//Set footer table UI
	$("#dt-vertical-scroll-BRL-Req-Doc-editRegistrationLicensing_wrapper").find(".dataTables_scroll").css('position', 'relative');
});
$("#dt-vertical-scroll-BRL-Req-Doc-cancelRegistrationLicensing").ready(function () {
	$("#dt-vertical-scroll-BRL-Req-Doc-cancelRegistrationLicensing_wrapper").find(".row .col:nth-child(2)").addClass('col-2');
	$("#dt-vertical-scroll-BRL-Req-Doc-cancelRegistrationLicensing_wrapper").find(".form-control").css("height", "41px")
	$("#dt-vertical-scroll-BRL-Req-Doc-cancelRegistrationLicensing_wrapper").find(".form-control").attr("placeholder", "اكتب هنا كلمات المراد البحث عنها");
	$("#dt-vertical-scroll-BRL-Req-Doc-cancelRegistrationLicensing_wrapper").find(".form-control").focus();
	//Set footer table UI
	$("#dt-vertical-scroll-BRL-Req-Doc-cancelRegistrationLicensing_wrapper").find(".dataTables_scroll").css('position', 'relative');
});



// check if the URL(Browser) contains a given from index page
// Open Modal modal_tb_consumer_protection From index page
// if (window.location.href.indexOf("#table_Consumer_Protection") > -1) {
// 	$("#modal_tb_consumer_protection").modal("show");
// }
// Open Modal modal_tb_Outside_consumer_protection From index page
// if (window.location.href.indexOf("#table_Outside_consumer_protection") > -1) {
// 	$("#modal_tb__outside_consumer_protection").modal("show");
// }
