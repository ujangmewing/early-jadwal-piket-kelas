document.getElementById('piket-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah reload halaman
  
    // Ambil data dari form
    const hari = document.getElementById('hari').value;
    const nama = document.getElementById('nama').value;
    const tugas = document.getElementById('tugas').value;
  
    // Validasi input
    if (!hari || !nama || !tugas) {
      alert('Semua kolom harus diisi!');
      return;
    }
  
    // Membuat baris baru untuk tabel
    const tableBody = document.querySelector('#jadwal-table tbody');
    const newRow = document.createElement('tr');
    
    // Menambahkan data ke baris baru
    newRow.innerHTML = `
      <td>${hari}</td>
      <td>${nama}</td>
      <td>${tugas}</td>
    `;
  
    // Menambahkan baris ke tabel
    tableBody.appendChild(newRow);
  
    // Menghapus nilai form setelah data ditambahkan
    document.getElementById('hari').value = '';
    document.getElementById('nama').value = '';
    document.getElementById('tugas').value = '';
  });