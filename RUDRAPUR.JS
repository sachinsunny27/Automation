function gmMain () {
    console.log ('A "New" page has loaded.');
 function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
        (function(){
    if ($("label:contains(Consignee Address)").length > 0){
    $("label:contains('Dispatch Bags')").parent().next().find('input').keypress(isNumberKey);
    $("label:contains('LR No.')").parent().next().find('input').attr("Autocomplete","ON");
    $("label:contains('Driver Mobile No')").parent().next().find('input').attr("Autocomplete","ON");
    $("label:contains('Customer Address')").parent().next().find('textarea').css('background-color','lightblue');
    $("label:contains('Consignee Address')").parent().next().find('textarea').css('background-color','lightblue');
    $("label:contains('Truck No')").parent().next().find('input').attr({
            maxlength: "10",
            Autocomplete: "OFF",
            list: "RUDRAPUR",
            Placeholder: "TRUCK NUMBER",
            style: "text-transform: uppercase"
            }).after('<Datalist ID=RUDRAPUR></Datalist>');
        setInterval(function(){  if ($("label:contains('Meterial Code')").parent().next().find('input').val().substr(8, 2) == "66") {
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
};},1000)}
            return false;})();
$(".sapMInputBaseDisabled").css({
	opacity: 0.99
});
$('.DCA-FormField input:not(.sapMComboBoxInner), .sapMInputBaseInner, .sapMComboBox, .sapMText, .sapMSelectListCell').each(function() {
	this.style.setProperty('font-size', '20px', 'important');
});
$('.sapMLabel').each(function() {
	this.style.setProperty('font-size', '14px', 'important');
	$(".sapMLabel").css("color", "#000000");
});
(function(){
            $("label:contains('Truck No')").parent().next().find('input').blur(function(){
           var val=$("label:contains('Truck No')").parent().next().find('input').val();
			var obj=$("#RUDRAPUR").find("option[value='"+val+"']");
		if(obj !=null && obj.length>0 || $("label:contains('Vehical Type')").parent().next().find('input').val()=="")
                     return false;
                     else
     					alert("TRUCK NUMBER IS NOT DEFINED\nPlease Enter A valid TRUCK NUMBER");
    $("label:contains('Truck No')").parent().next().find('input').focusin().select();})})();
(function(){
    $("input").focusin(function(){
        $(this).css("background-color", "yellow");
    });
    $("input").focusout(function(){
        $(this).css("background-color", "white");});})();
var truck = new Array();
truck[0]='UP22T0047';
truck[1]='UK06CB0218';
truck[2]='UP26T0253';
truck[3]='HR38K0301';
truck[4]='UK03CA0494';
truck[5]='UK05CA0530';
truck[6]='HR38K0743';
truck[7]='UK04CA0807';
truck[8]='HR38J1185';
truck[9]='UK06CB1701';
truck[10]='UK06CB2225';
truck[11]='UK06CB1949';
truck[12]='UK06CA2349';
truck[13]='UK06CA2386';
truck[14]='UK06CA2540';
truck[15]='UK06CA2901';
truck[16]='UK06CB0574';
truck[17]='UP32A3302';
truck[18]='UK06CA3791';
truck[19]='UK06CA3795';
truck[20]='HR55G4015';
truck[21]='RJ05GA4417';
truck[22]='HR55G4621';
truck[23]='HR454550';
truck[24]='UK06CB2237';
truck[25]='HR38D5356';
truck[26]='UK06CB1694';
truck[27]='HR38K5664';
truck[28]='HR565769';
truck[29]='UP25AT6298';
truck[30]='UP41T6747';
truck[31]='HR386775';
truck[32]='UK06CB2220';
truck[33]='HR67A6983';
truck[34]='UP25AT7225';
truck[35]='HR747562';
truck[36]='UK06H8300';
truck[37]='UK06CB0659';
truck[38]='UK06CB0663';
truck[39]='UP02B8420';
truck[40]='UK06CA9111';
truck[41]='UP13P9537';
truck[42]='UP22C9844';
truck[43]='UP22C9850';
truck[44]='UP22C9948';
truck[45]='UP25CT2490';
truck[46]='UP25CT3014';
truck[47]='UK06CA3463';
truck[48]='UK06CB2219';
truck[49]='UK06CB0743';
truck[50]='UK06CB0759';
truck[51]='UK06CB1059';
truck[52]='UK06CB1061';
truck[53]='UK06CB1019';
truck[54]='UP22T3578';
truck[55]='UP25AT7954';
truck[56]='UK06CB0770';
truck[57]='UK04CA2022';
truck[58]='UK06CB1382';
truck[59]='UK06CA3692';
truck[60]='UK06CA0736';
truck[61]='UK06CA2183';
truck[62]='UK06CA9372';
truck[63]='UA04D8288';	
truck[64]='UK06CB1944';	
truck[65]='UA06E4713';
truck[66]='UK04CA2022';
truck[67]='UK06CA8703';	
truck[68]='UK06CB2219';
truck[69]='UK06CB2884';	
truck[70]='UK06CA0877';	
truck[71]='UK04CA5731';	
truck[72]='UK06CA3463';	
truck[73]='UP22T1906';		
truck[74]='UP25CT2487';	
truck[75]='UP22T6025';	
truck[76]='UK06CB1703';		
truck[77]='UK06CB0929';	
truck[78]='UK04CA3548';	
truck[79]='UK04CA3238';	
truck[80]='UK04CA3921';		

$(truck).ready( function() {
    $(truck).each( function(index, item) {
        var option = $('<option value="'+item+'"></option>');
        $('#RUDRAPUR').append(option);
    });
	$("Datalist").slice(1).remove();
            $('.sapUiTableTr').each(function() {
	this.style.setProperty('font-weight', 'bold');
		    $('.sapMText') .css({'white-space':'nowrap','color': 'black'});
		    $('.sapUiTableCtrl').css('width','auto');
		    $('.sapUiTableCnt').css('background-color','#f2d7c9');
		    $('.sapUiTableTr>td').css({'border-right-color':'#554e4e','border-bottom-color':'#554e4e'});
		    
})})
setInterval(function(){
    var d = new Date();
    d.setHours(18,30,0);
    if (d.getTime() < new Date().getTime()){
 $("span:contains('Material Receive')").remove()
    return false;}},500)();};