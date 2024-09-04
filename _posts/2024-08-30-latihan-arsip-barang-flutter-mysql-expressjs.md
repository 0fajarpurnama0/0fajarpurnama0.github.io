---
layout: post
title: Latihan Aplikasi Arsip Barang di Fluter dengan MySQL dan ExpressJs
category: internet
tags: [flutter, mysql, expressjs, mobile, program, web, android, ios]
featuredimage: 
description: Latihan Aplikasi Arsip Barang di Fluter
canonicalurl: https://0fajarpurnama0.github.io/tools/2024/08/29/latihan-arsip-barang
---
# Permintaan

Dalam 3 hari, bikin aplikasi inventory sebagai berikut:

1. pencatatan keluar masuk barang beserta harga per qty
2. ⁠setiap barang diberi kategori untuk filter by kategori
3. ⁠keluar masuk barang diberi keterangan timestamp (baik barang masuk maupun barang keluar) untuk keperluan filter by date
4. ⁠setiap barang mempunyai harga jual dan harga beli
5. ⁠buat form khusus untuk menambahkan dan mengurangi item
6. ⁠untuk case mengurangi item diberikan pilihan (bukan inputan bebas) alasan barang keluar contoh: sold, expire, broken
7. ⁠Tambahkan filter by case no 6
8. ⁠Buat edit dan hapus barang
9. ⁠Buat hasil rekap laporan per minggu (format bebas)
10. ⁠Case authentication :
  - cashier hanya dapat mengurangi barang
  - admin gudang hanya dapat menambahkan dan mengurangi barang
  - super admin dapat semua akses

# Rancangan Latihan dari Mudah ke Sulit

## Diagram

<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Flutter App -->
  <rect x="20" y="100" width="130" height="50" fill="#42a5f5" />
  <text x="35" y="130" font-family="Arial" font-size="14" fill="white">Flutter App</text>

  <!-- Bi-directional Arrow between Flutter App and NodeJs Express -->
  <line x1="150" y1="125" x2="220" y2="125" stroke="black" stroke-width="2" />
  <polygon points="210,120 220,125 210,130" fill="black" />
  <polygon points="160,120 150,125 160,130" fill="black" />

  <!-- NodeJs Express Restful API -->
  <rect x="220" y="100" width="180" height="50" fill="#8bc34a" />
  <text x="240" y="115" font-family="Arial" font-size="14" fill="white">NodeJs Express</text>
  <text x="240" y="135" font-family="Arial" font-size="14" fill="white">Restful API</text>

  <!-- Bi-directional Arrow between NodeJs Express and MySQL -->
  <line x1="400" y1="125" x2="470" y2="125" stroke="black" stroke-width="2" />
  <polygon points="460,120 470,125 460,130" fill="black" />
  <polygon points="410,120 400,125 410,130" fill="black" />

  <!-- MySQL Database -->
  <rect x="470" y="100" width="130" height="50" fill="#f57f17" />
  <text x="495" y="130" font-family="Arial" font-size="14" fill="white">MySQL DB</text>

  <!-- Labels for bi-directional arrows -->
  <text x="170" y="95" font-family="Arial" font-size="12" fill="black">HTTP Request/Response</text>
  <text x="340" y="95" font-family="Arial" font-size="12" fill="black">SQL Query/Result</text>
</svg>

## Alur Pembelajaran

- Membuat halaman di flutter.
- Memisah halaman dengan app.
- Membuat halaman login tanpa kredensial.
- Membuat halaman logout.
- Membuat database dan tabel.
- Mempopulasikan tabel barang secara acak.
- Mempopulasikan tabel pengguna dengan super admin.
- Membuat koneksi server ke database.
- Membuat API yang dapat mengambil data tabel.
- Membuat koneksi HTTP dari flutter ke API.
- Mengambil data dari API ke flutter.
- Memodifikasi halaman login untuk login dengan super admin.
- Membuat halaman mendaftar pengguna baru.
- Membuat halaman tampilan daftar pengguna oleh super admin.
- Membuat tombol refresh pada halaman daftar pengguna untuk menampilkan data baru.
- Membuat tombol refresh pada halaman depan untuk menampilkan data baru.
- Halaman tersebut dapat memberikan peran pengguna oleh super admin.
- Memisahkan halaman depan antara super admin dan pengguna tanpa peran.
- Membuat halaman super admin agar dapat menambahkan barang melalui API ke database.
- Membuat halaman super admin agar dapat memodifikasi data masing-masing barang.
- Halaman modifikasi barang dipecah menjadi halaman modifikasi super admin dan logistik.
- Halaman modifikasi masing-masing barang super admin ditambah tombol hapus barang.
- Pemisahan halaman super admin, logistik, dan cashier.
- Halaman cashier tidak dapat menambah dan memodifikasi barang tetapi menjual barang.
- Membuat halaman jual untuk memberi harga dan keterangan jual barang yang dipilih.
- Membuat fitur expor ke json, csv, xml, dll, pada semua halaman depan.
- Membuat fitur sorting pada semua halaman depan.
- Membuat fitur filter pada semua halaman depan.
- Mempercantik tampilan.

# Realisasi

Source Code: [https://github.com/0fajarpurnama0/Programming-Practice/tree/ab03df42af19caafbd76faa521d318537c541d58/Flutter/flutter_belajar_aplikasi_pengarsipan](https://github.com/0fajarpurnama0/Programming-Practice/tree/ab03df42af19caafbd76faa521d318537c541d58/Flutter/flutter_belajar_aplikasi_pengarsipan)

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/HhCnvciovpI?si=FRKClTYs86UHTKIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/UTyDb-zvz7E?si=WG-Fb4sjtft8xfPp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Tutorial rinci untuk pembelajaran menyusul.

## Membuat halaman di flutter.

**lib/main.dart**
{% highlight dart %}
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Home Page'),
        ),
        body: Center(
          child: Text('This is a page.'),
        ),
      ),
    );
  }
}
{% endhighlight %}

## Memisah halaman dengan app.

**lib/main.dart**
import 'package:flutter/material.dart';
import 'HomePage.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomePage()
    );
  }
}
{% endhighlight %}

**lib/HomePage.dart**
{% highlight dart %}
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Home Page'),
        ),
        body: Center(
          child: Text('This is a page.'),
        ),
      ),
    );
  }
}
{% endhighlight %}

## Membuat halaman login tanpa kredensial.

**lib/main.dart**
import 'package:flutter/material.dart';
import 'LoginPage.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: LoginPage()
    );
  }
}
{% endhighlight %}

**lib/LoginPage.dart**
{% highlight dart %}
import 'package:flutter/material.dart';
import 'HomePage.dart';

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Login Page'),
        ),
        body: Center(
          child: ElevatedButton(onPressed: () => ToHomePage(context), child: Text('Login')),
        ),
      ),
    );
  }
}

void ToHomePage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => HomePage()),);
}
{% endhighlight %}

## Membuat halaman logout.

**lib/HomePage.dart**
{% highlight dart %}
import 'package:flutter/material.dart';
import 'LoginPage.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Home Page'),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              onPressed:() => logout(context),
            ),
          ],
        ),
        body: Center(
          child: Text('This is a page.'),
        ), 
      ),
    );
  }
}

void logout(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => LoginPage()),);
}
{% endhighlight %}

## Membuat database dan tabel.

Disini menggunakan mysql.

{% highlight sql %}
CREATE DATABASE flutter_latihan_arsip_barang;
use flutter_latihan_arsip_barang;
CREATE TABLE items (     id INT AUTO_INCREMENT PRIMARY KEY,     name VARCHAR(255) NOT NULL,      category VARCHAR(255),     description TEXT,     price DECIMAL(10, 2),      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,     exit_at DATETIME,     reason VARCHAR(255),     exit_price DECIMAL(10, 2) );
CREATE USER 'flutter_latihan_arsip_barang'@'%' IDENTIFIED BY 'flutter_latihan_arsip_barang';
GRANT ALL PRIVILEGES ON flutter_latihan_arsip_barang.* TO 'flutter_latihan_arsip_barang'@'%';
FLUSH PRIVILEGES;
{% endhighlight %}

## Mempopulasikan tabel barang secara acak.
{% highlight sql %}
INSERT INTO items (name, category, description, price, exit_at, reason, exit_price)
VALUES
  ('Item 1', 'Electronics', 'This is a description of Item 1', 100.00, NULL, NULL, NULL),
  ('Item 2', 'Furniture', 'This is a description of Item 2', 500.00, '2022-01-01 00:00:00', 'Sold', 450.00),
  ('Item 3', 'Toys', 'This is a description of Item 3', 20.00, NULL, NULL, NULL);
{% endhighlight %}

## Membuat tabel pengguna dan mempopulasikannya dengan super admin.
{% highlight sql %}
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
INSERT INTO users (username, password) VALUES ('super', 'admin');
{% endhighlight %}

## Membuat koneksi server ke database.

Disini server menggunakan NodeJs Express

**db.js**
{% highlight javascript %}
const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'flutter_latihan_arsip_barang',
  password: 'flutter_latihan_arsip_barang',
  database: 'flutter_latihan_arsip_barang'
};

const db = mysql.createPool(dbConfig);

module.exports = db;
{% endhighlight %}

**app.js**
{% highlight javascript %}
const express = require('express');
const app = express();
const db = require('./db');

app.get('/test-db', async (req, res) => {
  try {
    await db.execute('SELECT 1');
    res.json({ message: 'Connected to database successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
{% endhighlight %}

Jika berhasil, di browser silahkan coba buka [localhost:3000/test-db](localhost:3000/test-db).

## Membuat API yang dapat mengambil data tabel.

### Mengambil Tabel Barang

**app.js**
{% highlight javascript %}
const express = require('express');
const app = express();
const db = require('./db');

app.get('/flutter_latihan_arsip_barang_items_db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM items');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
{% endhighlight %}

## Membuat koneksi HTTP dari flutter ke API.

### Melihat status koneksi di debug console

**lib/HomePage.dart**
{% highlight dart %}
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'LoginPage.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Home Page'),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              onPressed:() => logout(context),
            ),
          ],
        ),
        body: Center(
          child: ElevatedButton(
            child: Text('Test Database Connection'),
            onPressed: testDatabaseConnection,
          ),
        ), 
      ),
    );
  }
}

void logout(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => LoginPage()),);
}

Future<void> testDatabaseConnection() async {
  try {
    final response = await http.get(Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db'));
    if (response.statusCode == 200) {
      print("sucess: ${response.body}");
    } else {
      print("failed: ${response.statusCode}");
    }
  } catch (e) {
    print("Error: $e");
  }
}
{% endhighlight %}

### Merubah keadaan halaman depan untuk menampilkan status koneksi

**lib/HomePage.dart**
{% highlight dart %}
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'LoginPage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePage createState() => _HomePage();
}

class _HomePage extends State<HomePage> {

  String _responseText = '';

  Future<void> _handleButtonPress() async {
    final responseText = await testDatabaseConnection();
    setState(() {
      _responseText = responseText;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Home Page'),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              onPressed:() => logout(context),
            ),
          ],
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ElevatedButton(
                child: Text('Test Database Connection'),
                onPressed: _handleButtonPress,
              ),
              Text(_responseText),
            ]
          )
        ), 
      ),
    );
  }
}

void logout(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => LoginPage()),);
}

Future<String> testDatabaseConnection() async {
  try {
    final response = await http.get(Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db'));
    if (response.statusCode == 200) {
      return 'sucess: ${response.body}';
    } else {
      return 'failed: ${response.statusCode}';
    }
  } catch (e) {
    return 'Error: $e';
  }
}
{% endhighlight %}

## Mengambil data dari API ke flutter.

### Mengambil data
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'LoginPage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePage createState() => _HomePage();
}

class _HomePage extends State<HomePage> {

  String _responseText = '';

  Future<void> _handleButtonPress() async {
    final responseText = await ItemsAPI();
    setState(() {
      _responseText = responseText;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Home Page'),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              onPressed:() => logout(context),
            ),
          ],
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ElevatedButton(
                child: Text('Test Database Connection'),
                onPressed: _handleButtonPress,
              ),
              Text(_responseText),
            ]
          )
        ), 
      ),
    );
  }
}

void logout(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => LoginPage()),);
}

Future<String> ItemsAPI() async {
  try {
    final response = await http.get(Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db'));
    if (response.statusCode == 200) {
      final jsonString = response.body;
      return jsonString;
    } else {
      return 'failed: ${response.statusCode}';
    }
  } catch (e) {
    return 'Error: $e';
  }
}
{% endhighlight %}

### Membagi masing-masing barang dalam baris
**lib/HomePage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'LoginPage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePage createState() => _HomePage();
}

class _HomePage extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Home Page'),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              onPressed: () => logout(context),
            ),
          ],
        ),
        body: Center(
          child: FutureBuilder(
            future: ItemsAPI(),
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                List<dynamic> jsonData = snapshot.data != null ? jsonDecode(snapshot.data!) : [];
                return Wrap(
                  children: jsonData.map((item) {
                    return Card(
                      child: Text(item.toString()),
                    );
                  }).toList(),
                );
              } else {
                return Text('Loading...');
              }
            },
          ),
        ),
      ),
    );
  }
}

void logout(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => LoginPage()),);
}

Future<String> ItemsAPI() async {
  try {
    final response = await http.get(Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db'));
    if (response.statusCode == 200) {
      final jsonString = response.body;
      return jsonString;
    } else {
      return 'failed: ${response.statusCode}';
    }
  } catch (e) {
    return 'Error: $e';
  }
}
{% endhighlight %}


### Merapikan tampilan data dalam bentuk listview
**lib/HomePage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'LoginPage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePage createState() => _HomePage();
}

class _HomePage extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Home Page'),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              onPressed: () => logout(context),
            ),
          ],
        ),
        body: Center(
          child: _buildItemsList(),
        ),
      ),
    );
  }

  Widget _buildItemsList() {
    return FutureBuilder(
      future: ItemsAPI(),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          List<dynamic> jsonData = snapshot.data != null ? jsonDecode(snapshot.data!) : [];
          return ListView.builder(
            itemCount: jsonData.length,
            itemBuilder: (context, index) {
              Map<String, dynamic> item = jsonData[index];
              return Card(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: item.keys.map((key) {
                    return Text('$key: ${item[key]}');
                  }).toList(),
                ),
              );
            },
          );
        } else {
          return Text('Loading...');
        }
      },
    );
  }
}

void logout(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => LoginPage()),);
}

Future<String> ItemsAPI() async {
  try {
    final response = await http.get(Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db'));
    if (response.statusCode == 200) {
      final jsonString = response.body;
      return jsonString;
    } else {
      return 'failed: ${response.statusCode}';
    }
  } catch (e) {
    return 'Error: $e';
  }
}
{% endhighlight %}

## Memodifikasi halaman login untuk login dengan super admin.
**app.js**
{% highlight javascript %}
const express = require('express');
const app = express();
const db = require('./db');

app.get('/flutter_latihan_arsip_barang_items_db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM items');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.use(express.json());

app.post('/flutter_latihan_arsip_barang_user_db', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE username=? AND password=?',
      [username, password]
    );
    if (rows.length > 0) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
{% endhighlight %}

**lib/LoginPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'HomePage.dart';

class LoginPage extends StatelessWidget {
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Login Page'),
        ),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              TextField(
                controller: _usernameController,
                decoration: InputDecoration(labelText: 'Username'),
              ),
              TextField(
                controller: _passwordController,
                decoration: InputDecoration(labelText: 'Password'),
                obscureText: true,
              ),
              ElevatedButton(
                onPressed: () => _login(context),
                child: Text('Login'),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _login(BuildContext context) async {
    final credentials = {
      'username': _usernameController.text,
      'password': _passwordController.text,
    };
    final response = await http.post(
      Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_user_db'),
      body: json.encode(credentials),
      headers: {'Content-Type': 'application/json'},
    );
    if (response.statusCode == 200 && json.decode(response.body)['success']) {
      ToHomePage(context);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Invalid credentials')),
      );
    }
  }
}

void ToHomePage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => HomePage()),);
}
{% endhighlight %}

## Membuat halaman mendaftar pengguna baru.

**lib/LoginPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'HomePage.dart';
import 'RegistrationPage.dart';

class LoginPage extends StatelessWidget {
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Login Page'),
        ),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              TextField(
                controller: _usernameController,
                decoration: InputDecoration(labelText: 'Username'),
              ),
              TextField(
                controller: _passwordController,
                decoration: InputDecoration(labelText: 'Password'),
                obscureText: true,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  ElevatedButton(
                    onPressed: () => _login(context),
                    child: Text('Login'),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      // Navigate to registration page
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => RegistrationPage()),
                      );
                    },
                    child: Text('Register'),
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }

  void _login(BuildContext context) async {
    final credentials = {
      'username': _usernameController.text,
      'password': _passwordController.text,
    };
    final response = await http.post(
      Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_users_db'),
      body: json.encode(credentials),
      headers: {'Content-Type': 'application/json'},
    );
    if (response.statusCode == 200 && json.decode(response.body)['success']) {
      ToHomePage(context);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Invalid credentials')),
      );
    }
  }
}

void ToHomePage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => HomePage()),);
}
{% endhighlight %}

**lib/RegistrationPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'LoginPage.dart';

class RegistrationPage extends StatefulWidget {
  @override
  _RegistrationPageState createState() => _RegistrationPageState();
}

class _RegistrationPageState extends State<RegistrationPage> {
  final _formKey = GlobalKey<FormState>();
  late String _username, _password;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Registration'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              _UsernameField(),
              _PasswordField(),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    // Call API to register user
                    registerUser(_username, _password);
                  }
                },
                child: Text('Register'),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _UsernameField() {
    return TextFormField(
      decoration: InputDecoration(labelText: 'Username'),
      validator: (value) {
        if (value == null || value.isEmpty) {
          return 'Please enter a username';
        }
        return null;
      },
      onSaved: (value) => _username = value!,
    );
  }

  Widget _PasswordField() {
    return TextFormField(
      decoration: InputDecoration(labelText: 'Password'),
      obscureText: true,
      validator: (value) {
        if (value == null || value.isEmpty) {
          return 'Please enter a password';
        }
        return null;
      },
      onSaved: (value) => _password = value!,
    );
  }

  void registerUser(String username, String password) async {
    // Call API to register user
    final response = await http.post(
      Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_register_users_db'),
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonEncode({
        'username': username,
        'password': password,
      }),
    );

    if (response.statusCode == 201) {
      // Registration successful, navigate to login page
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => LoginPage()),
      );
    } else {
      // Registration failed, show error message
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Registration failed')),
      );
    }
  }
}
{% endhighlight %}

**app.js**
{% highlight javascript %}
const express = require('express');
const app = express();
const db = require('./db');

app.get('/flutter_latihan_arsip_barang_items_db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM items');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.use(express.json());

app.post('/flutter_latihan_arsip_barang_users_db', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE username=? AND password=?',
      [username, password]
    );
    if (rows.length > 0) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.post('/flutter_latihan_arsip_barang_register_users_db', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Insert user into database
    const [rows] = await db.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password]
    );
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
{% endhighlight %}

## Membuat halaman tampilan daftar pengguna oleh super admin.

### Duplikasi logika HomePage ke UsersPage

**app.js**
{% highlight javascript %}
const express = require('express');
const app = express();
const db = require('./db');

app.get('/flutter_latihan_arsip_barang_items_db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM items');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.get('/flutter_latihan_arsip_barang_users_db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.use(express.json());

app.post('/flutter_latihan_arsip_barang_user_db', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE username=? AND password=?',
      [username, password]
    );
    if (rows.length > 0) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.post('/flutter_latihan_arsip_barang_register_users_db', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Insert user into database
    const [rows] = await db.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password]
    );
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
{% endhighlight %}

**lib/LoginPage.dart**
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'HomePage.dart';
import 'RegistrationPage.dart';
import 'UsersPage.dart';

class LoginPage extends StatelessWidget {
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Login Page'),
        ),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              TextField(
                controller: _usernameController,
                decoration: InputDecoration(labelText: 'Username'),
              ),
              TextField(
                controller: _passwordController,
                decoration: InputDecoration(labelText: 'Password'),
                obscureText: true,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  ElevatedButton(
                    onPressed: () => _login(context, 'HomePage'),
                    child: Text('Login'),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      // Navigate to registration page
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => RegistrationPage()),
                      );
                    },
                    child: Text('Register'),
                  ),
                  ElevatedButton(
                    onPressed: () => _login(context, 'UsersPage'),
                    child: Text('Users'),
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }

  void _login(BuildContext context, String DestinationPage) async {
    final credentials = {
      'username': _usernameController.text,
      'password': _passwordController.text,
    };
    final response = await http.post(
      Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_user_db'),
      body: json.encode(credentials),
      headers: {'Content-Type': 'application/json'},
    );
    if (response.statusCode == 200 && json.decode(response.body)['success']) {
      if(DestinationPage == "HomePage") {
        ToHomePage(context);
      } else if(DestinationPage == "UsersPage") {
        ToUsersPage(context);
      } else {
        SnackBar(content: Text('Something went wrong'));
      }
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Invalid credentials')),
      );
    }
  }
}

void ToHomePage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => HomePage()),);
}

void ToUsersPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => UsersPage()),);
}
{% endhighlight %}

**lib/UsersPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'LoginPage.dart';

class UsersPage extends StatefulWidget {
  @override
  _UsersPage createState() => _UsersPage();
}

class _UsersPage extends State<UsersPage> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Users Page'),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              onPressed: () => logout(context),
            ),
          ],
        ),
        body: Center(
          child: _buildusersList(),
        ),
      ),
    );
  }

  Widget _buildusersList() {
    return FutureBuilder(
      future: usersAPI(),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          List<dynamic> jsonData = snapshot.data != null ? jsonDecode(snapshot.data!) : [];
          return ListView.builder(
            itemCount: jsonData.length,
            itemBuilder: (context, index) {
              Map<String, dynamic> user = jsonData[index];
              return Card(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: user.keys.map((key) {
                    return Text('$key: ${user[key]}');
                  }).toList(),
                ),
              );
            },
          );
        } else {
          return Text('Loading...');
        }
      },
    );
  }
}

void logout(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => LoginPage()),);
}

Future<String> usersAPI() async {
  try {
    final response = await http.get(Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_users_db'));
    if (response.statusCode == 200) {
      final jsonString = response.body;
      return jsonString;
    } else {
      return 'failed: ${response.statusCode}';
    }
  } catch (e) {
    return 'Error: $e';
  }
}
{% endhighlight %}

## Halaman tersebut dapat memberikan peran pengguna oleh super admin.

### Menambah field baru untuk peran pengguna
{% highlight sql %}
ALTER TABLE users ADD COLUMN role VARCHAR(50);
UPDATE users SET role = 'superadmin' WHERE username = 'super' AND password = 'admin';
{% endhighlight %}

### Halaman pengguna hanya dapat diakses dengan role superadmin
**app.js**
{% highlight javascript %}
const express = require('express');
const app = express();
const db = require('./db');

app.get('/flutter_latihan_arsip_barang_items_db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM items');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.get('/flutter_latihan_arsip_barang_users_db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.use(express.json());

app.post('/flutter_latihan_arsip_barang_user_db', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE username=? AND password=?',
      [username, password]
    );
    if (rows.length > 0) {
      const userRole = rows[0].role;
      res.json({ success: true, role: userRole });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.post('/flutter_latihan_arsip_barang_register_users_db', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Insert user into database
    const [rows] = await db.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password]
    );
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
{% endhighlight %}

**lib/LoginPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'HomePage.dart';
import 'RegistrationPage.dart';
import 'UsersPage.dart';

class LoginPage extends StatelessWidget {
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Login Page'),
        ),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              TextField(
                controller: _usernameController,
                decoration: InputDecoration(labelText: 'Username'),
              ),
              TextField(
                controller: _passwordController,
                decoration: InputDecoration(labelText: 'Password'),
                obscureText: true,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  ElevatedButton(
                    onPressed: () => _login(context, 'HomePage'),
                    child: Text('Login'),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      // Navigate to registration page
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => RegistrationPage()),
                      );
                    },
                    child: Text('Register'),
                  ),
                  ElevatedButton(
                    onPressed: () => _login(context, 'UsersPage'),
                    child: Text('Users'),
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }

  void _login(BuildContext context, String DestinationPage) async {
    final credentials = {
      'username': _usernameController.text,
      'password': _passwordController.text,
    };
    final response = await http.post(
      Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_user_db'),
      body: json.encode(credentials),
      headers: {'Content-Type': 'application/json'},
    );
    if (response.statusCode == 200 && json.decode(response.body)['success']) {
      final userRole = json.decode(response.body)['role'];
      if(DestinationPage == "HomePage") {
        ToHomePage(context);
      } else if (DestinationPage == "UsersPage" && userRole == "superadmin") {
        ToUsersPage(context);
      } else {
        SnackBar(content: Text('Something went wrong'));
      }
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Invalid credentials')),
      );
    }
  }
}

void ToHomePage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => HomePage()),);
}

void ToUsersPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => UsersPage()),);
}
{% endhighlight %}

### Menambah pemilihan peran pada halaman daftar pengguna
**lib/UsersPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'LoginPage.dart';
import 'EditUserPage.dart';

class UsersPage extends StatefulWidget {
  @override
  _UsersPage createState() => _UsersPage();
}

class _UsersPage extends State<UsersPage> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Users Page'),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              onPressed: () => logout(context),
            ),
          ],
        ),
        body: Center(
          child: _buildusersList(),
        ),
      ),
    );
  }

  Widget _buildusersList() {
    return FutureBuilder(
      future: usersAPI(),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          List<dynamic> jsonData = snapshot.data != null ? jsonDecode(snapshot.data!) : [];
          return ListView.builder(
            itemCount: jsonData.length,
            itemBuilder: (context, index) {
              Map<String, dynamic> user = jsonData[index];
              List<Widget> children = <Widget>[];

              for (var key in user.keys) {
                children.add(
                  Text('$key: ${user[key]}'),
                );
              }

              children.add(
                Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    ElevatedButton(
                      onPressed: () async {
                        await Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => EditUserPage(
                              user: user,
                              onSaved: () async {
                                // Refetch the data from the users table
                                setState(() {});
                                await usersAPI(); // Refetch the data
                              },
                            ),
                          ),
                        );
                      },
                      child: Text('Edit'),
                    ),
                  ],
                ),
              );

              return Card(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: children,
                  ),
                ),
              );
            },
          );
        } else {
          return Text('Loading...');
        }
      },
    );
  }
}

void logout(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => LoginPage()),);
}

Future<String> usersAPI() async {
  try {
    final response = await http.get(Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_users_db'));
    if (response.statusCode == 200) {
      final jsonString = response.body;
      return jsonString;
    } else {
      return 'failed: ${response.statusCode}';
    }
  } catch (e) {
    return 'Error: $e';
  }
}
{% endhighlight %}

**lib/EditUserPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class EditUserPage extends StatefulWidget {
  final Map<String, dynamic> user;
  final Function()? onSaved; // Add a callback function

  EditUserPage({required this.user, this.onSaved});

  @override
  _EditUserPageState createState() => _EditUserPageState();
}

class _EditUserPageState extends State<EditUserPage> {
  String? _selectedRole;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Edit User'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            DropdownButtonFormField(
              value: _selectedRole,
              onChanged: (value) => setState(() => _selectedRole = value as String?),
              items: [
                'admin',
                'logistic',
                'cashier',
                'guest',
              ].map((role) => DropdownMenuItem(
                value: role,
                child: Text(role),
              )).toList(),
            ),
            ElevatedButton(
              onPressed: () async {
                // Update user role in database
                await updateUserRole(widget.user, _selectedRole);
                if (widget.onSaved != null) {
                  widget.onSaved!(); // Call the callback function
                }
                Navigator.pop(context);
              },
              child: Text('Save'),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> updateUserRole(Map<String, dynamic> user, String? role) async {
    try {
      final response = await http.post(
        Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_update_user_role'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({'role': role, 'username': user['username']}),
      );
      if (response.statusCode == 200) {
        print('User role updated successfully');
      } else {
        print('Error updating user role: ${response.statusCode}');
      }
    } catch (e) {
      print('Error updating user role: $e');
    }
  }
}
{% endhighlight %}

**app.js**
{% highlight javascript %}
const express = require('express');
const app = express();
const db = require('./db');

app.get('/flutter_latihan_arsip_barang_items_db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM items');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.get('/flutter_latihan_arsip_barang_users_db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.use(express.json());

app.post('/flutter_latihan_arsip_barang_user_db', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE username=? AND password=?',
      [username, password]
    );
    if (rows.length > 0) {
      const userRole = rows[0].role;
      res.json({ success: true, role: userRole });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.post('/flutter_latihan_arsip_barang_register_users_db', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Insert user into database
    const [rows] = await db.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password]
    );
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.post('/flutter_latihan_arsip_barang_update_user_role', async (req, res) => {
  const { role, username } = req.body;
  try {
    const [rows] = await db.execute(
      'UPDATE users SET role=? WHERE username=?',
      [role, username]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating user role' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
{% endhighlight %}

## Menambah filter halaman depan.

### Menambah filter berdasarkan kategori.
**lib/HomePage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'LoginPage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePage createState() => _HomePage();
}

class _HomePage extends State<HomePage> {
  String? _selectedCategory;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Home Page'),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              onPressed: () => logout(context),
            ),
          ],
        ),
        body: Center(
          child: _buildItemsList(),
        ),
      ),
    );
  }

  Widget _buildItemsList() {
    return FutureBuilder(
      future: ItemsAPI(),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          List<dynamic> jsonData = snapshot.data != null ? jsonDecode(snapshot.data!) : [];

          // Get unique categories from the items
          List<dynamic> categories = jsonData.map((item) => item['category']).toSet().toList();

          List<dynamic> filteredItems;
          if (_selectedCategory != null) {
            filteredItems = jsonData.where((item) => item['category'] == _selectedCategory).toList();
          } else {
            filteredItems = jsonData;
          }

          return Column(
            children: [
              DropdownButtonFormField(
                value: _selectedCategory,
                onChanged: (value) {
                  setState(() {
                    _selectedCategory = value as String?;
                  });
                },
                items: categories.map((category) => DropdownMenuItem(
                  value: category,
                  child: Text(category),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Filter by Category',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              Expanded(
                child: ListView.builder(
                  shrinkWrap: true,
                  itemCount: filteredItems.length,
                  itemBuilder: (context, index) {
                    Map<String, dynamic> item = filteredItems[index];
                    return Card(
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: item.keys.map((key) {
                            return Text('$key: ${item[key]}');
                          }).toList(),
                        ),
                      ),
                    );
                  },
                ),
              ),
            ],
          );
        } else if (snapshot.hasError) {
          return Text('Error: ${snapshot.error}');
        } else {
          return CircularProgressIndicator();
        }
      },
    );
  }
}

void logout(BuildContext context) {
  Navigator.pushReplacement(
    context,
    MaterialPageRoute(builder: (context) => LoginPage()),
  );
}

Future<String> ItemsAPI() async {
  try {
    final response = await http.get(Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db'));
    if (response.statusCode == 200) {
      final jsonString = response.body;
      return jsonString;
    } else {
      return 'failed: ${response.statusCode}';
    }
  } catch (e) {
    return 'Error: $e';
  }
}
{% endhighlight %}

### Menambah filter berdasarkan keterangan keranjang.
**lib/HomePage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'LoginPage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePage createState() => _HomePage();
}

class _HomePage extends State<HomePage> {
  String? _selectedCategory;
  String? _selectedReason;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Home Page'),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              onPressed: () => logout(context),
            ),
          ],
        ),
        body: Center(
          child: _buildItemsList(),
        ),
      ),
    );
  }

  Widget _buildItemsList() {
    return FutureBuilder(
      future: ItemsAPI(),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          List<dynamic> jsonData = snapshot.data != null ? jsonDecode(snapshot.data!) : [];

          // Get unique categories from the items
          List<dynamic> categories = jsonData.map((item) => item['category']).toSet().toList();
          categories.insert(0, 'All categories'); // Add "All categories" option

          // Get unique reasons from the items
          List<dynamic> reasons = jsonData.map((item) => item['reason']).toSet().toList();
          reasons.insert(0, 'No reason'); // Add "No reason" option

          List<dynamic> filteredItems;
          if (_selectedCategory != null && _selectedReason != null) {
            filteredItems = jsonData
                .where((item) => item['category'] == _selectedCategory)
                .where((item) => item['reason'] == _selectedReason)
                .toList();
          } else if (_selectedCategory != null) {
            if (_selectedCategory == 'All categories') {
              filteredItems = jsonData;
            } else {
              filteredItems = jsonData.where((item) => item['category'] == _selectedCategory).toList();
            }
          } else if (_selectedReason != null) {
            filteredItems = jsonData.where((item) => item['reason'] == _selectedReason).toList();
          } else {
            filteredItems = jsonData;
          }

          return Column(
            children: [
              DropdownButtonFormField(
                value: _selectedCategory,
                onChanged: (value) {
                  setState(() {
                    _selectedCategory = value as String?;
                  });
                },
                items: categories.map((category) => DropdownMenuItem(
                  value: category,
                  child: Text(category),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Filter by Category',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: _selectedReason,
                onChanged: (value) {
                  setState(() {
                    _selectedReason = value as String?;
                  });
                },
                items: reasons.map((reason) => DropdownMenuItem(
                  value: reason,
                  child: Text(reason ?? 'No reason'),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Filter by Reason',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              Expanded(
                child: ListView.builder(
                  shrinkWrap: true,
                  itemCount: filteredItems.length,
                  itemBuilder: (context, index) {
                    Map<String, dynamic> item = filteredItems[index];
                    return Card(
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: item.keys.map((key) {
                            return Text('$key: ${item[key]}');
                          }).toList(),
                        ),
                      ),
                    );
                  },
                ),
              ),
            ],
          );
        } else if (snapshot.hasError) {
          return Text('Error: ${snapshot.error}');
        } else {
          return CircularProgressIndicator();
        }
      },
    );
  }
}

void logout(BuildContext context) {
  Navigator.pushReplacement(
    context,
    MaterialPageRoute(builder: (context) => LoginPage()),
  );
}

Future<String> ItemsAPI() async {
  try {
    final response = await http.get(Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db'));
    if (response.statusCode == 200) {
      final jsonString = response.body;
      return jsonString;
    } else {
      return 'failed: ${response.statusCode}';
    }
  } catch (e) {
    return 'Error: $e';
  }
}
{% endhighlight %}

## Menambah sorting halaman depan.

### Menambah sort berdasarkan harga masuk.
**lib/HomePage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'LoginPage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePage createState() => _HomePage();
}

class _HomePage extends State<HomePage> {
  String? _selectedCategory;
  String? _selectedReason;
  String? _selectedSort;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Home Page'),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              onPressed: () => logout(context),
            ),
          ],
        ),
        body: Center(
          child: _buildItemsList(),
        ),
      ),
    );
  }

  Widget _buildItemsList() {
    return FutureBuilder(
      future: ItemsAPI(),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          List<dynamic> jsonData = snapshot.data != null ? jsonDecode(snapshot.data!) : [];

          // Get unique categories from the items
          List<dynamic> categories = jsonData.map((item) => item['category']).toSet().toList();
          categories.insert(0, 'All categories'); // Add "All categories" option

          // Get unique reasons from the items
          List<dynamic> reasons = jsonData.map((item) => item['reason']).toSet().toList();
          reasons.insert(0, 'No reason'); // Add "No reason" option

          // Get unique sort options
          List<String> sortOptions = ['Lowest price', 'Highest price'];

          List<dynamic> filteredItems;
          if (_selectedCategory != null && _selectedReason != null) {
            filteredItems = jsonData
                .where((item) => item['category'] == _selectedCategory)
                .where((item) => item['reason'] == _selectedReason)
                .toList();
          } else if (_selectedCategory != null) {
            if (_selectedCategory == 'All categories') {
              filteredItems = jsonData;
            } else {
              filteredItems = jsonData.where((item) => item['category'] == _selectedCategory).toList();
            }
          } else if (_selectedReason != null) {
            filteredItems = jsonData.where((item) => item['reason'] == _selectedReason).toList();
          } else {
            filteredItems = jsonData;
          }

          // Apply sort
          if (_selectedSort == 'Lowest price') {
            filteredItems.sort((a, b) => a['price'].compareTo(b['price']));
          } else if (_selectedSort == 'Highest price') {
            filteredItems.sort((a, b) => b['price'].compareTo(a['price']));
          }

          return Column(
            children: [
              DropdownButtonFormField(
                value: _selectedCategory,
                onChanged: (value) {
                  setState(() {
                    _selectedCategory = value as String?;
                  });
                },
                items: categories.map((category) => DropdownMenuItem(
                  value: category,
                  child: Text(category),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Filter by Category',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: _selectedReason,
                onChanged: (value) {
                  setState(() {
                    _selectedReason = value as String?;
                  });
                },
                items: reasons.map((reason) => DropdownMenuItem(
                  value: reason,
                  child: Text(reason ?? 'No reason'),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Filter by Reason',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: _selectedSort,
                onChanged: (value) {
                  setState(() {
                    _selectedSort = value as String?;
                  });
                },
                items: sortOptions.map((option) => DropdownMenuItem(
                  value: option,
                  child: Text(option),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Sort by Price',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              Expanded(
                child: ListView.builder(
                  shrinkWrap: true,
                  itemCount: filteredItems.length,
                  itemBuilder: (context, index) {
                    Map<String, dynamic> item = filteredItems[index];
                    return Card(
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: item.keys.map((key) {
                            return Text('$key: ${item[key]}');
                          }).toList(),
                        ),
                      ),
                    );
                  },
                ),
              ),
            ],
          );
        } else if (snapshot.hasError) {
          return Text('Error: ${snapshot.error}');
        } else {
          return CircularProgressIndicator();
        }
      },
    );
  }
}

void logout(BuildContext context) {
  Navigator.pushReplacement(
    context,
    MaterialPageRoute(builder: (context) => LoginPage()),
  );
}

Future<String> ItemsAPI() async {
  try {
    final response = await http.get(Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db'));
    if (response.statusCode == 200) {
      final jsonString = response.body;
      return jsonString;
    } else {
      return 'failed: ${response.statusCode}';
    }
  } catch (e) {
    return 'Error: $e';
  }
}
{% endhighlight %}

### Menambah sort berdasarkan harga keluar.
**lib/HomePage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'LoginPage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePage createState() => _HomePage();
}

class _HomePage extends State<HomePage> {
  String? _selectedCategory;
  String? _selectedReason;
  String? _selectedSort;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Home Page'),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              onPressed: () => logout(context),
            ),
          ],
        ),
        body: Center(
          child: _buildItemsList(),
        ),
      ),
    );
  }

  Widget _buildItemsList() {
    return FutureBuilder(
      future: ItemsAPI(),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          List<dynamic> jsonData = snapshot.data != null ? jsonDecode(snapshot.data!) : [];

          // Get unique categories from the items
          List<dynamic> categories = jsonData.map((item) => item['category']).toSet().toList();
          categories.insert(0, 'All categories'); // Add "All categories" option

          // Get unique reasons from the items
          List<dynamic> reasons = jsonData.map((item) => item['reason']).toSet().toList();
          reasons.insert(0, 'All reason');

          // Get unique sort options
          List<String> sortOptions = ['Lowest price', 'Highest price', 'Lowest exit price', 'Highest exit price'];

          List<dynamic> filteredItems;
          if (_selectedCategory != null && _selectedReason != null) {
            if (_selectedReason == 'All reason') {
              filteredItems = jsonData.where((item) => item['category'] == _selectedCategory).toList();
            } else {
              filteredItems = jsonData
                  .where((item) => item['category'] == _selectedCategory)
                  .where((item) => item['reason'] == _selectedReason)
                  .toList();
            }
          } else if (_selectedCategory != null) {
            if (_selectedCategory == 'All categories') {
              filteredItems = jsonData;
            } else {
              filteredItems = jsonData.where((item) => item['category'] == _selectedCategory).toList();
            }
          } else if (_selectedReason != null) {
            if (_selectedReason == 'All reason') {
              filteredItems = jsonData; // Display all items when "All reason" is selected
            } else {
              filteredItems = jsonData.where((item) => item['reason'] == _selectedReason).toList();
            }
          } else {
            filteredItems = jsonData;
          }

          // Apply sort
          if (_selectedSort == 'Lowest price') {
            filteredItems.sort((a, b) => a['price'].compareTo(b['price']));
          } else if (_selectedSort == 'Highest price') {
            filteredItems.sort((a, b) => b['price'].compareTo(a['price']));
          } else if (_selectedSort == 'Lowest exit price') {
            filteredItems.sort((a, b) {
              if (a['exit_price'] == null) return -1; // or some other default value
              if (b['exit_price'] == null) return 1; // or some other default value
              return a['exit_price'].compareTo(b['exit_price']);
            });
          } else if (_selectedSort == 'Highest exit price') {
            filteredItems.sort((a, b) {
              if (a['exit_price'] == null) return 1; // or some other default value
              if (b['exit_price'] == null) return -1; // or some other default value
              return b['exit_price'].compareTo(a['exit_price']);
            });
          }

          return Column(
            children: [
              DropdownButtonFormField(
                value: _selectedCategory,
                onChanged: (value) {
                  setState(() {
                    _selectedCategory = value as String?;
                  });
                },
                items: categories.map((category) => DropdownMenuItem(
                  value: category,
                  child: Text(category),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Filter by Category',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: _selectedReason,
                onChanged: (value) {
                  setState(() {
                    _selectedReason = value as String?;
                  });
                },
                items: reasons.map((reason) => DropdownMenuItem(
                  value: reason,
                  child: Text(reason ?? 'No reason'),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Filter by Reason',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: _selectedSort,
                onChanged: (value) {
                  setState(() {
                    _selectedSort = value as String?;
                  });
                },
                items: sortOptions.map((option) => DropdownMenuItem(
                  value: option,
                  child: Text(option),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Sort by',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              Expanded(
                child: ListView.builder(
                  shrinkWrap: true,
                  itemCount: filteredItems.length,
                  itemBuilder: (context, index) {
                    Map<String, dynamic> item = filteredItems[index];
                    return Card(
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: item.keys.map((key) {
                            return Text('$key: ${item[key]}');
                          }).toList(),
                        ),
                      ),
                    );
                  },
                ),
              ),
            ],
          );
        } else if (snapshot.hasError) {
          return Text('Error: ${snapshot.error}');
        } else {
          return CircularProgressIndicator();
        }
      },
    );
  }
}

void logout(BuildContext context) {
  Navigator.pushReplacement(
    context,
    MaterialPageRoute(builder: (context) => LoginPage()),
  );
}

Future<String> ItemsAPI() async {
  try {
    final response = await http.get(Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db'));
    if (response.statusCode == 200) {
      final jsonString = response.body;
      return jsonString;
    } else {
      return 'failed: ${response.statusCode}';
    }
  } catch (e) {
    return 'Error: $e';
  }
}
{% endhighlight %}

## Menambah export halaman depan.

### Export ke json
**lib/HomePage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'HomePageExport.dart';
import 'LoginPage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePage createState() => _HomePage();
}

class _HomePage extends State<HomePage> {
  String? _selectedCategory;
  String? _selectedReason;
  String? _selectedSort;
  String? _exportedJson;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Home Page'),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              onPressed: () => logout(context),
            ),
          ],
        ),
        body: Center(
          child: _buildItemsList(),
        ),
      ),
    );
  }

  Widget _buildItemsList() {
    return FutureBuilder(
      future: ItemsAPI(),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          List<dynamic> jsonData = snapshot.data != null ? jsonDecode(snapshot.data!) : [];

          // Get unique categories from the items
          List<dynamic> categories = jsonData.map((item) => item['category']).toSet().toList();
          categories.insert(0, 'All categories'); // Add "All categories" option

          // Get unique reasons from the items
          List<dynamic> reasons = jsonData.map((item) => item['reason']).toSet().toList();
          reasons.insert(0, 'All reason');

          // Get unique sort options
          List<String> sortOptions = ['Lowest price', 'Highest price', 'Lowest exit price', 'Highest exit price'];

          List<dynamic> filteredItems;
          if (_selectedCategory != null && _selectedReason != null) {
            if (_selectedReason == 'All reason') {
              filteredItems = jsonData.where((item) => item['category'] == _selectedCategory).toList();
            } else {
              filteredItems = jsonData
                  .where((item) => item['category'] == _selectedCategory)
                  .where((item) => item['reason'] == _selectedReason)
                  .toList();
            }
          } else if (_selectedCategory != null) {
            if (_selectedCategory == 'All categories') {
              filteredItems = jsonData;
            } else {
              filteredItems = jsonData.where((item) => item['category'] == _selectedCategory).toList();
            }
          } else if (_selectedReason != null) {
            if (_selectedReason == 'All reason') {
              filteredItems = jsonData; // Display all items when "All reason" is selected
            } else {
              filteredItems = jsonData.where((item) => item['reason'] == _selectedReason).toList();
            }
          } else {
            filteredItems = jsonData;
          }

          // Apply sort
          if (_selectedSort == 'Lowest price') {
            filteredItems.sort((a, b) => a['price'].compareTo(b['price']));
          } else if (_selectedSort == 'Highest price') {
            filteredItems.sort((a, b) => b['price'].compareTo(a['price']));
          } else if (_selectedSort == 'Lowest exit price') {
            filteredItems.sort((a, b) {
              if (a['exit_price'] == null) return -1; // or some other default value
              if (b['exit_price'] == null) return 1; // or some other default value
              return a['exit_price'].compareTo(b['exit_price']);
            });
          } else if (_selectedSort == 'Highest exit price') {
            filteredItems.sort((a, b) {
              if (a['exit_price'] == null) return 1; // or some other default value
              if (b['exit_price'] == null) return -1; // or some other default value
              return b['exit_price'].compareTo(a['exit_price']);
            });
          }

          return Column(
            children: [
              DropdownButtonFormField(
                value: _selectedCategory,
                onChanged: (value) {
                  setState(() {
                    _selectedCategory = value as String?;
                  });
                },
                items: categories.map((category) => DropdownMenuItem(
                  value: category,
                  child: Text(category),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Filter by Category',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: _selectedReason,
                onChanged: (value) {
                  setState(() {
                    _selectedReason = value as String?;
                  });
                },
                items: reasons.map((reason) => DropdownMenuItem(
                  value: reason,
                  child: Text(reason ?? 'No reason'),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Filter by Reason',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: _selectedSort,
                onChanged: (value) {
                  setState(() {
                    _selectedSort = value as String?;
                  });
                },
                items: sortOptions.map((option) => DropdownMenuItem(
                  value: option,
                  child: Text(option),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Sort by',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: null,
                onChanged: (value) async {
                  if (value == 'Export to JSON') {
                    // Export the filtered items to JSON
                    _exportedJson = jsonEncode(filteredItems);

                    // Redirect to HomePageJson
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => HomePageExport(_exportedJson!)),
                    );
                  }
                },
                items: ['Export to JSON'].map((option) => DropdownMenuItem(
                  value: option,
                  child: Text(option),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Export',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              Expanded(
                child: ListView.builder(
                  shrinkWrap: true,
                  itemCount: filteredItems.length,
                  itemBuilder: (context, index) {
                    Map<String, dynamic> item = filteredItems[index];
                    return Card(
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: item.keys.map((key) {
                            return Text('$key: ${item[key]}');
                          }).toList(),
                        ),
                      ),
                    );
                  },
                ),
              ),
            ],
          );
        } else if (snapshot.hasError) {
          return Text('Error: ${snapshot.error}');
        } else {
          return CircularProgressIndicator();
        }
      },
    );
  }
}

void logout(BuildContext context) {
  Navigator.pushReplacement(
    context,
    MaterialPageRoute(builder: (context) => LoginPage()),
  );
}

Future<String> ItemsAPI() async {
  try {
    final response = await http.get(Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db'));
    if (response.statusCode == 200) {
      final jsonString = response.body;
      return jsonString;
    } else {
      return 'failed: ${response.statusCode}';
    }
  } catch (e) {
    return 'Error: $e';
  }
}
{% endhighlight %}

**lib/HomePageExport.dart**
{% highlight dart %}
import 'package:flutter/material.dart';

class HomePageExport extends StatelessWidget {
  final String json;

  HomePageExport(this.json);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Exported'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Text(json),
      ),
    );
  }
}
{% endhighlight %}

### Export ke xml
**lib/HomePage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'HomePageExport.dart';
import 'LoginPage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePage createState() => _HomePage();
}

class _HomePage extends State<HomePage> {
  String? _selectedCategory;
  String? _selectedReason;
  String? _selectedSort;
  String? _exportedJson;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Home Page'),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              onPressed: () => logout(context),
            ),
          ],
        ),
        body: Center(
          child: _buildItemsList(),
        ),
      ),
    );
  }

  Widget _buildItemsList() {
    return FutureBuilder(
      future: ItemsAPI(),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          List<dynamic> jsonData = snapshot.data != null ? jsonDecode(snapshot.data!) : [];

          // Get unique categories from the items
          List<dynamic> categories = jsonData.map((item) => item['category']).toSet().toList();
          categories.insert(0, 'All categories'); // Add "All categories" option

          // Get unique reasons from the items
          List<dynamic> reasons = jsonData.map((item) => item['reason']).toSet().toList();
          reasons.insert(0, 'All reason');

          // Get unique sort options
          List<String> sortOptions = ['Lowest price', 'Highest price', 'Lowest exit price', 'Highest exit price'];

          List<dynamic> filteredItems;
          if (_selectedCategory != null && _selectedReason != null) {
            if (_selectedReason == 'All reason') {
              filteredItems = jsonData.where((item) => item['category'] == _selectedCategory).toList();
            } else {
              filteredItems = jsonData
                  .where((item) => item['category'] == _selectedCategory)
                  .where((item) => item['reason'] == _selectedReason)
                  .toList();
            }
          } else if (_selectedCategory != null) {
            if (_selectedCategory == 'All categories') {
              filteredItems = jsonData;
            } else {
              filteredItems = jsonData.where((item) => item['category'] == _selectedCategory).toList();
            }
          } else if (_selectedReason != null) {
            if (_selectedReason == 'All reason') {
              filteredItems = jsonData; // Display all items when "All reason" is selected
            } else {
              filteredItems = jsonData.where((item) => item['reason'] == _selectedReason).toList();
            }
          } else {
            filteredItems = jsonData;
          }

          // Apply sort
          if (_selectedSort == 'Lowest price') {
            filteredItems.sort((a, b) => a['price'].compareTo(b['price']));
          } else if (_selectedSort == 'Highest price') {
            filteredItems.sort((a, b) => b['price'].compareTo(a['price']));
          } else if (_selectedSort == 'Lowest exit price') {
            filteredItems.sort((a, b) {
              if (a['exit_price'] == null) return -1; // or some other default value
              if (b['exit_price'] == null) return 1; // or some other default value
              return a['exit_price'].compareTo(b['exit_price']);
            });
          } else if (_selectedSort == 'Highest exit price') {
            filteredItems.sort((a, b) {
              if (a['exit_price'] == null) return 1; // or some other default value
              if (b['exit_price'] == null) return -1; // or some other default value
              return b['exit_price'].compareTo(a['exit_price']);
            });
          }

          return Column(
            children: [
              DropdownButtonFormField(
                value: _selectedCategory,
                onChanged: (value) {
                  setState(() {
                    _selectedCategory = value as String?;
                  });
                },
                items: categories.map((category) => DropdownMenuItem(
                  value: category,
                  child: Text(category),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Filter by Category',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: _selectedReason,
                onChanged: (value) {
                  setState(() {
                    _selectedReason = value as String?;
                  });
                },
                items: reasons.map((reason) => DropdownMenuItem(
                  value: reason,
                  child: Text(reason ?? 'No reason'),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Filter by Reason',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: _selectedSort,
                onChanged: (value) {
                  setState(() {
                    _selectedSort = value as String?;
                  });
                },
                items: sortOptions.map((option) => DropdownMenuItem(
                  value: option,
                  child: Text(option),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Sort by',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: null,
                onChanged: (value) async {
                  if (value == 'Export to JSON') {
                    // Export the filtered items to JSON
                    String _exportedData = jsonEncode(filteredItems);
                    String _exportType = 'JSON';

                    // Redirect to HomePageExport
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => HomePageExport(_exportedData, _exportType)),
                    );
                  } else if (value == 'Export to XML') {
                    // Export the filtered items to XML
                    String _exportedData = '';
                    _exportedData += '<items>';
                    filteredItems.forEach((item) {
                      _exportedData += '<item>';
                      item.forEach((key, value) {
                        _exportedData += '<$key>$value</$key>';
                      });
                      _exportedData += '</item>';
                    });
                    _exportedData += '</items>';
                    String _exportType = 'XML';

                    // Redirect to HomePageExport
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => HomePageExport(_exportedData, _exportType)),
                    );
                  }
                },
                items: ['Export to JSON', 'Export to XML'].map((option) => DropdownMenuItem(
                  value: option,
                  child: Text(option),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Export',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              Expanded(
                child: ListView.builder(
                  shrinkWrap: true,
                  itemCount: filteredItems.length,
                  itemBuilder: (context, index) {
                    Map<String, dynamic> item = filteredItems[index];
                    return Card(
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: item.keys.map((key) {
                            return Text('$key: ${item[key]}');
                          }).toList(),
                        ),
                      ),
                    );
                  },
                ),
              ),
            ],
          );
        } else if (snapshot.hasError) {
          return Text('Error: ${snapshot.error}');
        } else {
          return CircularProgressIndicator();
        }
      },
    );
  }
}

void logout(BuildContext context) {
  Navigator.pushReplacement(
    context,
    MaterialPageRoute(builder: (context) => LoginPage()),
  );
}

Future<String> ItemsAPI() async {
  try {
    final response = await http.get(Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db'));
    if (response.statusCode == 200) {
      final jsonString = response.body;
      return jsonString;
    } else {
      return 'failed: ${response.statusCode}';
    }
  } catch (e) {
    return 'Error: $e';
  }
}
{% endhighlight %}

**lib/HomePageExport.dart**
{% highlight dart %}
import 'package:flutter/material.dart';

class HomePageExport extends StatelessWidget {
  final String exportedData;
  final String exportType;

  HomePageExport(this.exportedData, this.exportType);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Exported $exportType'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Text(exportedData),
      ),
    );
  }
}
{% endhighlight %}

### Export ke csv
**lib/HomePage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'HomePageExport.dart';
import 'LoginPage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePage createState() => _HomePage();
}

class _HomePage extends State<HomePage> {
  String? _selectedCategory;
  String? _selectedReason;
  String? _selectedSort;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Home Page'),
          actions: [
            IconButton(
              icon: Icon(Icons.logout),
              onPressed: () => logout(context),
            ),
          ],
        ),
        body: Center(
          child: _buildItemsList(),
        ),
      ),
    );
  }

  Widget _buildItemsList() {
    return FutureBuilder(
      future: ItemsAPI(),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          List<dynamic> jsonData = snapshot.data != null ? jsonDecode(snapshot.data!) : [];

          // Get unique categories from the items
          List<dynamic> categories = jsonData.map((item) => item['category']).toSet().toList();
          categories.insert(0, 'All categories'); // Add "All categories" option

          // Get unique reasons from the items
          List<dynamic> reasons = jsonData.map((item) => item['reason']).toSet().toList();
          reasons.insert(0, 'All reason');

          // Get unique sort options
          List<String> sortOptions = ['Lowest price', 'Highest price', 'Lowest exit price', 'Highest exit price'];

          List<dynamic> filteredItems;
          if (_selectedCategory != null && _selectedReason != null) {
            if (_selectedReason == 'All reason') {
              filteredItems = jsonData.where((item) => item['category'] == _selectedCategory).toList();
            } else {
              filteredItems = jsonData
                  .where((item) => item['category'] == _selectedCategory)
                  .where((item) => item['reason'] == _selectedReason)
                  .toList();
            }
          } else if (_selectedCategory != null) {
            if (_selectedCategory == 'All categories') {
              filteredItems = jsonData;
            } else {
              filteredItems = jsonData.where((item) => item['category'] == _selectedCategory).toList();
            }
          } else if (_selectedReason != null) {
            if (_selectedReason == 'All reason') {
              filteredItems = jsonData; // Display all items when "All reason" is selected
            } else {
              filteredItems = jsonData.where((item) => item['reason'] == _selectedReason).toList();
            }
          } else {
            filteredItems = jsonData;
          }

          // Apply sort
          if (_selectedSort == 'Lowest price') {
            filteredItems.sort((a, b) => a['price'].compareTo(b['price']));
          } else if (_selectedSort == 'Highest price') {
            filteredItems.sort((a, b) => b['price'].compareTo(a['price']));
          } else if (_selectedSort == 'Lowest exit price') {
            filteredItems.sort((a, b) {
              if (a['exit_price'] == null) return -1; // or some other default value
              if (b['exit_price'] == null) return 1; // or some other default value
              return a['exit_price'].compareTo(b['exit_price']);
            });
          } else if (_selectedSort == 'Highest exit price') {
            filteredItems.sort((a, b) {
              if (a['exit_price'] == null) return 1; // or some other default value
              if (b['exit_price'] == null) return -1; // or some other default value
              return b['exit_price'].compareTo(a['exit_price']);
            });
          }

          return Column(
            children: [
              DropdownButtonFormField(
                value: _selectedCategory,
                onChanged: (value) {
                  setState(() {
                    _selectedCategory = value as String?;
                  });
                },
                items: categories.map((category) => DropdownMenuItem(
                  value: category,
                  child: Text(category),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Filter by Category',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: _selectedReason,
                onChanged: (value) {
                  setState(() {
                    _selectedReason = value as String?;
                  });
                },
                items: reasons.map((reason) => DropdownMenuItem(
                  value: reason,
                  child: Text(reason ?? 'No reason'),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Filter by Reason',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: _selectedSort,
                onChanged: (value) {
                  setState(() {
                    _selectedSort = value as String?;
                  });
                },
                items: sortOptions.map((option) => DropdownMenuItem(
                  value: option,
                  child: Text(option),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Sort by',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: null,
                onChanged: (value) async {
                  if (value == 'Export to JSON') {
                    _exportData(context, 'JSON', filteredItems);
                  } else if (value == 'Export to XML') {
                    _exportData(context, 'XML', filteredItems);
                  } else if (value == 'Export to CSV') {
                    _exportData(context, 'CSV', filteredItems);
                  }
                },
                items: ['Export to JSON', 'Export to XML', 'Export to CSV'].map((option) => DropdownMenuItem(
                  value: option,
                  child: Text(option),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Export',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              Expanded(
                child: ListView.builder(
                  shrinkWrap: true,
                  itemCount: filteredItems.length,
                  itemBuilder: (context, index) {
                    Map<String, dynamic> item = filteredItems[index];
                    return Card(
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: item.keys.map((key) {
                            return Text('$key: ${item[key]}');
                          }).toList(),
                        ),
                      ),
                    );
                  },
                ),
              ),
            ],
          );
        } else if (snapshot.hasError) {
          return Text('Error: ${snapshot.error}');
        } else {
          return CircularProgressIndicator();
        }
      },
    );
  }
}

void logout(BuildContext context) {
  Navigator.pushReplacement(
    context,
    MaterialPageRoute(builder: (context) => LoginPage()),
  );
}

Future<String> ItemsAPI() async {
  try {
    final response = await http.get(Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db'));
    if (response.statusCode == 200) {
      final jsonString = response.body;
      return jsonString;
    } else {
      return 'failed: ${response.statusCode}';
    }
  } catch (e) {
    return 'Error: $e';
  }
}

// Export logic function (outside of the class)
void _exportData(BuildContext context, String exportType, List<dynamic> filteredItems) {
  String _exportedData = '';
  String _exportType = exportType;

  if (exportType == 'JSON') {
    _exportedData = jsonEncode(filteredItems);
  } else if (exportType == 'XML') {
    _exportedData += '<items>';
    filteredItems.forEach((item) {
      _exportedData += '<item>';
      item.forEach((key, value) {
        _exportedData += '<$key>$value</$key>';
      });
      _exportedData += '</item>';
    });
    _exportedData += '</items>';
  } else if (exportType == 'CSV') {
    _exportedData += '${filteredItems.map((item) => item.keys.join(',')).join('\n')}\n';
    filteredItems.forEach((item) {
      _exportedData += '${item.values.join(',')}\n';
    });
  }

  // Redirect to HomePageExport
  Navigator.push(
    context,
    MaterialPageRoute(builder: (context) => HomePageExport(_exportedData, _exportType)),
  );
}
{% endhighlight %}

### Export ke pdf
**lib/HomePage.dart**
{% highlight dart %}
{% endhighlight %}

## Membuat halaman guest duplikasi dari homepage saat ini.
**lib/LoginPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'GuestPage.dart';
import 'RegistrationPage.dart';
import 'UsersPage.dart';

class LoginPage extends StatelessWidget {
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Login Page'),
        ),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              TextField(
                controller: _usernameController,
                decoration: InputDecoration(labelText: 'Username'),
              ),
              TextField(
                controller: _passwordController,
                decoration: InputDecoration(labelText: 'Password'),
                obscureText: true,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  ElevatedButton(
                    onPressed: () => _login(context, 'HomePage'),
                    child: Text('Login'),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      // Navigate to registration page
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => RegistrationPage()),
                      );
                    },
                    child: Text('Register'),
                  ),
                  ElevatedButton(
                    onPressed: () => _login(context, 'UsersPage'),
                    child: Text('Users'),
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }

  void _login(BuildContext context, String DestinationPage) async {
    final credentials = {
      'username': _usernameController.text,
      'password': _passwordController.text,
    };
    final response = await http.post(
      Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_user_db'),
      body: json.encode(credentials),
      headers: {'Content-Type': 'application/json'},
    );
    if (response.statusCode == 200 && json.decode(response.body)['success']) {
      final userRole = json.decode(response.body)['role'];
      if(DestinationPage == "HomePage") {
        if(userRole != "superadmin" || userRole != "admin" || userRole != "logistic" || userRole != "cashier"){
          ToGuestPage(context);
        }
        
      } else if (DestinationPage == "UsersPage" && userRole == "superadmin") {
        ToUsersPage(context);
      } else {
        SnackBar(content: Text('Something went wrong'));
      }
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Invalid credentials')),
      );
    }
  }
}

void ToGuestPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => GuestPage()),);
}

void ToUsersPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => UsersPage()),);
}
{% endhighlight %}

**lib/GuestPage.dart**
{% highlight dart %}
import 'HomePage.dart';

class GuestPage extends HomePage {
  String get title => 'Guest Page';
}
{% endhighlight %}

## Membuat halaman cashier untuk memasukan barang ke keranjang.
**lib/LoginPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'CashierPage.dart';
import 'GuestPage.dart';
import 'RegistrationPage.dart';
import 'UsersPage.dart';

class LoginPage extends StatelessWidget {
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login Page'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _usernameController,
              decoration: InputDecoration(labelText: 'Username'),
            ),
            TextField(
              controller: _passwordController,
              decoration: InputDecoration(labelText: 'Password'),
              obscureText: true,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: () => _login(context, 'HomePage'),
                  child: Text('Login'),
                ),
                ElevatedButton(
                  onPressed: () {
                    // Navigate to registration page
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => RegistrationPage()),
                    );
                  },
                  child: Text('Register'),
                ),
                ElevatedButton(
                  onPressed: () => _login(context, 'UsersPage'),
                  child: Text('Users'),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }

  void _login(BuildContext context, String DestinationPage) async {
    final credentials = {
      'username': _usernameController.text,
      'password': _passwordController.text,
    };
    final response = await http.post(
      Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_user_db'),
      body: json.encode(credentials),
      headers: {'Content-Type': 'application/json'},
    );
    if (response.statusCode == 200 && json.decode(response.body)['success']) {
      final userRole = json.decode(response.body)['role'];
      if(DestinationPage == "HomePage") {
        if(userRole == "cashier"){
          print("to cashier");
          ToCashierPage(context);
        } else {
          print("to guest");
          ToGuestPage(context);
        }
        
      } else if (DestinationPage == "UsersPage" && userRole == "superadmin") {
        ToUsersPage(context);
      } else {
        SnackBar(content: Text('Something went wrong'));
      }
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Invalid credentials')),
      );
    }
  }
}

void ToGuestPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => GuestPage()),);
}

void ToCashierPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => CashierPage()),);
}

void ToUsersPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => UsersPage()),);
}
{% endhighlight %}

Pewarisan dari HomePage belum berhasil, sehingga kelas sendiri untuk sementara.

**lib/CashierPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'CartPage.dart';

class CashierPage extends StatefulWidget {
  @override
  _CashierPageState createState() => _CashierPageState();
}

class _CashierPageState extends State<CashierPage> {
  String? _selectedCategory;
  String? _selectedReason;
  String? _selectedSort;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Cashier Page'),
      ),
      body: Center(
        child: buildItemsList(),
      ),
    );
  }

  Widget buildItemsList() {
    return FutureBuilder(
      future: ItemsAPI(),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          List<dynamic> jsonData = snapshot.data != null ? jsonDecode(snapshot.data!) : [];

          // Get unique categories from the items
          List<dynamic> categories = jsonData.map((item) => item['category']).toSet().toList();
          categories.insert(0, 'All categories'); // Add "All categories" option

          // Get unique reasons from the items
          List<dynamic> reasons = jsonData.map((item) => item['reason']).toSet().toList();
          reasons.insert(0, 'All reason');

          // Get unique sort options
          List<String> sortOptions = ['Lowest price', 'Highest price', 'Lowest exit price', 'Highest exit price'];

          List<dynamic> filteredItems;
          if (_selectedCategory != null && _selectedReason != null) {
            if (_selectedReason == 'All reason') {
              filteredItems = jsonData.where((item) => item['category'] == _selectedCategory).toList();
            } else {
              filteredItems = jsonData
                  .where((item) => item['category'] == _selectedCategory)
                  .where((item) => item['reason'] == _selectedReason)
                  .toList();
            }
          } else if (_selectedCategory != null) {
            if (_selectedCategory == 'All categories') {
              filteredItems = jsonData;
            } else {
              filteredItems = jsonData.where((item) => item['category'] == _selectedCategory).toList();
            }
          } else if (_selectedReason != null) {
            if (_selectedReason == 'All reason') {
              filteredItems = jsonData; // Display all items when "All reason" is selected
            } else {
              filteredItems = jsonData.where((item) => item['reason'] == _selectedReason).toList();
            }
          } else {
            filteredItems = jsonData;
          }

          // Apply sort
          if (_selectedSort == 'Lowest price') {
            filteredItems.sort((a, b) => a['price'].compareTo(b['price']));
          } else if (_selectedSort == 'Highest price') {
            filteredItems.sort((a, b) => b['price'].compareTo(a['price']));
          } else if (_selectedSort == 'Lowest exit price') {
            filteredItems.sort((a, b) {
              if (a['exit_price'] == null) return -1; // or some other default value
              if (b['exit_price'] == null) return 1; // or some other default value
              return a['exit_price'].compareTo(b['exit_price']);
            });
          } else if (_selectedSort == 'Highest exit price') {
            filteredItems.sort((a, b) {
              if (a['exit_price'] == null) return 1; // or some other default value
              if (b['exit_price'] == null) return -1; // or some other default value
              return b['exit_price'].compareTo(a['exit_price']);
            });
          }

          return Column(
            children: [
              DropdownButtonFormField(
                value: _selectedCategory,
                onChanged: (value) {
                  setState(() {
                    _selectedCategory = value as String?;
                  });
                },
                items: categories.map((category) => DropdownMenuItem(
                  value: category,
                  child: Text(category),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Filter by Category',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: _selectedReason,
                onChanged: (value) {
                  setState(() {
                    _selectedReason = value as String?;
                  });
                },
                items: reasons.map((reason) => DropdownMenuItem(
                  value: reason,
                  child: Text(reason ?? 'No reason'),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Filter by Reason',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              DropdownButtonFormField(
                value: _selectedSort,
                onChanged: (value) {
                  setState(() {
                    _selectedSort = value as String?;
                  });
                },
                items: sortOptions.map((option) => DropdownMenuItem(
                  value: option,
                  child: Text(option),
                )).toList(),
                decoration: InputDecoration(
                  labelText: 'Sort by',
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  border: OutlineInputBorder(),
                ),
              ),
              Expanded(
                child: ListView.builder(
                  shrinkWrap: true,
                  itemCount: filteredItems.length,
                  itemBuilder: (context, index) {
                    Map<String, dynamic> item = filteredItems[index];
                    return Card(
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Name: ${item['name']}'),
                            Text('Category: ${item['category']}'),
                            Text('Description: ${item['description']}'),
                            Text('Price: ${item['price']}'),
                            Text('Exit At: ${item['exit_at']}'), // Add this line
                            Text('Reason: ${item['reason']}'), // Add this line
                            Text('Exit Price: ${item['exit_price']}'), // Add this line
                            IconButton(
                              icon: Icon(Icons.shopping_cart),
                              onPressed: () {
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) => CartPage(
                                      item: item,
                                      onUpdate: (updatedItem) { // Add this line
                                        // Update the CashierPage here
                                        setState(() {
                                          // Update the item in the CashierPage
                                        });
                                      },
                                    ),
                                  ),
                                );
                              },
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                ),
              ),
            ],
          );
        } else if (snapshot.hasError) {
          return Text('Error: ${snapshot.error}');
        } else {
          return CircularProgressIndicator();
        }
      },
    );
  }
}

Future<String> ItemsAPI() async {
  try {
    final response = await http.get(Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db'));
    if (response.statusCode == 200) {
      final jsonString = response.body;
      return jsonString;
    } else {
      return 'failed: ${response.statusCode}';
    }
  } catch (e) {
    return 'Error: $e';
  }
}
{% endhighlight %}

**lib/CartPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:intl/intl.dart';

class CartPage extends StatefulWidget {
  final Map<String, dynamic> item;
  final Function(Map<String, dynamic>) onUpdate; // Add this line

  CartPage({required this.item, required this.onUpdate}); // Add this line

  @override
  _CartPageState createState() => _CartPageState();
}

class _CartPageState extends State<CartPage> {
  TextEditingController _reasonController = TextEditingController();
  TextEditingController _exitPriceController = TextEditingController();
  DateTime? _selectedExitAt;

  @override
  void initState() {
    super.initState();
    _reasonController.text = widget.item['reason'] ?? '';
    _exitPriceController.text = widget.item['exit_price']?.toString() ?? '';
    _selectedExitAt = widget.item['exit_at'] != null
        ? DateTime.parse(widget.item['exit_at'])
        : null;
  }

  Future<void> _updateItem() async {
    final url = Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db');
    final exitAt = _selectedExitAt != null ? DateFormat('yyyy-MM-dd HH:mm:ss').format(_selectedExitAt!) : null;
    final exitPrice = _exitPriceController.text.isNotEmpty ? _exitPriceController.text : null;
    final reason = _reasonController.text.isNotEmpty ? _reasonController.text : null;

    final response = await http.patch(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'id': widget.item['id'].toString(),
        'exit_at': exitAt,
        'reason': reason,
        'exit_price': exitPrice,
      }),
    );

    if (response.statusCode == 200) {
      // Successfully updated
      Navigator.pop(context, {
        'id': widget.item['id'].toString(),
        'exit_at': exitAt,
        'reason': reason,
        'exit_price': exitPrice,
      });
      widget.onUpdate({ // Add this line
        'id': widget.item['id'].toString(),
        'exit_at': exitAt,
        'reason': reason,
        'exit_price': exitPrice,
      });
    } else {
      // Handle error
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Failed to update item')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Cart Page'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text('Item: ${widget.item['name']}'),
            Text('Exit At: ${widget.item['exit_at'] ?? 'Not set'}'),
            Text('Reason: ${widget.item['reason'] ?? 'Not set'}'),
            Text('Exit Price: ${widget.item['exit_price'] ?? 'Not set'}'),
            TextField(
              controller: _reasonController,
              decoration: InputDecoration(labelText: 'Reason'),
            ),
            TextField(
              controller: _exitPriceController,
              decoration: InputDecoration(labelText: 'Exit Price'),
              keyboardType: TextInputType.number,
            ),
            ListTile(
              title: Text('Exit At: ${_selectedExitAt != null ? DateFormat('yyyy-MM-dd').format(_selectedExitAt!) : 'Not set'}'),
              trailing: Icon(Icons.calendar_today),
              onTap: () async {
                DateTime? pickedDate = await showDatePicker(
                  context: context,
                  initialDate: _selectedExitAt ?? DateTime.now(),
                  firstDate: DateTime(2000),
                  lastDate: DateTime(2100),
                );
                if (pickedDate != null) {
                  setState(() {
                    _selectedExitAt = pickedDate;
                  });
                }
              },
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _updateItem,
              child: Text('Save'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

**app.js**
{% highlight javascript %}
const express = require('express');
const app = express();
const db = require('./db');

app.get('/flutter_latihan_arsip_barang_items_db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM items');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.get('/flutter_latihan_arsip_barang_users_db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.use(express.json());

app.post('/flutter_latihan_arsip_barang_user_db', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE username=? AND password=?',
      [username, password]
    );
    if (rows.length > 0) {
      const userRole = rows[0].role;
      res.json({ success: true, role: userRole });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.post('/flutter_latihan_arsip_barang_register_users_db', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Insert user into database
    const [rows] = await db.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password]
    );
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.post('/flutter_latihan_arsip_barang_update_user_role', async (req, res) => {
  const { role, username } = req.body;
  try {
    const [rows] = await db.execute(
      'UPDATE users SET role=? WHERE username=?',
      [role, username]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating user role' });
  }
});

app.patch('/flutter_latihan_arsip_barang_items_db', async (req, res) => {
  const { id, exit_at, reason, exit_price } = req.body;
  
  try {
    await db.execute(
      'UPDATE items SET exit_at = ?, reason = ?, exit_price = ? WHERE id = ?',
      [exit_at || null, reason || null, exit_price || null, id]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating item' });
  }
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
{% endhighlight %}

## Membuat halaman logistic agar dapat menambahkan dan edit barang melalui API ke database.
**lib/LoginPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'CashierPage.dart';
import 'GuestPage.dart';
import 'LogisticPage.dart';
import 'RegistrationPage.dart';
import 'UsersPage.dart';

class LoginPage extends StatelessWidget {
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login Page'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _usernameController,
              decoration: InputDecoration(labelText: 'Username'),
            ),
            TextField(
              controller: _passwordController,
              decoration: InputDecoration(labelText: 'Password'),
              obscureText: true,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: () => _login(context, 'HomePage'),
                  child: Text('Login'),
                ),
                ElevatedButton(
                  onPressed: () {
                    // Navigate to registration page
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => RegistrationPage()),
                    );
                  },
                  child: Text('Register'),
                ),
                ElevatedButton(
                  onPressed: () => _login(context, 'UsersPage'),
                  child: Text('Users'),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }

  void _login(BuildContext context, String DestinationPage) async {
    final credentials = {
      'username': _usernameController.text,
      'password': _passwordController.text,
    };
    final response = await http.post(
      Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_user_db'),
      body: json.encode(credentials),
      headers: {'Content-Type': 'application/json'},
    );
    if (response.statusCode == 200 && json.decode(response.body)['success']) {
      final userRole = json.decode(response.body)['role'];
      if(DestinationPage == "HomePage") {
        if(userRole == "cashier"){
          ToCashierPage(context);
        } else if(userRole == "logistic") {
          ToLogisticPage(context);
        } else {
          ToGuestPage(context);
        }
      } else if (DestinationPage == "UsersPage" && userRole == "superadmin") {
        ToUsersPage(context);
      } else {
        SnackBar(content: Text('Something went wrong'));
      }
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Invalid credentials')),
      );
    }
  }
}

void ToGuestPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => GuestPage()),);
}

void ToCashierPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => CashierPage()),);
}

void ToLogisticPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => LogisticPage()),);
}

void ToUsersPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => UsersPage()),);
}
{% endhighlight %}

**lib/LogisticPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'AddItemPage.dart';
import 'EditItemPage.dart';

class LogisticPage extends StatefulWidget {
  @override
  _LogisticPageState createState() => _LogisticPageState();
}

class _LogisticPageState extends State<LogisticPage> {
  List<Map<String, dynamic>> _items = [];

  @override
  void initState() {
    super.initState();
    _loadItems();
  }

  Future<void> _loadItems() async {
    final url = Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db');
    final response = await http.get(url);

    if (response.statusCode == 200) {
      final jsonData = jsonDecode(response.body);
      setState(() {
        _items = jsonData.cast<Map<String, dynamic>>();      });
    } else {
      print('Failed to load items: ${response.statusCode}');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Logistic Page'),
      ),
      body: Center(
        child: Column(
          children: [
            ElevatedButton(
              child: Text('Add Item'),
              onPressed: () async {
                await Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => AddItemPage()),
                );
                _loadItems(); // Reload items after adding a new item
              },
            ),
            Expanded(
              child: ListView.builder(
                itemCount: _items.length,
                itemBuilder: (context, index) {
                  Map<String, dynamic> item = _items[index];
                  return Card(
                    child: Column(
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: item.keys.map((key) {
                              return Text('$key: ${item[key]}');
                            }).toList(),
                          ),
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            ElevatedButton(
                              child: Icon(Icons.edit),
                              onPressed: () async {
                                await Navigator.push(
                                  context,
                                  MaterialPageRoute(builder: (context) => EditItemPage(item: item)),
                                );
                                _loadItems(); // Reload items after editing an item
                              },
                            ),
                          ],
                        ),
                      ],
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

**lib/AddItemPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class EditItemPage extends StatefulWidget {
  final Map<String, dynamic> item;

  EditItemPage({required this.item});

  @override
  _EditItemPageState createState() => _EditItemPageState();
}

class _EditItemPageState extends State<EditItemPage> {
  final _formKey = GlobalKey<FormState>();
  String? _name;
  String? _category;
  String? _description;
  double? _price;
  DateTime? _timestamp;
  final _timestampController = TextEditingController();


  @override
  void initState() {
    super.initState();
    _name = widget.item['name'];
    _category = widget.item['category'];
    _description = widget.item['description'];
    _price = double.parse(widget.item['price']);
    _timestamp = DateTime.parse(widget.item['timestamp']);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Item'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              _buildNameField(),
              _buildCategoryField(),
              _buildDescriptionField(),
              _buildPriceField(),
              _buildTimestampField(),
              _buildSaveButton(),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildNameField() {
    return TextFormField(
      initialValue: _name,
      decoration: InputDecoration(labelText: 'Name'),
      validator: (value) {
        if (value == null || value.isEmpty) {
          return 'Please enter a name';
        }
        return null;
      },
      onSaved: (value) => _name = value,
    );
  }

  Widget _buildCategoryField() {
    return TextFormField(
      initialValue: _category,
      decoration: InputDecoration(labelText: 'Category'),
      validator: (value) {
        if (value == null || value.isEmpty) {
          return 'Please enter a category';
        }
        return null;
      },
      onSaved: (value) => _category = value,
    );
  }

  Widget _buildDescriptionField() {
    return TextFormField(
      initialValue: _description,
      decoration: InputDecoration(labelText: 'Description'),
      validator: (value) {
        if (value == null || value.isEmpty) {
          return 'Please enter a description';
        }
        return null;
      },
      onSaved: (value) => _description = value,
    );
  }

  Widget _buildPriceField() {
    return TextFormField(
      initialValue: _price.toString(),
      decoration: InputDecoration(labelText: 'Price'),
      validator: (value) {
        if (value == null || value.isEmpty) {
          return 'Please enter a price';
        }
        return null;
      },
      onSaved: (value) => _price = double.parse(value!),
    );
  }

  Widget _buildTimestampField() {
    _timestampController.text = DateFormat.yMMMd().format(_timestamp!); // Initialize the text controller with the formatted timestamp value
    return TextFormField(
      controller: _timestampController, // Add the text controller to the text field
      decoration: InputDecoration(labelText: 'Timestamp'),
      readOnly: true, // Make the field read-only
      onTap: () async {
        final date = await showDatePicker(
          context: context,
          initialDate: _timestamp ?? DateTime.now(),
          firstDate: DateTime(2000),
          lastDate: DateTime(2030),
        );
        if (date != null) {
          setState(() {
            _timestamp = date;
            // Update the text field with the selected date
            _timestampController.text = DateFormat.yMMMd().format(_timestamp!);
          });
        }
      },
    );
  }

  Widget _buildSaveButton() {
    return ElevatedButton(
      child: Text('Save Changes'),
      onPressed: () async {
        if (_formKey.currentState!.validate()) {
          _formKey.currentState!.save();
          try {
            final url = Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db/${widget.item['id']}');
            final response = await http.put(
              url,
              headers: {'Content-Type': 'application/json'},
              body: jsonEncode({
                'name': _name,
                'category': _category,
                'description': _description,
                'price': _price,
                'timestamp': _timestamp!.toIso8601String(),
              }),
            );

            if (response.statusCode == 200) {
              Navigator.pop(context); // Go back to LogisticPage
            } else {
              print('Failed to update item: ${response.statusCode}');
            }
          } catch (e) {
            print('Error updating item: $e');
          }
        }
      },
    );
  }
}
{% endhighlight %}

**app.js**
{% highlight javascript %}
const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // or app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/flutter_latihan_arsip_barang_items_db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM items');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.post('/flutter_latihan_arsip_barang_items_db', async (req, res) => {
  try {
    const { name, category, description, price, timestamp } = req.body;
    const timestampDate = new Date(timestamp); // Convert input value to a Date object
    const query = 'INSERT INTO items (name, category, description, price, timestamp) VALUES (?, ?, ?, ?, ?)';
    const values = [name, category, description, price, timestampDate];
    const [rows] = await db.execute(query, values);
    res.status(201).json({ success: true, message: 'Item added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding item' });
  }
});

app.get('/flutter_latihan_arsip_barang_users_db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.post('/flutter_latihan_arsip_barang_user_db', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE username=? AND password=?',
      [username, password]
    );
    if (rows.length > 0) {
      const userRole = rows[0].role;
      res.json({ success: true, role: userRole });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.post('/flutter_latihan_arsip_barang_register_users_db', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Insert user into database
    const [rows] = await db.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password]
    );
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.post('/flutter_latihan_arsip_barang_update_user_role', async (req, res) => {
  const { role, username } = req.body;
  try {
    const [rows] = await db.execute(
      'UPDATE users SET role=? WHERE username=?',
      [role, username]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating user role' });
  }
});

app.patch('/flutter_latihan_arsip_barang_items_db', async (req, res) => {
  const { id, exit_at, reason, exit_price } = req.body;
  
  try {
    await db.execute(
      'UPDATE items SET exit_at = ?, reason = ?, exit_price = ? WHERE id = ?',
      [exit_at || null, reason || null, exit_price || null, id]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating item' });
  }
});

app.put('/flutter_latihan_arsip_barang_items_db/:id', async (req, res) => {
  const id = req.params.id;
  const { name, category, description, price, timestamp } = req.body;
  try {
    const query = 'UPDATE items SET name = ?, category = ?, description = ?, price = ?, timestamp = ? WHERE id = ?';
    const values = [name, category, description, price, timestamp, id];
    const [rows] = await db.execute(query, values);
    res.json({ success: true, message: 'Item updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating item' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
{% endhighlight %}

## Halaman Admin
**lib/LoginPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'CashierPage.dart';
import 'GuestPage.dart';
import 'LogisticPage.dart';
import 'RegistrationPage.dart';
import 'AdminPage.dart';
import 'UsersPage.dart';

class LoginPage extends StatelessWidget {
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login Page'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _usernameController,
              decoration: InputDecoration(labelText: 'Username'),
            ),
            TextField(
              controller: _passwordController,
              decoration: InputDecoration(labelText: 'Password'),
              obscureText: true,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: () => _login(context, 'HomePage'),
                  child: Text('Login'),
                ),
                ElevatedButton(
                  onPressed: () {
                    // Navigate to registration page
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => RegistrationPage()),
                    );
                  },
                  child: Text('Register'),
                ),
                ElevatedButton(
                  onPressed: () => _login(context, 'UsersPage'),
                  child: Text('Users'),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }

  void _login(BuildContext context, String DestinationPage) async {
    final credentials = {
      'username': _usernameController.text,
      'password': _passwordController.text,
    };
    final response = await http.post(
      Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_user_db'),
      body: json.encode(credentials),
      headers: {'Content-Type': 'application/json'},
    );
    if (response.statusCode == 200 && json.decode(response.body)['success']) {
      final userRole = json.decode(response.body)['role'];
      if(DestinationPage == "HomePage") {
        if(userRole == "cashier"){
          ToCashierPage(context);
        } else if(userRole == "logistic") {
          ToLogisticPage(context);
        } else if(userRole == "admin") {
          ToAdminPage(context);
        } else {
          ToGuestPage(context);
        }
      } else if (DestinationPage == "UsersPage" && userRole == "superadmin") {
        ToUsersPage(context);
      } else {
        SnackBar(content: Text('Something went wrong'));
      }
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Invalid credentials')),
      );
    }
  }
}

void ToGuestPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => GuestPage()),);
}

void ToCashierPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => CashierPage()),);
}

void ToLogisticPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => LogisticPage()),);
}

void ToAdminPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => AdminPage()),);
}

void ToUsersPage(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => UsersPage()),);
}
{% endhighlight %}

### Halaman Depan Admin Ditambah Fungsi Logistic
**lib/AdminPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'AddItemPage.dart';
import 'EditItemPage.dart';

class AdminPage extends StatefulWidget {
  @override
  _AdminPageState createState() => _AdminPageState();
}

class _AdminPageState extends State<AdminPage> {
  List<Map<String, dynamic>> _items = [];

  @override
  void initState() {
    super.initState();
    _loadItems();
  }

  Future<void> _loadItems() async {
    final url = Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db');
    final response = await http.get(url);

    if (response.statusCode == 200) {
      final jsonData = jsonDecode(response.body);
      setState(() {
        _items = jsonData.cast<Map<String, dynamic>>();      });
    } else {
      print('Failed to load items: ${response.statusCode}');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Admin Page'),
      ),
      body: Center(
        child: Column(
          children: [
            ElevatedButton(
              child: Text('Add Item'),
              onPressed: () async {
                await Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => AddItemPage()),
                );
                _loadItems(); // Reload items after adding a new item
              },
            ),
            Expanded(
              child: ListView.builder(
                itemCount: _items.length,
                itemBuilder: (context, index) {
                  Map<String, dynamic> item = _items[index];
                  return Card(
                    child: Column(
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: item.keys.map((key) {
                              return Text('$key: ${item[key]}');
                            }).toList(),
                          ),
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            ElevatedButton(
                              child: Icon(Icons.edit),
                              onPressed: () async {
                                await Navigator.push(
                                  context,
                                  MaterialPageRoute(builder: (context) => EditItemPage(item: item)),
                                );
                                _loadItems(); // Reload items after editing an item
                              },
                            ),
                          ],
                        ),
                      ],
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

### Halaman Depan Admin Fungsi Cashier
**lib/AdminPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'AddItemPage.dart';
import 'CartPage.dart';
import 'EditItemPage.dart';

class AdminPage extends StatefulWidget {
  @override
  _AdminPageState createState() => _AdminPageState();
}

class _AdminPageState extends State<AdminPage> {
  List<Map<String, dynamic>> _items = [];

  @override
  void initState() {
    super.initState();
    _loadItems();
  }

  Future<void> _loadItems() async {
    final url = Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db');
    final response = await http.get(url);

    if (response.statusCode == 200) {
      final jsonData = jsonDecode(response.body);
      setState(() {
        _items = jsonData.cast<Map<String, dynamic>>();      });
    } else {
      print('Failed to load items: ${response.statusCode}');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Admin Page'),
      ),
      body: Center(
        child: Column(
          children: [
            ElevatedButton(
              child: Text('Add Item'),
              onPressed: () async {
                await Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => AddItemPage()),
                );
                _loadItems(); // Reload items after adding a new item
              },
            ),
            Expanded(
              child: ListView.builder(
                itemCount: _items.length,
                itemBuilder: (context, index) {
                  Map<String, dynamic> item = _items[index];
                  return Card(
                    child: Column(
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: item.keys.map((key) {
                              return Text('$key: ${item[key]}');
                            }).toList(),
                          ),
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            ElevatedButton(
                              child: Icon(Icons.edit),
                              onPressed: () async {
                                await Navigator.push(
                                  context,
                                  MaterialPageRoute(builder: (context) => EditItemPage(item: item)),
                                );
                                _loadItems(); // Reload items after editing an item
                              },
                            ),
                            ElevatedButton(
                              child: Icon(Icons.shopping_cart),
                              onPressed: () async {
                                await Navigator.push(
                                  context,
                                  MaterialPageRoute(builder: (context) => 
                                    CartPage(item: item, 
                                      onUpdate: (updatedItem) { // Add this line
                                        setState(() {});
                                      }
                                    )
                                  ),
                                );
                                _loadItems(); // Reload items after editing an item
                              },
                            ),
                          ],
                        ),
                      ],
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

### Halaman Depan Admin Fungsi Hapus pada Edit Barang
**lib/AdminPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'AddItemPage.dart';
import 'CartPage.dart';
import 'AdminEditItemPage.dart';

class AdminPage extends StatefulWidget {
  @override
  _AdminPageState createState() => _AdminPageState();
}

class _AdminPageState extends State<AdminPage> {
  List<Map<String, dynamic>> _items = [];

  @override
  void initState() {
    super.initState();
    _loadItems();
  }

  Future<void> _loadItems() async {
    final url = Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db');
    final response = await http.get(url);

    if (response.statusCode == 200) {
      final jsonData = jsonDecode(response.body);
      setState(() {
        _items = jsonData.cast<Map<String, dynamic>>();      });
    } else {
      print('Failed to load items: ${response.statusCode}');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Admin Page'),
      ),
      body: Center(
        child: Column(
          children: [
            ElevatedButton(
              child: Text('Add Item'),
              onPressed: () async {
                await Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => AddItemPage()),
                );
                _loadItems(); // Reload items after adding a new item
              },
            ),
            Expanded(
              child: ListView.builder(
                itemCount: _items.length,
                itemBuilder: (context, index) {
                  Map<String, dynamic> item = _items[index];
                  return Card(
                    child: Column(
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: item.keys.map((key) {
                              return Text('$key: ${item[key]}');
                            }).toList(),
                          ),
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            ElevatedButton(
                              child: Icon(Icons.edit),
                              onPressed: () async {
                                await Navigator.push(
                                  context,
                                  MaterialPageRoute(builder: (context) => AdminEditItemPage(item: item)),
                                );
                                _loadItems(); // Reload items after editing an item
                              },
                            ),
                            ElevatedButton(
                              child: Icon(Icons.shopping_cart),
                              onPressed: () async {
                                await Navigator.push(
                                  context,
                                  MaterialPageRoute(builder: (context) => 
                                    CartPage(item: item, 
                                      onUpdate: (updatedItem) { // Add this line
                                        setState(() {});
                                      }
                                    )
                                  ),
                                );
                                _loadItems(); // Reload items after editing an item
                              },
                            ),
                          ],
                        ),
                      ],
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

**lib/AdminEditPage.dart**
{% highlight dart %}
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class AdminEditItemPage extends StatefulWidget {
  final Map<String, dynamic> item;

  AdminEditItemPage({required this.item});

  @override
  _AdminEditItemPageState createState() => _AdminEditItemPageState();
}

class _AdminEditItemPageState extends State<AdminEditItemPage> {
  final _formKey = GlobalKey<FormState>();
  String? _name;
  String? _category;
  String? _description;
  double? _price;
  DateTime? _timestamp;
  final _timestampController = TextEditingController();


  @override
  void initState() {
    super.initState();
    _name = widget.item['name'];
    _category = widget.item['category'];
    _description = widget.item['description'];
    _price = double.parse(widget.item['price']);
    _timestamp = DateTime.parse(widget.item['timestamp']);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Item'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              _buildNameField(),
              _buildCategoryField(),
              _buildDescriptionField(),
              _buildPriceField(),
              _buildTimestampField(),
              _buildSaveButton(),
              _buildDeleteButton(),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildNameField() {
    return TextFormField(
      initialValue: _name,
      decoration: InputDecoration(labelText: 'Name'),
      validator: (value) {
        if (value == null || value.isEmpty) {
          return 'Please enter a name';
        }
        return null;
      },
      onSaved: (value) => _name = value,
    );
  }

  Widget _buildCategoryField() {
    return TextFormField(
      initialValue: _category,
      decoration: InputDecoration(labelText: 'Category'),
      validator: (value) {
        if (value == null || value.isEmpty) {
          return 'Please enter a category';
        }
        return null;
      },
      onSaved: (value) => _category = value,
    );
  }

  Widget _buildDescriptionField() {
    return TextFormField(
      initialValue: _description,
      decoration: InputDecoration(labelText: 'Description'),
      validator: (value) {
        if (value == null || value.isEmpty) {
          return 'Please enter a description';
        }
        return null;
      },
      onSaved: (value) => _description = value,
    );
  }

  Widget _buildPriceField() {
    return TextFormField(
      initialValue: _price.toString(),
      decoration: InputDecoration(labelText: 'Price'),
      validator: (value) {
        if (value == null || value.isEmpty) {
          return 'Please enter a price';
        }
        return null;
      },
      onSaved: (value) => _price = double.parse(value!),
    );
  }

  Widget _buildTimestampField() {
    _timestampController.text = DateFormat.yMMMd().format(_timestamp!); // Initialize the text controller with the formatted timestamp value
    return TextFormField(
      controller: _timestampController, // Add the text controller to the text field
      decoration: InputDecoration(labelText: 'Timestamp'),
      readOnly: true, // Make the field read-only
      onTap: () async {
        final date = await showDatePicker(
          context: context,
          initialDate: _timestamp ?? DateTime.now(),
          firstDate: DateTime(2000),
          lastDate: DateTime(2030),
        );
        if (date != null) {
          setState(() {
            _timestamp = date;
            // Update the text field with the selected date
            _timestampController.text = DateFormat.yMMMd().format(_timestamp!);
          });
        }
      },
    );
  }

  Widget _buildSaveButton() {
    return ElevatedButton(
      child: Text('Save Changes'),
      onPressed: () async {
        if (_formKey.currentState!.validate()) {
          _formKey.currentState!.save();
          try {
            final url = Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db/${widget.item['id']}');
            final response = await http.put(
              url,
              headers: {'Content-Type': 'application/json'},
              body: jsonEncode({
                'name': _name,
                'category': _category,
                'description': _description,
                'price': _price,
                'timestamp': _timestamp!.toIso8601String(),
              }),
            );

            if (response.statusCode == 200) {
              Navigator.pop(context); // Go back to LogisticPage
            } else {
              print('Failed to update item: ${response.statusCode}');
            }
          } catch (e) {
            print('Error updating item: $e');
          }
        }
      },
    );
  }

  Widget _buildDeleteButton() {
    return ElevatedButton(
      child: Text('Delete Item'),
      onPressed: () async {
        try {
          final url = Uri.parse('http://localhost:3000/flutter_latihan_arsip_barang_items_db/${widget.item['id']}');
          final response = await http.delete(url);

          if (response.statusCode == 200) {
            Navigator.pop(context); // Go back to LogisticPage
          } else {
            print('Failed to delete item: ${response.statusCode}');
          }
        } catch (e) {
          print('Error deleting item: $e');
        }
      },
    );
  }
}
{% endhighlight %}

**app.js**
{% highlight javascript %}
const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // or app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/flutter_latihan_arsip_barang_items_db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM items');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.post('/flutter_latihan_arsip_barang_items_db', async (req, res) => {
  try {
    const { name, category, description, price, timestamp } = req.body;
    const timestampDate = new Date(timestamp); // Convert input value to a Date object
    const query = 'INSERT INTO items (name, category, description, price, timestamp) VALUES (?, ?, ?, ?, ?)';
    const values = [name, category, description, price, timestampDate];
    const [rows] = await db.execute(query, values);
    res.status(201).json({ success: true, message: 'Item added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding item' });
  }
});

app.get('/flutter_latihan_arsip_barang_users_db', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.post('/flutter_latihan_arsip_barang_user_db', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE username=? AND password=?',
      [username, password]
    );
    if (rows.length > 0) {
      const userRole = rows[0].role;
      res.json({ success: true, role: userRole });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

app.post('/flutter_latihan_arsip_barang_register_users_db', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Insert user into database
    const [rows] = await db.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password]
    );
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.post('/flutter_latihan_arsip_barang_update_user_role', async (req, res) => {
  const { role, username } = req.body;
  try {
    const [rows] = await db.execute(
      'UPDATE users SET role=? WHERE username=?',
      [role, username]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating user role' });
  }
});

app.patch('/flutter_latihan_arsip_barang_items_db', async (req, res) => {
  const { id, exit_at, reason, exit_price } = req.body;
  
  try {
    await db.execute(
      'UPDATE items SET exit_at = ?, reason = ?, exit_price = ? WHERE id = ?',
      [exit_at || null, reason || null, exit_price || null, id]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating item' });
  }
});

app.put('/flutter_latihan_arsip_barang_items_db/:id', async (req, res) => {
  const id = req.params.id;
  const { name, category, description, price, timestamp } = req.body;
  try {
    const query = 'UPDATE items SET name = ?, category = ?, description = ?, price = ?, timestamp = ? WHERE id = ?';
    const values = [name, category, description, price, timestamp, id];
    const [rows] = await db.execute(query, values);
    res.json({ success: true, message: 'Item updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating item' });
  }
});

app.delete('/flutter_latihan_arsip_barang_items_db/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const query = 'DELETE FROM items WHERE id = ?';
    const values = [id];
    const [rows] = await db.execute(query, values);
    res.json({ success: true, message: 'Item deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting item' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
{% endhighlight %}

## Mempercantik tampilan.

Menyusul

# Acknowledgement

Not only created but tutored step by step by [Blackbox AI](https://www.blackbox.ai/chat/LW3QTSO).
