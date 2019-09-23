let nama = '';
let peran = '';

if(nama.length === 0 && peran.length === 0){
    console.log('Nama Harus Diisi');
} else if(nama === 'Mikael' && peran.length === 0){
    console.log("Halo " + nama, "Pilih Peranmu untuk memulai game")
} else if(nama === 'Nina' && peran === "Ksatria"){
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo " + peran + ' ' + nama + ", kamu dapat menyerang dengan senjatamu!");
} else if(nama === 'Danu' && peran === 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log("Halo " + peran + ' ' + nama + ", kamu akan membantu temanmu yang terluka.");
} else if(nama === 'Zero' && peran === 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log("Halo " + peran + ' ' + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
}