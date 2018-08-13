(function() {
    function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
    $("label:contains('Dispatch Bags')").parent().next().find('input').keypress(isNumberKey);
    $("label:contains('LR No.')").parent().next().find('input').attr("Autocomplete","ON");
    $("label:contains('Truck No')").parent().next().find('input').attr({
            maxlength: "10",
            Autocomplete: "OFF",
            list: "KASHIPUR",
            Placeholder: "TRUCK NUMBER",
            style: "text-transform: uppercase"
            }).after('<Datalist ID=KASHIPUR></Datalist>');})();
         if ($("label:contains('Meterial Code')").parent().next().find('input').val().substr(8, 2) == "66") {
	$("span:contains(Dispatch Details)").text("Dispatch Details - This order is in ROORKEE PLANT").css({
		'font-weight': 'bold',
		'color': 'black',
		'text-align': 'center'
	});
} else if ($("label:contains('Meterial Code')").parent().next().find('input').val().substr(8, 2) == "16") {
	$("span:contains(Dispatch Details)").text("Dispatch Details - This order is in ALIGARH PLANT").css({
		'font-weight': 'bold',
		'color': 'black',
		'text-align': 'center'
	});
} else if ($("label:contains('Meterial Code')").parent().next().find('input').val().substr(8, 2) == "11") {
	$("span:contains(Dispatch Details)").text("Dispatch Details - This order is in VIKRAM PLANT").css({
		'font-weight': 'bold',
		'color': 'black',
		'text-align': 'center'
	});
} else if ($("label:contains('Meterial Code')").parent().next().find('input').val().substr(8, 2) == "10") {
	$("span:contains(Dispatch Details)").text("Dispatch Details - This order is in ADITYA PLANT").css({
		'font-weight': 'bold',
		'color': 'black',
		'text-align': 'center'
	});
} else if ($("label:contains('Meterial Code')").parent().next().find('input').val().substr(8, 2) == "14") {
	$("span:contains(Dispatch Details)").text("Dispatch Details - This order is in DADRI PLANT").css({
		'font-weight': 'bold',
		'color': 'black',
		'text-align': 'center'
	});
};
$(".sapMInputBaseDisabled").css({
	opacity: 0.99
});
$('.DCA-FormField input:not(.sapMComboBoxInner), .sapMInputBaseInner, .sapMComboBox').each(function() {
	this.style.setProperty('font-size', '20px', 'important');
});
$('.sapMLabel').each(function() {
	this.style.setProperty('font-size', '14px', 'important');
	$(".sapMLabel").css("color", "#000000");
});
(function(){
                        $("label:contains('Truck No')").parent().next().find('input').blur(function(){
			var val=$("label:contains('Truck No')").parent().next().find('input').val();
			var obj=$("#KASHIPUR").find("option[value='"+val+"']");
					if(obj !=null && obj.length>0)
                     return false;
                      else
     					alert("TRUCK NUMBER IS NOT DEFINED\nPlease Enter A valid TRUCK NUMBER");})})();
(function(){
    $("input").focusin(function(){
        $(this).css("background-color", "yellow");
    });
    $("input").focusout(function(){
        $(this).css("background-color", "white");});})(); 
var truck = new Array();
truck[1]='UP22T0047';
truck[2]='UK06CB0218';
truck[3]='UP26T0253';
truck[4]='HR38K0301';
truck[5]='UK03CA0494';
truck[6]='UK05CA0530';
truck[7]='HR38K0743';
truck[8]='UK04CA0807';
truck[9]='HR38J1185';
truck[10]='UK06CB1701';
truck[11]='UK06CB2225';
truck[12]='UK06CB1949';
truck[13]='UK06CA2349';
truck[14]='UK06CA2386';
truck[15]='UK06CA2540';
truck[16]='UK06CA2901';
truck[17]='UK06CB0574';
truck[18]='UP32A3302';
truck[19]='UK06CA3791';
truck[20]='UK06CA3795';
truck[21]='HR55G4015';
truck[22]='RJ05GA4417';
truck[23]='HR55G4621';
truck[24]='HR454550';
truck[25]='UK06CB2237';
truck[26]='HR38D5356';
truck[27]='UK06CB1694';
truck[28]='HR38K5664';
truck[29]='HR565769';
truck[30]='UP25AT6298';
truck[31]='UP41T6747';
truck[32]='HR386775';
truck[33]='UK06CB2220';
truck[34]='HR67A6983';
truck[35]='UP25AT7225';
truck[36]='HR747562';
truck[37]='UK06H8300';
truck[38]='UK06CB0659';
truck[39]='UK06CB0663';
truck[40]='UP02B8420';
truck[41]='UK06CA9111';
truck[42]='UP13P9537';
truck[43]='UP22C9844';
truck[44]='UP22C9850';
truck[45]='UP22C9948';
truck[46]='UP25CT2490';
truck[47]='UP25CT3014';
truck[48]='UK06CA3463';
truck[49]='UK06CB2219';
truck[50]='UK06CB0743';
truck[51]='UK06CB0759';
truck[52]='UK06CB1059';
truck[53]='UK06CB1061';
truck[54]='UK06CB1019';
truck[55]='UP22T3578';
truck[56]='UP25AT7954';
truck[57]='UK06CB0770';
truck[58]='UK04CA2022';

$(truck).ready( function() {
    $(truck).each( function(index, item) {
        var option = $('<option value="'+item+'"></option>');
        $('#KASHIPUR').append(option);
    });
});