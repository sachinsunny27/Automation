function gmMain () {
    console.log ('A "N" page has led.');
 function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
     {
        return true;
    }}
       (function(){
    if ($("bdi:contains('Consignee Address')").length > 0){
    $("bdi:contains('Driver Mobile No')").closest('div').next().find('input').prop ("disabled", true )
    $("bdi:contains('Driver Name')").closest('div').next().find('input').prop ("disabled", true )
    $("bdi:contains('Dispatch Bags')").closest('div').next().find('input').keypress(isNumberKey);
    $("bdi:contains('LR No.')").closest('div').next().find('input').attr("Autocomplete","ON");
    $("bdi:contains('Customer Address')").closest('div').next().find('textarea').css('background-color','lightblue');
    $("bdi:contains('Consignee Address')").closest('div').next().find('textarea').css('background-color','lightblue');
    $("bdi:contains('Truck No')").closest('div').next().find('input').attr({Placeholder: "TRUCK NUMBER"})
  }})();

    setInterval(function()
{
$(".sapMInputBaseDisabled").css({
	opacity: 0.99
});
$('.DCA-FormField input:not(.sapMComboBoxInner), .sapMInputBaseInner, .sapMComboBox, .sapMText, .sapMSelectListCell').each(function() {
	this.style.setProperty('font-size', '20px','important');
});
$('.sapMLabel').each(function() {
	this.style.setProperty('font-size', '16px', 'important');
$('.sapMLabel').css("color", "#000000");
});},100)

     $("input").focusin(function(){
        $(this).css("background-color", "yellow");
    });
    $("input").focusout(function(){
        $(this).css("background-color", "white");});
	$("bdi:contains('Truck No')").closest('div').next().find('input').attr({
            maxlength: "10",
            Autocomplete: "OFF",
            list: "RUDRAPUR",
            autocapitalize:"ON"
            }).after('<Datalist ID=RUDRAPUR></Datalist>');

function Validation(){
$("bdi:contains('Truck No')").closest('div').next().find('input').attr({
            maxlength: "10",
            Autocomplete: "OFF",
            list: "RUDRAPUR",
            autocapitalize:"ON"
            }).after('<Datalist ID=RUDRAPUR></Datalist>');

            var vlist=$("bdi:contains('Truck No')").closest('div').next().find('input').val()
			var obj=$("#RUDRAPUR").find("option[value='"+vlist+"']");
	
 const options = [
["UP22T0047","",""],
["UK06CB0218","8266967705","PRAMOD"],
["UP26T0253","9411386277","JAHID"],
["HR38K0301","",""],
["UK03CA0494","7500554080","SATYAPAL"],
["UK05CA0530","9119045311","HARI CHAND"],
["HR38K0743","",""],
["UK04CA0807","9761980054","PAPPU"],
["HR38J1185","9540592861","RAMPAL"],
["UK06CB1701","7668273755","RAKESH"],
["UK06CB2225","",""],
["UK06CB1949","8864873315","VIJAY"],
["UK06CA2349","8859244533","UDAL"],
["UK06CA2386","9149259464","DINESH"],
["UK06CA2540","8650839894","CHOTE LAL"],
["UK06CA2901","9719916426","DEEN DAYAL"],
["UK06CB0574","9568670956","KANHAIYYA"],
["UP32A3302","",""],
["UK06CA3791","7819008056","GOPAL"],
["UK06CA3795","9917924451","DURGAPRASAD"],
["HR55G4015","",""],
["RJ05GA4417","8267029400","GUDDU"],
["HR55G4621","",""],
["HR454550","",""],
["UK06CB2237","9639816553","KARTAR"],
["HR38D5356","",""],
["UK06CB1694","8630923295","INDERPAL"],
["HR38K5664","",""],
["HR565769","",""],
["UP25AT6298","",""],
["UP41T6747","8273179957","LILADHAR"],
["HR386775","",""],
["UK06CB2220","9897271047","RAJENDRA"],
["HR67A6983","",""],
["UP25T7225","",""],
["HR747562","9559779530","MEJAR"],
["UA06H8300","9528518051","MONU"],
["UK06CB0659","9119012186","RAJU"],
["UK06CB0663","7465939999","VIPIN"],
["UP02B8420","",""],
["UK06CA9111","8476890455","NARESH"],
["UP13P9537","",""],
["UP22C9844","",""],
["UP22C9850","",""],
["UP22C9948","",""],
["UP25CT2490","",""],
["UP25CT3014","9012303465","AKHTAR"],
["UK06CA3463","9761384033","RAJENDRA"],
["UK06CB2219","9758540534","SHYAM LAL"],
["UK06CB0743","",""],
["UK06CB0759","",""],
["UK06CB1059","",""],
["UK06CB1061","",""],
["UK06CB1019","7088610552","SHIV"],
["UP22T3578","",""],
["UP25AT7954","",""],
["UK06CB0770","",""],
["UK04CA2022","",""],
["UK06CB1382","",""],
["UK06CA3692","",""],
["UK06CA0736","",""],
["UK06CA2183","",""],
["UK06CA9372","",""],
["UA04D8288","",""],
["UK06CB1944","",""],
["UA06E4713","",""],
["UK06CA8703","",""],
["UK06CB2884","",""],
["UK06CA0877","",""],
["UK04CA5731","",""],
["UP22T1906","",""],
["UP25CT2487","",""],
["UP22T6025","",""],
["UK06CB1703","9756083112",""],
["UK06CB0929","",""],
["UK04CA3548","",""],
["UK04CA3238","",""],
["UK04CA3921","",""],
["UK04CA3032","",""],
["UK04CA4230","",""],
["UK06CA6888","",""],
["UK06CA2019","",""],
["UK06CA6380","",""],
["UP26T0445","",""],
["UP26T4985","",""],
["UK06CB2083","",""],
["UK04CB1635","",""],
["UK04CB3037","9354837997",""],
["UK04CA1295","9634060232",""],
["HR38L6978","9193781033",""],
["UK04CA0153","",""],
["HR46C2486","",""],
["UK06CA6787","",""],
["UK06CB3468","",""],
["UK04CA7039","",""],
["UK06CA8428","",""],
["HR38J8844","",""],
["UP83T7120","",""],
["UK06CB2630","9897300736","OMNATH"],
["UK06CA6322","",""],
["PB29R6456","",""],
["UP22AF9576","",""],
["UK06CB2122","",""],
["UK06P7969","",""],
["UK06CB1368","",""],
["UP32A2612","",""],
["UK04CA4478","",""],
["UP25AT0717","",""],
["UK06CB1390","",""],
["UK06CB4251","",""],
["UK06CB1318","",""],
["UK06CB1216","",""],
["UK06CB0079","",""],
["UK06CA2905","",""],
["UK04CA1770","",""],
["UK06CA0199","",""],
["UP25DT2327","8439496816","PAPPU"],
["UA04B0702","",""],
["UK06CA7491","",""],
["UK06CB4298","7668958637","RAJESH"],
["UK06CA5575","",""],
["UK06CB1848","",""],
["UK04CA1022","8755731786",""],
["UK06CA7709","",""],
["UK04CA8285","9411546103",""],
["UK06CA9671","",""],
["UA04A8946","7466885906",""],
["HR38M3129","8923465675",""],
["UA04D6319","",""],
["UA04D8713","9927538086",""],
["UK04CA8245","7451894000",""],
["HR38M4698","7500581401",""],
["UK02CA0408","",""],
["UK06CB1217","",""],
["UK06CB0080","",""],
["UK06CB0049","",""],
["UK06CB2396","",""],
["UK06CB2436","",""],
["UK06CB2465","",""],
["UK06CB1198","",""],
["UK04CA3319","8630790041",""],
["UA04D8711","7088520786",""],
["UK04CA9605","8449938907",""],
["UP22T1274","8449763729",""],
["UK04CA3450","9528632485",""],
["RJ14GA0022","9368037055",""],
["UK03CA1108","",""],
["UP32BN1303","9627325413",""],
["UK06CA3171","",""],
["UK06CA4992","",""],
["UK05CA0778","8006693166",""],
["UK04CA3318","6398722652",""],
["UK04CA7214","7500502166",""],
["UA04C0554","7298246597",""],
["RJ05GA0746","9690998756",""],
["UK04CB1434","7310840469",""],
["UK04CA4609","9639831244",""],
["HR38M8127","7088041244",""],
["HR38M3627","6396803591",""],
["UK04CB1446","9837506485",""],
["UK06CB4807","",""],
["UP25DT2856","9568712526",""],
["UP42T5475","7055903161",""],
["UP25T5311","6395610968",""],
["UK04CA1865","9758281466",""],
["HR38M3139","",""],
["UK04CB3036","9837972437",""],
["RJ05GA0531","9756156262",""],
["UK04CA1732","8979139063",""],
["HR38M4527","8755235630",""],
["UK06CB1450","",""],
["UP02D4706","8006527003",""],
["UK03CA1246","",""],
["RJ05GA0750","8433186040",""],
["HR55K6267","",""],
["UK06G7772","",""],
["UK04CA1862","8191874904",""],
["UA04D8712","8899964958",""],
["UP77N5585","6396333975",""],
["UP32AN9417","9756091102",""],
["UA04A6988","9756607827",""],
["UKI04CA824","",""],
["UA04E2091","8449824145",""],
["UK04CB1339","7302327524",""],
["UA04E3046","9927782828",""],
["UK04CB1447","9997868348",""],
["UK04CB1449","8859176402",""],
["UK04CB1450","7300532544",""],
["UK04CB1451","7451064742",""],
["UA04A9797","",""],
["HR38M3119","",""],
["UK04CB4158","",""],
["UK05CA1682","",""],
["UK05CA1670","9756865801",""],
["UK05CA1805","",""],
["UK04CA6012","",""],
["UK03CA0863","",""],
["UK04CA3186","",""],
["UK04CA8279","",""],
["UK03CA0771","",""],
["UK04CA8535","",""],
["UK05CA1663","",""],
["UK05CA0822","",""],
["UK05CA1638","",""],
["UK04CA7491","",""],
["UK04CA9786","",""],
["UK05CA1735","",""],
["UK05CA1557","",""],
["UK04CA0979","",""],
["UP25BT6603","",""],
["UK06CB2246","",""],
["UP61D9093","",""],
["UK04CA4399","",""],
["UK04CB2656","",""],
["UK06CA4807","",""],
["UK06CA0561","",""],
["UK06AJ3209","",""],
["UK06CB1813","",""],
["UK04CA5298","",""],
["UP78BT5218","",""],
["UK04CB1315","",""],
["UP78CA6012","",""],
["UK06CA1201","",""],
["UK06CB1877","",""],
["UK06CA6288","",""],
["UK06CA1464","",""],
["UK06CA0627","",""],
["UK04CB3156","",""],
["UK06CB2411","",""],
["UK04CB1581","",""],
["UK03CA0742","",""],
["UK04CA3799","",""],
["UK06CB1572","",""],
["UK06CB1701","7668273755","RAKESH"],
["UK06CB2220","9897271047","RAJENDRA"],
["UK06CB2715","8474971854","LALARAM"],
["UP25DT2327","8439496816","PAPPU"],
["RJ14GG6926","",""],
["UP25DT6584","",""],
["UK04CB3040","",""],
["UK06CA4709","",""],
["UK06CB2096","",""],
["UK06CA2596","",""],
["UK06CA3785","",""],
["UK06CB3081","",""],
["UK06CA2586","",""],
["UK06AX5435","",""],
["UK04CA5239","",""],
["UP26T3818","",""],
["UP26T3816","",""],
["UK04CB3776","",""],
["UK06CB5349","",""],
["UK06CB2409","",""],
["UK04CA2349","",""],
["UK06CA2149","",""],
["UK06CB1847","",""],
["UK06CA9944","",""],
["UA035205","",""],
["UA06G7772","",""],
["UK04CB3517","",""],
//["UK06CA1001","",""],
["UK04CA1310","",""],
["UK06CB2889","",""],
["UK04CA9046","",""],
["UK04CB1541","",""],
["UK06CB8181","",""],
["UP25AT8718","",""],
["UK06CA9504","",""],
["UK04CB7119","",""],
["UK03CA0241","9548502865",""],
["UK06H9622","8057458517",""],
["UK04CB5611","9690524762",""],
["UK06CB3638","",""],
["UK06CA9912","",""],
["UA04D8915","",""],
["UA04E2599","",""],
["UP22T1563","",""],
["UK06CB0268","",""],
["UK03CA5354","",""],
["UK06CA8463","6396850975",""],
["UK04CB4159","7055638776",""],
["HR55K6267","9084820991",""],
["UK03CA1246","8449762813",""],
["UK04CB5160","9690777782",""],
["UK04CB6135","",""],
["UK04CB1955","",""],
["UK04CB1965","",""],
["UK04CA2816","7351041083",""],
["UK05CA1869","",""],
["UK04CA3022","",""],
["UK06CA6288","",""],
["UK04CB5121","7310522363",""],
["UK06CA6735","",""],
["UK06AM6818","",""],
["UK05CA0754","",""],
["UK05CA1286","",""],
["UP27K0082","",""],
["UK04CA5741","",""],
["UP25BP0544","",""],
["UK06AI4448","",""],
["HR38M4527","",""],
["UA04A7095","",""],
["UK06CA1735","",""],
["UK04CB9555","",""],
["UK06CB3350","",""],
["UK04CB4469","",""],
["UK04CB4128","",""],
["UK06CB5169","9639789020","RAJU"],
["UK06CB6329","",""],
["UK06CB2904","",""],
["UK06CB2328","",""],
["UA04B0702","",""],
["UK04CA5896","",""],
["UK06CB5170","9758702454","SATPAL"],
["UK06CB4641","9917278255","RAJKUMAR"],
["UK06CB4157","",""],
["UK06CB4584","7217507846","RAKESH"],
["UK06CB4298","7668958637","RAJESH"],
["UK06CB4828","",""],
["UK06CB5912","",""],
["UP22AT1306","",""],
["UP20AT1306","",""],
["UK06CB5993","",""],
["UP26T3817","",""],
["UK06CB2090","",""],
["UA06H4896","",""],
["UK06CA3538","",""],
["UK18CA6586","",""],
["UK06CB2715","8474971854","LALARAM"],
["UK06CA3814","",""],
["UK06CA2432","",""],
["UK06CB5634","",""],
["UK06CA9830","",""],
["UK04CA8140","",""],
["UK04CB8799","",""],
["UK04CB8699","",""],
["UK04CB8955","",""],
["UK04CB9055","",""],
["UK06CA6323","",""],
["UK06CA9967","",""],
["UK06CB7079","",""],
["UP25CT6998","",""],
["RJ05GA0531","",""],
["HR38L6978","",""],
["RJ14GA0022","",""],
["UA04D0023","",""],
["UK04CA2347","",""],
["UK04CA5896","",""],
["UK06CA3725","",""],
["UK06CB0491","",""],
["UP25T5311","",""],
["UK03CA0297","",""],
["UK04CA2315","",""],
["UK04CB9555","",""],
["UK06CA9677","",""],
["UK06CA9784","",""],
["UK06CB1408","",""],
["UK06CB2080","",""],
["UK06CB2904","",""],
["UP22T2424","",""],
["UP25BT2915","",""],
["UP26T3817","",""],
["UP26T4985","",""],
["UK06CA2711","",""],
[" UA04B0702","",""],
["UK06CB2465","",""],
["UK04CA3963","",""],
["UP25CT6154","",""],
["UK04CA4719","",""],
["UP25CT7892","",""],
["UA04D6319","",""],
["UK06CB4155","",""],
["UK06CB2090","",""],
["UP25BT7158","",""],
["UK06CA3754","",""],
["UK04CA3963","",""],
["UP25AT0717","",""],
["UK06CA3754","",""],
["UK04CB8655","",""],
["UK06CA0561","",""],
["UK04CA9001","",""],
["UA04E4448","",""],
["UK04CA9923","",""],
["UK04CB9990","",""],
["UK06CA7709","",""],
["UK06CB2074","",""],
["UA06G7772","",""],
["UK06CB2375","",""],
["UK04CB9555","",""],
["UK04CB6519","",""],
["UK06CA9197","",""],
["UK05CA0928","",""],
["UK06CB1524","",""],
["UK06CB1696","",""],
["UK06CA9197","",""],
["UK06CB5912","9917120662","IDRISH"],
["UK06CB7176","7668915865","VINAY"],
["UK03CA0494","7500554080","SATYAPAL"], 
["UK06CB2884","",""]

 ];


jQuery( function($) {
    const HTMLOptions = options.reduce((html, item) => {
     html += `<option value="${item[0]}"lebel="${item[1]}"lebel1="${item[2]}"></option>`;
     return html;
  }, "");

    $("#RUDRAPUR")
    .append(HTMLOptions)
    $(document).ready(function() {

    $("bdi:contains('Truck No')").closest('div').next().find('input').click(function()
    {
        var value = $("bdi:contains('Truck No')").closest('div').next().find('input').val();
        ($('#RUDRAPUR [value="' + value + '"]').data('value'));
    });
  });

    $(document).on('change', $("bdi:contains('Truck No')").closest('div').next().find('input'), function () {
         $("bdi:contains('Driver Mobile No')").closest('div').next().find('input').val
         ($("#RUDRAPUR option[value='" + $("bdi:contains('Truck No')").closest('div').next().find('input').val() + "']").attr("lebel"));
      });

    $(document).on('change', $("bdi:contains('Truck No')").closest('div').next().find('input'), function () {
         $("bdi:contains('Driver Name')").closest('div').next().find('input').val
         ($("#RUDRAPUR option[value='" + $("bdi:contains('Truck No')").closest('div').next().find('input').val() + "']").attr("lebel1"));
      });

     $("Datalist").slice(1).remove()



})}

$("bdi:contains('Truck No')").closest('div').next().find('input').focusin(Validation);
$("bdi:contains('Truck No')").closest('div').next().find('input').blur(function(){
    var vlist=$("bdi:contains('Truck No')").closest('div').next().find('input').val()
    var obj=$("#RUDRAPUR").find("option[value='"+vlist+"']")
if(obj !=null && obj.length>0 ||$("bdi:contains('Vehical Type')").closest('div').next().find('input').val()=="")

           return false

                else
                    
    $("bdi:contains('Truck No')").closest('div').next().find('input').select()});
 setInterval(function(){
                        $('.sapUiTableTr').each(function() {
                this.style.setProperty('font-weight', 'bold');
		    $('.sapMText') .css({'white-space':'nowrap','color': 'black'});
		    $('.sapUiTableCtrl').css('width','auto');
		    $('.sapUiTableCtrl').css('background-color','#f2d7c9');
		    $('.sapUiTableTr>td').css({'border-right-color':'#554e4e','border-bottom-color':'#554e4e'});

})


var MaterialGod = [
    "FPPUTHP1100000",
    "FPPUTHP1110000",
    "FPPUTHP1500000",
    "FPPUTHP1680000",
    "FPPUTHP1690000",
    "FPPUTHP1590000",
    "FPPUTHP1580000"];



if ($("bdi:contains('Consignee Address')").length > 0){


if($("span:contains('RUDRAPUR RH 30R1'):last").text()=="RUDRAPUR RH 30R1"){

$("Span:contains('Crossing')").closest('li').remove()
$("Span:contains('Diversion')").closest('li').remove()
$("Span:contains('Godown Sale')").closest('li').remove()
$("Span:contains('Godown STO')").closest('li').remove()
$("Span:contains('No Crossing')").closest('li').remove()
$("Span:contains('KOHLI ENTERPRISES')").closest('li').remove()
$("Span:contains('PARWATI FORWARDING AGENCY')").closest('li').remove()
$("Span:contains('SELF TRANSPORTATION')").closest('li').remove()
$("Span:contains('GANPATI TRANSPORT COMPANY')").closest('li').remove()

}
    else {
$("Span:contains('RH - Wagon Sale')").closest('li').remove()
$("Span:contains('RH - Platform Sale')").closest('li').remove()
$("Span:contains('RH - Wagon STO')").closest('li').remove()
$("Span:contains('Godown STO')").closest('li').remove()
$("Span:contains('RH - Platform STO')").closest('li').remove()
$("Span:contains('No Crossing')").closest('li').remove()
$("Span:contains('Diversion')").closest('li').remove()
$("Span:contains('KOHLI ENTERPRISES')").closest('li').remove()
$("Span:contains('PARWATI FORWARDING AGENCY')").closest('li').remove()
$("Span:contains('SELF TRANSPORTATION')").closest('li').remove()
$("Span:contains('GANPATI TRANSPORT COMPANY')").closest('li').remove()



    } if (MaterialGod.includes($("bdi:contains('Meterial Code')").closest('div').next().find('input').val())) {
    $("Span:contains('Crossing')").closest('li').remove();
  }
 if($("bdi:contains('Vehical Type')").closest('div').next().find('input').val()==""){
    $("Span:contains('RH - Wagon Sale')").closest('li').remove()
$("Span:contains('RH - Platform Sale')").closest('li').remove(); }

     else{$("Span:contains('RH - Wagon STO')").closest('li').remove();
     $("Span:contains('RH - Platform STO')").closest('li').remove();}
return false;}
    var d = new Date();
    d.setHours(20,30,0);
    if (d.getTime() < new Date().getTime()){
 $("span:contains('Material Receive')").remove()
    return false;}
      
                if($("bdi:contains('Dispatch Type*')").text()=="Dispatch Type*"){
            $("td[id*=col1]").remove();
            $("td[id*=col4]").remove();
            $("td[id*=col5]").remove();
            $("td[id*=col8]").remove();
            $("td[id*=col9]").remove();
                   }else
        {
        return false;}},1)

$(document).ready(function() {
$("bdi:contains('Dispatch Bags')").closest('div').next().find('input').blur(function()
    {
var a=$("bdi:contains('Dispatch Bags')").closest('div').next().find('input').val()
$("bdi:contains('Dispatch Bags 1')").closest('div').next().find('input').val(a)})

});
   function Mob(){if
                  ($("bdi:contains('Driver Mobile No')").closest('div').next().find('input').val()==""||
       $("bdi:contains('Driver Name')").closest('div').next().find('input').val()=="")

   alert("Pls ask Depot to add Vehicle Detail/Mobile No, Name");

    else

    $("bdi:contains('Driver Mobile No')").closest('div').next().find('input').prop ("disabled", false )
    $("bdi:contains('Driver Mobile No')").closest('div').next().find('input').select().focusin();
    $("bdi:contains('Driver Mobile No')").closest('div').next().find('input').focusout().prop ("disabled", true )}

    $("bdi:contains('LR No.')").closest('div').next().find('input').blur(Mob)



var tt = setInterval(function(){
 let $input = $('bdi:contains("Meterial Code")').closest('div').next().find('input'),
    $output = $('bdi:contains("Consignee Address")').closest('div').next().next('div').find('span'),
    delimits = [0,1,7,10],
    lookup = [
      { C: 'C&T', D: 'DAMAGE', F: 'FRESH', P: 'DAMAGE' },
      { PPUTHP:'PPC', PPUSLH: 'SUPER', PPUFLH: 'WEATHER PLUS', '43UTHP': 'OPC43', '53UTHP': 'OPC53' },
     { '110':'ADITYA CEMENT WORKS',
'111':'VIKRAM CEMENT WORKS',
'112':'BHATINDA CEMENT WORKS',
'113':'PANIPAT CEMENT WORKS',
'114':'DADRI CEMENT WORKS',
'115':'KOTPUTLI CEMENT WORKS',
'116':'ALIGARH CEMENT WORKS',
'118':'ADITYA CEMENT WORKS - II',
'120':'RAWAN CEMENT WORKS',
'122':'RAWAN CEMENT WORKS',
'138':'MANIKGARH CEMENT WORKS',
'150':'BELA CEMENT WORKS',
'151':'SIDHI CEMENT WORKS',
'152':'BAGA CEMENT WORKS',
'153':'BHAGERI CEMENT WORKS',
'154':'DALLA CEMENT WORKS',
'155':'DALLA SUPER CEMENT WORKS',
'156':'TANDA CEMENT WORKS',
'157':'SIKANDARABAD CEMENT WORKS',
'158':'BARA CEMENT WORKS',
'159':'CHUNAR CEMENT WORKS',
'160':'JHAJJAR CEMENT WORKS',
'161':'KATNI CEMENT WORKS',
'162':'MIRZAPUR CEMENT WORKS',
'163':'RAEBARELI CEMENT WORKS',
'164':'PALI CEMENT WORKS',
'165':'DHAR CEMENT WORKS',
'166':'ROORKEE CEMENT WORKS',
'167':'NEEM KA THANA CEMENT WORKS',
'168':'NATHDWARA CEMENT WORKS',
'169':'MAIHAR CEMENT WORKS',
'170':'HIRMI CEMENT WORKS',
'183':'MAGDALLA CEMENT WORKS',
'188':'MANIKGARH CEMENT WORKS - II'
},
      { '0000': 'MRP', '5000': 'NON MRP' }
    ],
    output_order = [2,3,0,1]; //based on the lookup index

$input.val(); //simulating whatever the page loaded

let output = delimits.map((delimit, index) =>
  lookup[index][$input.val().substring(delimit, delimits[index + 1])]);
$output.text(output_order.map((index) => output[index]).join(' - '))
.css({
    'font-weight': 'bold',
    'color': 'black',
    'text-align': 'center'
});},1000)
setTimeout(function() { clearInterval(tt); }, 5000);};
