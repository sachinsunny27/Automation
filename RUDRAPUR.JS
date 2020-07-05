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
    $("label:contains('Driver Mobile No')").parent().next().find('input').attr({Autocomplete:"ON",type:"value"});     
    $("label:contains('Customer Address')").parent().next().find('textarea').css('background-color','lightblue');
    $("label:contains('Consignee Address')").parent().next().find('textarea').css('background-color','lightblue');
    $("label:contains('Truck No')").parent().next().find('input').attr({
            maxlength: "10",
            Autocomplete: "OFF",
            list: "RUDRAPUR",
            Placeholder: "TRUCK NUMBER",
            autocapitalize:"ON"
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
	FPPUFLH1590000:"Dispatch Details- THIS ORDER MADE IN  CHUNAR PLANT - WEATHER PLUS",
	FPPUTHP1690000:"Dispatch Details- THIS ORDER MADE IN  MAIHAR PLANT - PPC",	 
	FPPUTHP1500000:"Dispatch Details- THIS ORDER MADE IN  BELA PLANT - PPC",};
	       


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
                      
           return false
                else
                     alert("TRUCK NUMBER IS NOT DEFINED\nPlease Enter A valid TRUCK NUMBER");
    $("label:contains('Truck No')").parent().next().find('input').focusin().select();})})();
(function(){
    $("input").focusin(function(){
        $(this).css("background-color", "yellow");
    });
    $("input").focusout(function(){
        $(this).css("background-color", "white");});})();
	
 const options = [
["UP22T0047",""],
["UK06CB0218",""],
["UP26T0253",""],
["HR38K0301",""],
["UK03CA0494",""],
["UK05CA0530",""],
["HR38K0743",""],
["UK04CA0807",""],
["HR38J1185",""],
["UK06CB1701",""],
["UK06CB2225",""],
["UK06CB1949",""],
["UK06CA2349",""],
["UK06CA2386",""],
["UK06CA2540",""],
["UK06CA2901",""],
["UK06CB0574",""],
["UP32A3302",""],
["UK06CA3791",""],
["UK06CA3795",""],
["HR55G4015",""],
["RJ05GA4417",""],
["HR55G4621",""],
["HR454550",""],
["UK06CB2237",""],
["HR38D5356",""],
["UK06CB1694",""],
["HR38K5664",""],
["HR565769",""],
["UP25AT6298",""],
["UP41T6747",""],
["HR386775",""],
["UK06CB2220",""],
["HR67A6983",""],
["UP25AT7225",""],
["HR747562",""],
["UA06H8300",""],
["UK06CB0659",""],
["UK06CB0663",""],
["UP02B8420",""],
["UK06CA9111",""],
["UP13P9537",""],
["UP22C9844",""],
["UP22C9850",""],
["UP22C9948",""],
["UP25CT2490",""],
["UP25CT3014",""],
["UK06CA3463",""],
["UK06CB2219",""],
["UK06CB0743",""],
["UK06CB0759",""],
["UK06CB1059",""],
["UK06CB1061",""],
["UK06CB1019",""],
["UP22T3578",""],
["UP25AT7954",""],
["UK06CB0770",""],
["UK04CA2022",""],
["UK06CB1382",""],
["UK06CA3692",""],
["UK06CA0736",""],
["UK06CA2183",""],
["UK06CA9372",""],
["UA04D8288",""],
["UK06CB1944",""],
["UA06E4713",""],
["UK06CA8703",""],
["UK06CB2884",""],
["UK06CA0877",""],
["UK04CA5731",""],
["UP22T1906",""],
["UP25CT2487",""],
["UP22T6025",""],
["UK06CB1703","9756083112"],
["UK06CB0929",""],
["UK04CA3548",""],
["UK04CA3238",""],
["UK04CA3921",""],
["UK04CA3032",""],
["UK04CA4230",""],
["UK06CA6888",""],
["UK06CA2019",""],
["UK06CA6380",""],
["UP26T0445",""],
["UP26T4985",""],
["UK06CB2083",""],
["UK04CB1635",""],
["UK04CB3037","9354837997"],
["UK04CA1295","9634060232"],
["HR38L6978","9193781033"],
["UK04CA0153",""],
["HR46C2486",""],
["UK06CA6787",""],
["UK06CB3468",""],
["UK04CA7039",""],
["UK06CA8428",""],
["HR38J8844",""],
["UP83T7120",""],
["UK06CB2630",""],
["UK06CA6322",""],
["PB29R6456",""],
["UP22AF9576",""],
["UK06CB2122",""],
["UK06P7969",""],
["UK06CB1368",""],
["UP32A2612",""],
["UK04CA4478",""],
["UP25AT0717",""],
["UK06CB1390",""],
["UK06CB4251",""],
["UK06CB1318",""],
["UK06CB1216",""],
["UK06CB0079",""],
["UK06CA2905",""],
["UK04CA1770",""],
["UK06CA0199",""],
["UP25DT2327",""],
["UA04B0702",""],
["UK06CA7491",""],
["UK06CB4298",""],
["UK06CA5575",""],
["UK06CB1848",""],
["UK04CA1022","8755731786"],
["UK06CA7709",""],
["UK04CA8285","9411546103"],
["UK06CA9671",""],
["UA04A8946","7466885906"],
["HR38M3129","8923465675"],
["UA04D6319",""],
["UA04D8713","9927538086"],
["UK04CA8245","7451894000"],
["HR38M4698","7500581401"],
["UK02CA0408",""],
["UK06CB1217",""],
["UK06CB0080",""],
["UK06CB0049",""],
["UK06CB2396",""],
["UK06CB2436",""],
["UK06CB2465",""],
["UK06CB1198",""],
["UK04CA3319","8630790041"],
["UA04D8711","7088520786"],
["UK04CA9605","8449938907"],
["UP22T1274","8449763729"],
["UK04CA3450","9528632485"],
["RJ14GA0022","9368037055"],
["UK03CA1108",""],
["UP32BN1303","9627325413"],
["UK06CA3171",""],
["UK06CA4992",""],
["UK05CA0778","8006693166"],
["UK04CA3318","6398722652"],
["UK04CA7214","7500502166"],
["UA04C0554","7298246597"],
["RJ05GA0746","9690998756"],
["UK04CB1434","7310840469"],
["UK04CA4609","9639831244"],
["HR38M8127","7088041244"],
["HR38M3627","6396803591"],
["UK04CB1446","9837506485"],
["UK06CB4807",""],
["UP25DT2856","9568712526"],
["UP42T5475","7055903161"],
["UP25T5311","6395610968"],
["UK04CA1865","9758281466"],
["HR38M3139",""],
["UK04CB3036","9837972437"],
["RJ05GA0531","9756156262"],
["UK04CA1732","8979139063"],
["HR38M4527","8755235630"],
["UK06CB1450",""],
["UP02D4706","8006527003"],
["UK03CA1246",""],
["RJ05GA0750","8433186040"],
["HR55K6267",""],
["UK06G7772",""],
["UK04CA1862","8191874904"],
["UA04D8712","8899964958"],
["UP77N5585","6396333975"],
["UP32AN9417","9756091102"],
["UA04A6988","9756607827"],
["UKI04CA824",""],
["UA04E2091","8449824145"],
["UK04CB1339","7302327524"],
["UA04E3046","9927782828"],
["UK04CB1447","9997868348"],
["UK04CB1449","8859176402"],
["UK04CB1450","7300532544"],
["UK04CB1451","7451064742"],
["UA04A9797",""],
["HR38M3119",""],
["UK04CB4158",""],
["UK05CA1682",""],
["UK05CA1670","9756865801"],
["UK05CA1805",""],
["UK04CA6012",""],
["UK03CA0863",""],
["UK04CA3186",""],
["UK04CA8279",""],
["UK03CA0771",""],
["UK04CA8535",""],
["UK05CA1663",""],
["UK05CA0822",""],
["UK05CA1638",""],
["UK04CA7491",""],
["UK04CA9786",""],
["UK05CA1735",""],
["UK05CA1557",""],
["UK04CA0979",""],
["UP25BT6603",""],
["UK06CB2246",""],
["UP61D9093",""],
["UK04CA4399",""],
["UK04CB2656",""],
["UK06CA4807",""],
["UK06CA0561",""],
["UK06AJ3209",""],
["UK06CB1813",""],
["UK04CA5298",""],
["UP78BT5218",""],
["UK04CB1315",""],
["UP78CA6012",""],
["UK06CA1201",""],
["UK06CB1877",""],
["UK06CA6288",""],
["UK06CA1464",""],
["UK06CA0627",""],
["UK04CB3156",""],
["UK06CB2411",""],
["UK04CB1581",""],
["UK03CA0742",""],
["UK04CA3799",""],
["UK06CB1572",""],
["RJ14GG6926",""],
["UP25DT6584",""],
["UK04CB3040",""],
["UK06CA4709",""],
["UK06CB2096",""],
["UK06CA2596",""],
["UK06CA3785",""],
["UK06CB3081",""],
["UK06CA2586",""],
["UK06AX5435",""],
["UK04CA5239",""],
["UP26T3818",""],
["UP26T3816",""],
["UK04CB3776",""],
["UK06CB5349",""],
["UK06CB2409",""],
["UK04CA2349",""],
["UK06CA2149",""],
["UK06CB1847",""],
["UK06CA9944",""],
["UA035205",""],
["UA06G7772",""],
["UK04CB3517",""],
//["UK06CA1001",""],
["UK04CA1310",""],
["UK06CB2889",""],
["UK04CA9046",""],
["UK04CB1541",""],
["UK06CB8181",""],
["UP25AT8718",""],
["UK06CA9504",""],
["UK04CB7119",""],
["UK03CA0241","9548502865"],
["UK06H9622","8057458517"],
["UK04CB5611","9690524762"],
["UK06CB3638",""],	 
["UK06CA9912",""],	
["UA04D8915",""],
["UA04E2599",""],		 
["UP22T1563",""],
["UK06CB0268",""],
["UK03CA5354",""],
["UK06CA8463","6396850975"],	
["UK04CB4159","7055638776"],	
["HR55K6267","9084820991"], 
["UK03CA1246","8449762813"],	 
["UK04CB5160","9690777782"]	 
	 
	 
 ];


jQuery( function($) { // DOM ready and $ alias in scope

  // Create a HTMLString using Array.prototype.reduce()
  const HTMLOptions = options.reduce((html, item) => {
     html += `<option value="${item[0]}"lebel="${item[1]}"></option>`;
     return html;
  }, "");

  // Append the generated Options and assign a change listener
  $("#RUDRAPUR")
    .append(HTMLOptions)
    $(document).ready(function() {

    $("label:contains('Truck No')").parent().next().find('input').click(function()
    {
        var value = $("label:contains('Truck No')").parent().next().find('input').val();
        ($('#RUDRAPUR [value="' + value + '"]').data('value'));
    });
});

    $(document).on('change', $("label:contains('Truck No')").parent().next().find('input'), function () {
         $ ("label:contains('Driver Mobile No')").parent().next().find('input').val
         ($("#RUDRAPUR option[value='" + $("label:contains('Truck No')").parent().next().find('input').val() + "']").attr("lebel"));
      });
});
;

            $("Datalist").slice(1).remove();
            $('.sapUiTableTr').each(function() {
	this.style.setProperty('font-weight', 'bold');
		    $('.sapMText') .css({'white-space':'nowrap','color': 'black'});
		    $('.sapUiTableCtrl').css('width','auto');
		    $('.sapUiTableCnt').css('background-color','#f2d7c9');
		    $('.sapUiTableTr>td').css({'border-right-color':'#554e4e','border-bottom-color':'#554e4e'});

})


setInterval(function(){var MaterialGod = [
    "FPPUTHP1100000",
    "FPPUTHP1100000",
    "FPPUTHP1110000",
    "FPPUTHP1500000",
    "FPPUTHP1680000",
    "FPPUTHP1690000",
    "FPPUTHP1590000"];



if ($("label:contains(Consignee Address)").length > 0){


    if($('#__text8').text()=="RUDRAPUR RH 30R1"){
$('#__item5-__box2-0').remove();
$('#__item5-__box2-1').remove();
$('#__item5-__box2-2').remove();
$('#__item5-__box2-3').remove();
$('#__item5-__box2-8').remove();
$('#__item7-__box4-0').remove();

}
    else {
$('#__item5-__box2-8').remove();
$('#__item5-__box2-1').remove();
$('#__item5-__box2-3').remove();
$('#__item5-__box2-4').remove();
$('#__item5-__box2-5').remove();
$('#__item5-__box2-6').remove();
$('#__item5-__box2-7').remove();
$('#__item7-__box4-0').remove();

    } if (MaterialGod.includes($("label:contains('Meterial Code')").parent().next().find('input').val())) {
    $('#__item5-__box2-0').remove();
  }
 if($("label:contains('Vehical Type')").parent().next().find('input').val()==""){
     $('#__item5-__box2-4').remove();
     $('#__item5-__box2-5').remove();}

     else{$('#__item5-__box2-6').remove();
     $('#__item5-__box2-7').remove();}
return false;}
    var d = new Date();
    d.setHours(20,30,0);
    if (d.getTime() < new Date().getTime()){
 $("span:contains('Material Receive')").remove()
    return false;}
        if($('#__title2-inner').text()=="Depot Dispatch"){
            $("td[id*=col3]").remove();
            $("td[id*=col5]").remove();
            $("td[id*=col6]").remove();
            $("td[id*=col7]").remove();
            $('#__column3').remove();
            $('#__column5').remove();
            $('#__column6').remove();
            $('#__column7').remove();
            $('#__column0').width("145px");
            $('#__column1').width("200px");
            $('#__column2').width("52px");
            $('#__column4').width("1020px");
        }else{
        return false;}}),1000;

$(document).ready(function() {
$("label:contains('Dispatch Bags')").parent().next().find('input').blur(function()
    {
var a=$("label:contains('Dispatch Bags')").parent().next().find('input').val()
$("label:contains('Dispatch Bags 1')").parent().next().find('input').val(a)})

$("label:contains('LR No.')").parent().next().find('input').blur(function(){
    $("label:contains('Driver Mobile No')").parent().next().find('input').focusin().select().prop( "disabled", false );})});

};