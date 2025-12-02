const express = require("express"); 
// Express kütüphanesini projeye dahil ediyoruz. Express, Node.js üzerinde web sunucuları ve API’ler geliştirmek için kullanılır.

const app = express(); 
// Express uygulaması oluşturuyoruz. 'app' değişkeni üzerinden sunucu ve route’ları yönetebiliriz.

app.get("/", (req, res) => { 
  // HTTP GET isteği için "/" (ana sayfa) route’unu tanımlıyoruz
  res.json({
    message: "Hello from GitOps Demo!", 
    // Kullanıcıya JSON formatında mesaj gönderiyoruz
    timestamp: new Date().toISOString() 
    // Mesajın yanında o anki zaman bilgisini ISO formatında ekliyoruz
  });
});

app.listen(3000, () => { 
  // Sunucuyu 3000 portunda dinlemeye başlıyoruz
  console.log("Server running on port 3000"); 
  // Sunucunun çalıştığını konsola yazdırıyoruz
});

