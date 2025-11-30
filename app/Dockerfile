FROM node:18-alpine 
# Node.js 18 sürümü temel alınarak hafif bir Alpine Linux imajı kullanılıyor.
# Alpine, küçük boyutlu olduğu için Docker imajını minimal tutar.

WORKDIR /app 
# Konteyner içinde çalışma dizinini /app olarak belirliyoruz.
# Bundan sonra yapılacak tüm işlemler bu dizin üzerinden gerçekleşir.

COPY package.json . 
# package.json dosyasını konteynerin çalışma dizinine kopyalıyoruz.
# Bağımlılıkları kurmak için gerekli dosya.

RUN npm install 
# package.json içindeki bağımlılıkları yükler.
# Bu adım uygulamanın çalışması için gerekli Node modüllerini ekler.

COPY . . 
# Projedeki tüm dosyaları konteyner içine kopyalar.
# package.json dışında kalan kod ve dosyalar da eklenir.

USER node 
# Güvenlik için root yerine node kullanıcısı ile çalıştırıyoruz.
# Konteyner içindeki işlemler root yetkisi olmadan çalışır.

EXPOSE 3000 
# Konteynerin dışarıya açacağı portu belirtir.
# Uygulama 3000 portu üzerinden erişilebilir olacak.

CMD ["npm", "start"] 
# Konteyner çalıştığında çalıştırılacak komut.
# 'npm start' ile Express uygulamamız başlatılır.
