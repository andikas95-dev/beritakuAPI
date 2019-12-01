## DOKUMENTASI ENDPOINT beritaku

## Teknologi yang digunakan
* Node JS
* Mysql
* Postman
* Sequelize ORM

## Tata cara penggunaan
1. Pastikan komputer atau laptop sudah terinstal node js,postman dan mySql sebagai databasenya
2. unduh file github ini lalu ekstrak ke sebuah folder
3. Buka cmd dan arahkan ke folder tersebut
4. ketikkan npm install
5. buat database dengan nama "beritaku"
5. ketikkan sequelize db:migrate
6. ketikkan sequelize db:seed:all (jika membutuhkan data dummy)
7. pastikan di MySQL anda table yang ada pada database sudah tersedia setelah di migrate
8. Buka Postman dan cek endpoint yang sudah di sediakan

## Skema Database
<a href="https://i.ibb.co/xHJfrwT/Capture.jpg"><img src="https://i.ibb.co/xHJfrwT/Capture.jpg" alt="schema" border="0"></a>

## Tata Cara Akses End point by Postman

<b>UNTUK UMUM<b/>

<b>Login<b/>
Deskripsi: untuk login nya user untuk mendapatkan token,
Method: POST
URL: localhost:4000/api/v1/login

Format Pengisian:
username: varchar,
password: varchar,

Contoh Pengisian Row JSON:
{
"username":"admin",
"password":"admin",
}

<b>Melihat List & Isi Newsletter<b/>
Deskripsi: Untuk melihat berita yang ditulis Admin & Narator
Method: GET
URL: localhost:4000/api/v1/newsletters

<b>1.Super Admin / Admin</b>

<b>Melihat List User<b/>

Deskripsi: digunakan untuk melihat list semua user
Method: GET
URL: localhost:4000/api/v1/admin/users

<b>Create User Narator & Buzzer</b>

Deskripsi: digunakan untuk membuat user dengan role narator atau buzzer <br/>
Method: POST <br/>
URL: localhost:4000/api/v1/admin/user <br/>

Format Pengisian:
username : varchar,
password : varchar,
id_role : integer (sesuaikan dengan id pada tabel roles)

Contoh Pengisian Row JSON:
{
"username":"john",
"password":"john123",
"id_role": 3
}

<b>Create Newsletter</b>

Deskripsi: digunakan untuk membuat artikel
Method: POST
URL: localhost:4000/api/v1/:id_user(isi sesuai id akun)/newsletter

Format Pengisian:
title: varchar,
content: text,
file: varchar

Contoh Pengisian url:
localhost:4000/api/v1/1/newsletter

Contoh Pengisian Row JSON:
{
"title": "Lorem Ipsum",
"content": "Lorem Ipsum Dolor Testing",
"file": "https://images.unsplash.com/photo-1572530812379-7540c450e9a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
}

<b>Melihat Buzzer Menyebarkan berita apa saja<b/>

Deskripsi: Untuk melihat Buzzer sudah menyebarkan berita apa saja dan media sosialnya
Method: GET
URL: localhost:4000/api/v1/admin/sharelogsbuzzer

<b>Edit Newsletter<b/>
Deskripsi: Untuk Mengubah Title, Content, File Newsletter
Method: PATCH
URL: localhost:4000/api/v1/newsletter/:id_newsletter(isi sesuai id newsletter yang akan di ubah)

Format Pengisian:
title: varchar,
content: text,
file: varchar

Contoh Pengisian url:
localhost:4000/api/v1/newsletter/1

Contoh Pengisian Row JSON:
{
"title": "Lorem Ipsum",
"content": "Lorem Ipsum Dolor Testing",
"file": "https://images.unsplash.com/photo-1572530812379-7540c450e9a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
}

<b>Delete Newsletter<b/>
Deskripsi: Untuk Menghapus Newsletter
Method: DELETE
URL: localhost:4000/api/v1/newsletter/:id_newsletter(isi sesuai id newsletter yang akan di ubah)

Contoh Pengisian url:
localhost:4000/api/v1/newsletter/1

<b>2.Narator</b>

<b>Create Newsletter</b>

Deskripsi: digunakan untuk membuat artikel
Method: POST
URL: localhost:4000/api/v1/:id_user(isi sesuai id akun)/newsletter

Format Pengisian:
title: varchar,
content: text,
file: varchar

Contoh Pengisian url:
localhost:4000/api/v1/2/newsletter

Contoh Pengisian Row JSON:
{
"title": "Lorem Ipsum",
"content": "Lorem Ipsum Dolor Testing",
"file": "https://images.unsplash.com/photo-1572530812379-7540c450e9a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
}

<b>Edit Newsletter<b/>
Deskripsi: Untuk Mengubah Title, Content, File Newsletter yang dibuat oleh narator tersebut
Method: PATCH
URL: localhost:4000/api/v1/:id_user(isi sesuai id user)/newsletter/:id_newsletter(isi sesuai id newsletter yang akan di ubah)

Format Pengisian:
title: varchar,
content: text,
file: varchar

Contoh Pengisian url:
localhost:4000/api/v1/1/newsletter/1

Contoh Pengisian Row JSON:
{
"title": "Lorem Ipsum",
"content": "Lorem Ipsum Dolor Testing",
"file": "https://images.unsplash.com/photo-1572530812379-7540c450e9a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
}

<b>Delete Newsletter<b/>
Deskripsi: Untuk Menghapus Newsletter yang dibuat oleh narator tersebut
Method: DELETE
URL: localhost:4000/api/v1/:id_user(isi sesuai id user)/newsletter/:id_newsletter(isi sesuai id newsletter yang akan di ubah)

Contoh Pengisian url:
localhost:4000/api/v1/2/newsletter/1

<b>Share Berita</b>

Deskripsi: untuk menyebarkan berita ke media sosial
Method: POST
URL: /:id_user(isi sesuai id user)/newsletter/:id_newsletter(isi sesuai id newsletter yang akan di ubah)/share

Format Pengisian:
id_media_social: integer

Contoh Pengisian url:
localhost:4000/api/v1/2/newsletter

Contoh Pengisian Row JSON:
{
"title": "Lorem Ipsum",
"content": "Lorem Ipsum Dolor Testing",
"file": "https://images.unsplash.com/photo-1572530812379-7540c450e9a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
}
