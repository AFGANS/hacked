// main.js

// Data pengguna disimpan dalam objek agar mudah dikelola
const users = {
  "6287841339645": { name: "Naya", ip: "192.239.72.1", location: "Samarinda", negara: "Indonesia", jaringan: "Smartfren", battery: "85%" },
  "087841339645": { name: "Naya", ip: "192.239.72.1", location: "Samarinda", negara: "Indonesia", jaringan: "Smartfren", battery: "85%" },
  "6283140272194": { name: "Afgan", ip: "192.235.81.1", location: "Samarinda", negara: "Indonesia", jaringan: "Axis", battery: "75%" },
  "083140272194": { name: "Afgan", ip: "192.235.81.1", location: "Samarinda", negara: "Indonesia", jaringan: "Axis", battery: "75%" },
  "6287841797201": { name: "Putra", ip: "192.168.1.10", location: "Samarinda", negara: "Indonesia", jaringan: "XL Axiata", battery: "90%" },
  "087841797201": { name: "Putra", ip: "192.168.1.10", location: "Samarinda", negara: "Indonesia", jaringan: "XL Axiata", battery: "90%" },
  "6283874123299": { name: "Nova", ip: "192.168.1.15", location: "Samarinda", negara: "Indonesia", jaringan: "Indosat Ooredoo", battery: "65%" },
  "083874123299": { name: "Nova", ip: "192.168.1.15", location: "Samarinda", negara: "Indonesia", jaringan: "Indosat Ooredoo", battery: "65%" },
  "6281253712505": { name: "Dijah", ip: "192.168.1.20", location: "Samarinda", negara: "Indonesia", jaringan: "Telkomsel", battery: "88%" },
  "081253712505": { name: "Dijah", ip: "192.168.1.20", location: "Samarinda", negara: "Indonesia", jaringan: "Telkomsel", battery: "88%" },
  "6282246631435": { name: "Fariz", ip: "192.168.1.25", location: "Samarinda", negara: "Indonesia", jaringan: "Smartfren", battery: "55%" },
  "082246631435": { name: "Fariz", ip: "192.168.1.25", location: "Samarinda", negara: "Indonesia", jaringan: "Smartfren", battery: "55%" },
  "6285845550490": { name: "Affan", ip: "192.168.1.30", location: "Samarinda", negara: "Indonesia", jaringan: "Indosat Ooredoo", battery: "95%" },
  "085845550490": { name: "Affan", ip: "192.168.1.30", location: "Samarinda", negara: "Indonesia", jaringan: "Indosat Ooredoo", battery: "95%" },
  "6282251596206": { name: "Cinta", ip: "192.168.1.35", location: "Samarinda", negara: "Indonesia", jaringan: "Telkomsel", battery: "78%" },
  "082251596206": { name: "Cinta", ip: "192.168.1.35", location: "Samarinda", negara: "Indonesia", jaringan: "Telkomsel", battery: "78%" },
  "6281522640478": { name: "Faril", ip: "192.168.1.40", location: "Samarinda", negara: "Indonesia", jaringan: "XL Axiata", battery: "60%" },
  "081522640478": { name: "Faril", ip: "192.168.1.40", location: "Samarinda", negara: "Indonesia", jaringan: "XL Axiata", battery: "60%" },
  "6282186721982": { name: "Khori", ip: "192.168.1.45", location: "Samarinda", negara: "Indonesia", jaringan: "Telkomsel", battery: "82%" },
  "082186721982": { name: "Khori", ip: "192.168.1.45", location: "Samarinda", negara: "Indonesia", jaringan: "Telkomsel", battery: "82%" },
  "6282154178372": { name: "Gevino", ip: "192.168.1.50", location: "Samarinda", negara: "Indonesia", jaringan: "Smartfren", battery: "70%" },
  "082154178372": { name: "Gevino", ip: "192.168.1.50", location: "Samarinda", negara: "Indonesia", jaringan: "Smartfren", battery: "70%" },
 "083140987654": { name: "Wermino", ip: "192.168.1.50", location: "Samarinda", negara: "Indonesia", jaringan: "Axis", battery: "12%" },
 };

/**
 * Fungsi untuk menangani logika "Cari ID".
 */
function findId() {
  // Ambil elemen-elemen DOM yang dibutuhkan
  const numberInput = document.getElementById('numberInput');
  const resultDisplay = document.getElementById('resultDisplay');
  const enteredNumber = numberInput.value.trim();
  const cardElement = document.getElementById('card');
  const hackedContent = document.getElementById('hackedContent');
  
  // Normalisasi input
  const normalizedNumber = enteredNumber.replace(/[\s-]/g, '');
  
  // Tambahkan kelas untuk latar belakang berdenyut setelah tombol diklik
  document.body.classList.add('pulsing-bg');
  
  // Ubah warna latar belakang card, judul, dan input menjadi gelap
  cardElement.classList.remove('bg-white');
  cardElement.classList.add('bg-gray-900');
  document.getElementById('title').classList.remove('text-gray-800');
  document.getElementById('title').classList.add('text-white');
  numberInput.classList.remove('text-gray-700');
  numberInput.classList.add('text-white');
  
  // Tampilkan spinner dan kosongkan hasil sebelumnya
  resultDisplay.innerHTML = `
        <div class="flex flex-col items-center">
            <div class="spinner border-4 border-white border-t-green-500 rounded-full w-12 h-12"></div>
        </div>
    `;
  resultDisplay.className = 'mt-6 text-lg text-gray-200 font-medium text-center';
  
  // Gunakan setTimeout untuk menunda tampilan hasil selama 2 detik
  setTimeout(() => {
    const user = users[normalizedNumber];
    
    if (user) {
      // Dapatkan tanggal dan waktu terkini
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const currentTime = `${hours}:${minutes}:${seconds}`;
      const currentDate = now.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
      
      // Tampilkan pesan "Berhasil Melihat Data"
      resultDisplay.innerHTML = `<p class="text-2xl font-bold text-green-400 mb-4">Berhasil Melihat Data</p>`;
      resultDisplay.classList.add('fade-in-result');
      
      // Tampilkan informasi pengguna
      resultDisplay.innerHTML += `
                <p class="mb-1"><span class="font-bold">Name:</span> ${user.name}</p>
                <p class="mb-1"><span class="font-bold">IP:</span> ${user.ip}</p>
                <p class="mb-1"><span class="font-bold">Location:</span> ${user.location}</p>
                <p class="mb-1"><span class="font-bold">Negara:</span> ${user.negara}</p>
                <p class="mb-1"><span class="font-bold">Jaringan:</span> Tersimpan Di Database</p>
                <p class="mb-1"><span class="font-bold">Jaringan Saat Ini:</span> ${user.jaringan}</p>
                <p class="mb-1"><span class="font-bold">Jam:</span> ${currentTime}</p>
                <p class="mb-1"><span class="font-bold">Tanggal:</span> ${currentDate}</p>
                <p><span class="font-bold">Status:</span> On Internet</p>
                <p><span class="font-bold">Battery:</span> ${user.battery}</p>
            `;
      resultDisplay.classList.add('text-left');
      resultDisplay.classList.remove('text-center');
      
      // Tambahkan setTimeout baru untuk efek "hacked" setelah 5 detik
      setTimeout(() => {
        // Sembunyikan semua elemen di dalam card
        cardElement.style.display = 'none';
        
        // Hapus animasi latar belakang sebelumnya dan ubah ke warna hitam
        document.body.classList.remove('pulsing-bg');
        document.body.style.backgroundColor = '#000'; // Langsung ubah ke hitam
        
        // Tunggu 1 detik untuk transisi blackout, lalu tampilkan konten hacking
        setTimeout(() => {
          const hackedButtons = document.getElementById('hackedButtons');
          const leftButton = document.getElementById('checkDatabaseLeft');
          const rightButton = document.getElementById('checkDatabaseRight');
          const virusHorseLogo = document.getElementById('virusHorseLogo');
          
          hackedContent.style.display = 'flex';
          hackedContent.classList.add('fade-in-result');
          
          // Tampilkan logo virus dan tombol yang meluncur dari bawah
          virusHorseLogo.classList.remove('hidden');
          leftButton.classList.remove('hidden');
          leftButton.classList.add('hacked-button');
          rightButton.classList.remove('hidden');
          rightButton.classList.add('hacked-button');
        }, 1000); // 1000 ms = 1 detik delay untuk blackout
      }, 5000); // 5000 ms = 5 detik delay
    } else {
      // Tampilkan pesan untuk nomor yang tidak diketahui
      resultDisplay.innerHTML = 'Masukan Yang Bener Kocak.';
      resultDisplay.className = 'mt-6 text-lg text-yellow-300 font-medium text-center fade-in-result';
    }
  }, 2000); // 2000 ms = 2 detik delay
}

// Tambahkan event listener untuk tombol agar fungsi findId() dipanggil
document.getElementById('findIdButton').addEventListener('click', findId);

// ====================================================================
// Fungsionalitas baru setelah tombol "Next Hacking" diklik
// ====================================================================

function handleCheckDatabaseClick() {
  const hackedContent = document.getElementById('hackedContent');
  const virusHorseLogo = document.getElementById('virusHorseLogo');
  const hackedButtons = document.getElementById('hackedButtons');
  
  // Sembunyikan logo dan tombol
  virusHorseLogo.classList.add('hidden');
  hackedButtons.classList.add('hidden');
  
  // Mulai animasi latar belakang yang berkedip hitam-putih
  document.body.classList.remove('flashing-bg');
  document.body.classList.add('flashing-bw');
  
  // Tampilkan teks "Memulai Hacking"
  const textMessage = document.createElement('p');
  textMessage.textContent = 'Memulai Hacking';
  textMessage.className = 'hacker-text fade-in-result';
  hackedContent.appendChild(textMessage);
  
  // Hilangkan teks setelah 1 detik
  setTimeout(() => {
    // Hapus teks yang baru saja muncul
    hackedContent.removeChild(textMessage);
    
    // Tampilkan loading bar
    const loadingBarContainer = document.createElement('div');
    loadingBarContainer.className = 'loading-bar-container';
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';
    loadingBarContainer.appendChild(loadingBar);
    hackedContent.appendChild(loadingBarContainer);
    
    // Setelah loading selesai (2 detik), tampilkan pesan akhir
    setTimeout(() => {
      // Hapus loading bar
      hackedContent.removeChild(loadingBarContainer);
      
      // Hapus animasi latar belakang berkedip
      document.body.classList.remove('flashing-bw');
      document.body.style.backgroundColor = '#000';
      
      // Tampilkan konten akhir
      const finalContainer = document.createElement('div');
      finalContainer.id = 'finalContainer'; // Tambahkan ID untuk referensi nanti
      finalContainer.className = 'flex flex-col items-center gap-4 fade-in-result';
      
      // Gambar aneh
      const strangeImage = document.createElement('img');
      strangeImage.src = 'https://placehold.co/200x200/FF0000/FFFFFF?text=Sucsess🙏'; // Gambar placeholder aneh
      strangeImage.alt = 'Gambar aneh';
      strangeImage.className = 'w-48 h-48 rounded-lg';
      
      // Teks "Selesai"
      const selesaiText = document.createElement('p');
      selesaiText.textContent = 'Selesai';
      selesaiText.className = 'text-2xl font-bold text-white';
      
      // Logo Instagram dengan event listener
      const instagramLink = document.createElement('a');
      instagramLink.id = 'instagramLink';
      instagramLink.href = '#'; // Ubah href menjadi # agar tidak langsung diarahkan
      instagramLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white hover:text-gray-400 transition-colors duration-300"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`;
      
      finalContainer.appendChild(strangeImage);
      finalContainer.appendChild(selesaiText);
      finalContainer.appendChild(instagramLink);
      hackedContent.appendChild(finalContainer);
      
      // Tambahkan event listener untuk logo Instagram
      instagramLink.addEventListener('click', handleInstagramClick);
      
    }, 2000); // 2 detik untuk loading bar
  }, 1000); // 1 detik untuk teks awal
}

// ====================================================================
// Fungsionalitas baru saat logo Instagram di klik
// ====================================================================

function handleInstagramClick(event) {
  event.preventDefault(); // Mencegah link berjalan secara default
  
  const hackedContent = document.getElementById('hackedContent');
  const finalContainer = document.getElementById('finalContainer');
  const instagramURL = 'https://www.instagram.com/newganfxzx?igsh=M3R2b3drY3k1ZWw3&utm_source=qr';
  
  // Sembunyikan semua elemen yang ada di finalContainer
  finalContainer.style.display = 'none';
  
  // Munculkan logo Kuda Virus dari bawah
  const virusLogo = document.getElementById('virusHorseLogo');
  virusLogo.classList.remove('hidden');
  virusLogo.style.animation = 'slideInBottom 1s ease-out forwards';
  virusLogo.style.position = 'relative'; // Atur posisi agar animasi berfungsi
  
  // Teks yang akan muncul satu per satu
  const textToType = "Follow ig Afgan Sekarang Juga";
  const typingTextElement = document.createElement('span');
  typingTextElement.className = 'typing-text';
  hackedContent.appendChild(typingTextElement);
  
  let charIndex = 0;
  const typingInterval = setInterval(() => {
    if (charIndex < textToType.length) {
      typingTextElement.textContent += textToType.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typingInterval);
      // Tunggu 1.5 detik setelah teks selesai, lalu hilangkan
      setTimeout(() => {
        typingTextElement.style.display = 'none';
        
        // Munculkan tangan dari atas
        const handEmoji = document.createElement('span');
        handEmoji.innerHTML = '👇';
        handEmoji.style.fontSize = '8rem';
        handEmoji.style.animation = 'slideInTop 1.5s ease-out forwards';
        hackedContent.appendChild(handEmoji);
        
        // Setelah tangan sampai di tengah (1.5 detik), redirect
        setTimeout(() => {
          window.location.href = instagramURL;
        }, 1500); // 1.5 detik agar animasi tangan selesai
        
      }, 1500); // 1.5 detik setelah teks selesai diketik
    }
  }, 100); // 100 ms per karakter
}


// Tambahkan event listener untuk tombol agar fungsi findId() dipanggil
document.getElementById('findIdButton').addEventListener('click', findId);

// Tambahkan event listener untuk tombol "Check Database Account Number"
document.getElementById('checkDatabaseLeft').addEventListener('click', handleCheckDatabaseClick);
document.getElementById('checkDatabaseRight').addEventListener('click', handleCheckDatabaseClick);