$(document).ready(function () {
  

    // For Side Nave
    $(function () {
        $("#sidebarCollapse").on("click", function () {
            $("#sidebar, #content").toggleClass("active");
        });
    });
    // !!End Side Nave
    // Table
    // set layout Table Dashboard
    $(".tblDashBoard").ready(function () {
        $("#dt-vertical-scroll-Dashboard_wrapper").find(".row .col:nth-child(2)").addClass('d-none');
        $("#dt-vertical-scroll-Dashboard_wrapper").find(".form-control").css("height", "41px")
        $("#dt-vertical-scroll-Dashboard_wrapper").find(".form-control").attr("placeholder", "اكتب هنا كلمات المراد البحث عنها");
        $("#dt-vertical-scroll-Dashboard_wrapper").find(".form-control").focus();
    });
    // Add href to tr in table 
    $('tr[data-href]').on("click", function () {
        document.location = $(this).data('href');
    });
    // Set a dataTable
    $('#dt-vertical-scroll-Dashboard').dataTable({
        "paging": false,
        "fnInitComplete": function () {
            var myCustomScrollbar = document.querySelector('#dt-vertical-scroll_wrapper .dataTables_scrollBody');
            var ps = new PerfectScrollbar(myCustomScrollbar);
        },
        "scrollY": 420,
    },

    );
    // 


 
});