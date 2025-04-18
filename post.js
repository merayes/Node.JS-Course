let blog = [
    { name: "Blog 1", ID: 1 },
    { name: "Blog 2", ID: 2 },
    { name: "Blog 3", ID: 3 }
];

// Postları konsola yazdırır
const listPosts = () => {
    console.log("🔹 Blog Listesi:");
    blog.map(post => console.log(post.name));
};

// Yeni bir post ekler, Promise döner
const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        const isSuccess = true; // burası simülasyon için, istersen hata durumu da deneyebilirsin

        if (isSuccess) {
            blog.push(newPost);
            resolve("✅ Post eklendi.");
        } else {
            reject("❌ Post eklenemedi.");
        }
    });
};

// async/await ile kontrol fonksiyonu
async function blogControl(post) {
    try {
        const message = await addPost(post); // yeni post eklenir
        console.log(message);               // başarı mesajı
        listPosts();                        // postlar tekrar listelenir
    } catch (error) {
        console.log(error);                 // hata varsa yakalanır
    }
}

// Yeni bir post ekle
blogControl({ name: "Blog 4", ID: 4 });
