const fs = require('fs');

// ✅ 1. CREATE - employees.json dosyasını oluştur ve veri yaz
fs.writeFile('employees.json', JSON.stringify({ name: "Employee 1 Name", salary: 2000 }, null, 2), (err) => {
    if (err) throw err;
    console.log('✅ Dosya oluşturuldu ve veri yazıldı.');

    // ✅ 2. READ - Dosyayı oku
    fs.readFile('employees.json', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('📖 Dosya içeriği:', data);

        // ✅ 3. UPDATE - Dosyayı güncelle
        const updatedData = { name: "Employee 1 Updated", salary: 3000 };
        fs.writeFile('employees.json', JSON.stringify(updatedData, null, 2), (err) => {
            if (err) throw err;
            console.log('🔁 Dosya güncellendi.');

            // ✅ 4. DELETE - Dosyayı sil
            fs.unlink('employees.json', (err) => {
                if (err) throw err;
                console.log('🗑️ Dosya silindi.');
            });
        });
    });
});
