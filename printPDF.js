
const firebaseConfig = {
    apiKey: "AIzaSyDFa2FEFz3caMgPOUxood7v9turVpci8jo",
    authDomain: "doankangdien.firebaseapp.com",
    databaseURL: "https://doankangdien-default-rtdb.firebaseio.com",
    projectId: "doankangdien",
    storageBucket: "doankangdien.appspot.com",
    messagingSenderId: "83082397162",
    appId: "1:83082397162:web:202eba87a1c485bc73de93",
    measurementId: "G-WRWEWVM02E"
  };
  firebase.initializeApp(firebaseConfig);
  function Ready(){
    so_khung = document.getElementById('khung_xe').value;
  }


  document.getElementById("select").onclick = function(){
    Ready();
    firebase.database().ref('Thong_tin_xe/'+so_khung).on('value',function(snapshot){
        document.getElementById('bsx').value=snapshot.val().Bien_so_xe;
        document.getElementById('lx').value=snapshot.val().Loai_xe;
        document.getElementById('chu_xe').value=snapshot.val().Ten_chu_xe;
        document.getElementById('so_xe').value=snapshot.val().So_truc_xe;
        document.getElementById('tlbt').value=snapshot.val().Trong_luong_ban_than;
        document.getElementById('tlhh').value=snapshot.val().Trong_luong_hang_hoa;

    });
    firebase.database().ref('PDF/').on('value',function(snapshot){
      document.getElementById('ten').value=snapshot.val().Ten_lai_xe;
      document.getElementById('gplx').value=snapshot.val().GPLX;
      document.getElementById('tg').value=snapshot.val().Gio_vao;
      document.getElementById('date').value=snapshot.val().Ngay_can;
      document.getElementById('tlbt').value=snapshot.val().Trong_luong_ban_than;
      document.getElementById('ttlx').value=snapshot.val().Trong_luong_khi_can;
  
      document.getElementById('vtt').value=snapshot.val().Xe_vuot_tai_trong;
      document.getElementById('kq').value=snapshot.val().Phan_tram_vtt;
      document.getElementById('myimg').src = snapshot.val().Anh;
      console.log(snapshot.val().Anh);
      
  });

    

}
  