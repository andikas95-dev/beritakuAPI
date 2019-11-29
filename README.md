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

<b>1.Super Admin / Admin</b>

<b>Create User Narator & Buzzer</b>

Deskripsi: digunakan untuk membuat user dengan role narator atau buzzer<br/>
Method: POST <br/>
URL: localhost:4000/api/v1/admin/user<br/>

Format Pengisian:<br/>
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
