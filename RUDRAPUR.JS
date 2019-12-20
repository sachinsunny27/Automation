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
         setInterval(function()
{

 var Material = {FPPUTHP1100000:" Dispatch Details - THIS ORDER MADE IN  ADITYA PLANT - PPC",
	F43UTHP1100000:" Dispatch Details - THIS ORDER MADE IN  ADITYA PLANT - OPC 43",
	F53UTHP1100000:"Dispatch Details - THIS ORDER MADE IN  ADITYA PLANT - OPC 53",
	FPPUSLH1100000:"Dispatch Details - THIS ORDER MADE IN  ADITYA PLANT - SUPER",
	FPPUFLH1100000:"Dispatch Details - THIS ORDER MADE IN  ADITYA PLANT - WEATHER PLUS",
	FPPUTHP1110000:"Dispatch Details - THIS ORDER MADE IN  VIKRAM PLANT - PPC",
	F43UTHP1110000:"Dispatch Details - THIS ORDER MADE IN  VIKRAM PLANT - OPC 43",
	F53UTHP1110000:"Dispatch Details - THIS ORDER MADE IN  VIKRAM PLANT - OPC 53",
	FPPUSLH1110000:"Dispatch Details - THIS ORDER MADE IN  VIKRAM PLANT - SUPER",
	FPPUFLH1110000:"Dispatch Details - THIS ORDER MADE IN  VIKRAM PLANT - WEATHER PLUS",
	FPPUTHP1160000:"Dispatch Details - THIS ORDER MADE IN  ALIGARH PLANT - PPC",
	F43UTHP1160000:"Dispatch Details - THIS ORDER MADE IN  ALIGARH PLANT - OPC 43",
	F53UTHP1160000:"Dispatch Details - THIS ORDER MADE IN  ALIGARH PLANT - OPC 53",
	FPPUSLH1160000:" Dispatch Details - THIS ORDER MADE IN  ALIGARH PLANT - SUPER",
	FPPUFLH1160000:" Dispatch Details - THIS ORDER MADE IN  ALIGARH PLANT - WEATHER PLUS",
	FPPUTHP1660000:" Dispatch Details - THIS ORDER MADE IN  ROORKEE PLANT - PPC",
	F43UTHP1660000:" Dispatch Details - THIS ORDER MADE IN  ROORKEE PLANT - OPC 43",
	F53UTHP1660000:" Dispatch Details - THIS ORDER MADE IN  ROORKEE PLANT - OPC 53",
	FPPUSLH1660000:" Dispatch Details - THIS ORDER MADE IN  ROORKEE PLANT - SUPER",
	FPPUFLH1660000:" Dispatch Details - THIS ORDER MADE IN  ROORKEE PLANT - WEATHER PLUS",
	FPPUTHP1150000:"Dispatch Details- THIS ORDER MADE IN  KOTPUTLI PLANT - PPC",
	F43UTHP1150000:"Dispatch Details- THIS ORDER MADE IN  KOTPUTLI PLANT - OPC 43",
	F53UTHP1150000:"Dispatch Details- THIS ORDER MADE IN  KOTPUTLI PLANT - OPC 53",
	FPPUSLH1150000:"Dispatch Details- THIS ORDER MADE IN  KOTPUTLI PLANT - SUPER",
	FPPUFLH1150000:"Dispatch Details- THIS ORDER MADE IN  KOTPUTLI PLANT - WEATHER PLUS",
	FPPUTHP1140000:"Dispatch Details- THIS ORDER MADE IN  DADRI PLANT - PPC",
	F43UTHP1140000:"Dispatch Details- THIS ORDER MADE IN  DADRI PLANT - OPC 43",
	F53UTHP1140000:"Dispatch Details- THIS ORDER MADE IN  DADRI PLANT - OPC 53",
	FPPUSLH1140000:"Dispatch Details- THIS ORDER MADE IN  DADRI PLANT - SUPER",
	FPPUFLH1140000:"Dispatch Details- THIS ORDER MADE IN  DADRI PLANT - WEATHER PLUS",
	FPPUTHP1680000:"Dispatch Details- THIS ORDER MADE IN  NATHDWARA PLANT - PPC",
	F43UTHP1680000:"Dispatch Details- THIS ORDER MADE IN  NATHDWARA PLANT - OPC 43",
	F53UTHP1680000:"Dispatch Details- THIS ORDER MADE IN  NATHDWARA PLANT - OPC 53",
	FPPUSLH1680000:"Dispatch Details- THIS ORDER MADE IN  NATHDWARA PLANT - SUPER",
	FPPUFLH1680000:"Dispatch Details- THIS ORDER MADE IN  NATHDWARA PLANT - WEATHER PLUS",
	FPPUTHP1590000:"Dispatch Details- THIS ORDER MADE IN  CHUNAR PLANT - PPC",
	F43UTHP1590000:"Dispatch Details- THIS ORDER MADE IN  CHUNAR PLANT - OPC 43",
	F53UTHP1590000:"Dispatch Details- THIS ORDER MADE IN  CHUNAR PLANT - OPC 53",
	FPPUSLH1590000:"Dispatch Details- THIS ORDER MADE IN  CHUNAR PLANT - SUPER",
	FPPUFLH1590000:"Dispatch Details- THIS ORDER MADE IN  CHUNAR PLANT - WEATHER PLUS"};


$.each( Material, function(index,value){

if ($("label:contains('Meterial Code')").parent().next().find('input').val()== index) {
$("span:contains(Dispatch Details)").text(value).css({
    'font-weight': 'bold',
    'color': 'black',
    'text-align': 'center'
})

}})},1000)}})();
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
truck[81]='UK04CA2022';	
truck[82]='UK04CA3032';	
truck[83]='UK04CA4230';	
truck[84]='UK06CA6888';	
truck[85]='UK06CA2019';		
truck[86]='UK06CA6380';	
truck[87]='UP26T0445';	
truck[88]='UP26T4985';	
truck[89]='UK06CB2083';
truck[90]='UK04CB1635';	
truck[91]='UK04CB3037';	
truck[92]='UK04CA1295';
truck[93]='HR38L6978';	
truck[94]='UK04CA0153';
truck[95]='HR46C2486';	
truck[96]='UK06CA6787';	
truck[97]='UK06CB3468';	
truck[98]='UK04CA7039';	
truck[99]='UK06CA8428';
truck[100]='HR38J8844';	
truck[101]='UP83T7120';	
truck[102]='UK06CB2630';
truck[103]='UK06CA6322';	
truck[104]='PB29R6456';	
truck[105]='UP22AF9576';
truck[106]='UK06CB2122';
truck[107]='UK06P7969';
truck[108]='UK06CB1368';
truck[109]='UP32A2612';	
truck[110]='UK04CA4478';	
truck[111]='UP25AT0717';	
truck[112]='UK06CB1390';	
truck[113]='UK06CB4251';	
truck[114]='UK06CB2083';
truck[115]='UK06CB1318';
truck[116]='UK06CB1216';		
truck[117]='UK06CB0079';
truck[118]='UK06CA2905';	
truck[119]='UK04CA1770';
truck[120]='UK06CA0199';
truck[121]='UP25DT2327';	
truck[122]='UK06CB2083';	
truck[123]='UA04B0702';
truck[124]='UK04CA1770';
truck[125]='UK06CA7491';
truck[126]='UK06CB4298';
truck[127]='UK06CA5575';	
truck[128]='UK06CB1848';
truck[129]='UK04CA1022';
truck[130]='UK06CA7709';	
truck[131]='UK04CA8285';
truck[132]='HR38L6978';	
truck[133]='UK06CA9671';	
truck[134]='UA04A8946';		
truck[135]='HR38M3129';		
truck[136]='UK04CA3548';
truck[137]='UA04D6319';
truck[138]='UA04D8713';	
truck[139]='UK04CA8245';	
truck[140]='UK06CA9671';	
truck[141]='HR38M4698';	
truck[142]='UK02CA0408';
truck[143]='UK06CA2905';
truck[144]='UK06CB1217';
truck[145]='UK06CB0080';
truck[146]='UK06CB0049';
truck[147]='UK06CB2396';	
truck[148]='UK06CB2436';		
truck[149]='UK06CB2465';	
truck[150]='UK06CB1198';
truck[151]='UK04CA3319';	
truck[152]='UA04D8711';	
truck[153]='UK04CA9605';	
truck[154]='UP22T1274';	
truck[155]='UK04CA3450';	
truck[156]='RJ14GA0022';
truck[157]='UK03CA1108';	
truck[158]='UP32BN1303';	
truck[159]='UK06CA3171';
truck[160]='UK06CA4992';
truck[161]='UK05CA0778';
truck[162]='UK04CA3318';	
truck[163]='UK04CA7214';	
truck[164]='UA04C0554';	
truck[165]='RJ05GA0746';	
truck[166]='UK04CB1434';
truck[167]='UK04CA4609';	
truck[168]='HR38M8127';		
truck[169]='HR38M3627';	
truck[170]='UK04CB1446';
truck[171]='UK06CB4807';
truck[172]='UP25DT2856';	
truck[173]='UP42T5475';	
truck[174]='UP25T5311';	
truck[175]='UK04CA1865';		
truck[176]='HR38M3139';	
truck[177]='HR38M4698';		
truck[178]='UK05CA0778';
truck[179]='UK04CB3036';
truck[180]='RJ05GA0531';
truck[181]='UK04CA1732';	
truck[182]='HR38M4527';	
truck[183]='UK06CB1450';
truck[184]='UP02D4706';	
truck[185]='UK03CA1246';	
truck[186]='RJ05GA0750';	
truck[187]='HR55K6267';		
truck[188]='UK06G7772';	
truck[188]='UK04CA1862';	
truck[189]='UA04D8711';
truck[190]='UA04D8712';
truck[191]='UA04D8713';
truck[192]='UP02D4706';
truck[193]='UK04CA3318';
truck[194]='UK04CA3319';
truck[195]='UK04CA1862';
truck[196]='UK04CA1865';
truck[197]='UK04CA1022';
truck[198]='UK04CA1295';
truck[199]='HR38M3129';
truck[200]='HR38M4698';
truck[201]='UP32BN1303';
truck[202]='UP25T5311';
truck[203]='HR38L6978';
truck[204]='UP77N5585';
truck[205]='UP32AN9417';
truck[206]='RJ14GA0022';
truck[207]='UA04A6988';
truck[208]='UK04CA8285';
truck[209]='UK04CA4609';
truck[210]='UK04CA7214';
truck[211]='UKI04CA8245';
truck[212]='UK04CA1732';
truck[213]='UK04CA9605';
truck[214]='UK04CB3036';
truck[215]='UK04CB3037';
truck[216]='UK05CA0778';
truck[217]='UA04E2091';
truck[218]='UP42T5475';
truck[219]='UA04A8946';
truck[220]='UP22T1274';
truck[221]='UA04C0554';
truck[222]='RJ05GA0746';
truck[223]='UK04CA3450';
truck[224]='HR38M8127';
truck[225]='RJ05GA0531';
truck[226]='HR38M4527';
truck[227]='HR38M3627';
truck[228]='RJ05GA0750';
truck[229]='UK04CB1339';
truck[230]='UA04E3046';
truck[231]='UK04CB1434';
truck[232]='UK04CB1446';
truck[233]='UK04CB1447';
truck[234]='UK04CB1449';
truck[235]='UK04CB1450';
truck[236]='UK04CB1451';
truck[237]='UP25DT2856';
truck[238]='UA04A9797';
truck[239]='UK04CA1770';
truck[240]='UK04CA3548';
truck[241]='UA04D8288';
truck[242]='HR38M3119';	
truck[243]='UK04CB4158';	
truck[244]='UK05CA1682';		
truck[245]='UK05CA1670';			
	
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