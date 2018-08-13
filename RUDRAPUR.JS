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
truck[1]='DL01GB2355';
truck[2]='HR38K1350';
truck[3]='HR38M4985';
truck[4]='HR46A9278';
truck[5]='HR51G1A620';
truck[6]='HR559928';
truck[7]='HR55A2983';
truck[8]='HR55A6019';
truck[9]='HR55B0640';
truck[10]='HR55B4387';
truck[11]='HR55D0712';
truck[12]='HR55E1160';
truck[13]='HR55G8515';
truck[14]='HR584214';
truck[15]='HR620783';
truck[16]='HR731319';
truck[17]='HR731635';
truck[18]='PB02AQ9862';
truck[19]='PB11AE9419';
truck[20]='RJ32GA0364';
truck[21]='UA041064';
truck[22]='UA04E2032';
truck[23]='UA06A1804';
truck[24]='UA06G3002';
truck[25]='UK06CA1090';
truck[26]='UK06CA4767';
truck[27]='UK06CA5586';
truck[28]='UK18CA1224';
truck[29]='UK18CA1228';
truck[30]='UK18CA1246';
truck[31]='UK18CA1263';
truck[32]='UK18CA1315';
truck[33]='UK18CA1347';
truck[34]='UK18CA1348';
truck[35]='UK18CA1354';
truck[36]='UK18CA1365';
truck[37]='UK18CA1413';
truck[38]='UK18CA1441';
truck[39]='UK18CA1456';
truck[40]='UK18CA1460';
truck[41]='UK18CA1477';
truck[42]='UK18CA1640';
truck[43]='UK18CA1647';
truck[44]='UK18CA1802';
truck[45]='UK18CA1824';
truck[46]='UK18CA1840';
truck[47]='UK18CA1890';
truck[48]='UK18CA1890';
truck[49]='UK18CA1899';
truck[50]='UK18CA1909';
truck[51]='UK18CA1952';
truck[52]='UK18CA1997';
truck[53]='UK18CA1999';
truck[54]='UK18CA2078';
truck[55]='UK18CA2110';
truck[56]='UK18CA2135';
truck[57]='UK18CA2195';
truck[58]='UK18CA2904';
truck[59]='UK18CA3065';
truck[60]='UK18CA3398';
truck[61]='UK18CA3398';
truck[62]='UK18CA3485';
truck[63]='UK18CA3540';
truck[64]='UK18CA3541';
truck[65]='UK18CA3554';
truck[66]='UK18CA3687';
truck[67]='UK18CA3730';
truck[68]='UK18CA3796';
truck[69]='UK18CA3826';
truck[70]='UK18CA3847';
truck[71]='UK18CA3858';
truck[72]='UK18CA3912';
truck[73]='UK18CA3930';
truck[74]='UK18CA3931';
truck[75]='UK18CA3970';
truck[76]='UK18CA3971';
truck[77]='UK18CA4029';
truck[78]='UK18CA4043';
truck[79]='UK18CA4093';
truck[80]='UK18CA4132';
truck[81]='UK18CA4157';
truck[82]='UP02A6375';
truck[83]='UP02B5525';
truck[84]='UP07C5465';
truck[85]='UP12C9601';
truck[86]='UP21AN1974';
truck[87]='UP21AN5592';
truck[88]='UP21BN0329';
truck[89]='UP21BN0330';
truck[90]='UP21BN0331';
truck[91]='UP21BN0332';
truck[92]='UP21BN0334';
truck[93]='UP21G9279';
truck[94]='UP21N0454';
truck[95]='UP21N2775';
truck[96]='UP21N4313';
truck[97]='UP21N5215';
truck[98]='UP21N5834';
truck[99]='UP21N6205';
truck[100]='UP21N8263';
truck[101]='UP22C9680';
truck[102]='UP22C9707';
truck[103]='UP22T0169';
truck[104]='UP22T0925';
truck[105]='UP22T2162';
truck[106]='UP23E9638';
truck[107]='UP23T2950';
truck[108]='UP30A8333';
truck[109]='UP32DN6757';
truck[110]='UP32Z8886';
truck[111]='UP64F1946';
truck[112]='UP65R9389';
truck[113]='UK18CA1973';
truck[114]='UK18CA1899';
truck[115]='UK18CA3436';
truck[116]='HR38C1681';
truck[117]='UK18CA1291';

$(truck).ready( function() {
    $(truck).each( function(index, item) {
        var option = $('<option value="'+item+'"></option>');
        $('#KASHIPUR').append(option);
    });
});