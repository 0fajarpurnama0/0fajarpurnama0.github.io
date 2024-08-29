---
layout: post
title: Latihan Aplikasi Arsip Barang di Fluter
category: internet
tags: [flutter, mobile, program, web, android, ios]
featuredimage: 
description: Latihan Aplikasi Arsip Barang di Fluter
canonicalurl: https://0fajarpurnama0.github.io/tools/2024/08/29/latihan-arsip-barang
---
# Permintaan

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

# Rancangan

## Pencatatan keluar masuk barang beserta harga per qty

Membuat homepage kosong dan membuat halaman form untuk menambah barang dengan qty. Membuat form untuk memberi status jika barang dikeluarkan.

## ⁠Setiap barang diberi kategori untuk filter by kategori

Halaman form tambah barang dimodifikasi untuk memberi kategori pada barang. Homepage ditambahkan fungsi filter.

## ⁠keluar masuk barang diberi keterangan timestamp (baik barang masuk maupun barang keluar) untuk keperluan filter by date

Halaman form tambah barang dimodifikasi untuk memberi timestamp pada barang. Halaman form keluar barang dimodifikasi untuk menambah timestamp untuk barang keluar. Filter pada halaman homepage dimodifikasi agar dapat filter dengan tanggal.
## ⁠setiap barang mempunyai harga jual dan harga beli

Form tambah ditambah input harga beli. Form keluar ditambah input harga jual.

## ⁠buat form khusus untuk menambahkan dan mengurangi item

## ⁠untuk case mengurangi item diberikan pilihan (bukan inputan bebas) alasan barang keluar contoh: sold, expire, broken

Status form keluar ditambah input keterangan sold, expire, broken.

## ⁠Tambahkan filter by case no 6

Filter halaman ditambah fungsi dapat memfilter alasan barangan keluar.

## ⁠Buat edit dan hapus barang

Menambah form edit barang. Menambah form hapus barang.

## ⁠Buat hasil rekap laporan per minggu (format bebas)

Hasil dapat export ke pdf, json, xml, dll.

## ⁠Case authentication :
- cashier hanya dapat mengurangi barang
- admin gudang hanya dapat menambahkan dan mengurangi barang
- super admin dapat semua akses

# Realisasi

## Pencatatan keluar masuk barang beserta harga per qty

### Membuat homepage kosong 

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
          title: Text('Halaman Depan'),
        ),
        body: Center(
          child: Text(''),
        ),
      ),
    );
  }
}
{% endhighlight %}

### Membuat halaman form untuk menambah barang dengan qty. 

Membuat tombol yang masuk ke halaman form kosong

{% highlight dart %}
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Flutter App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => FormPage()),
            );
          },
          child: Text('Go to Form Page'),
        ),
      ),
    );
  }
}

class FormPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Form Page'),
      ),
      body: Center(
        child: Text('This is a blank form'),
      ),
    );
  }
}
{% endhighlight %}

Halaman form tersebut dapat menambah sebuah barang ke halaman depan.

{% highlight dart %}
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Flutter App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<String> items = [];

  void addItem(String name) {
    setState(() {
      items.add(name);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Column(
        children: [
          ElevatedButton(
            onPressed: () async {
              final result = await Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => FormPage()),
              );

              if (result != null) {
                addItem(result);
              }
            },
            child: Text('Add Item'),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: items.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(items[index]),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}

class FormPage extends StatefulWidget {
  @override
  _FormPageState createState() => _FormPageState();
}

class _FormPageState extends State<FormPage> {
  final _formKey = GlobalKey<FormState>();
  String _name = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: InputDecoration(labelText: 'Item Name'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter an item name';
                  }
                  return null;
                },
                onSaved: (value) {
                  _name = value!;
                },
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    Navigator.pop(context, _name);
                  }
                },
                child: Text('Add'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
{% endhighlight %}

### Membuat form untuk memberi status jika barang dikeluarkan.

Menambah tombol minus pada setiap barang yang ditambah.

{% highlight dart %}
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Flutter App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<String> items = [];

  void addItem(String name) {
    setState(() {
      items.add(name);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Column(
        children: [
          ElevatedButton(
            onPressed: () async {
              final result = await Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => FormPage()),
              );

              if (result != null) {
                addItem(result);
              }
            },
            child: Text('Add Item'),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: items.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(items[index]),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      // Fungsi untuk tombol minus bisa ditambahkan di sini nanti
                    },
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}

class FormPage extends StatefulWidget {
  @override
  _FormPageState createState() => _FormPageState();
}

class _FormPageState extends State<FormPage> {
  final _formKey = GlobalKey<FormState>();
  String _name = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: InputDecoration(labelText: 'Item Name'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter an item name';
                  }
                  return null;
                },
                onSaved: (value) {
                  _name = value!;
                },
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    Navigator.pop(context, _name);
                  }
                },
                child: Text('Add'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
{% endhighlight %}

Tombol minus tersebut dapat memberi keterangan pada barang bahwa barang telah terjual.

{% highlight dart %}
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Flutter App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<String> items = [];
  List<bool> isSold = [];

  void addItem(String name) {
    setState(() {
      items.add(name);
      isSold.add(false);
    });
  }

  void sellItem(int index) {
    setState(() {
      isSold[index] = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Column(
        children: [
          ElevatedButton(
            onPressed: () async {
              final result = await Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => FormPage()),
              );

              if (result != null) {
                addItem(result);
              }
            },
            child: Text('Add Item'),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: items.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text('${items[index]} ${isSold[index] ? '(Terjual)' : ''}'),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      sellItem(index);
                    },
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}

class FormPage extends StatefulWidget {
  @override
  _FormPageState createState() => _FormPageState();
}

class _FormPageState extends State<FormPage> {
  final _formKey = GlobalKey<FormState>();
  String _name = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: InputDecoration(labelText: 'Item Name'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter an item name';
                  }
                  return null;
                },
                onSaved: (value) {
                  _name = value!;
                },
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    Navigator.pop(context, _name);
                  }
                },
                child: Text('Add'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
{% endhighlight %}

## ⁠Setiap barang diberi kategori untuk filter by kategori

### Halaman form tambah barang dimodifikasi untuk ditambah input untuk memberi kategori pada barang. 

{% highlight dart %}
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Flutter App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<String> items = [];
  List<bool> isSold = [];

  void addItem(String name) {
    setState(() {
      items.add(name);
      isSold.add(false);
    });
  }

  void sellItem(int index) {
    setState(() {
      isSold[index] = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Column(
        children: [
          ElevatedButton(
            onPressed: () async {
              final result = await Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => FormPage()),
              );

              if (result != null) {
                addItem(result);
              }
            },
            child: Text('Add Item'),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: items.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text('${items[index]} ${isSold[index] ? '(Terjual)' : ''}'),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      sellItem(index);
                    },
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}

class FormPage extends StatefulWidget {
  @override
  _FormPageState createState() => _FormPageState();
}

class _FormPageState extends State<FormPage> {
  final _formKey = GlobalKey<FormState>();
  String _name = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: InputDecoration(labelText: 'Item Name'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter an item name';
                  }
                  return null;
                },
                onSaved: (value) {
                  _name = value!;
                },
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Item Category'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter an item category';
                  }
                  return null;
                },
                onSaved: (value) {
                  _name = "Name: $_name \n Category: ${value!}";
                },
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    Navigator.pop(context, _name);
                  }
                },
                child: Text('Add'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
{% endhighlight %}

### Halaman depan ditambahkan fungsi filter.

{% highlight dart %}
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Flutter App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Item> items = [];
  String selectedCategory = 'All';

  void addItem(String name, String category) {
    setState(() {
      items.add(Item(name, category));
    });
  }

  void sellItem(int index) {
    setState(() {
      items[index].isSold = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Daftar Barang'),
      ),
      body: Column(
        children: [
          // Widget untuk filter kategori (contoh: DropdownButton)
          DropdownButton<String>(
            value: selectedCategory,
            onChanged: (newValue) {
              setState(() {
                selectedCategory = newValue!;
              });
            },
            items: ['All', ...items.map((item) => item.category).toSet()]
                .map((category) => DropdownMenuItem(
                      value: category,
                      child: Text(category),
                    ))
                .toList(),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: items.length,
              itemBuilder: (context, index) {
                if (selectedCategory == 'All' || items[index].category == selectedCategory) {
                  return ListTile(
                    title: Text(items[index].name),
                    subtitle: Text(items[index].category), // Menampilkan kategori di bawah nama
                    trailing: IconButton(
                      icon: Icon(Icons.remove),
                      onPressed: () {
                        sellItem(index);
                      },
                    ),
                  );
                } else {
                  return SizedBox.shrink();
                }
              },
            ),
          ),
          // Tombol untuk menambahkan barang
          FloatingActionButton(
            onPressed: () async {
              final result = await Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => FormPage()),
              );

              if (result != null) {
                addItem(result['name'], result['category']);
              }
            },
            child: Icon(Icons.add),
          ),
        ],
      ),
    );
  }
}

class Item {
  final String name;
  final String category;
  bool isSold;

  Item(this.name, this.category, {this.isSold = false});
}

class FormPage extends StatefulWidget {
  @override
  _FormPageState createState() => _FormPageState();
}

class _FormPageState extends State<FormPage> {
  final _formKey = GlobalKey<FormState>();
  String _name = '';
  String _category = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Tambah Barang'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: InputDecoration(labelText: 'Nama Barang'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Masukkan nama barang';
                  }
                  return null;
                },
                onSaved: (value) {
                  _name = value!;
                },
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Kategori'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Masukkan kategori';
                  }
                  return null;
                },
                onSaved: (value) {
                  _category = value!;
                },
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    Navigator.pop(context, {'name': _name, 'category': _category});
                  }
                },
                child: Text('Tambah'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
{% endhighlight %}

## ⁠keluar masuk barang diberi keterangan timestamp (baik barang masuk maupun barang keluar) untuk keperluan filter by date

### Halaman form tambah barang dimodifikasi untuk memberi timestamp pada barang.

{% highlight dart %}
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Flutter App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Item> items = [];
  String selectedCategory = 'All';

  void addItem(String name, String category) {
    setState(() {
      items.add(Item(name, category, DateTime.now()));
    });
  }

  void sellItem(int index) {
    setState(() {
      items[index].isSold = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Column(
        children: [
          // Widget for filtering by category (e.g., DropdownButton)
          DropdownButton<String>(
            value: selectedCategory,
            onChanged: (newValue) {
              setState(() {
                selectedCategory = newValue!;
              });
            },
            items: ['All', ...items.map((item) => item.category).toSet()]
                .map((category) => DropdownMenuItem(
                      value: category,
                      child: Text(category),
                    ))
                .toList(),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: items.length,
              itemBuilder: (context, index) {
                if (selectedCategory == 'All' || items[index].category == selectedCategory) {
                  return ListTile(
                    title: Text(items[index].name),
                    subtitle: Text('${items[index].category}\n${DateFormat('dd/MM/yyyy HH:mm').format(items[index].timestamp)}'),
                    trailing: IconButton(
                      icon: Icon(Icons.remove),
                      onPressed: () {
                        sellItem(index);
                      },
                    ),
                  );
                } else {
                  return SizedBox.shrink();
                }
              },
            ),
          ),
          // FloatingActionButton for adding items
          FloatingActionButton(
            onPressed: () async {
              final result = await Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => FormPage()),
              );

              if (result != null) {
                addItem(result['name'], result['category']);
              }
            },
            child: Icon(Icons.add),
          ),
        ],
      ),
    );
  }
}

class Item {
  final String name;
  final String category;
  final DateTime timestamp;
  bool isSold;

  Item(this.name, this.category, this.timestamp, {this.isSold = false});
}

class FormPage extends StatefulWidget {
  @override
  _FormPageState createState() => _FormPageState();
}

class _FormPageState extends State<FormPage> {
  final _formKey = GlobalKey<FormState>();
  String _name = '';
  String _category = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: InputDecoration(labelText: 'Item Name'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter an item name';
                  }
                  return null;
                },
                onSaved: (value) {
                  _name = value!;
                },
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Item Category'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter an item category';
                  }
                  return null;
                },
                onSaved: (value) {
                  _category = value!;
                },
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    Navigator.pop(context, {'name': _name, 'category': _category});
                  }
                },
                child: Text('Add'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
{% endhighlight %}

### Halaman form keluar barang dimodifikasi untuk menambah timestamp untuk barang keluar. 

{% highlight dart %}

{% endhighlight %}

### Filter pada halaman homepage dimodifikasi agar dapat filter dengan tanggal.

{% highlight dart %}

{% endhighlight %}

{% highlight dart %}

{% endhighlight %}

## ⁠setiap barang mempunyai harga jual dan harga beli

Form tambah ditambah input harga beli. Form keluar ditambah input harga jual.

## ⁠buat form khusus untuk menambahkan dan mengurangi item

## ⁠untuk case mengurangi item diberikan pilihan (bukan inputan bebas) alasan barang keluar contoh: sold, expire, broken

Status form keluar ditambah input keterangan sold, expire, broken.

## ⁠Tambahkan filter by case no 6

Filter halaman ditambah fungsi dapat memfilter alasan barangan keluar.

## ⁠Buat edit dan hapus barang

Menambah form edit barang. Menambah form hapus barang.

## ⁠Buat hasil rekap laporan per minggu (format bebas)

Hasil dapat export ke pdf, json, xml, dll.

## ⁠Case authentication :
- cashier hanya dapat mengurangi barang
- admin gudang hanya dapat menambahkan dan mengurangi barang
- super admin dapat semua akses

# Aplikasi Akhir

[Run on Dartpad](https://dartpad.dev/?id=52d995a5b5df90fb00d2137c0aac9fce)