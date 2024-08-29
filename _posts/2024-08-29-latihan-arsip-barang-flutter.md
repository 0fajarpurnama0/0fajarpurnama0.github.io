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

### Membuat halaman depan kosong 

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
          child: Text(''),
        ),
      ),
    );
  }
}
{% endhighlight %}

### Membuat halaman form untuk menambah barang. 

Membuat halaman depan terpisah dengan MyApp dan sekalian menambah tombol.

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
        child: IconButton(onPressed: (){}, icon: Icon(Icons.add)),
      ),
    );
  }
}
{% endhighlight %}

Membuat tombol yang masuk ke halaman form kosong dan sekaligus form telah terisi input text, column kosong, dan tombol tambah

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
        child: IconButton(
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => AddItemPage()),
            );
          },
          icon: Icon(Icons.add),
        ),
      ),
    );
  }
}

class AddItemPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item Page'),
      ),
      body: Center(
        child: Column(
          children: [
            TextFormField(
              decoration: InputDecoration(labelText: 'Item Name'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {},
              child: Text('Add'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

### Halaman form tersebut dapat menambah sebuah barang ke halaman depan.

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
  List<String> _items = [];

  void _addItem(String item) {
    setState(() {
      _items.add(item);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          children: [
            IconButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => AddItemPage(_addItem)),
                );
              },
              icon: Icon(Icons.add),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: _items.length,
              itemBuilder: (context, index) {
                return ListTile(title: Text(_items[index]));
              },
            ),
          ],
        ),
      ),
    );
  }
}

class AddItemPage extends StatelessWidget {
  final Function(String) _addItem;

  AddItemPage(this._addItem);

  final _itemNameController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item Page'),
      ),
      body: Center(
        child: Column(
          children: [
            TextFormField(
              controller: _itemNameController,
              decoration: InputDecoration(labelText: 'Item Name'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                _addItem(_itemNameController.text);
                _itemNameController.clear();
                Navigator.pop(context);
              },
              child: Text('Add'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

### Membuat form untuk memberi status jika barang dikeluarkan.

Menambah tombol minus pada setiap barang yang ditambah.

Perubahan

{% highlight dart %}
class _HomePageState extends State<HomePage> {
  List<String> _items = [];

  void _addItem(String item) {
    setState(() {
      _items.add(item);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          children: [
            IconButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => AddItemPage(_addItem)),
                );
              },
              icon: Icon(Icons.add),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: _items.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(_items[index]),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                    },
                  ),
                );
              },
            )
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

Kode Lengkap

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
  List<String> _items = [];

  void _addItem(String item) {
    setState(() {
      _items.add(item);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          children: [
            IconButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => AddItemPage(_addItem)),
                );
              },
              icon: Icon(Icons.add),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: _items.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(_items[index]),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                    },
                  ),
                );
              },
            )
          ],
        ),
      ),
    );
  }
}

class AddItemPage extends StatelessWidget {
  final Function(String) _addItem;

  AddItemPage(this._addItem);

  final _itemNameController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item Page'),
      ),
      body: Center(
        child: Column(
          children: [
            TextFormField(
              controller: _itemNameController,
              decoration: InputDecoration(labelText: 'Item Name'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                _addItem(_itemNameController.text);
                _itemNameController.clear();
                Navigator.pop(context);
              },
              child: Text('Add'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

Tombol minus tersebut dapat memberi keterangan pada barang bahwa barang telah terjual.

Perubahan

{% highlight dart %}
class _HomePageState extends State<HomePage> {
  List<String> _items = [];

  void _addItem(String item) {
    setState(() {
      _items.add(item);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          children: [
            IconButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => AddItemPage(_addItem)),
                );
              },
              icon: Icon(Icons.add),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: _items.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(_items[index]),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      setState(() {
                        _items[index] = '${_items[index]} - sold';
                      });
                    },
                  ),
                );
              },
            )
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

Kode Lengkap

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
  List<String> _items = [];

  void _addItem(String item) {
    setState(() {
      _items.add(item);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          children: [
            IconButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => AddItemPage(_addItem)),
                );
              },
              icon: Icon(Icons.add),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: _items.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(_items[index]),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      setState(() {
                        _items[index] = '${_items[index]} - sold';
                      });
                    },
                  ),
                );
              },
            )
          ],
        ),
      ),
    );
  }
}

class AddItemPage extends StatelessWidget {
  final Function(String) _addItem;

  AddItemPage(this._addItem);

  final _itemNameController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item Page'),
      ),
      body: Center(
        child: Column(
          children: [
            TextFormField(
              controller: _itemNameController,
              decoration: InputDecoration(labelText: 'Item Name'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                _addItem(_itemNameController.text);
                _itemNameController.clear();
                Navigator.pop(context);
              },
              child: Text('Add'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

## ⁠Setiap barang diberi kategori untuk filter by kategori

### Halaman form tambah barang dimodifikasi untuk ditambah input untuk memberi kategori pada barang serta deskripsi. 

Perubahan

{% highlight dart %}
class _HomePageState extends State<HomePage> {
  List<Map<String, dynamic>> _items = [];

  void _addItem(String item, String category, String description) {
    setState(() {
      _items.add({'name': item, 'category': category, 'description': description, 'sold': false});
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          children: [
            IconButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => AddItemPage(_addItem)),
                );
              },
              icon: Icon(Icons.add),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: _items.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(_items[index]['sold'] ? '${_items[index]['name']} - sold' : _items[index]['name']),
                  subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(_items[index]['category']),
                      Text(_items[index]['description']),
                    ],
                  ),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      setState(() {
                        _items[index]['sold'] = true;
                      });
                    },
                  ),
                );
              },
            )
          ],
        ),
      ),
    );
  }
}

class AddItemPage extends StatelessWidget {
  final Function(String, String, String) _addItem;

  AddItemPage(this._addItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item Page'),
      ),
      body: Center(
        child: Column(
          children: [
            TextFormField(
              controller: _itemNameController,
              decoration: InputDecoration(labelText: 'Item Name'),
            ),
            TextFormField(
              controller: _itemCategoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextFormField(
              controller: _itemDescriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                _addItem(_itemNameController.text, _itemCategoryController.text, _itemDescriptionController.text);
                _itemNameController.clear();
                _itemCategoryController.clear();
                _itemDescriptionController.clear();
                Navigator.pop(context);
              },
              child: Text('Add'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

Kode Lengkap

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
  List<Map<String, dynamic>> _items = [];

  void _addItem(String item, String category, String description) {
    setState(() {
      _items.add({'name': item, 'category': category, 'description': description, 'sold': false});
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          children: [
            IconButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => AddItemPage(_addItem)),
                );
              },
              icon: Icon(Icons.add),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: _items.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(_items[index]['sold'] ? '${_items[index]['name']} - sold' : _items[index]['name']),
                  subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(_items[index]['category']),
                      Text(_items[index]['description']),
                    ],
                  ),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      setState(() {
                        _items[index]['sold'] = true;
                      });
                    },
                  ),
                );
              },
            )
          ],
        ),
      ),
    );
  }
}

class AddItemPage extends StatelessWidget {
  final Function(String, String, String) _addItem;

  AddItemPage(this._addItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item Page'),
      ),
      body: Center(
        child: Column(
          children: [
            TextFormField(
              controller: _itemNameController,
              decoration: InputDecoration(labelText: 'Item Name'),
            ),
            TextFormField(
              controller: _itemCategoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextFormField(
              controller: _itemDescriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                _addItem(_itemNameController.text, _itemCategoryController.text, _itemDescriptionController.text);
                _itemNameController.clear();
                _itemCategoryController.clear();
                _itemDescriptionController.clear();
                Navigator.pop(context);
              },
              child: Text('Add'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

## ⁠keluar masuk barang diberi keterangan timestamp (baik barang masuk maupun barang keluar) untuk keperluan filter by date

### Halaman form tambah barang dimodifikasi untuk memberi timestamp pada barang.

Perubahan

{% highlight dart %}
class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Map<String, dynamic>> _items = [];

  void _addItem(String item, String category, String description) {
    final timestamp = DateTime.now().millisecondsSinceEpoch;
    setState(() {
      _items.add({
        'name': item,
        'category': category,
        'description': description,
        'sold': false,
        'timestamp': timestamp,
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          children: [
            IconButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => AddItemPage(_addItem)),
                );
              },
              icon: Icon(Icons.add),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: _items.length,
              itemBuilder: (context, index) {
                final timestamp = DateTime.fromMillisecondsSinceEpoch(_items[index]['timestamp']);
                return ListTile(
                  title: Text(_items[index]['sold'] ? '${_items[index]['name']} - sold' : _items[index]['name']),
                  subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(_items[index]['category']),
                      Text(_items[index]['description']),
                      Text('Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                    ],
                  ),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      setState(() {
                        _items[index]['sold'] = true;
                      });
                    },
                  ),
                );
              },
            )
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

Kode Lengkap

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
  List<Map<String, dynamic>> _items = [];

  void _addItem(String item, String category, String description) {
    final timestamp = DateTime.now().millisecondsSinceEpoch;
    setState(() {
      _items.add({
        'name': item,
        'category': category,
        'description': description,
        'sold': false,
        'timestamp': timestamp,
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          children: [
            IconButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => AddItemPage(_addItem)),
                );
              },
              icon: Icon(Icons.add),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: _items.length,
              itemBuilder: (context, index) {
                final timestamp = DateTime.fromMillisecondsSinceEpoch(_items[index]['timestamp']);
                return ListTile(
                  title: Text(_items[index]['sold'] ? '${_items[index]['name']} - sold' : _items[index]['name']),
                  subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(_items[index]['category']),
                      Text(_items[index]['description']),
                      Text('Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                    ],
                  ),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      setState(() {
                        _items[index]['sold'] = true;
                      });
                    },
                  ),
                );
              },
            )
          ],
        ),
      ),
    );
  }
}

class AddItemPage extends StatelessWidget {
  final Function(String, String, String) _addItem;

  AddItemPage(this._addItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item Page'),
      ),
      body: Center(
        child: Column(
          children: [
            TextFormField(
              controller: _itemNameController,
              decoration: InputDecoration(labelText: 'Item Name'),
            ),
            TextFormField(
              controller: _itemCategoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextFormField(
              controller: _itemDescriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                _addItem(_itemNameController.text, _itemCategoryController.text, _itemDescriptionController.text);
                _itemNameController.clear();
                _itemCategoryController.clear();
                _itemDescriptionController.clear();
                Navigator.pop(context);
              },
              child: Text('Add'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

### Halaman form keluar barang dimodifikasi untuk menambah timestamp untuk barang keluar. 

Perubahan

{% highlight dart %}
class _HomePageState extends State<HomePage> {
  List<Map<String, dynamic>> _items = [];

  void _addItem(String item, String category, String description) {
    final timestamp = DateTime.now().millisecondsSinceEpoch;
    setState(() {
      _items.add({
        'name': item,
        'category': category,
        'description': description,
        'sold': false,
        'timestamp': timestamp,
        'soldAt': null,
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          children: [
            IconButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => AddItemPage(_addItem)),
                );
              },
              icon: Icon(Icons.add),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: _items.length,
              itemBuilder: (context, index) {
                final timestamp = DateTime.fromMillisecondsSinceEpoch(_items[index]['timestamp']);
                final soldAt = _items[index]['soldAt'] != null
                    ? DateTime.fromMillisecondsSinceEpoch(_items[index]['soldAt'])
                    : null;
                return ListTile(
                  title: Text(_items[index]['sold'] ? '${_items[index]['name']} - sold' : _items[index]['name']),
                  subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(_items[index]['category']),
                      Text(_items[index]['description']),
                      Text('Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                      soldAt != null
                          ? Text('Sold at: ${soldAt.hour}:${soldAt.minute}:${soldAt.second}')
                          : Container(),
                    ],
                  ),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      setState(() {
                        _items[index]['sold'] = true;
                        _items[index]['soldAt'] = DateTime.now().millisecondsSinceEpoch;
                      });
                    },
                  ),
                );
              },
            )
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

Kode Lengkap

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
  List<Map<String, dynamic>> _items = [];

  void _addItem(String item, String category, String description) {
    final timestamp = DateTime.now().millisecondsSinceEpoch;
    setState(() {
      _items.add({
        'name': item,
        'category': category,
        'description': description,
        'sold': false,
        'timestamp': timestamp,
        'soldAt': null,
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          children: [
            IconButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => AddItemPage(_addItem)),
                );
              },
              icon: Icon(Icons.add),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: _items.length,
              itemBuilder: (context, index) {
                final timestamp = DateTime.fromMillisecondsSinceEpoch(_items[index]['timestamp']);
                final soldAt = _items[index]['soldAt'] != null
                    ? DateTime.fromMillisecondsSinceEpoch(_items[index]['soldAt'])
                    : null;
                return ListTile(
                  title: Text(_items[index]['sold'] ? '${_items[index]['name']} - sold' : _items[index]['name']),
                  subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(_items[index]['category']),
                      Text(_items[index]['description']),
                      Text('Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                      soldAt != null
                          ? Text('Sold at: ${soldAt.hour}:${soldAt.minute}:${soldAt.second}')
                          : Container(),
                    ],
                  ),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      setState(() {
                        _items[index]['sold'] = true;
                        _items[index]['soldAt'] = DateTime.now().millisecondsSinceEpoch;
                      });
                    },
                  ),
                );
              },
            )
          ],
        ),
      ),
    );
  }
}

class AddItemPage extends StatelessWidget {
  final Function(String, String, String) _addItem;

  AddItemPage(this._addItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item Page'),
      ),
      body: Center(
        child: Column(
          children: [
            TextFormField(
              controller: _itemNameController,
              decoration: InputDecoration(labelText: 'Item Name'),
            ),
            TextFormField(
              controller: _itemCategoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextFormField(
              controller: _itemDescriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                _addItem(_itemNameController.text, _itemCategoryController.text, _itemDescriptionController.text);
                _itemNameController.clear();
                _itemCategoryController.clear();
                _itemDescriptionController.clear();
                Navigator.pop(context);
              },
              child: Text('Add'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

## ⁠setiap barang mempunyai harga jual dan harga beli

### Form tambah ditambah input harga beli. 

Perubahan

{% highlight dart %}
class _HomePageState extends State<HomePage> {
  List<Map<String, dynamic>> _items = [];

  void _addItem(String item, String category, String description, String price) {
    final timestamp = DateTime.now().millisecondsSinceEpoch;
    setState(() {
      _items.add({
        'name': item,
        'category': category,
        'description': description,
        'price': price,
        'sold': false,
        'timestamp': timestamp,
        'soldAt': null,
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          children: [
            IconButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => AddItemPage(_addItem)),
                );
              },
              icon: Icon(Icons.add),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: _items.length,
              itemBuilder: (context, index) {
                final timestamp = DateTime.fromMillisecondsSinceEpoch(_items[index]['timestamp']);
                final soldAt = _items[index]['soldAt'] != null
                    ? DateTime.fromMillisecondsSinceEpoch(_items[index]['soldAt'])
                    : null;
                return ListTile(
                  title: Text(_items[index]['sold'] ? '${_items[index]['name']} - sold' : _items[index]['name']),
                  subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(_items[index]['category']),
                      Text(_items[index]['description']),
                      Text(_items[index]['price']),
                      Text('Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                      soldAt != null
                          ? Text('Sold at: ${soldAt.hour}:${soldAt.minute}:${soldAt.second}')
                          : Container(),
                    ],
                  ),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      setState(() {
                        _items[index]['sold'] = true;
                        _items[index]['soldAt'] = DateTime.now().millisecondsSinceEpoch;
                      });
                    },
                  ),
                );
              },
            )
          ],
        ),
      ),
    );
  }
}

class AddItemPage extends StatelessWidget {
  final Function(String, String, String, String) _addItem;

  AddItemPage(this._addItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();
  final _itemPriceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item Page'),
      ),
      body: Center(
        child: Column(
          children: [
            TextFormField(
              controller: _itemNameController,
              decoration: InputDecoration(labelText: 'Item Name'),
            ),
            TextFormField(
              controller: _itemCategoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextFormField(
              controller: _itemDescriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            TextFormField(
              controller: _itemPriceController,
              decoration: InputDecoration(labelText: 'Price'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                _addItem(_itemNameController.text, _itemCategoryController.text, _itemDescriptionController.text, _itemPriceController.text);
                _itemNameController.clear();
                _itemCategoryController.clear();
                _itemDescriptionController.clear();
                Navigator.pop(context);
              },
              child: Text('Add'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

Kode Lengkap

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
  List<Map<String, dynamic>> _items = [];

  void _addItem(String item, String category, String description, String price) {
    final timestamp = DateTime.now().millisecondsSinceEpoch;
    setState(() {
      _items.add({
        'name': item,
        'category': category,
        'description': description,
        'price': price,
        'sold': false,
        'timestamp': timestamp,
        'soldAt': null,
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          children: [
            IconButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => AddItemPage(_addItem)),
                );
              },
              icon: Icon(Icons.add),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: _items.length,
              itemBuilder: (context, index) {
                final timestamp = DateTime.fromMillisecondsSinceEpoch(_items[index]['timestamp']);
                final soldAt = _items[index]['soldAt'] != null
                    ? DateTime.fromMillisecondsSinceEpoch(_items[index]['soldAt'])
                    : null;
                return ListTile(
                  title: Text(_items[index]['sold'] ? '${_items[index]['name']} - sold' : _items[index]['name']),
                  subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(_items[index]['category']),
                      Text(_items[index]['description']),
                      Text(_items[index]['price']),
                      Text('Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                      soldAt != null
                          ? Text('Sold at: ${soldAt.hour}:${soldAt.minute}:${soldAt.second}')
                          : Container(),
                    ],
                  ),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      setState(() {
                        _items[index]['sold'] = true;
                        _items[index]['soldAt'] = DateTime.now().millisecondsSinceEpoch;
                      });
                    },
                  ),
                );
              },
            )
          ],
        ),
      ),
    );
  }
}

class AddItemPage extends StatelessWidget {
  final Function(String, String, String, String) _addItem;

  AddItemPage(this._addItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();
  final _itemPriceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item Page'),
      ),
      body: Center(
        child: Column(
          children: [
            TextFormField(
              controller: _itemNameController,
              decoration: InputDecoration(labelText: 'Item Name'),
            ),
            TextFormField(
              controller: _itemCategoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextFormField(
              controller: _itemDescriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            TextFormField(
              controller: _itemPriceController,
              decoration: InputDecoration(labelText: 'Price'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                _addItem(_itemNameController.text, _itemCategoryController.text, _itemDescriptionController.text, _itemPriceController.text);
                _itemNameController.clear();
                _itemCategoryController.clear();
                _itemDescriptionController.clear();
                Navigator.pop(context);
              },
              child: Text('Add'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

## ⁠untuk case mengurangi item diberikan pilihan (bukan inputan bebas) alasan barang keluar contoh: sold, expire, broken

### Status form keluar ditambah input keterangan.

Perubahan pada ListTile.

{% highlight dart %}
return ListTile(
                  title: Text(_items[index]['reason'] != null
                      ? '${_items[index]['name']} - ${_items[index]['reason']}'
                      : _items[index]['name']),
                  subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(_items[index]['category']),
                      Text(_items[index]['description']),
                      Text(_items[index]['price']),
                      Text(
                          'Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                      soldAt != null
                          ? Text(
                              'Sold at: ${soldAt.hour}:${soldAt.minute}:${soldAt.second}')
                          : Container(),
                    ],
                  ),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      final reasonController = TextEditingController();

                      showDialog(
                        context: context,
                        builder: (context) => AlertDialog(
                          title: Text('Reason'),
                          content: TextFormField(
                            controller: reasonController,
                            decoration:
                                InputDecoration(labelText: 'Enter reason'),
                          ),
                          actions: [
                            ElevatedButton(
                              child: Text('OK'),
                              onPressed: () {
                                setState(() {
                                  _items[index]['reason'] =
                                      reasonController.text;
                                });

                                Navigator.pop(context);
                              },
                            ),
                          ],
                        ),
                      );
                    },
                  ),
                );
{% endhighlight %}

Perubahan fungsi _addItem

{% highlight dart %}
void _addItem(
      String item, String category, String description, String price) {
    final timestamp = DateTime.now().millisecondsSinceEpoch;
    setState(() {
      _items.add({
        'name': item,
        'category': category,
        'description': description,
        'price': price,
        'reason': null,
        'timestamp': timestamp,
        'soldAt': null,
      });
    });
  }
{% endhighlight %}

Kode Lengkap

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
  List<Map<String, dynamic>> _items = [];

  void _addItem(
      String item, String category, String description, String price) {
    final timestamp = DateTime.now().millisecondsSinceEpoch;
    setState(() {
      _items.add({
        'name': item,
        'category': category,
        'description': description,
        'price': price,
        'reason': null,
        'timestamp': timestamp,
        'soldAt': null,
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          children: [
            IconButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => AddItemPage(_addItem)),
                );
              },
              icon: Icon(Icons.add),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: _items.length,
              itemBuilder: (context, index) {
                final timestamp = DateTime.fromMillisecondsSinceEpoch(
                    _items[index]['timestamp']);
                final soldAt = _items[index]['soldAt'] != null
                    ? DateTime.fromMillisecondsSinceEpoch(
                        _items[index]['soldAt'])
                    : null;
                return ListTile(
                  title: Text(_items[index]['reason'] != null
                      ? '${_items[index]['name']} - ${_items[index]['reason']}'
                      : _items[index]['name']),
                  subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(_items[index]['category']),
                      Text(_items[index]['description']),
                      Text(_items[index]['price']),
                      Text(
                          'Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                      soldAt != null
                          ? Text(
                              'Sold at: ${soldAt.hour}:${soldAt.minute}:${soldAt.second}')
                          : Container(),
                    ],
                  ),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      final reasonController = TextEditingController();

                      showDialog(
                        context: context,
                        builder: (context) => AlertDialog(
                          title: Text('Reason'),
                          content: TextFormField(
                            controller: reasonController,
                            decoration:
                                InputDecoration(labelText: 'Enter reason'),
                          ),
                          actions: [
                            ElevatedButton(
                              child: Text('OK'),
                              onPressed: () {
                                setState(() {
                                  _items[index]['reason'] =
                                      reasonController.text;
                                });

                                Navigator.pop(context);
                              },
                            ),
                          ],
                        ),
                      );
                    },
                  ),
                );
              },
            )
          ],
        ),
      ),
    );
  }
}

class AddItemPage extends StatelessWidget {
  final Function(String, String, String, String) _addItem;

  AddItemPage(this._addItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();
  final _itemPriceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item Page'),
      ),
      body: Center(
        child: Column(
          children: [
            TextFormField(
              controller: _itemNameController,
              decoration: InputDecoration(labelText: 'Item Name'),
            ),
            TextFormField(
              controller: _itemCategoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextFormField(
              controller: _itemDescriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            TextFormField(
              controller: _itemPriceController,
              decoration: InputDecoration(labelText: 'Price'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                _addItem(_itemNameController.text, _itemCategoryController.text,
                    _itemDescriptionController.text, _itemPriceController.text);
                _itemNameController.clear();
                _itemCategoryController.clear();
                _itemDescriptionController.clear();
                Navigator.pop(context);
              },
              child: Text('Add'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

### Form keluar ditambah input harga jual.

Perubahan

{% highlight dart %}
trailing: IconButton(
  icon: Icon(Icons.remove),
  onPressed: () {
    final reasonController = TextEditingController();
    final exitPriceController = TextEditingController();
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Reason and Exit Price'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextFormField(
              controller: reasonController,
              decoration: InputDecoration(labelText: 'Enter reason'),
            ),
            TextFormField(
              controller: exitPriceController,
              decoration: InputDecoration(labelText: 'Enter exit price'),
              keyboardType: TextInputType.number, // to allow only numbers
            ),
          ],
        ),
        actions: [
          ElevatedButton(
            child: Text('OK'),
            onPressed: () {
              setState(() {
                _items[index]['reason'] = reasonController.text;
                _items[index]['exitPrice'] = exitPriceController.text; // new field for exit price
              });
              Navigator.pop(context);
            },
          ),
        ],
      ),
    );
  },
),
{% endhighlight %}

Perubahan

{% highlight dart %}
return ListTile(

  title: Text(_items[index]['reason'] != null 

    ? '${_items[index]['name']} - ${_items[index]['reason']} (Exit Price: ${_items[index]['exitPrice']})' 

    : _items[index]['name']),
{% endhighlight %}

Kode Lengkap

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
  List<Map<String, dynamic>> _items = [];

  void _addItem(
      String item, String category, String description, String price) {
    final timestamp = DateTime.now().millisecondsSinceEpoch;
    setState(() {
      _items.add({
        'name': item,
        'category': category,
        'description': description,
        'price': price,
        'reason': null,
        'timestamp': timestamp,
        'soldAt': null,
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Column(
          children: [
            IconButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => AddItemPage(_addItem)),
                );
              },
              icon: Icon(Icons.add),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: _items.length,
              itemBuilder: (context, index) {
                final timestamp = DateTime.fromMillisecondsSinceEpoch(
                    _items[index]['timestamp']);
                final soldAt = _items[index]['soldAt'] != null
                    ? DateTime.fromMillisecondsSinceEpoch(
                        _items[index]['soldAt'])
                    : null;
                return ListTile(
                  title: Text(_items[index]['reason'] != null
                      ? '${_items[index]['name']} - ${_items[index]['reason']} (Exit Price: ${_items[index]['exitPrice']})'
                      : _items[index]['name']),
                  subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(_items[index]['category']),
                      Text(_items[index]['description']),
                      Text(_items[index]['price']),
                      Text(
                          'Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                      soldAt != null
                          ? Text(
                              'Sold at: ${soldAt.hour}:${soldAt.minute}:${soldAt.second}')
                          : Container(),
                    ],
                  ),
                  trailing: IconButton(
                    icon: Icon(Icons.remove),
                    onPressed: () {
                      final reasonController = TextEditingController();

                      final exitPriceController = TextEditingController();

                      showDialog(
                        context: context,
                        builder: (context) => AlertDialog(
                          title: Text('Reason and Exit Price'),
                          content: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              TextFormField(
                                controller: reasonController,
                                decoration:
                                    InputDecoration(labelText: 'Enter reason'),
                              ),
                              TextFormField(
                                controller: exitPriceController,

                                decoration: InputDecoration(
                                    labelText: 'Enter exit price'),

                                keyboardType: TextInputType
                                    .number, // to allow only numbers
                              ),
                            ],
                          ),
                          actions: [
                            ElevatedButton(
                              child: Text('OK'),
                              onPressed: () {
                                setState(() {
                                  _items[index]['reason'] =
                                      reasonController.text;

                                  _items[index]['exitPrice'] =
                                      exitPriceController
                                          .text; // new field for exit price
                                });

                                Navigator.pop(context);
                              },
                            ),
                          ],
                        ),
                      );
                    },
                  ),
                );
              },
            )
          ],
        ),
      ),
    );
  }
}

class AddItemPage extends StatelessWidget {
  final Function(String, String, String, String) _addItem;

  AddItemPage(this._addItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();
  final _itemPriceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item Page'),
      ),
      body: Center(
        child: Column(
          children: [
            TextFormField(
              controller: _itemNameController,
              decoration: InputDecoration(labelText: 'Item Name'),
            ),
            TextFormField(
              controller: _itemCategoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextFormField(
              controller: _itemDescriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            TextFormField(
              controller: _itemPriceController,
              decoration: InputDecoration(labelText: 'Price'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                _addItem(_itemNameController.text, _itemCategoryController.text,
                    _itemDescriptionController.text, _itemPriceController.text);
                _itemNameController.clear();
                _itemCategoryController.clear();
                _itemDescriptionController.clear();
                Navigator.pop(context);
              },
              child: Text('Add'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

Filter halaman ditambah fungsi dapat memfilter alasan barangan keluar.

## ⁠Buat edit dan hapus barang

### Menambah form edit barang. 

### Menambah form hapus barang.

## ⁠Buat hasil rekap laporan per minggu (format bebas)

### Hasil dapat export ke pdf, json, xml, dll.

## ⁠Tambahkan filter

## ⁠Case authentication :

### Membuat halaman login
- cashier hanya dapat mengurangi barang
- admin gudang hanya dapat menambahkan dan mengurangi barang
- super admin dapat semua akses

# Aplikasi Akhir

[Run on Dartpad](https://dartpad.dev/?id=52d995a5b5df90fb00d2137c0aac9fce)