module.exports = {
    // Oynat komutu
    playDescription: 'Bir şarkı çal',
    playErrorNotInVoiceChannel: 'Bu komutu kullanmak için bir ses kanalında olmalısınız!',
    playSearchingForSong: '{song} için arama yapılıyor...',
    playErrorTitle: 'Hata',
    playSearchingTitle: 'Şarkı Aranıyor',
  
    // Ses seviyesi komutu
    volumeDescription: 'Ses seviyesini ayarla',
    volumeNoSongPlaying: 'Şu anda çalınan bir şarkı yok!',
    volumeInvalidLevel: 'Ses seviyesi 0 ile 100 arasında olmalıdır.',
    volumeSetTitle: 'Ses Seviyesi Ayarlandı',
    volumeSetDescription: 'Ses seviyesi {volume}%'ye ayarlandı.',
  
    // Zaman komutu
    timeDescription: 'Geçerli oynatma zamanını göster',
    timeNoSongPlaying: 'Şu anda çalınan bir şarkı yok!',
    timeTitle: 'Geçerli Oynatma Zamanı',
    timeDescriptionText: 'Geçerli zaman: {currentTime}` / `{duration}',
  
    // Durdur komutu
    stopDescription: 'Müziği durdur ve kuyruğu temizle',
    stopNoSongPlaying: 'Şu anda çalınan bir şarkı yok!',
    stopTitle: 'Müzik Durduruldu',
    stopDescriptionText: 'Müzik durduruldu ve kuyruk temizlendi.',
  
    // Atla komutu
    skipDescription: 'Geçerli şarkıyı atla',
    skipNoSongPlaying: 'Şu anda çalınan bir şarkı yok!',
    skipNoMoreSongs: 'Atlayacak başka şarkı yok!',
    skipTitle: 'Şarkı Atlandı',
    skipDescriptionText: 'Geçerli şarkı atlandı!',
  
    // Karıştır komutu
    shuffleDescription: 'Kuyruğu karıştır',
    shuffleNoSongPlaying: 'Şu anda çalınan bir şarkı yok!',
    shuffleTitle: 'Kuyruk Karıştırıldı',
    shuffleDescriptionText: 'Kuyruk karıştırıldı.',
  
    // İleri sar komutu
    seekDescription: 'Şarkıda belirli bir zamana git',
    seekNoSongPlaying: 'Şu anda çalınan bir şarkı yok!',
    seekInvalidTime: 'Zaman, şarkının süresi içinde olmalıdır.',
    seekTitle: 'İleri Sarıldı',
    seekDescriptionText: '{time} zamanına gidildi.',
  
    // Devam et komutu
    resumeDescription: 'Duraklatılan şarkıyı devam ettir',
    resumeNoSongPlaying: 'Şu anda çalınan bir şarkı yok!',
    resumeAlreadyPlaying: 'Şarkı zaten çalıyor!',
    resumeTitle: 'Şarkı Devam Ettirildi',
    resumeDescriptionText: 'Şarkı devam ettirildi!',
  
    // Kaldır komutu
    removeDescription: 'Kuyruktan bir şarkıyı kaldır',
    removeNoSongPlaying: 'Şu anda çalınan bir şarkı yok!',
    removeInvalidIndex: 'Geçersiz şarkı indeksi.',
    removeTitle: 'Kaldırıldı',
    removeDescriptionText: '{song} kuyruktan kaldırıldı.',
  
    // Kuyruk komutu
    queueDescription: 'Mevcut kuyruğu göster',
    queueNoSongPlaying: 'Şu anda çalınan bir şarkı yok!',
    queueTitle: 'Mevcut Kuyruk',
    queueFooterText: 'Toplam süre: {duration}',
  
    // Önceki komut
    previousDescription: 'Önceki şarkıyı çal',
    previousNoSongPlaying: 'Şu anda çalınan bir şarkı yok!',
    previousTitle: 'Önceki Şarkı Çalınıyor',
    previousDescriptionText: Kuyruktaki önceki şarkı çalınıyor.',
  
    // Duraklat komutu
    pauseDescription: 'Geçerli şarkıyı duraklat',
    pauseNoSongPlaying: 'Şu anda çalınan bir şarkı yok!',
    pauseAlreadyPaused: 'Şarkı zaten duraklatıldı!',
    pauseTitle: 'Şarkı Duraklatıldı',
    pauseDescriptionText: 'Şarkı duraklatıldı!',
  
    // Şu anda çalan komut
    nowplayingDescription: 'Şu anda çalan şarkıyı göster',
    nowplayingNoSong: 'Şu anda çalınan bir şarkı yok!',
    nowplayingTitle: 'Şu Anda Çalan',
  
    // Döngü komutu
    loopDescription: 'Döngü modunu ayarla',
    loopNoSong: 'Şu anda çalınan bir şarkı yok!',
    loopInvalidMode: 'Geçersiz döngü modu. Geçerli modlar 0 (off), 1 (song), 2 (queue).',
    loopModeDisabled: 'Döngü modu devre dışı bırakıldı',
    loopSongEnabled: 'Şarkı döngüsü etkinleştirildi',
    loopQueueEnabled: 'Kuyruk döngüsü etkinleştirildi',
    loopTitle: 'Döngü Modu Ayarlandı',
  
    // Atlama komutu
    jumpDescription: 'Kuyruktaki belirli bir şarkıya atla',
    jumpNoSong: 'Şu anda çalınan bir şarkı yok!',
    jumpInvalidIndex: 'Geçersiz şarkı indeksi.',
    jumpTitle: 'Atlandı',
    jumpSuccess: '{index} numaralı şarkıya atlandı.',
  
    // Şarkı bul komutu
    findDescription: 'Bir şarkı ara',
    findNoVoiceChannel: 'Bu komutu kullanmak için bir ses kanalında olmalısınız.',
    findNoResults: 'Sorgunuz için şarkı bulunamadı.',
    findTitle: 'Arama Sonuçları',
    findPrompt: 'Kuyruğa eklemek için bir şarkı seçin:',
    findSongSelected: '**{title}** şarkısı seçildi ve çalınacak!',
  
    // filtreler.js
    filters: {
        description: 'Mevcut ses filtrelerini göster ve birine butona tıklayarak uygula',
        errorTitle: 'Hata',
        noSongPlaying: 'Şu anda çalınan bir şarkı yok!',
        availableFiltersTitle: 'Mevcut Filtreler',
        clickButtonToApply: 'Bir filtre uygulamak için bir butona tıklayın',
        clearFiltersLabel: 'Filtreleri Temizle',
        notYourButton: 'Bu butonu kullanamazsınız!',
        filtersCleared: 'Tüm filtreler temizlendi.',
        appliedFilter: 'Uygulanan filtre',
        timeout: 'Filtre seçimi zaman aşımına uğradı.'
    },
  
    clear: {
        description: 'Kuyruğu temizle',
        errorTitle: 'Hata',
        noSongPlaying: 'Şu anda çalınan bir şarkı yok!',
        queueClearedTitle: 'Kuyruk Temizlendi',
        queueClearedDescription: 'Kuyruk temizlendi.'
    },
  
    autoplay: {
        description: 'Otomatik çalmayı aç/kapat',
        errorTitle: 'Hata',
        noSongPlaying: 'Şu anda çalınan bir şarkı yok!',
        autoplayToggledTitle: 'Otomatik Çalma Değiştirildi',
        autoplayStatus: 'Otomatik çalma şimdi',
        enabled: 'etkin',
        disabled: 'devre dışı'
    },
  
    addsong: {
        description: 'Bir şarkıyı çalma listesine ekle',
        playlistDesc: 'Çalma listesi adı',
        songDesc: 'Şarkı URL’si veya adı',
        errorAccess: 'Çalma listesine erişirken bir hata oluştu.',
        errorNotFound: 'Çalma listesi bulunamadı veya sahibi değilsiniz.',
        errorAdd: 'Şarkıyı eklerken bir hata oluştu.',
        successTitle: 'Şarkı Eklendi',
        addedSong: 'Şarkı eklendi',
        toPlaylist: 'çalma listesine'
    },
  
    createplaylist: {
        description: 'Yeni bir çalma listesi oluştur',
        nameDesc: 'Çalma listesinin adı',
        visibilityDesc: 'Açık veya Özel',
        error: 'Çalma listesi oluştururken bir hata oluştu.',
        successTitle: 'Çalma Listesi Oluşturuldu',
        successMessage: 'Çalma listesi başarıyla oluşturuldu.',
        visibilityLabel: 'Görünürlük',
        public: 'Açık',
        private: 'Özel'
    },
  
    deleteplaylist: {
        description: 'Bir çalma listesini sil',
        playlistDesc: 'Silinecek çalma listesi adı',
        error: 'İsteği işleme alırken bir hata oluştu.',
        notFound: 'Çalma listesi bulunamadı.',
        successTitle: 'Çalma Listesi Silindi',
        successMessage: 'Çalma listesi başarıyla silindi.'
    },
  
    playplaylist: {
        description: 'Bir çalma listesini çal',
        playlistDesc: 'Çalınacak çalma listesi adı',
        error: 'Çalma listesi çalarken bir hata oluştu.',
        notFound: 'Çalma listesi bulunamadı.',
        successTitle: 'Çalma Listesi Çalınıyor',
        successMessage: 'Çalma listesi çalınıyor: {playlistName}'
    }
removesong: {
    description: 'Bir şarkıyı çalma listesinden kaldır',
    playlistDesc: 'Çalma listesi adı',
    songDesc: 'Şarkı URL’si veya adı',
    error: 'Çalma listesine erişirken bir hata oluştu.',
    notFound: 'Çalma listesi bulunamadı veya sahibi değilsiniz.',
    removeError: 'Şarkıyı kaldırırken bir hata oluştu.',
    successTitle: 'Şarkı Kaldırıldı',
    successMessage: 'Kaldırıldı',
    fromPlaylist: 'çalma listesinden',
  },
  showallplaylists: {
    description: 'Tüm çalma listelerini göster',
    error: 'Çalma listelerini getirirken bir hata oluştu.',
    noPlaylists: 'Hiç çalma listesi bulunamadı.',
    title: 'Tüm Çalma Listeleri',
    page: 'Sayfa',
    songs: 'şarkılar',
    by: 'Tarafından',
    visibility: 'Görünürlük',
    public: 'Açık',
    private: 'Özel',
  },
  showplaylist: {
    description: 'Çalma listelerinizi göster',
    error: 'Çalma listelerinizi getirirken bir hata oluştu.',
    noPlaylists: 'Hiç çalma listeniz yok.',
    title: 'Sizin Çalma Listeleriniz',
    page: 'Sayfa',
    songs: 'şarkılar',
    visibility: 'Görünürlük',
    public: 'Açık',
    private: 'Özel',
  },
  playlist: {
    errorNotInVoiceChannel: 'Bu komutu kullanmak için bir ses kanalında olmalısınız.',
    playlistAdded: 'Çalma listesi kuyruğa eklendi!',
    errorAddingPlaylist: 'Çalma listesini kuyruğa eklerken bir hata oluştu.',
    titleError: 'Hata',
    titlePlaylistAdded: 'Çalma Listesi Eklendi',
    pdescription: 'bir çalma listesi çal',
  },
  lyrics: {
    description: 'Bir şarkının sözlerini al',
    songDescription: 'Sözlerini almak istediğiniz şarkı',
    noLyricsFound: 'Bu şarkı için söz bulunamadı.',
  },
  showplaylistsongs: {
    description: 'Bir çalma listesindeki tüm şarkıları göster.',
    playlistDesc: 'Çalma listesinin adı.',
    errorAccess: 'Çalma listesine erişirken bir hata oluştu.',
    errorNotFound: 'Çalma listesi bulunamadı.',
    title: 'Çalma Listesindeki Şarkılar',
    noSongs: 'Çalma listesinde hiç şarkı yok.',
  },
  playSong: {
    authorName: 'Çalınıyor..',
    url: 'https://discord.gg/XGwTFHhw7z',
    song: 'Şarkı',
    duration: 'Süre',
    source: 'Kaynak'
  },
  addSong: {
    authorName: 'Kuyruğa Eklendi',
    url: 'https://discord.gg/XGwTFHhw7z',
    addedToQueue: 'kuyuğa eklendi'
  },
  error: {
    authorName: 'Uyarı!',
    url: 'https://discord.gg/XGwTFHhw7z',
    errorMessage: 'Bir hata meydana geldi'
  },
  finish: {
    authorName: 'Kuyruk Bitti',
    url: 'https://discord.gg/XGwTFHhw7z',
    description: 'Kuyruk tamamlandı!'
  },
  disconnect: {
    authorName: 'Bağlantı Kesildi',
    url: 'https://discord.gg/XGwTFHhw7z',
    description: 'Ses kanalından bağlantı kesildi'
  },
  empty: {
    authorName: 'Kanal Boş',
    url: 'https://discord.gg/XGwTFHhw7z',
    description: 'Ses kanalı boş, kanaldan çıkılıyor.'
  }
