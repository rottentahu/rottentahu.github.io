---
layout: post
title:  "Nyobain Omarchy"
date:   2025-09-24 16:38:24 +0700
categories: [linux, indonesia]
---
![omarchy](/assets/images/screenshot-2025-09-24_22-39-58.png)

**Kurang lebih udah 2 mingguan install [Omarchy](https://omarchy.org/) di laptop buat kerja.**

**Setelah 2 minggu jadi daily driver, lumayan enak juga ternyata pake hyprland. Mari kita bahas apa aja yang ada di dalam Omarchy.**

### Apa itu Omarchy? 

Pada dasarnya ini tuh setup Arch Linux pake Hyprland yang dibikin sama [DHH](https://dhh.dk/) (yang bikin framework web dev termantep sepanjang masa: Ruby on Rails). Jadi kayak DHH bikin script buat otomatis instal semua aplikasi dan "dotfiles"-nya dia yang dia pake. Jadi kita tinggal pake aja langsung arch + hyprland, gausah ngulik2 lagi pusing soalnya heuheu.. Katanya juga, Omarchy ini hasil dari rasa kesel dia sama Apple wqwqwqw. Jadi dia kesel sama Apple, pindah lah pake linux nah dia ngulik2 linux tuh selama beberapa bulan dan akhirnya jadi lah Omarchy ini. Sebenernya ada project buat Ubuntu juga sebelum dia bikin Omarchy, namanya [Omakube](https://omakub.org/).

Orang-orang pada bilang Omarchy tuh adalah sebuah linux distro. Tapi DHH sendiri ga mau bilang ini tuh distro, di satu wawancara, dia lebih suka manggil Omarchy ini tuh sebuah "Remix". Kalau mau lebih jelasnya bisa dibaca di sini: [https://learn.omacom.io/2/the-omarchy-manual/91/welcome-to-omarchy](https://learn.omacom.io/2/the-omarchy-manual/91/welcome-to-omarchy)

![DHH](/assets/images/screenshot-2025-09-25_05-43-06.png)

*David Heinemeier Hansson alias DHH yang bikin Omarchy*

### Nemu Omarchy di twitter
Kira-kira 2 atau 3 bulan yang lalu rame tuh orang-orang pada ngomongin Omarchy di twitter. Awalnya aing belum ngeuh tuh apaan dah Omarchy soalnya aing ga terlalu ngikutin DHH euy meskipun tiap hari kerja pake Ruby on Rails wqwqwqw

Pas nyari-nyari ternyata Omarchy itu setup Arch tapi pake Hyprland. Sebenernya aing dah lama pake Arch tapi GUI-nya pake GNOME aja biar simpel. Ditambah dulu juga pernah tuh nyobain Hyprland tapi pake dotfiles punya orang lain. Jadi pas make susah coy soalnya harus pake Keyboard buat navigasi GUInya wqwwqwq males deh tuh soalnya mikir: "ah lama lagi ini mah kalau harus belajar GUI baru. Mending GNOME aja langsung pake ga pake ribet."

Nah pada akhirnya 3 minggu yang lalu kepikiran buat make mini PC yang udah lama nganggur karena proyek tahun lalu belajar bikin-bikin homelab yang udah terbengkalai karena males perpanjang domain xixixixi..

### Install Omarchy di mini PC jadul
Gas langsung download iso-nya di halaman Omarchy, pas kemarin masih pake Omarchy versi 2. Sekarang dilihat udah versi 3 aja. Install deh tuh di mini PC ThinkCentre M910q yang lumayan lah ya specnya buat jalanin Linux doang mah.

Pas liat process installnya, si ISOnya install arch dulu pake btrfs buat filesystemnya. Jujur aing biasanya pake ex4 doang, belum pernah pake filesystem yang lain semenjak install Linux pertama kali pas kuliah. Terus katanya si Omarchy ini cuma jalan di storage yang dienkripsi. Bootloadernya juga pake Limine, biasanya aing pake grub doang.

Beres install arch, mulai deh tuh ngerun bash script buat install-install Omarchy. Kira-kira sekitar 20menitan beres deh tuh proses instalasinya. Langsung suruh restart. Abis restart ternyata miniPC aing stuck coy di lambang "Lenovo" doang ga bisa ngapa-ngapain. Masuk BIOS juga ga bisa wqwqwqwq. Aing coba lagi beberapa kali restart tetep aja stuck di lambang Lenovo dan tetep ga bisa masuk BIOS. Kacau dah masa Omarchy bikin mini PC aing rusak.. Fak lah Omarchy! Padahal liat orang-orang pada install lancar-lancar aja kayaknya malah pada muji-muji

![gatau rusak apanya](/assets/images/jeroan-mini-pc.jpg)

*gatau apa yang rusak, bongkar aja dulu~*

Mulailah googling sana-sini sampe akhirnya ketemu github issue di reponya si omarchy itu sendiri: [https://github.com/basecamp/omarchy/issues/1286](https://github.com/basecamp/omarchy/issues/1286). Isinya ternyata ada yang pengalaman juga stuck ga bisa masuk bios, kebetulan dia pake mesin lenovo juga. Katanya meraka bisa masuk BIOS asal si SSD tempat dia install Omarchy dicabut dulu. Jadi ada kemungkinan issunya di installan Omarchy di SSD dia. Akhirnya dia berhasil ngefixnya dengan cara ngewipe SSD dia, terus install Omarchy secara manual (ga pake iso). Besoknya aing coba tuh ngewipe SSD aing terus install Omarchy manual. Berhasil deh tuh bisa masuk Omarchy. Lega tuh aing ternyata issuenya bukan dari hardware aing yang rusak heuheu.. Soalnya sempet mikir kemarin buat beli SSD baru soalnya masih penasaran sama Omarchy.

Seminggu kemudian muncul lagi issue baru di reponya Omarchy: [https://github.com/basecamp/omarchy/issues/1619](https://github.com/basecamp/omarchy/issues/1619). Issuenya sama install di mesin Lenovo, tapi ada yang lapor juga tuh di mesin Asus dapet juga stuck ga bisa ngapa-ngapain. Tau dah kenapa.. ada yang bilang katanya Limine sama beberapa mesin ga cocok katanya..

Jadi kalau mau aman ga ribet install aja manual, gampang banget kok ada langkah-langkahnya di website Omarchy: [https://learn.omacom.io/2/the-omarchy-manual/96/manual-installation](https://learn.omacom.io/2/the-omarchy-manual/96/manual-installation)



