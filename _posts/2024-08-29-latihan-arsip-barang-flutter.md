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
https://www.blackbox.ai/chhttps://www.blackbox.ai/chat/2MywfIAat/2MywfIA
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

Bantuan belajar dari Black Box AI: 

1. [https://www.blackbox.ai/chat/c5iRQCL](https://www.blackbox.ai/chat/2MywfIA)
2. [https://www.blackbox.ai/chat/c5iRQCL](https://www.blackbox.ai/chat/c5iRQCL)
3. [https://www.blackbox.ai/chat/bowHoqj](https://www.blackbox.ai/chat/bowHoqj)
4. [https://www.blackbox.ai/chat/qJf2U7B](https://www.blackbox.ai/chat/qJf2U7B)

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

  void _editItem(int index, String item, String category, String description,
      String price) {
    setState(() {
      _items[index]['name'] = item;
      _items[index]['category'] = category;
      _items[index]['description'] = description;
      _items[index]['price'] = price;
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
                  trailing: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      IconButton(
                        icon: Icon(Icons.edit),
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => EditItemPage(
                                index,
                                _items[index]['name'],
                                _items[index]['category'],
                                _items[index]['description'],
                                _items[index]['price'],
                                _editItem,
                              ),
                            ),
                          );
                        },
                      ),
                      IconButton(
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
                                    decoration: InputDecoration(
                                        labelText: 'Enter reason'),
                                  ),
                                  TextFormField(
                                    controller: exitPriceController,
                                    decoration: InputDecoration(
                                        labelText: 'Enter exit price'),
                                    keyboardType: TextInputType.number,
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
                                          exitPriceController.text;
                                    });

                                    Navigator.pop(context);
                                  },
                                ),
                              ],
                            ),
                          );
                        },
                      ),
                    ],
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

class EditItemPage extends StatelessWidget {
  final int index;
  final String initialName;
  final String initialCategory;
  final String initialDescription;
  final String initialPrice;
  final Function(int, String, String, String, String) _editItem;

  EditItemPage(this.index, this.initialName, this.initialCategory,
      this.initialDescription, this.initialPrice, this._editItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();
  final _itemPriceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    _itemNameController.text = initialName;
    _itemCategoryController.text = initialCategory;
    _itemDescriptionController.text = initialDescription;
    _itemPriceController.text = initialPrice;

    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Item Page'),
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
                _editItem(
                    index,
                    _itemNameController.text,
                    _itemCategoryController.text,
                    _itemDescriptionController.text,
                    _itemPriceController.text);
                Navigator.pop(context);
              },
              child: Text('Save'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

### Menambah form hapus barang.

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

  void _deleteItem(int index) {
    setState(() {
      _items.removeAt(index);
    });
  }

  void _editItem(int index, String item, String category, String description,
      String price) {
    setState(() {
      _items[index]['name'] = item;
      _items[index]['category'] = category;
      _items[index]['description'] = description;
      _items[index]['price'] = price;
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
                  trailing: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      IconButton(
                        icon: Icon(Icons.edit),
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => EditItemPage(
                                index,
                                _items[index]['name'],
                                _items[index]['category'],
                                _items[index]['description'],
                                _items[index]['price'],
                                _editItem,
                                _deleteItem,
                              ),
                            ),
                          );
                        },
                      ),
                      IconButton(
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
                                    decoration: InputDecoration(
                                        labelText: 'Enter reason'),
                                  ),
                                  TextFormField(
                                    controller: exitPriceController,
                                    decoration: InputDecoration(
                                        labelText: 'Enter exit price'),
                                    keyboardType: TextInputType.number,
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
                                          exitPriceController.text;
                                    });

                                    Navigator.pop(context);
                                  },
                                ),
                              ],
                            ),
                          );
                        },
                      ),
                    ],
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

class EditItemPage extends StatelessWidget {
  final int index;
  final String initialName;
  final String initialCategory;
  final String initialDescription;
  final String initialPrice;
  final Function(int, String, String, String, String) _editItem;
  final Function(int) _deleteItem;

  EditItemPage(
      this.index,
      this.initialName,
      this.initialCategory,
      this.initialDescription,
      this.initialPrice,
      this._editItem,
      this._deleteItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();
  final _itemPriceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    _itemNameController.text = initialName;
    _itemCategoryController.text = initialCategory;
    _itemDescriptionController.text = initialDescription;
    _itemPriceController.text = initialPrice;

    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Item Page'),
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
                _editItem(
                    index,
                    _itemNameController.text,
                    _itemCategoryController.text,
                    _itemDescriptionController.text,
                    _itemPriceController.text);
                Navigator.pop(context);
              },
              child: Text('Save'),
            ),
            ElevatedButton(
              onPressed: () {
                _deleteItem(index);
                Navigator.pop(context);
              },
              child: Text('Delete'),
              style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

## ⁠Buat hasil rekap laporan per minggu (format bebas)

### Hasil dapat export ke pdf, json, csv, xml, dll.

JSON

{% highlight dart %}
import 'dart:convert';

Future<void> _exportToJson() async {
  // Create a JSON-encodable map with the item data
  final jsonData = _items.map((item) => {
    'name': item['name'],
    'category': item['category'],
    'description': item['description'],
    'price': item['price'],
  }).toList();

  // Convert the map to a JSON string
  final jsonString = jsonEncode(jsonData);

  // Display the JSON string in a dialog or save it to a file
  // For this example, let's just print the JSON string to the console
  print(jsonString);
}

ElevatedButton(
  onPressed: _exportToJson,
  child: Text('Export to JSON'),
)
{% endhighlight %}

CSV

{% highlight dart %}
Future<void> _exportToCsv() async {
  // Create a CSV string with the item data
  final csvData = _items.map((item) => [
    item['name'],
    item['category'],
    item['description'],
    item['price'].toString(),
  ]).map((row) => row.join(',')).join('\n');

  // Display the CSV string in a dialog or print it to the console
  // For this example, let's just print the CSV string to the console
  print(csvData);
}

ElevatedButton(
  onPressed: _exportToCsv,
  child: Text('Export to CSV'),
)
{% endhighlight %}

XML

{% highlight dart %}
Future<void> _exportToXml() async {
  // Create an XML string with the item data
  final xmlData = '<items>';
  for (var item in _items) {
    xmlData += '<item>';
    xmlData += '<name>${item['name']}</name>';
    xmlData += '<category>${item['category']}</category>';
    xmlData += '<description>${item['description']}</description>';
    xmlData += '<price>${item['price']}</price>';
    xmlData += '</item>';
  }
  xmlData += '</items>';

  // Display the XML string in a dialog or print it to the console
  // For this example, let's just print the XML string to the console
  print(xmlData);
}

ElevatedButton(
  onPressed: _exportToXml,
  child: Text('Export to XML'),
)
{% endhighlight %}

Kode Lengkap

{% highlight dart %}
import 'package:flutter/material.dart';
import 'dart:convert';

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

  void _deleteItem(int index) {
    setState(() {
      _items.removeAt(index);
    });
  }

  void _editItem(int index, String item, String category, String description,
      String price) {
    setState(() {
      _items[index]['name'] = item;
      _items[index]['category'] = category;
      _items[index]['description'] = description;
      _items[index]['price'] = price;
    });
  }

  Future<void> _exportToJson() async {
    final jsonData = _items
        .map((item) => {
              'name': item['name'],
              'category': item['category'],
              'description': item['description'],
              'price': item['price'],
            })
        .toList();

    final jsonString = jsonEncode(jsonData);

    print(jsonString);
  }

  Future<void> _exportToCsv() async {
    final csvData = _items
        .map((item) => [
              item['name'],
              item['category'],
              item['description'],
              item['price'].toString(),
            ])
        .map((row) => row.join(','))
        .join('\n');
    print(csvData);
  }

  Future<void> _exportToXml() async {
    final StringBuffer xmlData = StringBuffer();

    xmlData.write('<items>');
    for (var item in _items) {
      xmlData.write('<item>');
      xmlData.write('<name>${item['name']}</name>');
      xmlData.write('<category>${item['category']}</category>');
      xmlData.write('<description>${item['description']}</description>');
      xmlData.write('<price>${item['price']}</price>');
      xmlData.write('</item>');
    }
    xmlData.write('</items>');
    print(xmlData.toString());
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
            ElevatedButton(
              onPressed: _exportToJson,
              child: Text('Export to JSON'),
            ),
            ElevatedButton(
              onPressed: _exportToCsv,
              child: Text('Export to CSV'),
            ),
            ElevatedButton(
              onPressed: _exportToXml,
              child: Text('Export to XML'),
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
                  trailing: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      IconButton(
                        icon: Icon(Icons.edit),
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => EditItemPage(
                                index,
                                _items[index]['name'],
                                _items[index]['category'],
                                _items[index]['description'],
                                _items[index]['price'],
                                _editItem,
                                _deleteItem,
                              ),
                            ),
                          );
                        },
                      ),
                      IconButton(
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
                                    decoration: InputDecoration(
                                        labelText: 'Enter reason'),
                                  ),
                                  TextFormField(
                                    controller: exitPriceController,
                                    decoration: InputDecoration(
                                        labelText: 'Enter exit price'),
                                    keyboardType: TextInputType.number,
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
                                          exitPriceController.text;
                                    });

                                    Navigator.pop(context);
                                  },
                                ),
                              ],
                            ),
                          );
                        },
                      ),
                    ],
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

class EditItemPage extends StatelessWidget {
  final int index;
  final String initialName;
  final String initialCategory;
  final String initialDescription;
  final String initialPrice;
  final Function(int, String, String, String, String) _editItem;
  final Function(int) _deleteItem;

  EditItemPage(
      this.index,
      this.initialName,
      this.initialCategory,
      this.initialDescription,
      this.initialPrice,
      this._editItem,
      this._deleteItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();
  final _itemPriceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    _itemNameController.text = initialName;
    _itemCategoryController.text = initialCategory;
    _itemDescriptionController.text = initialDescription;
    _itemPriceController.text = initialPrice;

    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Item Page'),
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
                _editItem(
                    index,
                    _itemNameController.text,
                    _itemCategoryController.text,
                    _itemDescriptionController.text,
                    _itemPriceController.text);
                Navigator.pop(context);
              },
              child: Text('Save'),
            ),
            ElevatedButton(
              onPressed: () {
                _deleteItem(index);
                Navigator.pop(context);
              },
              child: Text('Delete'),
              style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

## ⁠Tambahkan filter

### Kategori

{% highlight dart %}
import 'package:flutter/material.dart';
import 'dart:convert';

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
  String? _selectedCategory;
  List<String> _categories = [];

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
      if (!_categories.contains(category)) {
        _categories.add(category);
      }
    });
  }

  void _deleteItem(int index) {
    setState(() {
      _items.removeAt(index);
    });
  }

  void _editItem(int index, String item, String category, String description,
      String price) {
    setState(() {
      _items[index]['name'] = item;
      _items[index]['category'] = category;
      _items[index]['description'] = description;
      _items[index]['price'] = price;
    });
  }

  Future<void> _exportToJson() async {
    final jsonData = _items
        .map((item) => {
              'name': item['name'],
              'category': item['category'],
              'description': item['description'],
              'price': item['price'],
            })
        .toList();

    final jsonString = jsonEncode(jsonData);

    print(jsonString);
  }

  Future<void> _exportToCsv() async {
    final csvData = _items
        .map((item) => [
              item['name'],
              item['category'],
              item['description'],
              item['price'].toString(),
            ])
        .map((row) => row.join(','))
        .join('\n');
    print(csvData);
  }

  Future<void> _exportToXml() async {
    final StringBuffer xmlData = StringBuffer();

    xmlData.write('<items>');
    for (var item in _items) {
      xmlData.write('<item>');
      xmlData.write('<name>${item['name']}</name>');
      xmlData.write('<category>${item['category']}</category>');
      xmlData.write('<description>${item['description']}</description>');
      xmlData.write('<price>${item['price']}</price>');
      xmlData.write('</item>');
    }
    xmlData.write('</items>');
    print(xmlData.toString());
  }

  @override
  Widget build(BuildContext context) {
    final filteredItems = _selectedCategory == null
        ? _items
        : _items
            .where((item) => item['category'] == _selectedCategory)
            .toList();

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
            DropdownButton<String>(
              value: _selectedCategory,
              hint: Text('Filter by Category'),
              items: [
                DropdownMenuItem<String>(
                  value: null,
                  child: Text('Show all'),
                ),
                ..._categories.map((String category) {
                  return DropdownMenuItem<String>(
                    value: category,
                    child: Text(category),
                  );
                }),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedCategory = newValue;
                });
              },
            ),
            ElevatedButton(
              onPressed: _exportToJson,
              child: Text('Export to JSON'),
            ),
            ElevatedButton(
              onPressed: _exportToCsv,
              child: Text('Export to CSV'),
            ),
            ElevatedButton(
              onPressed: _exportToXml,
              child: Text('Export to XML'),
            ),
            SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: filteredItems.length,
                itemBuilder: (context, index) {
                  final timestamp = DateTime.fromMillisecondsSinceEpoch(
                      filteredItems[index]['timestamp']);
                  final soldAt = filteredItems[index]['soldAt'] != null
                      ? DateTime.fromMillisecondsSinceEpoch(
                          filteredItems[index]['soldAt'])
                      : null;
                  return ListTile(
                    title: Text(filteredItems[index]['reason'] != null
                        ? '${filteredItems[index]['name']} - ${filteredItems[index]['reason']} (Exit Price: ${filteredItems[index]['exitPrice']})'
                        : filteredItems[index]['name']),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(filteredItems[index]['category']),
                        Text(filteredItems[index]['description']),
                        Text(filteredItems[index]['price']),
                        Text(
                            'Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                        soldAt != null
                            ? Text(
                                'Sold at: ${soldAt.hour}:${soldAt.minute}:${soldAt.second}')
                            : Container(),
                      ],
                    ),
                    trailing: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        IconButton(
                          icon: Icon(Icons.edit),
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => EditItemPage(
                                  index,
                                  filteredItems[index]['name'],
                                  filteredItems[index]['category'],
                                  filteredItems[index]['description'],
                                  filteredItems[index]['price'],
                                  _editItem,
                                  _deleteItem,
                                ),
                              ),
                            );
                          },
                        ),
                        IconButton(
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
                                      decoration: InputDecoration(
                                          labelText: 'Enter reason'),
                                    ),
                                    TextFormField(
                                      controller: exitPriceController,
                                      decoration: InputDecoration(
                                          labelText: 'Enter exit price'),
                                      keyboardType: TextInputType.number,
                                    ),
                                  ],
                                ),
                                actions: [
                                  ElevatedButton(
                                    child: Text('OK'),
                                    onPressed: () {
                                      setState(() {
                                        filteredItems[index]['reason'] =
                                            reasonController.text;
                                        filteredItems[index]['exitPrice'] =
                                            exitPriceController.text;
                                      });

                                      Navigator.pop(context);
                                    },
                                  ),
                                ],
                              ),
                            );
                          },
                        ),
                      ],
                    ),
                  );
                },
              ),
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

class EditItemPage extends StatelessWidget {
  final int index;
  final String initialName;
  final String initialCategory;
  final String initialDescription;
  final String initialPrice;
  final Function(int, String, String, String, String) _editItem;
  final Function(int) _deleteItem;

  EditItemPage(
      this.index,
      this.initialName,
      this.initialCategory,
      this.initialDescription,
      this.initialPrice,
      this._editItem,
      this._deleteItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();
  final _itemPriceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    _itemNameController.text = initialName;
    _itemCategoryController.text = initialCategory;
    _itemDescriptionController.text = initialDescription;
    _itemPriceController.text = initialPrice;

    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Item Page'),
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
                _editItem(
                    index,
                    _itemNameController.text,
                    _itemCategoryController.text,
                    _itemDescriptionController.text,
                    _itemPriceController.text);
                Navigator.pop(context);
              },
              child: Text('Save'),
            ),
            ElevatedButton(
              onPressed: () {
                _deleteItem(index);
                Navigator.pop(context);
              },
              child: Text('Delete'),
              style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

### Harga Masuk

{% highlight dart %}
import 'package:flutter/material.dart';
import 'dart:convert';

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
  String? _selectedCategory;
  List<String> _categories = [];
  bool _sortAscending = true;

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
      if (!_categories.contains(category)) {
        _categories.add(category);
      }
    });
  }

  void _deleteItem(int index) {
    setState(() {
      _items.removeAt(index);
    });
  }

  void _editItem(int index, String item, String category, String description,
      String price) {
    setState(() {
      _items[index]['name'] = item;
      _items[index]['category'] = category;
      _items[index]['description'] = description;
      _items[index]['price'] = price;
    });
  }

  Future<void> _exportToJson() async {
    final jsonData = _items
        .map((item) => {
              'name': item['name'],
              'category': item['category'],
              'description': item['description'],
              'price': item['price'],
            })
        .toList();

    final jsonString = jsonEncode(jsonData);

    print(jsonString);
  }

  Future<void> _exportToCsv() async {
    final csvData = _items
        .map((item) => [
              item['name'],
              item['category'],
              item['description'],
              item['price'].toString(),
            ])
        .map((row) => row.join(','))
        .join('\n');
    print(csvData);
  }

  Future<void> _exportToXml() async {
    final StringBuffer xmlData = StringBuffer();

    xmlData.write('<items>');
    for (var item in _items) {
      xmlData.write('<item>');
      xmlData.write('<name>${item['name']}</name>');
      xmlData.write('<category>${item['category']}</category>');
      xmlData.write('<description>${item['description']}</description>');
      xmlData.write('<price>${item['price']}</price>');
      xmlData.write('</item>');
    }
    xmlData.write('</items>');
    print(xmlData.toString());
  }

  @override
  Widget build(BuildContext context) {
    final filteredItems = _selectedCategory == null
        ? _items
        : _items
            .where((item) => item['category'] == _selectedCategory)
            .toList();

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
            DropdownButton<String>(
              value: _selectedCategory,
              hint: Text('Filter by Category'),
              items: [
                DropdownMenuItem<String>(
                  value: null,
                  child: Text('Show all'),
                ),
                ..._categories.map((String category) {
                  return DropdownMenuItem<String>(
                    value: category,
                    child: Text(category),
                  );
                }),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedCategory = newValue;
                });
              },
            ),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  _sortAscending = !_sortAscending;

                  _items.sort((a, b) => _sortAscending
                      ? double.parse(a['price'])
                          .compareTo(double.parse(b['price']))
                      : double.parse(b['price'])
                          .compareTo(double.parse(a['price'])));
                });
              },
              child: Text('Sort by price'),
            ),
            ElevatedButton(
              onPressed: _exportToJson,
              child: Text('Export to JSON'),
            ),
            ElevatedButton(
              onPressed: _exportToCsv,
              child: Text('Export to CSV'),
            ),
            ElevatedButton(
              onPressed: _exportToXml,
              child: Text('Export to XML'),
            ),
            SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: filteredItems.length,
                itemBuilder: (context, index) {
                  final timestamp = DateTime.fromMillisecondsSinceEpoch(
                      filteredItems[index]['timestamp']);
                  final soldAt = filteredItems[index]['soldAt'] != null
                      ? DateTime.fromMillisecondsSinceEpoch(
                          filteredItems[index]['soldAt'])
                      : null;
                  return ListTile(
                    title: Text(filteredItems[index]['reason'] != null
                        ? '${filteredItems[index]['name']} - ${filteredItems[index]['reason']} (Exit Price: ${filteredItems[index]['exitPrice']})'
                        : filteredItems[index]['name']),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(filteredItems[index]['category']),
                        Text(filteredItems[index]['description']),
                        Text(filteredItems[index]['price']),
                        Text(
                            'Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                        soldAt != null
                            ? Text(
                                'Sold at: ${soldAt.hour}:${soldAt.minute}:${soldAt.second}')
                            : Container(),
                      ],
                    ),
                    trailing: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        IconButton(
                          icon: Icon(Icons.edit),
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => EditItemPage(
                                  index,
                                  filteredItems[index]['name'],
                                  filteredItems[index]['category'],
                                  filteredItems[index]['description'],
                                  filteredItems[index]['price'],
                                  _editItem,
                                  _deleteItem,
                                ),
                              ),
                            );
                          },
                        ),
                        IconButton(
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
                                      decoration: InputDecoration(
                                          labelText: 'Enter reason'),
                                    ),
                                    TextFormField(
                                      controller: exitPriceController,
                                      decoration: InputDecoration(
                                          labelText: 'Enter exit price'),
                                      keyboardType: TextInputType.number,
                                    ),
                                  ],
                                ),
                                actions: [
                                  ElevatedButton(
                                    child: Text('OK'),
                                    onPressed: () {
                                      setState(() {
                                        filteredItems[index]['reason'] =
                                            reasonController.text;
                                        filteredItems[index]['exitPrice'] =
                                            exitPriceController.text;
                                      });

                                      Navigator.pop(context);
                                    },
                                  ),
                                ],
                              ),
                            );
                          },
                        ),
                      ],
                    ),
                  );
                },
              ),
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

class EditItemPage extends StatelessWidget {
  final int index;
  final String initialName;
  final String initialCategory;
  final String initialDescription;
  final String initialPrice;
  final Function(int, String, String, String, String) _editItem;
  final Function(int) _deleteItem;

  EditItemPage(
      this.index,
      this.initialName,
      this.initialCategory,
      this.initialDescription,
      this.initialPrice,
      this._editItem,
      this._deleteItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();
  final _itemPriceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    _itemNameController.text = initialName;
    _itemCategoryController.text = initialCategory;
    _itemDescriptionController.text = initialDescription;
    _itemPriceController.text = initialPrice;

    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Item Page'),
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
                _editItem(
                    index,
                    _itemNameController.text,
                    _itemCategoryController.text,
                    _itemDescriptionController.text,
                    _itemPriceController.text);
                Navigator.pop(context);
              },
              child: Text('Save'),
            ),
            ElevatedButton(
              onPressed: () {
                _deleteItem(index);
                Navigator.pop(context);
              },
              child: Text('Delete'),
              style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

### Harga Keluar

{% highlight dart %}
import 'package:flutter/material.dart';
import 'dart:convert';

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
  String? _selectedCategory;
  List<String> _categories = [];
  bool _sortAscending = true;
  bool _sortExitPriceAscending = true;

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
      if (!_categories.contains(category)) {
        _categories.add(category);
      }
    });
  }

  void _deleteItem(int index) {
    setState(() {
      _items.removeAt(index);
    });
  }

  void _editItem(int index, String item, String category, String description,
      String price) {
    setState(() {
      _items[index]['name'] = item;
      _items[index]['category'] = category;
      _items[index]['description'] = description;
      _items[index]['price'] = price;
    });
  }

  Future<void> _exportToJson() async {
    final jsonData = _items
        .map((item) => {
              'name': item['name'],
              'category': item['category'],
              'description': item['description'],
              'price': item['price'],
            })
        .toList();

    final jsonString = jsonEncode(jsonData);

    print(jsonString);
  }

  Future<void> _exportToCsv() async {
    final csvData = _items
        .map((item) => [
              item['name'],
              item['category'],
              item['description'],
              item['price'].toString(),
            ])
        .map((row) => row.join(','))
        .join('\n');
    print(csvData);
  }

  Future<void> _exportToXml() async {
    final StringBuffer xmlData = StringBuffer();

    xmlData.write('<items>');
    for (var item in _items) {
      xmlData.write('<item>');
      xmlData.write('<name>${item['name']}</name>');
      xmlData.write('<category>${item['category']}</category>');
      xmlData.write('<description>${item['description']}</description>');
      xmlData.write('<price>${item['price']}</price>');
      xmlData.write('</item>');
    }
    xmlData.write('</items>');
    print(xmlData.toString());
  }

  void _sortItemsByPrice() {
    setState(() {
      _sortAscending = !_sortAscending;

      _items.sort((a, b) => _sortAscending
          ? double.parse(a['price']).compareTo(double.parse(b['price']))
          : double.parse(b['price']).compareTo(double.parse(a['price'])));
    });
  }

  void _sortItemsByExitPrice() {
    setState(() {
      _sortExitPriceAscending = !_sortExitPriceAscending;

      _items.sort((a, b) => a['exitPrice'] != null && b['exitPrice'] != null
          ? _sortExitPriceAscending
              ? double.parse(a['exitPrice'])
                  .compareTo(double.parse(b['exitPrice']))
              : double.parse(b['exitPrice'])
                  .compareTo(double.parse(a['exitPrice']))
          : 0);
    });
  }

  @override
  Widget build(BuildContext context) {
    final filteredItems = _selectedCategory == null
        ? _items
        : _items
            .where((item) => item['category'] == _selectedCategory)
            .toList();

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
            DropdownButton<String>(
              value: _selectedCategory,
              hint: Text('Filter by Category'),
              items: [
                DropdownMenuItem<String>(
                  value: null,
                  child: Text('Show all'),
                ),
                ..._categories.map((String category) {
                  return DropdownMenuItem<String>(
                    value: category,
                    child: Text(category),
                  );
                }),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedCategory = newValue;
                });
              },
            ),
            ElevatedButton(
              onPressed: _sortItemsByPrice,
              child: Text('Sort by price'),
            ),
            ElevatedButton(
              onPressed: _sortItemsByExitPrice,
              child: Text('Sort by exit price'),
            ),
            ElevatedButton(
              onPressed: _exportToJson,
              child: Text('Export to JSON'),
            ),
            ElevatedButton(
              onPressed: _exportToCsv,
              child: Text('Export to CSV'),
            ),
            ElevatedButton(
              onPressed: _exportToXml,
              child: Text('Export to XML'),
            ),
            SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: filteredItems.length,
                itemBuilder: (context, index) {
                  final timestamp = DateTime.fromMillisecondsSinceEpoch(
                      filteredItems[index]['timestamp']);
                  final soldAt = filteredItems[index]['soldAt'] != null
                      ? DateTime.fromMillisecondsSinceEpoch(
                          filteredItems[index]['soldAt'])
                      : null;
                  return ListTile(
                    title: Text(filteredItems[index]['reason'] != null
                        ? '${filteredItems[index]['name']} - ${filteredItems[index]['reason']} (Exit Price: ${filteredItems[index]['exitPrice']})'
                        : filteredItems[index]['name']),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(filteredItems[index]['category']),
                        Text(filteredItems[index]['description']),
                        Text(filteredItems[index]['price']),
                        Text(
                            'Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                        soldAt != null
                            ? Text(
                                'Sold at: ${soldAt.hour}:${soldAt.minute}:${soldAt.second}')
                            : Container(),
                      ],
                    ),
                    trailing: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        IconButton(
                          icon: Icon(Icons.edit),
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => EditItemPage(
                                  index,
                                  filteredItems[index]['name'],
                                  filteredItems[index]['category'],
                                  filteredItems[index]['description'],
                                  filteredItems[index]['price'],
                                  _editItem,
                                  _deleteItem,
                                ),
                              ),
                            );
                          },
                        ),
                        IconButton(
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
                                      decoration: InputDecoration(
                                          labelText: 'Enter reason'),
                                    ),
                                    TextFormField(
                                      controller: exitPriceController,
                                      decoration: InputDecoration(
                                          labelText: 'Enter exit price'),
                                      keyboardType: TextInputType.number,
                                    ),
                                  ],
                                ),
                                actions: [
                                  ElevatedButton(
                                    child: Text('OK'),
                                    onPressed: () {
                                      setState(() {
                                        filteredItems[index]['reason'] =
                                            reasonController.text;
                                        filteredItems[index]['exitPrice'] =
                                            exitPriceController.text;
                                      });

                                      Navigator.pop(context);
                                    },
                                  ),
                                ],
                              ),
                            );
                          },
                        ),
                      ],
                    ),
                  );
                },
              ),
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

class EditItemPage extends StatelessWidget {
  final int index;
  final String initialName;
  final String initialCategory;
  final String initialDescription;
  final String initialPrice;
  final Function(int, String, String, String, String) _editItem;
  final Function(int) _deleteItem;

  EditItemPage(
      this.index,
      this.initialName,
      this.initialCategory,
      this.initialDescription,
      this.initialPrice,
      this._editItem,
      this._deleteItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();
  final _itemPriceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    _itemNameController.text = initialName;
    _itemCategoryController.text = initialCategory;
    _itemDescriptionController.text = initialDescription;
    _itemPriceController.text = initialPrice;

    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Item Page'),
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
                _editItem(
                    index,
                    _itemNameController.text,
                    _itemCategoryController.text,
                    _itemDescriptionController.text,
                    _itemPriceController.text);
                Navigator.pop(context);
              },
              child: Text('Save'),
            ),
            ElevatedButton(
              onPressed: () {
                _deleteItem(index);
                Navigator.pop(context);
              },
              child: Text('Delete'),
              style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

### Tanggal Masuk

{% highlight dart %}
import 'package:flutter/material.dart';
import 'dart:convert';

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
  String? _selectedCategory;
  List<String> _categories = [];
  bool _sortAscending = true;
  bool _sortExitPriceAscending = true;
  bool _sortDateAscending = true;

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
      if (!_categories.contains(category)) {
        _categories.add(category);
      }
    });
  }

  void _deleteItem(int index) {
    setState(() {
      _items.removeAt(index);
    });
  }

  void _editItem(int index, String item, String category, String description,
      String price) {
    setState(() {
      _items[index]['name'] = item;
      _items[index]['category'] = category;
      _items[index]['description'] = description;
      _items[index]['price'] = price;
    });
  }

  Future<void> _exportToJson() async {
    final jsonData = _items
        .map((item) => {
              'name': item['name'],
              'category': item['category'],
              'description': item['description'],
              'price': item['price'],
            })
        .toList();

    final jsonString = jsonEncode(jsonData);

    print(jsonString);
  }

  Future<void> _exportToCsv() async {
    final csvData = _items
        .map((item) => [
              item['name'],
              item['category'],
              item['description'],
              item['price'].toString(),
            ])
        .map((row) => row.join(','))
        .join('\n');
    print(csvData);
  }

  Future<void> _exportToXml() async {
    final StringBuffer xmlData = StringBuffer();

    xmlData.write('<items>');
    for (var item in _items) {
      xmlData.write('<item>');
      xmlData.write('<name>${item['name']}</name>');
      xmlData.write('<category>${item['category']}</category>');
      xmlData.write('<description>${item['description']}</description>');
      xmlData.write('<price>${item['price']}</price>');
      xmlData.write('</item>');
    }
    xmlData.write('</items>');
    print(xmlData.toString());
  }

  void _sortItemsByPrice() {
    setState(() {
      _sortAscending = !_sortAscending;

      _items.sort((a, b) => _sortAscending
          ? double.parse(a['price']).compareTo(double.parse(b['price']))
          : double.parse(b['price']).compareTo(double.parse(a['price'])));
    });
  }

  void _sortItemsByExitPrice() {
    setState(() {
      _sortExitPriceAscending = !_sortExitPriceAscending;

      _items.sort((a, b) => a['exitPrice'] != null && b['exitPrice'] != null
          ? _sortExitPriceAscending
              ? double.parse(a['exitPrice'])
                  .compareTo(double.parse(b['exitPrice']))
              : double.parse(b['exitPrice'])
                  .compareTo(double.parse(a['exitPrice']))
          : 0);
    });
  }

  void _sortItemsByDate() {
    setState(() {
      _sortDateAscending = !_sortDateAscending;

      _items.sort((a, b) => _sortDateAscending
          ? a['timestamp'].compareTo(b['timestamp'])
          : b['timestamp'].compareTo(a['timestamp']));
    });
  }

  @override
  Widget build(BuildContext context) {
    final filteredItems = _selectedCategory == null
        ? _items
        : _items
            .where((item) => item['category'] == _selectedCategory)
            .toList();

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
            DropdownButton<String>(
              value: _selectedCategory,
              hint: Text('Filter by Category'),
              items: [
                DropdownMenuItem<String>(
                  value: null,
                  child: Text('Show all'),
                ),
                ..._categories.map((String category) {
                  return DropdownMenuItem<String>(
                    value: category,
                    child: Text(category),
                  );
                }),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedCategory = newValue;
                });
              },
            ),
            ElevatedButton(
              onPressed: _sortItemsByPrice,
              child: Text('Sort by price'),
            ),
            ElevatedButton(
              onPressed: _sortItemsByExitPrice,
              child: Text('Sort by exit price'),
            ),
            ElevatedButton(
              onPressed: _sortItemsByDate,
              child: Text('Sort by added date'),
            ),
            ElevatedButton(
              onPressed: _exportToJson,
              child: Text('Export to JSON'),
            ),
            ElevatedButton(
              onPressed: _exportToCsv,
              child: Text('Export to CSV'),
            ),
            ElevatedButton(
              onPressed: _exportToXml,
              child: Text('Export to XML'),
            ),
            SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: filteredItems.length,
                itemBuilder: (context, index) {
                  final timestamp = DateTime.fromMillisecondsSinceEpoch(
                      filteredItems[index]['timestamp']);
                  final soldAt = filteredItems[index]['soldAt'] != null
                      ? DateTime.fromMillisecondsSinceEpoch(
                          filteredItems[index]['soldAt'])
                      : null;
                  return ListTile(
                    title: Text(filteredItems[index]['reason'] != null
                        ? '${filteredItems[index]['name']} - ${filteredItems[index]['reason']} (Exit Price: ${filteredItems[index]['exitPrice']})'
                        : filteredItems[index]['name']),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(filteredItems[index]['category']),
                        Text(filteredItems[index]['description']),
                        Text(filteredItems[index]['price']),
                        Text(
                            'Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                        soldAt != null
                            ? Text(
                                'Sold at: ${soldAt.hour}:${soldAt.minute}:${soldAt.second}')
                            : Container(),
                      ],
                    ),
                    trailing: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        IconButton(
                          icon: Icon(Icons.edit),
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => EditItemPage(
                                  index,
                                  filteredItems[index]['name'],
                                  filteredItems[index]['category'],
                                  filteredItems[index]['description'],
                                  filteredItems[index]['price'],
                                  _editItem,
                                  _deleteItem,
                                ),
                              ),
                            );
                          },
                        ),
                        IconButton(
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
                                      decoration: InputDecoration(
                                          labelText: 'Enter reason'),
                                    ),
                                    TextFormField(
                                      controller: exitPriceController,
                                      decoration: InputDecoration(
                                          labelText: 'Enter exit price'),
                                      keyboardType: TextInputType.number,
                                    ),
                                  ],
                                ),
                                actions: [
                                  ElevatedButton(
                                    child: Text('OK'),
                                    onPressed: () {
                                      setState(() {
                                        filteredItems[index]['reason'] =
                                            reasonController.text;
                                        filteredItems[index]['exitPrice'] =
                                            exitPriceController.text;
                                      });

                                      Navigator.pop(context);
                                    },
                                  ),
                                ],
                              ),
                            );
                          },
                        ),
                      ],
                    ),
                  );
                },
              ),
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

class EditItemPage extends StatelessWidget {
  final int index;
  final String initialName;
  final String initialCategory;
  final String initialDescription;
  final String initialPrice;
  final Function(int, String, String, String, String) _editItem;
  final Function(int) _deleteItem;

  EditItemPage(
      this.index,
      this.initialName,
      this.initialCategory,
      this.initialDescription,
      this.initialPrice,
      this._editItem,
      this._deleteItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();
  final _itemPriceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    _itemNameController.text = initialName;
    _itemCategoryController.text = initialCategory;
    _itemDescriptionController.text = initialDescription;
    _itemPriceController.text = initialPrice;

    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Item Page'),
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
                _editItem(
                    index,
                    _itemNameController.text,
                    _itemCategoryController.text,
                    _itemDescriptionController.text,
                    _itemPriceController.text);
                Navigator.pop(context);
              },
              child: Text('Save'),
            ),
            ElevatedButton(
              onPressed: () {
                _deleteItem(index);
                Navigator.pop(context);
              },
              child: Text('Delete'),
              style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

### Tanggal Keluar

{% highlight dart %}
import 'package:flutter/material.dart';
import 'dart:convert';

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
  String? _selectedCategory;
  List<String> _categories = [];
  bool _sortAscending = true;
  bool _sortExitPriceAscending = true;
  bool _sortDateAscending = true;
  bool _sortExitDateAscending = true;

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
        'exitAt': null,
      });
      if (!_categories.contains(category)) {
        _categories.add(category);
      }
    });
  }

  void _deleteItem(int index) {
    setState(() {
      _items.removeAt(index);
    });
  }

  void _editItem(int index, String item, String category, String description,
      String price) {
    setState(() {
      _items[index]['name'] = item;
      _items[index]['category'] = category;
      _items[index]['description'] = description;
      _items[index]['price'] = price;
    });
  }

  Future<void> _exportToJson() async {
    final jsonData = _items
        .map((item) => {
              'name': item['name'],
              'category': item['category'],
              'description': item['description'],
              'price': item['price'],
            })
        .toList();

    final jsonString = jsonEncode(jsonData);

    print(jsonString);
  }

  Future<void> _exportToCsv() async {
    final csvData = _items
        .map((item) => [
              item['name'],
              item['category'],
              item['description'],
              item['price'].toString(),
            ])
        .map((row) => row.join(','))
        .join('\n');
    print(csvData);
  }

  Future<void> _exportToXml() async {
    final StringBuffer xmlData = StringBuffer();

    xmlData.write('<items>');
    for (var item in _items) {
      xmlData.write('<item>');
      xmlData.write('<name>${item['name']}</name>');
      xmlData.write('<category>${item['category']}</category>');
      xmlData.write('<description>${item['description']}</description>');
      xmlData.write('<price>${item['price']}</price>');
      xmlData.write('</item>');
    }
    xmlData.write('</items>');
    print(xmlData.toString());
  }

  void _sortItemsByPrice() {
    setState(() {
      _sortAscending = !_sortAscending;

      _items.sort((a, b) => _sortAscending
          ? double.parse(a['price']).compareTo(double.parse(b['price']))
          : double.parse(b['price']).compareTo(double.parse(a['price'])));
    });
  }

  void _sortItemsByExitPrice() {
    setState(() {
      _sortExitPriceAscending = !_sortExitPriceAscending;

      _items.sort((a, b) => a['exitPrice'] != null && b['exitPrice'] != null
          ? _sortExitPriceAscending
              ? double.parse(a['exitPrice'])
                  .compareTo(double.parse(b['exitPrice']))
              : double.parse(b['exitPrice'])
                  .compareTo(double.parse(a['exitPrice']))
          : 0);
    });
  }

  void _sortItemsByDate() {
    setState(() {
      _sortDateAscending = !_sortDateAscending;

      _items.sort((a, b) => _sortDateAscending
          ? a['timestamp'].compareTo(b['timestamp'])
          : b['timestamp'].compareTo(a['timestamp']));
    });
  }

  void _sortItemsByExitDate() {
    setState(() {
      _sortExitDateAscending = !_sortExitDateAscending;

      _items.sort((a, b) {
        if (a['exitAt'] == null && b['exitAt'] == null) {
          return 0; // both are null, so they are equal
        } else if (a['exitAt'] == null) {
          return _sortExitDateAscending
              ? 1
              : -1; // a is null, so it comes after/before b
        } else if (b['exitAt'] == null) {
          return _sortExitDateAscending
              ? -1
              : 1; // b is null, so it comes after/before a
        } else {
          return _sortExitDateAscending
              ? a['exitAt'].compareTo(b['exitAt'])
              : b['exitAt'].compareTo(a['exitAt']);
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final filteredItems = _selectedCategory == null
        ? _items
        : _items
            .where((item) => item['category'] == _selectedCategory)
            .toList();

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
            DropdownButton<String>(
              value: _selectedCategory,
              hint: Text('Filter by Category'),
              items: [
                DropdownMenuItem<String>(
                  value: null,
                  child: Text('Show all'),
                ),
                ..._categories.map((String category) {
                  return DropdownMenuItem<String>(
                    value: category,
                    child: Text(category),
                  );
                }),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedCategory = newValue;
                });
              },
            ),
            ElevatedButton(
              onPressed: _sortItemsByPrice,
              child: Text('Sort by price'),
            ),
            ElevatedButton(
              onPressed: _sortItemsByExitPrice,
              child: Text('Sort by exit price'),
            ),
            ElevatedButton(
              onPressed: _sortItemsByDate,
              child: Text('Sort by added date'),
            ),
            ElevatedButton(
              onPressed: _sortItemsByExitDate,
              child: Text('Sort by exit date'),
            ),
            ElevatedButton(
              onPressed: _exportToJson,
              child: Text('Export to JSON'),
            ),
            ElevatedButton(
              onPressed: _exportToCsv,
              child: Text('Export to CSV'),
            ),
            ElevatedButton(
              onPressed: _exportToXml,
              child: Text('Export to XML'),
            ),
            SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: filteredItems.length,
                itemBuilder: (context, index) {
                  final timestamp = DateTime.fromMillisecondsSinceEpoch(
                      filteredItems[index]['timestamp']);
                  final exitAt = filteredItems[index]['exitAt'] != null
                      ? DateTime.fromMillisecondsSinceEpoch(
                          filteredItems[index]['exitAt'])
                      : null;
                  return ListTile(
                    title: Text(filteredItems[index]['reason'] != null
                        ? '${filteredItems[index]['name']} - ${filteredItems[index]['reason']} (Exit Price: ${filteredItems[index]['exitPrice']})'
                        : filteredItems[index]['name']),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(filteredItems[index]['category']),
                        Text(filteredItems[index]['description']),
                        Text(filteredItems[index]['price']),
                        Text(
                            'Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                        exitAt != null
                            ? Text(
                                'Exit at: ${exitAt.hour}:${exitAt.minute}:${exitAt.second}')
                            : Container(),
                      ],
                    ),
                    trailing: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        IconButton(
                          icon: Icon(Icons.edit),
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => EditItemPage(
                                  index,
                                  filteredItems[index]['name'],
                                  filteredItems[index]['category'],
                                  filteredItems[index]['description'],
                                  filteredItems[index]['price'],
                                  _editItem,
                                  _deleteItem,
                                ),
                              ),
                            );
                          },
                        ),
                        IconButton(
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
                                      decoration: InputDecoration(
                                          labelText: 'Enter reason'),
                                    ),
                                    TextFormField(
                                      controller: exitPriceController,
                                      decoration: InputDecoration(
                                          labelText: 'Enter exit price'),
                                      keyboardType: TextInputType.number,
                                    ),
                                  ],
                                ),
                                actions: [
                                  ElevatedButton(
                                    child: Text('OK'),
                                    onPressed: () {
                                      setState(() {
                                        filteredItems[index]['reason'] =
                                            reasonController.text;
                                        filteredItems[index]['exitPrice'] =
                                            exitPriceController.text;
                                        filteredItems[index]
                                            ['exitAt'] = DateTime
                                                .now()
                                            .millisecondsSinceEpoch; // Update exitAt field
                                      });

                                      Navigator.pop(context);
                                    },
                                  ),
                                ],
                              ),
                            );
                          },
                        ),
                      ],
                    ),
                  );
                },
              ),
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

class EditItemPage extends StatelessWidget {
  final int index;
  final String initialName;
  final String initialCategory;
  final String initialDescription;
  final String initialPrice;
  final Function(int, String, String, String, String) _editItem;
  final Function(int) _deleteItem;

  EditItemPage(
      this.index,
      this.initialName,
      this.initialCategory,
      this.initialDescription,
      this.initialPrice,
      this._editItem,
      this._deleteItem);

  final _itemNameController = TextEditingController();
  final _itemCategoryController = TextEditingController();
  final _itemDescriptionController = TextEditingController();
  final _itemPriceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    _itemNameController.text = initialName;
    _itemCategoryController.text = initialCategory;
    _itemDescriptionController.text = initialDescription;
    _itemPriceController.text = initialPrice;

    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Item Page'),
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
                _editItem(
                    index,
                    _itemNameController.text,
                    _itemCategoryController.text,
                    _itemDescriptionController.text,
                    _itemPriceController.text);
                Navigator.pop(context);
              },
              child: Text('Save'),
            ),
            ElevatedButton(
              onPressed: () {
                _deleteItem(index);
                Navigator.pop(context);
              },
              child: Text('Delete'),
              style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

### Keterangan Keluar

{% highlight dart %}
import 'package:flutter/material.dart';
import 'dart:convert';

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
  String? _selectedCategory;
  String? _selectedExitReason;
  List<String> _categories = [];
  List<String> _exitReasons = [];
  bool _sortAscending = true;
  bool _sortExitPriceAscending = true;
  bool _sortDateAscending = true;
  bool _sortExitDateAscending = true;
  String? _selectedSortOption;
  String? _selectedExportOption;

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
        'exitAt': null,
      });
      if (!_categories.contains(category)) {
        _categories.add(category);
      }
    });
  }

  void _deleteItem(int index) {
    setState(() {
      _items.removeAt(index);
    });
  }

  void _deleteItemFromList(int index) {
    _deleteItem(index); // Existing method for deleting item
  }

  void _editItem(int index, String item, String category, String description,
      String price) {
    setState(() {
      _items[index]['name'] = item;
      _items[index]['category'] = category;
      _items[index]['description'] = description;
      _items[index]['price'] = price;
    });
  }

  Future<void> _exportToJson() async {
    final jsonData = _items
        .map((item) => {
              'name': item['name'],
              'category': item['category'],
              'description': item['description'],
              'price': item['price'],
            })
        .toList();

    final jsonString = jsonEncode(jsonData);

    print(jsonString);
  }

  Future<void> _exportToCsv() async {
    final csvData = _items
        .map((item) => [
              item['name'],
              item['category'],
              item['description'],
              item['price'].toString(),
            ])
        .map((row) => row.join(','))
        .join('\n');
    print(csvData);
  }

  Future<void> _exportToXml() async {
    final StringBuffer xmlData = StringBuffer();

    xmlData.write('<items>');
    for (var item in _items) {
      xmlData.write('<item>');
      xmlData.write('<name>${item['name']}</name>');
      xmlData.write('<category>${item['category']}</category>');
      xmlData.write('<description>${item['description']}</description>');
      xmlData.write('<price>${item['price']}</price>');
      xmlData.write('</item>');
    }
    xmlData.write('</items>');
    print(xmlData.toString());
  }

  void _sortItemsByPrice() {
    setState(() {
      _sortAscending = !_sortAscending;

      _items.sort((a, b) => _sortAscending
          ? double.parse(a['price']).compareTo(double.parse(b['price']))
          : double.parse(b['price']).compareTo(double.parse(a['price'])));
    });
  }

  void _sortItemsByExitPrice() {
    setState(() {
      _sortExitPriceAscending = !_sortExitPriceAscending;

      _items.sort((a, b) => a['exitPrice'] != null && b['exitPrice'] != null
          ? _sortExitPriceAscending
              ? double.parse(a['exitPrice'])
                  .compareTo(double.parse(b['exitPrice']))
              : double.parse(b['exitPrice'])
                  .compareTo(double.parse(a['exitPrice']))
          : 0);
    });
  }

  void _sortItemsByDate() {
    setState(() {
      _sortDateAscending = !_sortDateAscending;

      _items.sort((a, b) => _sortDateAscending
          ? a['timestamp'].compareTo(b['timestamp'])
          : b['timestamp'].compareTo(a['timestamp']));
    });
  }

  void _sortItemsByExitDate() {
    setState(() {
      _sortExitDateAscending = !_sortExitDateAscending;

      _items.sort((a, b) {
        if (a['exitAt'] == null && b['exitAt'] == null) {
          return 0; // both are null, so they are equal
        } else if (a['exitAt'] == null) {
          return _sortExitDateAscending
              ? 1
              : -1; // a is null, so it comes after/before b
        } else if (b['exitAt'] == null) {
          return _sortExitDateAscending
              ? -1
              : 1; // b is null, so it comes after/before a
        } else {
          return _sortExitDateAscending
              ? a['exitAt'].compareTo(b['exitAt'])
              : b['exitAt'].compareTo(a['exitAt']);
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final filteredItems = _selectedCategory == null
        ? _selectedExitReason == null
            ? _items
            : _items
                .where((item) => item['reason'] == _selectedExitReason)
                .toList()
        : _items
            .where((item) =>
                item['category'] == _selectedCategory &&
                (_selectedExitReason == null ||
                    item['reason'] == _selectedExitReason))
            .toList();

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
            DropdownButton<String>(
              value: _selectedCategory,
              hint: Text('Filter by Category'),
              items: [
                DropdownMenuItem<String>(
                  value: null,
                  child: Text('Show all'),
                ),
                ..._categories.map((String category) {
                  return DropdownMenuItem<String>(
                    value: category,
                    child: Text(category),
                  );
                }),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedCategory = newValue;
                });
              },
            ),
            DropdownButton<String>(
              value: _selectedExitReason,
              hint: Text('Filter by Exit Reason'),
              items: [
                DropdownMenuItem<String>(
                  value: null,
                  child: Text('Show all'),
                ),
                ..._exitReasons.map((String reason) {
                  return DropdownMenuItem<String>(
                    value: reason,
                    child: Text(reason),
                  );
                }),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedExitReason = newValue;
                });
              },
            ),
            DropdownButton<String>(
              value: _selectedSortOption,
              hint: Text('Sort by'),
              items: [
                DropdownMenuItem<String>(
                  value: 'price',
                  child: Text('Price'),
                ),
                DropdownMenuItem<String>(
                  value: 'exitPrice',
                  child: Text('Exit Price'),
                ),
                DropdownMenuItem<String>(
                  value: 'date',
                  child: Text('Added Date'),
                ),
                DropdownMenuItem<String>(
                  value: 'exitDate',
                  child: Text('Exit Date'),
                ),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedSortOption = newValue;

                  if (newValue == 'price') {
                    _sortItemsByPrice();
                  } else if (newValue == 'exitPrice') {
                    _sortItemsByExitPrice();
                  } else if (newValue == 'date') {
                    _sortItemsByDate();
                  } else if (newValue == 'exitDate') {
                    _sortItemsByExitDate();
                  }
                });
              },
            ),
            DropdownButton<String>(
              value: _selectedExportOption,
              hint: Text('Export to'),
              items: [
                DropdownMenuItem<String>(
                  value: 'json',
                  child: Text('JSON'),
                ),
                DropdownMenuItem<String>(
                  value: 'csv',
                  child: Text('CSV'),
                ),
                DropdownMenuItem<String>(
                  value: 'xml',
                  child: Text('XML'),
                ),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedExportOption = newValue;

                  if (newValue == 'json') {
                    _exportToJson();
                  } else if (newValue == 'csv') {
                    _exportToCsv();
                  } else if (newValue == 'xml') {
                    _exportToXml();
                  }
                });
              },
            ),
            SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: filteredItems.length,
                itemBuilder: (context, index) {
                  final timestamp = DateTime.fromMillisecondsSinceEpoch(
                      filteredItems[index]['timestamp']);
                  final exitAt = filteredItems[index]['exitAt'] != null
                      ? DateTime.fromMillisecondsSinceEpoch(
                          filteredItems[index]['exitAt'])
                      : null;
                  return ListTile(
                    title: Text(filteredItems[index]['reason'] != null
                        ? '${filteredItems[index]['name']} - ${filteredItems[index]['reason']} (Exit Price: ${filteredItems[index]['exitPrice']})'
                        : filteredItems[index]['name']),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(filteredItems[index]['category']),
                        Text(filteredItems[index]['description']),
                        Text(filteredItems[index]['price']),
                        Text(
                            'Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                        exitAt != null
                            ? Text(
                                'Exit at: ${exitAt.hour}:${exitAt.minute}:${exitAt.second}')
                            : Container(),
                      ],
                    ),
                    trailing: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        IconButton(
                          icon: Icon(Icons.edit),
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => EditItemPage(
                                  filteredItems[index],
                                  (String name, String category,
                                          String description, String price) =>
                                      _editItem(index, name, category,
                                          description, price),
                                  () => _deleteItemFromList(
                                      index), // Pass delete method
                                ),
                              ),
                            );
                          },
                        ),
                        IconButton(
                          icon: Icon(Icons.remove),
                          onPressed: () async {
                            final result = await Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => ExitFormPage(),
                              ),
                            );
                            if (result != null) {
                              setState(() {
                                final exitAt =
                                    DateTime.now().millisecondsSinceEpoch;
                                _items[index]['exitAt'] = exitAt;
                                _items[index]['reason'] = result['reason'];
                                _items[index]['exitPrice'] = result['price'];
                                if (!_exitReasons.contains(result['reason'])) {
                                  _exitReasons.add(result['reason']);
                                }
                              });
                            }
                          },
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

class AddItemPage extends StatelessWidget {
  final Function(String, String, String, String) addItem;

  AddItemPage(this.addItem);

  final TextEditingController _itemController = TextEditingController();
  final TextEditingController _categoryController = TextEditingController();
  final TextEditingController _descriptionController = TextEditingController();
  final TextEditingController _priceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _itemController,
              decoration: InputDecoration(labelText: 'Item'),
            ),
            TextField(
              controller: _categoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextField(
              controller: _descriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            TextField(
              controller: _priceController,
              decoration: InputDecoration(labelText: 'Price'),
            ),
            ElevatedButton(
              onPressed: () {
                addItem(
                  _itemController.text,
                  _categoryController.text,
                  _descriptionController.text,
                  _priceController.text,
                );
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

class EditItemPage extends StatelessWidget {
  final Map<String, dynamic> item;
  final Function(String, String, String, String) editItem;
  final VoidCallback deleteItem;

  EditItemPage(this.item, this.editItem, this.deleteItem);

  final TextEditingController _itemController = TextEditingController();
  final TextEditingController _categoryController = TextEditingController();
  final TextEditingController _descriptionController = TextEditingController();
  final TextEditingController _priceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    _itemController.text = item['name'];
    _categoryController.text = item['category'];
    _descriptionController.text = item['description'];
    _priceController.text = item['price'];

    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Item'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _itemController,
              decoration: InputDecoration(labelText: 'Item'),
            ),
            TextField(
              controller: _categoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextField(
              controller: _descriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            TextField(
              controller: _priceController,
              decoration: InputDecoration(labelText: 'Price'),
            ),
            ElevatedButton(
              onPressed: () {
                deleteItem(); // Call delete method when button is pressed
                Navigator.pop(
                    context); // Optionally pop the page after deletion
              },
              child: Text('Delete'), // Delete button
            ),
            ElevatedButton(
              onPressed: () {
                editItem(
                  _itemController.text,
                  _categoryController.text,
                  _descriptionController.text,
                  _priceController.text,
                );
                Navigator.pop(context);
              },
              child: Text('Save Changes'),
            ),
          ],
        ),
      ),
    );
  }
}

class ExitFormPage extends StatelessWidget {
  final TextEditingController _reasonController = TextEditingController();
  final TextEditingController _priceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Exit Form'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _reasonController,
              decoration: InputDecoration(labelText: 'Reason'),
            ),
            TextField(
              controller: _priceController,
              decoration: InputDecoration(labelText: 'Exit Price'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.pop(context, {
                  'reason': _reasonController.text,
                  'price': _priceController.text,
                });
              },
              child: Text('Submit'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

## ⁠Case authentication :

### Membuat halaman login

- super admin dapat semua akses

{% highlight dart %}
import 'package:flutter/material.dart';
import 'dart:convert';

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
      home: LoginPage(),
    );
  }
}

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _formKey = GlobalKey<FormState>();
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                controller: _usernameController,
                decoration: InputDecoration(labelText: 'Username'),
                validator: (value) {
                  if (value!.isEmpty) {
                    return 'Please enter a username';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _passwordController,
                decoration: InputDecoration(labelText: 'Password'),
                obscureText: true,
                validator: (value) {
                  if (value!.isEmpty) {
                    return 'Please enter a password';
                  }
                  return null;
                },
              ),
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    if (_usernameController.text == 'admin' &&
                        _passwordController.text == 'admin') {
                      Navigator.pushReplacement(
                        context,
                        MaterialPageRoute(builder: (context) => HomePage()),
                      );
                    } else {
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(
                          content: Text('Invalid username or password'),
                        ),
                      );
                    }
                  }
                },
                child: Text('Login'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Map<String, dynamic>> _items = [];
  String? _selectedCategory;
  String? _selectedExitReason;
  List<String> _categories = [];
  List<String> _exitReasons = [];
  bool _sortAscending = true;
  bool _sortExitPriceAscending = true;
  bool _sortDateAscending = true;
  bool _sortExitDateAscending = true;
  String? _selectedSortOption;
  String? _selectedExportOption;

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
        'exitAt': null,
      });
      if (!_categories.contains(category)) {
        _categories.add(category);
      }
    });
  }

  void _deleteItem(int index) {
    setState(() {
      _items.removeAt(index);
    });
  }

  void _deleteItemFromList(int index) {
    _deleteItem(index); // Existing method for deleting item
  }

  void _editItem(int index, String item, String category, String description,
      String price) {
    setState(() {
      _items[index]['name'] = item;
      _items[index]['category'] = category;
      _items[index]['description'] = description;
      _items[index]['price'] = price;
    });
  }

  Future<void> _exportToJson() async {
    final jsonData = _items
        .map((item) => {
              'name': item['name'],
              'category': item['category'],
              'description': item['description'],
              'price': item['price'],
            })
        .toList();

    final jsonString = jsonEncode(jsonData);

    print(jsonString);
  }

  Future<void> _exportToCsv() async {
    final csvData = _items
        .map((item) => [
              item['name'],
              item['category'],
              item['description'],
              item['price'].toString(),
            ])
        .map((row) => row.join(','))
        .join('\n');
    print(csvData);
  }

  Future<void> _exportToXml() async {
    final StringBuffer xmlData = StringBuffer();

    xmlData.write('<items>');
    for (var item in _items) {
      xmlData.write('<item>');
      xmlData.write('<name>${item['name']}</name>');
      xmlData.write('<category>${item['category']}</category>');
      xmlData.write('<description>${item['description']}</description>');
      xmlData.write('<price>${item['price']}</price>');
      xmlData.write('</item>');
    }
    xmlData.write('</items>');
    print(xmlData.toString());
  }

  void _sortItemsByPrice() {
    setState(() {
      _sortAscending = !_sortAscending;

      _items.sort((a, b) => _sortAscending
          ? double.parse(a['price']).compareTo(double.parse(b['price']))
          : double.parse(b['price']).compareTo(double.parse(a['price'])));
    });
  }

  void _sortItemsByExitPrice() {
    setState(() {
      _sortExitPriceAscending = !_sortExitPriceAscending;

      _items.sort((a, b) => a['exitPrice'] != null && b['exitPrice'] != null
          ? _sortExitPriceAscending
              ? double.parse(a['exitPrice'])
                  .compareTo(double.parse(b['exitPrice']))
              : double.parse(b['exitPrice'])
                  .compareTo(double.parse(a['exitPrice']))
          : 0);
    });
  }

  void _sortItemsByDate() {
    setState(() {
      _sortDateAscending = !_sortDateAscending;

      _items.sort((a, b) => _sortDateAscending
          ? a['timestamp'].compareTo(b['timestamp'])
          : b['timestamp'].compareTo(a['timestamp']));
    });
  }

  void _sortItemsByExitDate() {
    setState(() {
      _sortExitDateAscending = !_sortExitDateAscending;

      _items.sort((a, b) {
        if (a['exitAt'] == null && b['exitAt'] == null) {
          return 0; // both are null, so they are equal
        } else if (a['exitAt'] == null) {
          return _sortExitDateAscending
              ? 1
              : -1; // a is null, so it comes after/before b
        } else if (b['exitAt'] == null) {
          return _sortExitDateAscending
              ? -1
              : 1; // b is null, so it comes after/before a
        } else {
          return _sortExitDateAscending
              ? a['exitAt'].compareTo(b['exitAt'])
              : b['exitAt'].compareTo(a['exitAt']);
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final filteredItems = _selectedCategory == null
        ? _selectedExitReason == null
            ? _items
            : _items
                .where((item) => item['reason'] == _selectedExitReason)
                .toList()
        : _items
            .where((item) =>
                item['category'] == _selectedCategory &&
                (_selectedExitReason == null ||
                    item['reason'] == _selectedExitReason))
            .toList();

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
            DropdownButton<String>(
              value: _selectedCategory,
              hint: Text('Filter by Category'),
              items: [
                DropdownMenuItem<String>(
                  value: null,
                  child: Text('Show all'),
                ),
                ..._categories.map((String category) {
                  return DropdownMenuItem<String>(
                    value: category,
                    child: Text(category),
                  );
                }),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedCategory = newValue;
                });
              },
            ),
            DropdownButton<String>(
              value: _selectedExitReason,
              hint: Text('Filter by Exit Reason'),
              items: [
                DropdownMenuItem<String>(
                  value: null,
                  child: Text('Show all'),
                ),
                ..._exitReasons.map((String reason) {
                  return DropdownMenuItem<String>(
                    value: reason,
                    child: Text(reason),
                  );
                }),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedExitReason = newValue;
                });
              },
            ),
            DropdownButton<String>(
              value: _selectedSortOption,
              hint: Text('Sort by'),
              items: [
                DropdownMenuItem<String>(
                  value: 'price',
                  child: Text('Price'),
                ),
                DropdownMenuItem<String>(
                  value: 'exitPrice',
                  child: Text('Exit Price'),
                ),
                DropdownMenuItem<String>(
                  value: 'date',
                  child: Text('Added Date'),
                ),
                DropdownMenuItem<String>(
                  value: 'exitDate',
                  child: Text('Exit Date'),
                ),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedSortOption = newValue;

                  if (newValue == 'price') {
                    _sortItemsByPrice();
                  } else if (newValue == 'exitPrice') {
                    _sortItemsByExitPrice();
                  } else if (newValue == 'date') {
                    _sortItemsByDate();
                  } else if (newValue == 'exitDate') {
                    _sortItemsByExitDate();
                  }
                });
              },
            ),
            DropdownButton<String>(
              value: _selectedExportOption,
              hint: Text('Export to'),
              items: [
                DropdownMenuItem<String>(
                  value: 'json',
                  child: Text('JSON'),
                ),
                DropdownMenuItem<String>(
                  value: 'csv',
                  child: Text('CSV'),
                ),
                DropdownMenuItem<String>(
                  value: 'xml',
                  child: Text('XML'),
                ),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedExportOption = newValue;

                  if (newValue == 'json') {
                    _exportToJson();
                  } else if (newValue == 'csv') {
                    _exportToCsv();
                  } else if (newValue == 'xml') {
                    _exportToXml();
                  }
                });
              },
            ),
            SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: filteredItems.length,
                itemBuilder: (context, index) {
                  final timestamp = DateTime.fromMillisecondsSinceEpoch(
                      filteredItems[index]['timestamp']);
                  final exitAt = filteredItems[index]['exitAt'] != null
                      ? DateTime.fromMillisecondsSinceEpoch(
                          filteredItems[index]['exitAt'])
                      : null;
                  return ListTile(
                    title: Text(filteredItems[index]['reason'] != null
                        ? '${filteredItems[index]['name']} - ${filteredItems[index]['reason']} (Exit Price: ${filteredItems[index]['exitPrice']})'
                        : filteredItems[index]['name']),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(filteredItems[index]['category']),
                        Text(filteredItems[index]['description']),
                        Text(filteredItems[index]['price']),
                        Text(
                            'Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                        exitAt != null
                            ? Text(
                                'Exit at: ${exitAt.hour}:${exitAt.minute}:${exitAt.second}')
                            : Container(),
                      ],
                    ),
                    trailing: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        IconButton(
                          icon: Icon(Icons.edit),
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => EditItemPage(
                                  filteredItems[index],
                                  (String name, String category,
                                          String description, String price) =>
                                      _editItem(index, name, category,
                                          description, price),
                                  () => _deleteItemFromList(
                                      index), // Pass delete method
                                ),
                              ),
                            );
                          },
                        ),
                        IconButton(
                          icon: Icon(Icons.remove),
                          onPressed: () async {
                            final result = await Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => ExitFormPage(),
                              ),
                            );
                            if (result != null) {
                              setState(() {
                                final exitAt =
                                    DateTime.now().millisecondsSinceEpoch;
                                _items[index]['exitAt'] = exitAt;
                                _items[index]['reason'] = result['reason'];
                                _items[index]['exitPrice'] = result['price'];
                                if (!_exitReasons.contains(result['reason'])) {
                                  _exitReasons.add(result['reason']);
                                }
                              });
                            }
                          },
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

class AddItemPage extends StatelessWidget {
  final Function(String, String, String, String) addItem;

  AddItemPage(this.addItem);

  final TextEditingController _itemController = TextEditingController();
  final TextEditingController _categoryController = TextEditingController();
  final TextEditingController _descriptionController = TextEditingController();
  final TextEditingController _priceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _itemController,
              decoration: InputDecoration(labelText: 'Item'),
            ),
            TextField(
              controller: _categoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextField(
              controller: _descriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            TextField(
              controller: _priceController,
              decoration: InputDecoration(labelText: 'Price'),
            ),
            ElevatedButton(
              onPressed: () {
                addItem(
                  _itemController.text,
                  _categoryController.text,
                  _descriptionController.text,
                  _priceController.text,
                );
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

class EditItemPage extends StatelessWidget {
  final Map<String, dynamic> item;
  final Function(String, String, String, String) editItem;
  final VoidCallback deleteItem;

  EditItemPage(this.item, this.editItem, this.deleteItem);

  final TextEditingController _itemController = TextEditingController();
  final TextEditingController _categoryController = TextEditingController();
  final TextEditingController _descriptionController = TextEditingController();
  final TextEditingController _priceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    _itemController.text = item['name'];
    _categoryController.text = item['category'];
    _descriptionController.text = item['description'];
    _priceController.text = item['price'];

    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Item'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _itemController,
              decoration: InputDecoration(labelText: 'Item'),
            ),
            TextField(
              controller: _categoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextField(
              controller: _descriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            TextField(
              controller: _priceController,
              decoration: InputDecoration(labelText: 'Price'),
            ),
            ElevatedButton(
              onPressed: () {
                deleteItem(); // Call delete method when button is pressed
                Navigator.pop(
                    context); // Optionally pop the page after deletion
              },
              child: Text('Delete'), // Delete button
            ),
            ElevatedButton(
              onPressed: () {
                editItem(
                  _itemController.text,
                  _categoryController.text,
                  _descriptionController.text,
                  _priceController.text,
                );
                Navigator.pop(context);
              },
              child: Text('Save Changes'),
            ),
          ],
        ),
      ),
    );
  }
}

class ExitFormPage extends StatelessWidget {
  final TextEditingController _reasonController = TextEditingController();
  final TextEditingController _priceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Exit Form'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _reasonController,
              decoration: InputDecoration(labelText: 'Reason'),
            ),
            TextField(
              controller: _priceController,
              decoration: InputDecoration(labelText: 'Exit Price'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.pop(context, {
                  'reason': _reasonController.text,
                  'price': _priceController.text,
                });
              },
              child: Text('Submit'),
            ),
          ],
        ),
      ),
    );
  }
}
{% endhighlight %}

- admin gudang hanya dapat menambahkan dan mengurangi barang

{% highlight dart import 'package:flutter/material.dart';
import 'dart:convert';

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
      home: Login(),
    );
  }
}

class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final _formKey = GlobalKey<FormState>();
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                controller: _usernameController,
                decoration: InputDecoration(labelText: 'Username'),
                validator: (value) {
                  if (value!.isEmpty) {
                    return 'Please enter a username';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _passwordController,
                decoration: InputDecoration(labelText: 'Password'),
                obscureText: true,
                validator: (value) {
                  if (value!.isEmpty) {
                    return 'Please enter a password';
                  }
                  return null;
                },
              ),
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    if (_usernameController.text == 'admin' &&
                        _passwordController.text == 'admin') {
                      Navigator.pushReplacement(
                        context,
                        MaterialPageRoute(builder: (context) => HomePage()),
                      );
                    } else if (_usernameController.text == 'log' &&
                        _passwordController.text == 'log') {
                      Navigator.pushReplacement(
                        context,
                        MaterialPageRoute(
                            builder: (context) => LogisticHomePage()),
                      );
                    } else {
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(
                          content: Text('Invalid username or password'),
                        ),
                      );
                    }
                  }
                },
                child: Text('Login'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Map<String, dynamic>> _items = [];
  String? _selectedCategory;
  String? _selectedExitReason;
  List<String> _categories = [];
  List<String> _exitReasons = [];
  bool _sortAscending = true;
  bool _sortExitPriceAscending = true;
  bool _sortDateAscending = true;
  bool _sortExitDateAscending = true;
  String? _selectedSortOption;
  String? _selectedExportOption;

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
        'exitAt': null,
      });
      if (!_categories.contains(category)) {
        _categories.add(category);
      }
    });
  }

  void _deleteItem(int index) {
    setState(() {
      _items.removeAt(index);
    });
  }

  void _deleteItemFromList(int index) {
    _deleteItem(index); // Existing method for deleting item
  }

  void _editItem(int index, String item, String category, String description,
      String price) {
    setState(() {
      _items[index]['name'] = item;
      _items[index]['category'] = category;
      _items[index]['description'] = description;
      _items[index]['price'] = price;
    });
  }

  Future<void> _exportToJson() async {
    final jsonData = _items
        .map((item) => {
              'name': item['name'],
              'category': item['category'],
              'description': item['description'],
              'price': item['price'],
            })
        .toList();

    final jsonString = jsonEncode(jsonData);

    print(jsonString);
  }

  Future<void> _exportToCsv() async {
    final csvData = _items
        .map((item) => [
              item['name'],
              item['category'],
              item['description'],
              item['price'].toString(),
            ])
        .map((row) => row.join(','))
        .join('\n');
    print(csvData);
  }

  Future<void> _exportToXml() async {
    final StringBuffer xmlData = StringBuffer();

    xmlData.write('<items>');
    for (var item in _items) {
      xmlData.write('<item>');
      xmlData.write('<name>${item['name']}</name>');
      xmlData.write('<category>${item['category']}</category>');
      xmlData.write('<description>${item['description']}</description>');
      xmlData.write('<price>${item['price']}</price>');
      xmlData.write('</item>');
    }
    xmlData.write('</items>');
    print(xmlData.toString());
  }

  void _sortItemsByPrice() {
    setState(() {
      _sortAscending = !_sortAscending;

      _items.sort((a, b) => _sortAscending
          ? double.parse(a['price']).compareTo(double.parse(b['price']))
          : double.parse(b['price']).compareTo(double.parse(a['price'])));
    });
  }

  void _sortItemsByExitPrice() {
    setState(() {
      _sortExitPriceAscending = !_sortExitPriceAscending;

      _items.sort((a, b) => a['exitPrice'] != null && b['exitPrice'] != null
          ? _sortExitPriceAscending
              ? double.parse(a['exitPrice'])
                  .compareTo(double.parse(b['exitPrice']))
              : double.parse(b['exitPrice'])
                  .compareTo(double.parse(a['exitPrice']))
          : 0);
    });
  }

  void _sortItemsByDate() {
    setState(() {
      _sortDateAscending = !_sortDateAscending;

      _items.sort((a, b) => _sortDateAscending
          ? a['timestamp'].compareTo(b['timestamp'])
          : b['timestamp'].compareTo(a['timestamp']));
    });
  }

  void _sortItemsByExitDate() {
    setState(() {
      _sortExitDateAscending = !_sortExitDateAscending;

      _items.sort((a, b) {
        if (a['exitAt'] == null && b['exitAt'] == null) {
          return 0; // both are null, so they are equal
        } else if (a['exitAt'] == null) {
          return _sortExitDateAscending
              ? 1
              : -1; // a is null, so it comes after/before b
        } else if (b['exitAt'] == null) {
          return _sortExitDateAscending
              ? -1
              : 1; // b is null, so it comes after/before a
        } else {
          return _sortExitDateAscending
              ? a['exitAt'].compareTo(b['exitAt'])
              : b['exitAt'].compareTo(a['exitAt']);
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final filteredItems = _selectedCategory == null
        ? _selectedExitReason == null
            ? _items
            : _items
                .where((item) => item['reason'] == _selectedExitReason)
                .toList()
        : _items
            .where((item) =>
                item['category'] == _selectedCategory &&
                (_selectedExitReason == null ||
                    item['reason'] == _selectedExitReason))
            .toList();

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
            IconButton(
  icon: Icon(Icons.logout),
  onPressed: () async {
    // Clear any stored user data or tokens here
    // ...

    // Navigate back to the login page
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => Login()),
    );
  },
),
            DropdownButton<String>(
              value: _selectedCategory,
              hint: Text('Filter by Category'),
              items: [
                DropdownMenuItem<String>(
                  value: null,
                  child: Text('Show all'),
                ),
                ..._categories.map((String category) {
                  return DropdownMenuItem<String>(
                    value: category,
                    child: Text(category),
                  );
                }),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedCategory = newValue;
                });
              },
            ),
            DropdownButton<String>(
              value: _selectedExitReason,
              hint: Text('Filter by Exit Reason'),
              items: [
                DropdownMenuItem<String>(
                  value: null,
                  child: Text('Show all'),
                ),
                ..._exitReasons.map((String reason) {
                  return DropdownMenuItem<String>(
                    value: reason,
                    child: Text(reason),
                  );
                }),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedExitReason = newValue;
                });
              },
            ),
            DropdownButton<String>(
              value: _selectedSortOption,
              hint: Text('Sort by'),
              items: [
                DropdownMenuItem<String>(
                  value: 'price',
                  child: Text('Price'),
                ),
                DropdownMenuItem<String>(
                  value: 'exitPrice',
                  child: Text('Exit Price'),
                ),
                DropdownMenuItem<String>(
                  value: 'date',
                  child: Text('Added Date'),
                ),
                DropdownMenuItem<String>(
                  value: 'exitDate',
                  child: Text('Exit Date'),
                ),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedSortOption = newValue;

                  if (newValue == 'price') {
                    _sortItemsByPrice();
                  } else if (newValue == 'exitPrice') {
                    _sortItemsByExitPrice();
                  } else if (newValue == 'date') {
                    _sortItemsByDate();
                  } else if (newValue == 'exitDate') {
                    _sortItemsByExitDate();
                  }
                });
              },
            ),
            DropdownButton<String>(
              value: _selectedExportOption,
              hint: Text('Export to'),
              items: [
                DropdownMenuItem<String>(
                  value: 'json',
                  child: Text('JSON'),
                ),
                DropdownMenuItem<String>(
                  value: 'csv',
                  child: Text('CSV'),
                ),
                DropdownMenuItem<String>(
                  value: 'xml',
                  child: Text('XML'),
                ),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedExportOption = newValue;

                  if (newValue == 'json') {
                    _exportToJson();
                  } else if (newValue == 'csv') {
                    _exportToCsv();
                  } else if (newValue == 'xml') {
                    _exportToXml();
                  }
                });
              },
            ),
            SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: filteredItems.length,
                itemBuilder: (context, index) {
                  final timestamp = DateTime.fromMillisecondsSinceEpoch(
                      filteredItems[index]['timestamp']);
                  final exitAt = filteredItems[index]['exitAt'] != null
                      ? DateTime.fromMillisecondsSinceEpoch(
                          filteredItems[index]['exitAt'])
                      : null;
                  return ListTile(
                    title: Text(filteredItems[index]['reason'] != null
                        ? '${filteredItems[index]['name']} - ${filteredItems[index]['reason']} (Exit Price: ${filteredItems[index]['exitPrice']})'
                        : filteredItems[index]['name']),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(filteredItems[index]['category']),
                        Text(filteredItems[index]['description']),
                        Text(filteredItems[index]['price']),
                        Text(
                            'Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                        exitAt != null
                            ? Text(
                                'Exit at: ${exitAt.hour}:${exitAt.minute}:${exitAt.second}')
                            : Container(),
                      ],
                    ),
                    trailing: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        IconButton(
                          icon: Icon(Icons.edit),
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => EditItemPage(
                                  filteredItems[index],
                                  (String name, String category,
                                          String description, String price) =>
                                      _editItem(index, name, category,
                                          description, price),
                                  () => _deleteItemFromList(
                                      index), // Pass delete method
                                ),
                              ),
                            );
                          },
                        ),
                        IconButton(
                          icon: Icon(Icons.remove),
                          onPressed: () async {
                            final result = await Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => ExitFormPage(),
                              ),
                            );
                            if (result != null) {
                              setState(() {
                                final exitAt =
                                    DateTime.now().millisecondsSinceEpoch;
                                _items[index]['exitAt'] = exitAt;
                                _items[index]['reason'] = result['reason'];
                                _items[index]['exitPrice'] = result['price'];
                                if (!_exitReasons.contains(result['reason'])) {
                                  _exitReasons.add(result['reason']);
                                }
                              });
                            }
                          },
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

class AddItemPage extends StatelessWidget {
  final Function(String, String, String, String) addItem;

  AddItemPage(this.addItem);

  final TextEditingController _itemController = TextEditingController();
  final TextEditingController _categoryController = TextEditingController();
  final TextEditingController _descriptionController = TextEditingController();
  final TextEditingController _priceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Item'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _itemController,
              decoration: InputDecoration(labelText: 'Item'),
            ),
            TextField(
              controller: _categoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextField(
              controller: _descriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            TextField(
              controller: _priceController,
              decoration: InputDecoration(labelText: 'Price'),
            ),
            ElevatedButton(
              onPressed: () {
                addItem(
                  _itemController.text,
                  _categoryController.text,
                  _descriptionController.text,
                  _priceController.text,
                );
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

class EditItemPage extends StatelessWidget {
  final Map<String, dynamic> item;
  final Function(String, String, String, String) editItem;
  final VoidCallback deleteItem;

  EditItemPage(this.item, this.editItem, this.deleteItem);

  final TextEditingController _itemController = TextEditingController();
  final TextEditingController _categoryController = TextEditingController();
  final TextEditingController _descriptionController = TextEditingController();
  final TextEditingController _priceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    _itemController.text = item['name'];
    _categoryController.text = item['category'];
    _descriptionController.text = item['description'];
    _priceController.text = item['price'];

    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Item'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _itemController,
              decoration: InputDecoration(labelText: 'Item'),
            ),
            TextField(
              controller: _categoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextField(
              controller: _descriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            TextField(
              controller: _priceController,
              decoration: InputDecoration(labelText: 'Price'),
            ),
            ElevatedButton(
              onPressed: () {
                deleteItem(); // Call delete method when button is pressed
                Navigator.pop(
                    context); // Optionally pop the page after deletion
              },
              child: Text('Delete'), // Delete button
            ),
            ElevatedButton(
              onPressed: () {
                editItem(
                  _itemController.text,
                  _categoryController.text,
                  _descriptionController.text,
                  _priceController.text,
                );
                Navigator.pop(context);
              },
              child: Text('Save Changes'),
            ),
          ],
        ),
      ),
    );
  }
}

class ExitFormPage extends StatelessWidget {
  final TextEditingController _reasonController = TextEditingController();
  final TextEditingController _priceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Exit Form'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _reasonController,
              decoration: InputDecoration(labelText: 'Reason'),
            ),
            TextField(
              controller: _priceController,
              decoration: InputDecoration(labelText: 'Exit Price'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.pop(context, {
                  'reason': _reasonController.text,
                  'price': _priceController.text,
                });
              },
              child: Text('Submit'),
            ),
          ],
        ),
      ),
    );
  }
}

class LogisticHomePage extends StatefulWidget {
  @override
  _LogisticHomePage createState() => _LogisticHomePage();
}

class _LogisticHomePage extends State<LogisticHomePage> {
  List<Map<String, dynamic>> _items = [];
  String? _selectedCategory;
  String? _selectedExitReason;
  List<String> _categories = [];
  List<String> _exitReasons = [];
  bool _sortAscending = true;
  bool _sortExitPriceAscending = true;
  bool _sortDateAscending = true;
  bool _sortExitDateAscending = true;
  String? _selectedSortOption;
  String? _selectedExportOption;

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
        'exitAt': null,
      });
      if (!_categories.contains(category)) {
        _categories.add(category);
      }
    });
  }

  void _deleteItem(int index) {
    setState(() {
      _items.removeAt(index);
    });
  }

  void _deleteItemFromList(int index) {
    _deleteItem(index); // Existing method for deleting item
  }

  void _editItem(int index, String item, String category, String description,
      String price) {
    setState(() {
      _items[index]['name'] = item;
      _items[index]['category'] = category;
      _items[index]['description'] = description;
      _items[index]['price'] = price;
    });
  }

  Future<void> _exportToJson() async {
    final jsonData = _items
        .map((item) => {
              'name': item['name'],
              'category': item['category'],
              'description': item['description'],
              'price': item['price'],
            })
        .toList();

    final jsonString = jsonEncode(jsonData);

    print(jsonString);
  }

  Future<void> _exportToCsv() async {
    final csvData = _items
        .map((item) => [
              item['name'],
              item['category'],
              item['description'],
              item['price'].toString(),
            ])
        .map((row) => row.join(','))
        .join('\n');
    print(csvData);
  }

  Future<void> _exportToXml() async {
    final StringBuffer xmlData = StringBuffer();

    xmlData.write('<items>');
    for (var item in _items) {
      xmlData.write('<item>');
      xmlData.write('<name>${item['name']}</name>');
      xmlData.write('<category>${item['category']}</category>');
      xmlData.write('<description>${item['description']}</description>');
      xmlData.write('<price>${item['price']}</price>');
      xmlData.write('</item>');
    }
    xmlData.write('</items>');
    print(xmlData.toString());
  }

  void _sortItemsByPrice() {
    setState(() {
      _sortAscending = !_sortAscending;

      _items.sort((a, b) => _sortAscending
          ? double.parse(a['price']).compareTo(double.parse(b['price']))
          : double.parse(b['price']).compareTo(double.parse(a['price'])));
    });
  }

  void _sortItemsByExitPrice() {
    setState(() {
      _sortExitPriceAscending = !_sortExitPriceAscending;

      _items.sort((a, b) => a['exitPrice'] != null && b['exitPrice'] != null
          ? _sortExitPriceAscending
              ? double.parse(a['exitPrice'])
                  .compareTo(double.parse(b['exitPrice']))
              : double.parse(b['exitPrice'])
                  .compareTo(double.parse(a['exitPrice']))
          : 0);
    });
  }

  void _sortItemsByDate() {
    setState(() {
      _sortDateAscending = !_sortDateAscending;

      _items.sort((a, b) => _sortDateAscending
          ? a['timestamp'].compareTo(b['timestamp'])
          : b['timestamp'].compareTo(a['timestamp']));
    });
  }

  void _sortItemsByExitDate() {
    setState(() {
      _sortExitDateAscending = !_sortExitDateAscending;

      _items.sort((a, b) {
        if (a['exitAt'] == null && b['exitAt'] == null) {
          return 0; // both are null, so they are equal
        } else if (a['exitAt'] == null) {
          return _sortExitDateAscending
              ? 1
              : -1; // a is null, so it comes after/before b
        } else if (b['exitAt'] == null) {
          return _sortExitDateAscending
              ? -1
              : 1; // b is null, so it comes after/before a
        } else {
          return _sortExitDateAscending
              ? a['exitAt'].compareTo(b['exitAt'])
              : b['exitAt'].compareTo(a['exitAt']);
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final filteredItems = _selectedCategory == null
        ? _selectedExitReason == null
            ? _items
            : _items
                .where((item) => item['reason'] == _selectedExitReason)
                .toList()
        : _items
            .where((item) =>
                item['category'] == _selectedCategory &&
                (_selectedExitReason == null ||
                    item['reason'] == _selectedExitReason))
            .toList();

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
            DropdownButton<String>(
              value: _selectedCategory,
              hint: Text('Filter by Category'),
              items: [
                DropdownMenuItem<String>(
                  value: null,
                  child: Text('Show all'),
                ),
                ..._categories.map((String category) {
                  return DropdownMenuItem<String>(
                    value: category,
                    child: Text(category),
                  );
                }),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedCategory = newValue;
                });
              },
            ),
            DropdownButton<String>(
              value: _selectedExitReason,
              hint: Text('Filter by Exit Reason'),
              items: [
                DropdownMenuItem<String>(
                  value: null,
                  child: Text('Show all'),
                ),
                ..._exitReasons.map((String reason) {
                  return DropdownMenuItem<String>(
                    value: reason,
                    child: Text(reason),
                  );
                }),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedExitReason = newValue;
                });
              },
            ),
            DropdownButton<String>(
              value: _selectedSortOption,
              hint: Text('Sort by'),
              items: [
                DropdownMenuItem<String>(
                  value: 'price',
                  child: Text('Price'),
                ),
                DropdownMenuItem<String>(
                  value: 'exitPrice',
                  child: Text('Exit Price'),
                ),
                DropdownMenuItem<String>(
                  value: 'date',
                  child: Text('Added Date'),
                ),
                DropdownMenuItem<String>(
                  value: 'exitDate',
                  child: Text('Exit Date'),
                ),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedSortOption = newValue;

                  if (newValue == 'price') {
                    _sortItemsByPrice();
                  } else if (newValue == 'exitPrice') {
                    _sortItemsByExitPrice();
                  } else if (newValue == 'date') {
                    _sortItemsByDate();
                  } else if (newValue == 'exitDate') {
                    _sortItemsByExitDate();
                  }
                });
              },
            ),
            DropdownButton<String>(
              value: _selectedExportOption,
              hint: Text('Export to'),
              items: [
                DropdownMenuItem<String>(
                  value: 'json',
                  child: Text('JSON'),
                ),
                DropdownMenuItem<String>(
                  value: 'csv',
                  child: Text('CSV'),
                ),
                DropdownMenuItem<String>(
                  value: 'xml',
                  child: Text('XML'),
                ),
              ],
              onChanged: (newValue) {
                setState(() {
                  _selectedExportOption = newValue;

                  if (newValue == 'json') {
                    _exportToJson();
                  } else if (newValue == 'csv') {
                    _exportToCsv();
                  } else if (newValue == 'xml') {
                    _exportToXml();
                  }
                });
              },
            ),
            SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: filteredItems.length,
                itemBuilder: (context, index) {
                  final timestamp = DateTime.fromMillisecondsSinceEpoch(
                      filteredItems[index]['timestamp']);
                  final exitAt = filteredItems[index]['exitAt'] != null
                      ? DateTime.fromMillisecondsSinceEpoch(
                          filteredItems[index]['exitAt'])
                      : null;
                  return ListTile(
                    title: Text(filteredItems[index]['reason'] != null
                        ? '${filteredItems[index]['name']} - ${filteredItems[index]['reason']} (Exit Price: ${filteredItems[index]['exitPrice']})'
                        : filteredItems[index]['name']),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(filteredItems[index]['category']),
                        Text(filteredItems[index]['description']),
                        Text(filteredItems[index]['price']),
                        Text(
                            'Added at: ${timestamp.hour}:${timestamp.minute}:${timestamp.second}'),
                        exitAt != null
                            ? Text(
                                'Exit at: ${exitAt.hour}:${exitAt.minute}:${exitAt.second}')
                            : Container(),
                      ],
                    ),
                    trailing: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        IconButton(
                          icon: Icon(Icons.edit),
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => LogisticEditItemPage(
                                  filteredItems[index],
                                  (String name, String category,
                                          String description, String price) =>
                                      _editItem(index, name, category,
                                          description, price),
                                  () => _deleteItemFromList(
                                      index), // Pass delete method
                                ),
                              ),
                            );
                          },
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

class LogisticEditItemPage extends StatelessWidget {
  final Map<String, dynamic> item;
  final Function(String, String, String, String) editItem;
  final VoidCallback deleteItem;

  LogisticEditItemPage(this.item, this.editItem, this.deleteItem);

  final TextEditingController _itemController = TextEditingController();
  final TextEditingController _categoryController = TextEditingController();
  final TextEditingController _descriptionController = TextEditingController();
  final TextEditingController _priceController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    _itemController.text = item['name'];
    _categoryController.text = item['category'];
    _descriptionController.text = item['description'];
    _priceController.text = item['price'];

    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Item'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _itemController,
              decoration: InputDecoration(labelText: 'Item'),
            ),
            TextField(
              controller: _categoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextField(
              controller: _descriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            TextField(
              controller: _priceController,
              decoration: InputDecoration(labelText: 'Price'),
            ),
            ElevatedButton(
              onPressed: () {
                editItem(
                  _itemController.text,
                  _categoryController.text,
                  _descriptionController.text,
                  _priceController.text,
                );
                Navigator.pop(context);
              },
              child: Text('Save Changes'),
            ),
          ],
        ),
      ),
    );
  }
}
%}
{% endhighlight %}

- cashier hanya dapat mengurangi barang

{% highlight dart %}

{% endhighlight %}

# Aplikasi Akhir

[Run on Dartpad](https://dartpad.dev/?id=52d995a5b5df90fb00d2137c0aac9fce)

# Versi dengan Database API

## MySQL

{% highlight sql %}
CREATE DATABASE my_app_db;
CREATE TABLE items (     id INT AUTO_INCREMENT PRIMARY KEY,     name VARCHAR(255) NOT NULL,      category VARCHAR(255),     description TEXT,     price DECIMAL(10, 2),      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,     exit_at DATETIME,     reason VARCHAR(255),     exit_price DECIMAL(10, 2) );
{% endhighlight %}

## NodeJs Express app.js

{% highlight javascript %}
const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'my_app_db',
};

const db = mysql.createPool(dbConfig);

// Create item endpoint
app.post('/items', async (req, res) => {
  const { name, category, description, price, timestamp } = req.body;
  if (!name || !category || !description || !price || !timestamp) {
    return res.status(400).send({ message: 'Invalid request. Please provide all required parameters.' });
  }
  const query = `INSERT INTO items (name, category, description, price, timestamp) VALUES (?, ?, ?, ?, ?)`;
  try {
    const [result] = await db.execute(query, [name, category, description, price, timestamp]);
    res.status(201).send({ id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error creating item' });
  }
});

// Get items endpoint
app.get('/items', async (req, res) => {
  const query = 'SELECT * FROM items';
  try {
    const [results] = await db.execute(query);
    res.send(results);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error fetching items' });
  }
});

// Get single item endpoint
app.get('/items/:id', async (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM items WHERE id = ?';
  try {
    const [results] = await db.execute(query, [id]);
    if (results.length > 0) {
      res.send(results[0]);
    } else {
      res.status(404).send({ message: 'Item not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error fetching item' });
  }
});

// Update item endpoint
app.put('/items/:id', async (req, res) => {
  const id = req.params.id;
  const { name, category, description, price } = req.body;
  if (!id || !name || !category || !description || !price) {
    return res.status(400).send({ message: 'Invalid request. Please provide all required parameters.' });
  }
  const query = `UPDATE items SET name = ?, category = ?, description = ?, price = ? WHERE id = ?`;
  try {
    await db.execute(query, [name, category, description, price, id]);
    res.send({ message: 'Item updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error updating item' });
  }
});

// Delete item endpoint
app.delete('/items/:id', async (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM items WHERE id = ?`;
  try {
    await db.execute(query, [id]);
    res.send({ message: 'Item deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error deleting item' });
  }
});

// Cashout item endpoint
app.post('/items/:id/cashout', async (req, res) => {
  const id = req.params.id;
  const { exitPrice, reason, exitAt } = req.body;
  if (!id || !exitPrice || !reason || !exitAt) {
    return res.status(400).send({ message: 'Invalid request. Please provide all required parameters.' });
  }
  const query = `UPDATE items SET exit_price = ?, reason = ?, exit_at = ? WHERE id = ?`;
  try {
    await db.execute(query, [exitPrice, reason, exitAt, id]);
    res.send({ message: 'Item cashed out successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error cashing out item' });
  }
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
{% endhighlight %}

## Flutter Main Dart

{% highlight dart %}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

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
  Future<List<dynamic>> _fetchItems() async {
    final apiUrl = 'http://localhost:3000/items'; // Replace with your API URL
    final response = await http.get(Uri.parse(apiUrl));

    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Failed to load items');
    }
  }

  void _refreshItems() {
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
        actions: [
          IconButton(
            icon: Icon(Icons.refresh),
            onPressed: _refreshItems,
          ),
        ],
      ),
      body: Center(
        child: FutureBuilder(
          future: _fetchItems(),
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              return ListView.builder(
                itemCount: snapshot.data?.length,
                itemBuilder: (context, index) {
                  final item = snapshot.data?[index];

                  return Card(
                    margin: EdgeInsets.all(8),
                    child: Padding(
                      padding: EdgeInsets.all(8),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(item['name']),
                          Text(item['category']),
                          Text(item['description']),
                          Text('Price: ${item['price']}'),
                          Text('Timestamp: ${item['timestamp']}'),
                          Text(
                              'Exit Timestamp: ${item['exit_at'] ?? 'Not provided'}'),
                          Text('Reason: ${item['reason'] ?? 'Not provided'}'),
                          Text(
                              'Exit Price: ${item['exit_price']?.toString() ?? 'Not provided'}'),
                          Row(
                            children: [
                              ElevatedButton(
                                onPressed: () {
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                      builder: (context) => CashierForm(item),
                                    ),
                                  );
                                },
                                child: Text('Cashier'),
                              ),
                              SizedBox(width: 8),
                              ElevatedButton(
                                onPressed: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: (context) =>
                                          EditItemScreen(itemId: item['id'])));
                                },
                                child: Text('Edit'),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  );
                },
              );
            } else if (snapshot.hasError) {
              return Text('Error: ${snapshot.error}');
            } else {
              return CircularProgressIndicator();
            }
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => AddItemPage()),
          );
        },
        child: Icon(Icons.add),
      ),
    );
  }
}

class AddItemPage extends StatefulWidget {
  @override
  _AddItemPageState createState() => _AddItemPageState();
}

class _AddItemPageState extends State<AddItemPage> {
  final _nameController = TextEditingController();
  final _categoryController = TextEditingController();
  final _descriptionController = TextEditingController();
  final _priceController = TextEditingController();

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
              controller: _nameController,
              decoration: InputDecoration(labelText: 'Name'),
            ),
            TextFormField(
              controller: _categoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextFormField(
              controller: _descriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            TextFormField(
              controller: _priceController,
              decoration: InputDecoration(labelText: 'Price'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _addItem,
              child: Text('Add'),
            ),
          ],
        ),
      ),
    );
  }

  void _addItem() async {
    final name = _nameController.text;
    final category = _categoryController.text;
    final description = _descriptionController.text;
    final price = _priceController.text;
    final timestamp = DateTime.now().toIso8601String();

    final url = Uri.parse('http://localhost:3000/items');
    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'name': name,
        'category': category,
        'description': description,
        'price': price,
        'timestamp': timestamp,
      }),
    );

    if (response.statusCode == 201) {
      Navigator.of(context).pop();
    } else {
      print('Failed to add item');
    }
  }
}

class EditItemScreen extends StatefulWidget {
  final int itemId;
  EditItemScreen({required this.itemId});

  @override
  _EditItemScreenState createState() => _EditItemScreenState();
}

class _EditItemScreenState extends State<EditItemScreen> {
  final _nameController = TextEditingController();
  final _categoryController = TextEditingController();
  final _descriptionController = TextEditingController();
  final _priceController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _fetchItem();
  }

  void _fetchItem() async {
    final response = await http
        .get(Uri.parse('http://localhost:3000/items/${widget.itemId}'));

    if (response.statusCode == 200) {
      final item = jsonDecode(response.body);
      setState(() {
        _nameController.text = item['name'];
        _categoryController.text = item['category'];
        _descriptionController.text = item['description'];
        _priceController.text = item['price'].toString();
      });
    } else {
      print('Failed to load item');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Item'),
      ),
      body: Center(
        child: Column(
          children: [
            TextFormField(
              controller: _nameController,
              decoration: InputDecoration(labelText: 'Name'),
            ),
            TextFormField(
              controller: _categoryController,
              decoration: InputDecoration(labelText: 'Category'),
            ),
            TextFormField(
              controller: _descriptionController,
              decoration: InputDecoration(labelText: 'Description'),
            ),
            TextFormField(
              controller: _priceController,
              decoration: InputDecoration(labelText: 'Price'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _editItem,
              child: Text('Save'),
            ),
            SizedBox(height: 10),
            ElevatedButton(
              onPressed: _deleteItem,
              child: Text('Delete'),
              style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
            ),
          ],
        ),
      ),
    );
  }

  void _deleteItem() async {
    final id = widget.itemId;

    final url = Uri.parse('http://localhost:3000/items/$id');

    final response = await http.delete(url);

    if (response.statusCode == 200) {
      print('Item deleted successfully');

      Navigator.of(context).pop();
    } else {
      print('Failed to delete item');
    }
  }

  void _editItem() async {
    final name = _nameController.text;
    final category = _categoryController.text;
    final description = _descriptionController.text;
    final price = _priceController.text;

    final url = Uri.parse('http://localhost:3000/items/${widget.itemId}');
    final response = await http.put(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'name': name,
        'category': category,
        'description': description,
        'price': price,
      }),
    );

    if (response.statusCode == 200) {
      Navigator.of(context).pop();
    } else {
      print('Failed to update item');
    }
  }
}

class CashierForm extends StatefulWidget {
  final dynamic item;

  CashierForm(this.item);

  @override
  _CashierFormState createState() => _CashierFormState();
}

class _CashierFormState extends State<CashierForm> {
  final _exitPriceController = TextEditingController();
  final _reasonController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Cashier Form'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text('Item: ${widget.item['name']}'),
            Text('Category: ${widget.item['category']}'),
            TextFormField(
              controller: _exitPriceController,
              decoration: InputDecoration(labelText: 'Exit Price'),
            ),
            TextFormField(
              controller: _reasonController,
              decoration: InputDecoration(labelText: 'Reason'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _cashoutItem,
              child: Text('Cash Out'),
            ),
          ],
        ),
      ),
    );
  }

  void _cashoutItem() async {
    final exitPrice = double.tryParse(_exitPriceController.text) ?? 0.0;
    final reason = _reasonController.text;
    final exitAt = DateTime.now().toIso8601String();

    final url =
        Uri.parse('http://localhost:3000/items/${widget.item['id']}/cashout');
    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'exitPrice': exitPrice,
        'reason': reason,
        'exitAt': exitAt,
      }),
    );

    if (response.statusCode == 200) {
      print('Item cashed out successfully');
      Navigator.of(context).pop();
    } else {
      print('Failed to cash out item');
    }
  }
}
{% endhighlight %}