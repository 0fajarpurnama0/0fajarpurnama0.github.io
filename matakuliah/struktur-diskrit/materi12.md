---
layout: post
title: Ringkasan Kompleksitas Algoritma
---
![time-space-complexity.png](https://images.hive.blog/DQmWD8vjbUpMtQc56CkrvHXbyR1c6mitJMTS5cr7JDJnbKq/time-space-complexity.png)

Algorithm Complexity (kompleksitas algoritma)  mengukur effisiensi suatu algoritma. Saat ini pengukuran ada 2 yaitu time complexity (kompleksitas waktu) dan space complexity (kompleksitas ruangan). Kompleksitas waktu mengukur jumlah tahap yang diperlukan untuk menjalankan sebuah algoritma sedangkan kompleksitas ruangan mengukur besarnya penyimpanan yang diperlukan untuk menjalankan sebuah algoritma.

## Kompleksitas Ruangan

Beberapa data yang perlu disimpan sementara:

*   input
*   output
*   proses
*   dll

## Istilah-Istilah Kompleksitas Waktu

*   Big Oh: **O**: Kurang Dari atau Sama Dengan: **≤**
*   Big Omega: **Ω**: Lebih Dari atau Sama Dengan: **≥**
*   Big Theta: **Θ**: Sama Dengan: **=**
*   Little Oh: **o**: Kurang Dari: **<**
*   Little Omega: **ω**: Lebih Dari: **>**
*   **Fungsi**: (f),(n),(k), dll: jumlah tahap yang diperlukan

## Contoh Sederhana Pengukuran Kompleksitas Waktu

### O(2)

```
a = b + c;
e = d + a;
``` 

Ingat setiap baris ada proses memasukan input, memproses, dan menghasilkan output.

### O(1)

```
a = b + c + d;
``` 

Secara waktu lebih sederhana hanya membutuhkan kompleksitas ruangan yang lebih besar untuk satu baris tersebut.

### O(n)

```  
for i = 1 to n do
    output = this_output + input;
end
``` 

### O(5)

```
for i = 1 to 5 do
    output = this_output + input;
end
``` 

### O(1)

```     
output = input + input + input + input + input;
``` 

```     
output = input x 5;
``` 

### O(n<sup>2</sup>)

```     
for i = 1 to n do
    for j = 1 to n do
        output = this_output + input;
    end
end
``` 

### O(1)

```     
output = input + input + input + input + input + input + input + input + input + input;
``` 

```     
output = input x 5 x 2;
``` 

### O(log(n))

```     
Class = 100 students;
Left = 1:50;
Right = 51:100;
Repeat Search
    if student is on the left then
        Divide Left (into New_Left = 1:25 and New_Right = 26:50);
        Ignore Right;
    else
        Divide Right (into New_Left = 51:75 and New_Right = 76:100);
        Ignore Left;
Until Student is Found         
``` 

### O(n!)

```
function factorialize(n) 
    if n < 0 then 
        return -1;
    else if num == 0 
        return 1;
    else 
        for i = 1 to n do
            n = n + n;
        end
        return = n + factorialize(n - 1)
    end
end
``` 

### O(n<sup>3</sup>)

```
for i = 1 to n do
    for j = 1 to n do
        for k = 1 to n do
            output = this_output + input;
        end
    end
end
``` 

### O(n<sup>z</sup>)

```
function exponent(n, z)
    if z == 0 then
        break;
    end
    for i = 1 to n do
        output = this_output + input; 
    end
    output = output + exponent(n, z-1)
end
``` 

## Some Time Complexity Cheat Sheet

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
<canvas id="myChart" style="width:100%;max-width:600px"></canvas>

<script>
var xValues = [];
var yValues = {};
yValues['a'] = [];
yValues['b'] = [];
yValues['c'] = [];
yValues['d'] = [];
yValues['e'] = [];
generateData("Math.log(x)", 0, 7, 0.5, 'a');
generateData("x", 0, 7, 0.5, 'b');
generateData("x*Math.log(x)", 0, 7, 0.5, 'c');
generateData("x**2", 0, 7, 0.5, 'd');
generateData("2**x", 0, 7, 0.5, 'e');

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: 'O(logn)',
      fill: false,
      pointRadius: 1,
      borderColor: "rgba(0,0,255,0.5)",
      data: yValues['a']
    }, {
      label: 'O(n)',
      fill: false,
      pointRadius: 1,
      borderColor: "rgba(0,255,0,0.5)",
      data: yValues['b']
    }, {
      label: 'O(nlogn)',
      fill: false,
      pointRadius: 1,
      borderColor: "rgba(255,255,0,0.5)",
      data: yValues['c']
    }, {
      label: 'O(n^2)',
      fill: false,
      pointRadius: 1,
      borderColor: "rgba(255,125,0,0.5)",
      data: yValues['d']
    }, {
      label: 'O(2^n)',
      fill: false,
      pointRadius: 1,
      borderColor: "rgba(255,0,0,0.5)",
      data: yValues['e']
    }
    ]
    
  },    
  options: {
    legend: {display: true},
    title: {
      display: false,
      text: "Cheat Sheet",
      fontSize: 16
    }
  }
});
function generateData(value, i1, i2, step = 1, line) {
  xValues = [];
  for (let x = i1; x <= i2; x += step) {
    yValues[line].push(eval(value));
    xValues.push(x);
  }
}
</script>

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-xg43{color:#444;text-align:left;text-decoration:underline;vertical-align:top}
.tg .tg-5i66{background-color:#FAFAFA;border-color:inherit;text-align:left;vertical-align:middle}
.tg .tg-xfh8{background-color:#E3E3E3;text-align:center;vertical-align:top}
.tg .tg-q2a3{background-color:#FF0;border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-2r8t{background-color:#53D000;border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-0bb7{background-color:#FAFAFA;text-align:left;vertical-align:middle}
.tg .tg-lt4e{border-color:inherit;color:#444;text-align:left;text-decoration:underline;vertical-align:top}
.tg .tg-gdr6{background-color:#FF0;text-align:center;vertical-align:top}
.tg .tg-2hxg{background-color:#53D000;text-align:center;vertical-align:top}
.tg .tg-dh1n{background-color:#C8EA00;text-align:center;vertical-align:top}
.tg .tg-4aaz{background-color:#FFC543;text-align:center;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
.tg .tg-17ss{background-color:#FF8989;text-align:center;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-5i66"><span style="font-weight:normal;background-color:#FAFAFA">Data Structure</span></th>
    <th class="tg-5i66" colspan="8"><span style="font-weight:normal;background-color:#FAFAFA">Time Complexity</span></th>
    <th class="tg-0bb7"><span style="font-weight:normal;background-color:#FAFAFA">Space Complexity</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-5i66"></td>
    <td class="tg-5i66" colspan="4"><span style="font-weight:normal;background-color:#FAFAFA">Average</span></td>
    <td class="tg-0bb7" colspan="4"><span style="font-weight:normal;background-color:#FAFAFA">Worst</span></td>
    <td class="tg-0bb7"><span style="font-weight:normal;background-color:#FAFAFA">Worst</span></td>
  </tr>
  <tr>
    <td class="tg-5i66"></td>
    <td class="tg-5i66"><span style="font-weight:normal;background-color:#FAFAFA">Access</span></td>
    <td class="tg-0bb7"><span style="font-weight:normal;background-color:#FAFAFA">Search</span></td>
    <td class="tg-0bb7"><span style="font-weight:normal;background-color:#FAFAFA">Insertion</span></td>
    <td class="tg-0bb7"><span style="font-weight:normal;background-color:#FAFAFA">Deletion</span></td>
    <td class="tg-0bb7"><span style="font-weight:normal;background-color:#FAFAFA">Access</span></td>
    <td class="tg-0bb7"><span style="font-weight:normal;background-color:#FAFAFA">Search</span></td>
    <td class="tg-0bb7"><span style="font-weight:normal;background-color:#FAFAFA">Insertion</span></td>
    <td class="tg-0bb7"><span style="font-weight:normal;background-color:#FAFAFA">Deletion</span></td>
    <td class="tg-0bb7"></td>
  </tr>
  <tr>
    <td class="tg-lt4e"><a href="http://en.wikipedia.org/wiki/Array_data_structure"><span style="color:#444;background-color:transparent">Array</span></a></td>
    <td class="tg-2r8t"><span style="color:black;background-color:#53D000">Θ(1)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">Θ(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">Θ(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">Θ(n)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(1)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
  </tr>
  <tr>
    <td class="tg-lt4e"><a href="http://en.wikipedia.org/wiki/Stack_(abstract_data_type)"><span style="color:#444;background-color:transparent">Stack</span></a></td>
    <td class="tg-q2a3"><span style="color:black;background-color:yellow">Θ(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">Θ(n)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Θ(1)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Θ(1)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(1)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(1)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
  </tr>
  <tr>
    <td class="tg-lt4e"><a href="http://en.wikipedia.org/wiki/Queue_(abstract_data_type)"><span style="color:#444;background-color:transparent">Queue</span></a></td>
    <td class="tg-q2a3"><span style="color:black;background-color:yellow">Θ(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">Θ(n)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Θ(1)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Θ(1)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(1)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(1)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
  </tr>
  <tr>
    <td class="tg-lt4e"><a href="http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists"><span style="color:#444;background-color:transparent">Singly-Linked List</span></a></td>
    <td class="tg-q2a3"><span style="color:black;background-color:yellow">Θ(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">Θ(n)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Θ(1)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Θ(1)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(1)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(1)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/Doubly_linked_list"><span style="color:#444;background-color:transparent">Doubly-Linked List</span></a></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">Θ(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">Θ(n)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Θ(1)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Θ(1)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(1)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(1)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/Skip_list"><span style="color:#444;background-color:transparent">Skip List</span></a></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">O(n log(n))</span></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/Hash_table"><span style="color:#444;background-color:transparent">Hash Table</span></a></td>
    <td class="tg-xfh8"><span style="color:black;background-color:#E3E3E3">N/A</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Θ(1)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Θ(1)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Θ(1)</span></td>
    <td class="tg-xfh8"><span style="color:black;background-color:#E3E3E3">N/A</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/Binary_search_tree"><span style="color:#444;background-color:transparent">Binary Search Tree</span></a></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="https://en.wikipedia.org/wiki/Cartesian_tree"><span style="color:#444;background-color:transparent">Cartesian Tree</span></a></td>
    <td class="tg-xfh8"><span style="color:black;background-color:#E3E3E3">N/A</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-xfh8"><span style="color:black;background-color:#E3E3E3">N/A</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/B_tree"><span style="color:#444;background-color:transparent">B-Tree</span></a></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/Red-black_tree"><span style="color:#444;background-color:transparent">Red-Black Tree</span></a></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="https://en.wikipedia.org/wiki/Splay_tree"><span style="color:#444;background-color:transparent">Splay Tree</span></a></td>
    <td class="tg-xfh8"><span style="color:black;background-color:#E3E3E3">N/A</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-xfh8"><span style="color:black;background-color:#E3E3E3">N/A</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/AVL_tree"><span style="color:#444;background-color:transparent">AVL Tree</span></a></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/K-d_tree"><span style="color:#444;background-color:transparent">KD Tree</span></a></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">Θ(log(n))</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
  </tr>
  <tr>
    <td class="tg-0bb7"><span style="font-weight:normal;background-color:#FAFAFA">Algorithm</span></td>
    <td class="tg-0bb7" colspan="3"><span style="font-weight:normal;background-color:#FAFAFA">Time Complexity</span></td>
    <td class="tg-0bb7"><span style="font-weight:normal;background-color:#FAFAFA">Space Complexity</span></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-0bb7"></td>
    <td class="tg-0bb7"><span style="font-weight:normal;background-color:#FAFAFA">Best</span></td>
    <td class="tg-0bb7"><span style="font-weight:normal;background-color:#FAFAFA">Average</span></td>
    <td class="tg-0bb7"><span style="font-weight:normal;background-color:#FAFAFA">Worst</span></td>
    <td class="tg-0bb7"><span style="font-weight:normal;background-color:#FAFAFA">Worst</span></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/Quicksort"><span style="color:#444;background-color:transparent">Quicksort</span></a></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">Ω(n log(n))</span></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">Θ(n log(n))</span></td>
    <td class="tg-17ss"><span style="color:black;background-color:#FF8989">O(n^2)</span></td>
    <td class="tg-dh1n"><span style="color:black;background-color:#C8EA00">O(log(n))</span></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/Merge_sort"><span style="color:#444;background-color:transparent">Mergesort</span></a></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">Ω(n log(n))</span></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">Θ(n log(n))</span></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">O(n log(n))</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/Timsort"><span style="color:#444;background-color:transparent">Timsort</span></a></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">Ω(n)</span></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">Θ(n log(n))</span></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">O(n log(n))</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/Heapsort"><span style="color:#444;background-color:transparent">Heapsort</span></a></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">Ω(n log(n))</span></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">Θ(n log(n))</span></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">O(n log(n))</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(1)</span></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/Bubble_sort"><span style="color:#444;background-color:transparent">Bubble Sort</span></a></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">Ω(n)</span></td>
    <td class="tg-17ss"><span style="color:black;background-color:#FF8989">Θ(n^2)</span></td>
    <td class="tg-17ss"><span style="color:black;background-color:#FF8989">O(n^2)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(1)</span></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/Insertion_sort"><span style="color:#444;background-color:transparent">Insertion Sort</span></a></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">Ω(n)</span></td>
    <td class="tg-17ss"><span style="color:black;background-color:#FF8989">Θ(n^2)</span></td>
    <td class="tg-17ss"><span style="color:black;background-color:#FF8989">O(n^2)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(1)</span></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/Selection_sort"><span style="color:#444;background-color:transparent">Selection Sort</span></a></td>
    <td class="tg-17ss"><span style="color:black;background-color:#FF8989">Ω(n^2)</span></td>
    <td class="tg-17ss"><span style="color:black;background-color:#FF8989">Θ(n^2)</span></td>
    <td class="tg-17ss"><span style="color:black;background-color:#FF8989">O(n^2)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(1)</span></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="https://en.wikipedia.org/wiki/Tree_sort"><span style="color:#444;background-color:transparent">Tree Sort</span></a></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">Ω(n log(n))</span></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">Θ(n log(n))</span></td>
    <td class="tg-17ss"><span style="color:black;background-color:#FF8989">O(n^2)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/Shellsort"><span style="color:#444;background-color:transparent">Shell Sort</span></a></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">Ω(n log(n))</span></td>
    <td class="tg-17ss"><span style="color:black;background-color:#FF8989">Θ(n(log(n))^2)</span></td>
    <td class="tg-17ss"><span style="color:black;background-color:#FF8989">O(n(log(n))^2)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(1)</span></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/Bucket_sort"><span style="color:#444;background-color:transparent">Bucket Sort</span></a></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Ω(n+k)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Θ(n+k)</span></td>
    <td class="tg-17ss"><span style="color:black;background-color:#FF8989">O(n^2)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="http://en.wikipedia.org/wiki/Radix_sort"><span style="color:#444;background-color:transparent">Radix Sort</span></a></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Ω(nk)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Θ(nk)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(nk)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n+k)</span></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="https://en.wikipedia.org/wiki/Counting_sort"><span style="color:#444;background-color:transparent">Counting Sort</span></a></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Ω(n+k)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">Θ(n+k)</span></td>
    <td class="tg-2hxg"><span style="color:black;background-color:#53D000">O(n+k)</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(k)</span></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-xg43"><a href="https://en.wikipedia.org/wiki/Cubesort"><span style="color:#444;background-color:transparent">Cubesort</span></a></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">Ω(n)</span></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">Θ(n log(n))</span></td>
    <td class="tg-4aaz"><span style="color:black;background-color:#FFC543">O(n log(n))</span></td>
    <td class="tg-gdr6"><span style="color:black;background-color:yellow">O(n)</span></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
</tbody>
</table>
<p>Source: <a href="https://www.bigocheatsheet.com/">https://www.bigocheatsheet.com/</a></p>