// Modal functionality
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// İnkılap detayları
const inkilapDetails = {
    siyasi: {
        title: 'Siyasi İnkılaplar',
        content: `
            <h2>Siyasi İnkılaplar</h2>
            <div class="detail-item">
                <h3><i class="fas fa-crown"></i> Saltanatın Kaldırılması (1 Kasım 1922)</h3>
                <p>TBMM'de kabul edilen kanunla saltanat kaldırıldı. Bu inkılap, Osmanlı hanedanının siyasi yetkilerini sona erdirdi ve ulusal egemenliğin tam olarak sağlanmasını sağladı.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-flag"></i> Cumhuriyetin İlanı (29 Ekim 1923)</h3>
                <p>Mustafa Kemal Atatürk'ün önderliğinde Cumhuriyet ilan edildi. Bu inkılap, Türkiye'nin yönetim şeklini demokratik bir cumhuriyet haline getirdi.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-mosque"></i> Halifeliğin Kaldırılması (3 Mart 1924)</h3>
                <p>Halifelik makamı kaldırıldı. Bu inkılap, din ve devlet işlerinin ayrılmasını sağlayarak laik bir devlet yapısının temellerini attı.</p>
            </div>
        `
    },
    hukuki: {
        title: 'Hukuki İnkılaplar',
        content: `
            <h2>Hukuki İnkılaplar</h2>
            <div class="detail-item">
                <h3><i class="fas fa-book"></i> Teşkilat-ı Esasiye Kanunu (1921)</h3>
                <p>İlk anayasa olarak kabul edilen bu kanun, ulusal egemenlik ilkesini benimseyen demokratik bir devlet yapısını öngörüyordu.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-balance-scale"></i> Türk Medeni Kanunu (17 Şubat 1926)</h3>
                <p>İsviçre Medeni Kanunu'ndan uyarlanan bu kanun, kadın-erkek eşitliğini sağladı ve modern hukuk sisteminin temellerini attı.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-gavel"></i> Ceza Kanunu (1926)</h3>
                <p>İtalyan Ceza Kanunu'ndan uyarlanan bu kanun, modern ceza hukukunun uygulanmasını sağladı.</p>
            </div>
        `
    },
    egitim: {
        title: 'Eğitim ve Kültür İnkılapları',
        content: `
            <h2>Eğitim ve Kültür İnkılapları</h2>
            <div class="detail-item">
                <h3><i class="fas fa-graduation-cap"></i> Tevhid-i Tedrisat Kanunu (3 Mart 1924)</h3>
                <p>Eğitim ve öğretim birleştirildi. Tüm okullar Milli Eğitim Bakanlığı'na bağlandı ve laik eğitim sistemi kuruldu.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-font"></i> Harf İnkılabı (1 Kasım 1928)</h3>
                <p>Latin alfabesi kabul edildi. Bu inkılap, okuma yazma oranını artırdı ve Türkçenin gelişmesini sağladı.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-university"></i> Türk Tarih Kurumu (1931)</h3>
                <p>Türk tarihini bilimsel yöntemlerle araştırmak ve yaymak amacıyla kuruldu.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-language"></i> Türk Dil Kurumu (1932)</h3>
                <p>Türk dilini araştırmak ve geliştirmek amacıyla kuruldu.</p>
            </div>
        `
    },
    sosyal: {
        title: 'Sosyal İnkılaplar',
        content: `
            <h2>Sosyal İnkılaplar</h2>
            <div class="detail-item">
                <h3><i class="fas fa-female"></i> Kadın Hakları</h3>
                <p>Kadınlara seçme ve seçilme hakkı verildi (1934). Kadınlar siyasi hayata katılmaya başladı.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-hat-cowboy"></i> Şapka Kanunu (25 Kasım 1925)</h3>
                <p>Fes yerine şapka giyilmesi zorunlu hale getirildi. Bu inkılap, çağdaş giyim tarzının benimsenmesini sağladı.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-id-card"></i> Soyadı Kanunu (21 Haziran 1934)</h3>
                <p>Her Türk vatandaşına bir soyadı alma zorunluluğu getirildi. Mustafa Kemal'e "Atatürk" soyadı verildi.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-calendar"></i> Takvim, Saat ve Ölçü Birimleri</h3>
                <p>Uluslararası takvim, saat sistemi ve ölçü birimleri kabul edildi.</p>
            </div>
        `
    },
    ekonomik: {
        title: 'Ekonomik İnkılaplar',
        content: `
            <h2>Ekonomik İnkılaplar</h2>
            <div class="detail-item">
                <h3><i class="fas fa-chart-line"></i> İzmir İktisat Kongresi (1923)</h3>
                <p>Ekonomik kalkınma için özel teşebbüsün desteklenmesi kararlaştırıldı.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-industry"></i> Devletçilik Politikası</h3>
                <p>1930'larda devletçilik politikası benimsendi. Devlet, ekonomik kalkınmada aktif rol üstlendi.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-factory"></i> Sanayi Planları</h3>
                <p>Birinci ve İkinci Beş Yıllık Sanayi Planları hazırlandı ve uygulandı.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-bank"></i> Merkez Bankası (1930)</h3>
                <p>Türkiye Cumhuriyet Merkez Bankası kuruldu.</p>
            </div>
        `
    },
    diger: {
        title: 'Diğer İnkılaplar',
        content: `
            <h2>Diğer İnkılaplar</h2>
            <div class="detail-item">
                <h3><i class="fas fa-calendar-alt"></i> Takvim Değişikliği</h3>
                <p>Hicri takvim yerine Miladi takvim kabul edildi.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-clock"></i> Saat Sistemi</h3>
                <p>Alaturka saat sistemi yerine uluslararası saat sistemi kabul edildi.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-ruler"></i> Ölçü Birimleri</h3>
                <p>Eski ölçü birimleri yerine metrik sistem kabul edildi.</p>
            </div>
            <div class="detail-item">
                <h3><i class="fas fa-hashtag"></i> Uluslararası Rakamlar</h3>
                <p>Arap rakamları yerine uluslararası rakamlar kabul edildi.</p>
            </div>
        `
    }
};

// Modal gösterme fonksiyonu
function showDetails(category) {
    const detail = inkilapDetails[category];
    if (detail) {
        modalBody.innerHTML = detail.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Modal kapatma fonksiyonları
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// ESC tuşu ile modal kapatma
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.inkilap-card, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add CSS for modal content styling
const style = document.createElement('style');
style.textContent = `
    .detail-item {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: #f8f9fa;
        border-radius: 10px;
        border-left: 4px solid #667eea;
    }
    
    .detail-item h3 {
        color: #1e3c72;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .detail-item h3 i {
        color: #667eea;
    }
    
    .detail-item p {
        color: #555;
        line-height: 1.6;
    }
    
    .modal-content h2 {
        color: #1e3c72;
        margin-bottom: 2rem;
        text-align: center;
        font-size: 1.8rem;
    }
`;
document.head.appendChild(style); 