// smoothscroll
var posY = 0;
var jarak = 10;


function smoothScroll(id) {
    var target = document.getElementById(id).offsetTop; //jarak antara atas dan div

    var scrollAnimate = setTimeout(function () {
        smoothScroll(id);

    }, 5) //fungsi, waktu

    posY = posY + jarak;

    // berhenti pada bagian tertentu
    if (posY >= target) {
        clearTimeout(scrollAnimate);
        posY = 0;
    } else {
        window.scroll(0, posY) //Scroll (nilai x, nilai Y)
    }




    return false;

}

//fungsi untuk validasi formular

function validasi(form) {
    var lolos = true;
    var errorText = '';

    for (i = 0; i < 3; i++) {
        if (form[i].value.trim().length <= 0) {

            switch (i) {
                case 0: errorText = '*Nama'; break;
                case 1: errorText = '*Email'; break;
                case 2: errorText = '*Pesan'; break;
                default:
            }

            if (form[i].nextElementSibling.className != 'error') {
                form[i].style.borderColor = 'red';
                form[i].insertAdjacentHTML('afterend', '<div class="error">' + errorText + ' tidak boleh kosong </div>');
            }

            lolos = false;
        } else {
            //jika sebelumnya ada error maka hapus errornya
            if (form[i].nextElementSibling.className == 'error') {
                form[i].style.borderColor = 'rgba(54, 53, 52)';
                form[i].nextElementSibling.remove();
            }


        }

    }//end for

    return lolos;
}

var target_gambar = document.getElementById('target_gambar');
var array_gambar = document.getElementById('karya_lain').children;
var no_sekarang = 0;
var temp0 = array_gambar[0].getAttribute('src');
var temp1 = array_gambar[1].getAttribute('src');
var temp2 = array_gambar[2].getAttribute('src');
var temptarget = target_gambar.getAttribute('src');
var img0 = document.getElementById('0')
var img1 = document.getElementById('1')
var img2 = document.getElementById('2')

function ganti_gambar(gambar) {
    target_gambar.src = gambar.getAttribute('src');
    no_sekarang = gambar.className;
}

function ganti_sebelum() {
    target_gambar.src = img2.getAttribute('src');
    img0.src = temptarget;
    img1.src = temp0;
    img2.src = temp1;
    temp0 = img0.src;
    temp1 = img1.src;
    temp2 = img2.src;
    temptarget = target_gambar.src;
}

function ganti_berikut() {
    target_gambar.src = img0.getAttribute('src');
    img0.src = temp1;
    img1.src = temp2;
    img2.src = temptarget;
    temp0 = img0.src;
    temp1 = img1.src;
    temp2 = img2.src;
    temptarget = target_gambar.src;
}

// function ganti_sebelum() {
//     if (no_sekarang == 0) {
//         no_sekarang = 2;
//     } else {
//         no_sekarang = no_sekarang - 1;
//     }

//     target_gambar.src = array_gambar[no_sekarang].getAttribute('src');

// }

// function ganti_berikut() {
//     if (no_sekarang == 2) {
//         no_sekarang = 0;
//     } else {
//         no_sekarang = no_sekarang + 1;
//     }
//     target_gambar.src = array_gambar[no_sekarang].getAttribute('src');

// }

function toggleMenu() {
    var menu = document.getElementById('menu-3');
    //Internet Exp > 10
    menu.classList.toggle('menu-open');
}
