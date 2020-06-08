
function disableButton(btnId) {
    var btn = document.getElementById(btnId);
    btn.enabled = false;
}


function MutExChkList(chk) {
    var chkList = chk.parentNode.parentNode.parentNode;
    var chks = chkList.getElementsByTagName("input");
    for (var i = 0; i < chks.length; i++) {
        if (chks[i] != chk && chk.checked) {
            chks[i].checked = false;
        }
    }
}


$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip({
        placement: 'right'
    });
});

$(function () {
    $("kooptoggle").hide();
    $(".mycode").children().children().children(".control-label").click(function () {
         
        var ele = $(this);
        
        if (ele.hasClass('glyphicon')) {
            if (ele.hasClass('glyphicon-plus')) {
                ele.removeClass('glyphicon-plus')
                    .addClass('glyphicon-minus')
            }
            else {
                ele.addClass('glyphicon-plus')
                    .removeClass('glyphicon-minus')
            }

        }
        else {
            var ele2 = $(this).parent().parent().find(".glyphicon");
            if (ele2.hasClass('glyphicon-plus')) {
                ele2.removeClass('glyphicon-plus')
                    .addClass('glyphicon-minus')
            }
            else {
                ele2.addClass('glyphicon-plus')
                    .removeClass('glyphicon-minus')
            }
        }

      

       
      
      
        $(this).parent().parent().parent().find("kooptoggle").slideToggle();

    });
});


function ShowPopupOTP(title) {
    $("#MyPopupOTP .modal-title").html(title); 
    $("#MyPopupOTP").modal("show");
}

function ShowPopupRecord(title ) {
    $("#MyPopupRecord .modal-title").html(title); 
    $("#MyPopupRecord").modal("show");
}

function ShowPopupWarning(title, body) {
    $("#MyPopupWarning .modal-title").html(title);
    $("#MyPopupWarning .modal-body").html(body);
    $("#MyPopupWarning").modal("show");
}

$('#MyPopupRecord').modal({
    backdrop: 'static',
    keyboard: false
})

$(document).ready(function () {

$('#txtOTPCode').mask('000000'); 
$('#txtRecordCode').mask('AAAAAAAAAA'); 
    
});

$(function () {
    
   
    $('input[id^=txtDateTR]').datetimepicker({
        format: 'DD/MM/YYYY',
        locale: moment.locale('tr', {
            week: { dow: 1 }
        }),
        });
   
    $('input[id^=txtDateEN]').datetimepicker({
        format: 'DD/MM/YYYY',
        locale: moment.locale('en', {
            week: { dow: 1 }
        }),
    });
 
    
    
});
   