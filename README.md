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
Deskripsi: untuk login nya user untuk mendapatkan token,<br>
Method: POST<br>
URL: localhost:4000/api/v1/login<br>
<br>
Format Pengisian:<br>
username: varchar,<br>
password: varchar,<br>
<br>
Contoh Pengisian Row JSON:<br>
{<br>
"username":"admin",<br>
"password":"admin",<br>
}<br>

<b>Melihat List & Isi Newsletter<b/>
Deskripsi: Untuk melihat berita yang ditulis Admin & Narator<br>
Method: GET<br>
URL: localhost:4000/api/v1/newsletters<br>

<b>1.Super Admin / Admin</b>

<b>Melihat List User<b/>

Deskripsi: digunakan untuk melihat list semua user
Method: GET
URL: localhost:4000/api/v1/admin/users

<b>Create User Narator & Buzzer</b>

Deskripsi: digunakan untuk membuat user dengan role narator atau buzzer <br/>
Method: POST <br/>
URL: localhost:4000/api/v1/admin/user <br/>
<br>
Format Pengisian:<br>
username : varchar,<br>
password : varchar,<br>
id_role : integer (sesuaikan dengan id pada tabel roles)<br>
<br>
Contoh Pengisian Row JSON:<br>
{<br>
"username":"john",<br>
"password":"john123",<br>
"id_role": 3<br>
}<br>
<br>
<b>Create Newsletter</b><br>
<br>
Deskripsi: digunakan untuk membuat artikel<br>
Method: POST<br>
URL: localhost:4000/api/v1/:id_user(isi sesuai id akun)/newsletter<br>
<br>
Format Pengisian:<br>
title: varchar,<br>
content: text,<br>
file: varchar<br>
<br>
Contoh Pengisian url:<br>
localhost:4000/api/v1/1/newsletter<br>
<br>
Contoh Pengisian Row JSON:<br>
{<br>
"title": "Lorem Ipsum",<br>
"content": "Lorem Ipsum Dolor Testing",<br>
"file": "https://images.unsplash.com/photo-1572530812379-7540c450e9a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"<br>
}<br>
<br>
<b>Melihat Buzzer Menyebarkan berita apa saja<b/>
<br>
Deskripsi: Untuk melihat Buzzer sudah menyebarkan berita apa saja dan media sosialnya<br>
Method: GET<br>
URL: localhost:4000/api/v1/admin/sharelogsbuzzer<br>

<b>Edit Newsletter<b/>
Deskripsi: Untuk Mengubah Title, Content, File Newsletter<br>
Method: PATCH<br>
URL: localhost:4000/api/v1/newsletter/:id_newsletter(isi sesuai id newsletter yang akan di ubah)<br>
<br>
Format Pengisian:<br>
title: varchar,<br>
content: text,<br>
file: varchar<br>
<br>
Contoh Pengisian url:<br>
localhost:4000/api/v1/newsletter/1<br>
<br>
Contoh Pengisian Row JSON:<br>
{<br>
"title": "Lorem Ipsum",<br>
"content": "Lorem Ipsum Dolor Testing",<br>
"file": "https://images.unsplash.com/photo-1572530812379-7540c450e9a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"<br>
}<br>

<b>Delete Newsletter<b/>
Deskripsi: Untuk Menghapus Newsletter<br>
Method: DELETE<br>
URL: localhost:4000/api/v1/newsletter/:id_newsletter(isi sesuai id newsletter yang akan di ubah)<br>
<br>
Contoh Pengisian url:<br>
localhost:4000/api/v1/newsletter/1<br>

<b>2.Narator</b>

<b>Create Newsletter</b><br>
<br>
Deskripsi: digunakan untuk membuat artikel<br>
Method: POST<br>
URL: localhost:4000/api/v1/:id_user(isi sesuai id akun)/newsletter<br>
<br>
Format Pengisian:<br>
title: varchar,<br>
content: text,<br>
file: varchar<br>
<br>
Contoh Pengisian url:<br>
localhost:4000/api/v1/2/newsletter<br>
<br>
Contoh Pengisian Row JSON:<br>
{<br>
"title": "Lorem Ipsum",<br>
"content": "Lorem Ipsum Dolor Testing",<br>
"file": "https://images.unsplash.com/photo-1572530812379-7540c450e9a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"<br>
}<br>
<br>
<b>Edit Newsletter<b/>
Deskripsi: Untuk Mengubah Title, Content, File Newsletter yang dibuat oleh narator tersebut<br>
Method: PATCH<br>
URL: localhost:4000/api/v1/:id_user(isi sesuai id user)/newsletter/:id_newsletter(isi sesuai id newsletter yang akan di ubah)<br>
<br>
Format Pengisian:<br>
title: varchar,<br>
content: text,<br>
file: varchar<br>
<br>
Contoh Pengisian url:<br>
localhost:4000/api/v1/1/newsletter/1<br>
<br>
Contoh Pengisian Row JSON:<br>
{<br>
"title": "Lorem Ipsum",<br>
"content": "Lorem Ipsum Dolor Testing",<br>
"file": "https://images.unsplash.com/photo-1572530812379-7540c450e9a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"<br>
}<br>
<br>
<b>Delete Newsletter<b/>
Deskripsi: Untuk Menghapus Newsletter yang dibuat oleh narator tersebut<br>
Method: DELETE<br>
URL: localhost:4000/api/v1/:id_user(isi sesuai id user)/newsletter/:id_newsletter(isi sesuai id newsletter yang akan di ubah)<br>
<br>
Contoh Pengisian url:<br>
localhost:4000/api/v1/2/newsletter/1<br>
<br>
<b>Share Berita</b><br>
<br>
Deskripsi: untuk menyebarkan berita ke media sosial<br>
Method: POST<br>
URL: /:id_user(isi sesuai id user)/newsletter/:id_newsletter(isi sesuai id newsletter yang akan di ubah)/share<br>
<br>
Format Pengisian:<br>
id_media_social: integer<br>
<br>
Contoh Pengisian url:<br>
localhost:4000/api/v1/2/newsletter<br>
<br>
Contoh Pengisian Row JSON:<br>
{<br>
"title": "Lorem Ipsum",<br>
"content": "Lorem Ipsum Dolor Testing",<br>
"file": "https://images.unsplash.com/photo-1572530812379-7540c450e9a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"<br>
}<br>
<br>