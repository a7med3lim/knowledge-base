$(document).ready(function () {
    var erorrMsgBody = ("<i class='fas fa-exclamation-triangle' style='color: white; margin-right:10px; margin-left:10px;'></i>" + " <span class='text-large'> Error |  خطأ</span>");
    var erorrMsgHeader = ("<p>There is an error in download the file</p>" + "<p>هناك خطأ في تحميل الملف</p>");

    // open Modal Outside Consumer Portection
    $('#modal_tb_consumer_protection').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "pages/page_Consumer_protection/data-updatePage_Consumer_Protection/modalTableConsumerProtection.html",
            success: function (data) {
                $('#modal_FormAjax').modal('show');
                $(".heading").html("Outside of consumer protection | اختصاص حماية المستهلك")
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
    // open Modal Outside Consumer Portection
    $('#modal_tb__outside_consumer_protection').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "pages/page_Consumer_protection/data-updatePage_Consumer_Protection/modalTableOutsideConsumerProtection.html",
            success: function (data) {
                $('#modal_FormAjax').modal('show');
                $(".heading").html("Outside of consumer protection | خارج اختصاص حمايةالمستهلك")
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
    // btn openTouristComlaintPopup
    $('#openPopupFromData-TouristComlaintPopup').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "pages/page_Consumer_protection/data-updatePage_Consumer_Protection/openTouristComlaintPopup.html",
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
            url: "pages/page_Consumer_protection/data-updatePage_Consumer_Protection/openNewComplaintPopup.html",
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
            url: "pages/page_Consumer_protection/data-updatePage_Consumer_Protection/followUpComplaintPopup.html",
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
            url: "pages/page_Consumer_protection/data-updatePage_Consumer_Protection/followUpCRMPopup.html",
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
    });
    // btn Dealing with the Alternate Inspector
    $('#openPopupFromData-dealingAlternateInspector').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "pages/page_Consumer_protection/data-updatePage_Consumer_Protection/dealingAlternateInspectorPopup.html",
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
    // btn blue Book
    $('#openPopupFromData-blueBook').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "pages/page_Consumer_protection/data-updatePage_Consumer_Protection/blueBookPopup.html",
            success: function (data) {
                $('#modal_FormAjax').modal('show');
                $(".heading").html(" Blue Book / Consumer rights Law | قوانين حماية المستهلك")
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
    // btn consumer Rights
    $('#openPopupFromData-consumerRights').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "pages/page_Consumer_protection/data-updatePage_Consumer_Protection/consumerRightsPopup.html",
            success: function (data) {
                $('#modal_FormAjax').modal('show');
                $(".heading").html(" Consumer Rights | المعايير الصديقة للمستهلك")
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
    // btn consumer Rights
    $('#openPopupFromData-PriceListApproval_ReviewTerms').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "pages/page_Consumer_protection/data-updatePage_Consumer_Protection/data-PriceListApproval_ReviewTermsPopup.html",
            success: function (data) {
                $('#modal_FormAjax').modal('show');
                $(".heading").html(" Price list Approval / Review Terms & Conditions | اعتماد قائمة الأسعار/ مراجعة الشروط والاحكام")
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