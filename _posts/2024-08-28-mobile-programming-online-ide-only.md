---
layout: post
title: Mobile Programming Online IDE Only
category: internet
tags: [mobile, program, web, android, ios]
featuredimage: 
description: Learn coding syntax for mobile apps .
canonicalurl: https://0fajarpurnama0.github.io/tools/2024/08/28/mobile-programming-online-ide-only
---
# Flutter

## Dart Basic Syntax

{% highlight dart %}
// Dart basic sintax from https://dart.dev/language

// 5. Imports
// Importing core libraries
import 'dart:math';
import 'dart:async';

void main() {
  
  // 1. Print
  print("1. Print");
  print('Hello, World!');
 
  // 2. Variables
  print("\n 2. Variables");
  var name = 'Voyager I';
  var year = 1977;
  var antennaDiameter = 3.7;
  
  // 2.1 Arrays
  var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
  
  // 2.2 Objects
  var image = {
    'tags': ['saturn'],
    'url': '//path/to/saturn.jpg'
  };
  
  print(name);
  print(year);
  print(antennaDiameter);
  print(flybyObjects);
  print(image);
  
  // 3. Control flow statements
  print("\n 3. Control flow statements");
  
  // 3.1 Conditional
  if (year >= 2001) {
    print('21st century');
  } else if (year >= 1901) {
    print('20th century');
  }
  
  // 3.2 Loops
  for (final object in flybyObjects) {
    print(object);
  }

  for (int month = 1; month <= 12; month++) {
    print(month);
  }

  while (year < 1980) {
    year += 1;
    print(year);
  }
  
  // 4. Functions
  print("\n 4.Functions");
  int fibonacci(int n) {
    if (n == 0 || n == 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  var result = fibonacci(20);
  print(result);
  
  flybyObjects.where((name) => name.contains('turn')).forEach(print);
  
  // Using Class
  print("\n 6. Classes");
  var voyager = Spacecraft('Voyager I', DateTime(1977, 9, 5));
  voyager.describe();

  var voyager3 = Spacecraft.unlaunched('Voyager III');
  voyager3.describe();
  
  
  // Using Enum
  print("\n 7. Enum");
  
  final yourPlanet = Planet.uranus;

  if (!yourPlanet.isGiant) {
    print('Your planet is not a "giant planet".');
  }
  
  // from exeption
  try {
    // Some code that might throw an exception
    divide(10, 0); // Division by zero
  } catch (e) {
    print('Exception caught: $e');
  }
}

// 6. Classes
class Spacecraft {
  String name;
  DateTime? launchDate;

  // Read-only non-final property
  int? get launchYear => launchDate?.year;

  // Constructor, with syntactic sugar for assignment to members.
  Spacecraft(this.name, this.launchDate) {
    // Initialization code goes here.
  }

  // Named constructor that forwards to the default one.
  Spacecraft.unlaunched(String name) : this(name, null);

  // Method.
  void describe() {
    print('Spacecraft: $name');
    // Type promotion doesn't work on getters.
    var launchDate = this.launchDate;
    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}

// 7. Enum
enum PlanetType { terrestrial, gas, ice }

/// Enum that enumerates the different planets in our solar system
/// and some of their properties.
enum Planet {
  mercury(planetType: PlanetType.terrestrial, moons: 0, hasRings: false),
  venus(planetType: PlanetType.terrestrial, moons: 0, hasRings: false),
  // ···
  uranus(planetType: PlanetType.ice, moons: 27, hasRings: true),
  neptune(planetType: PlanetType.ice, moons: 14, hasRings: true);

  /// A constant generating constructor
  const Planet(
      {required this.planetType, required this.moons, required this.hasRings});

  /// All instance variables are final
  final PlanetType planetType;
  final int moons;
  final bool hasRings;

  /// Enhanced enums support getters and other methods
  bool get isGiant =>
      planetType == PlanetType.gas || planetType == PlanetType.ice;
}

// 8. Inheritance
class Orbiter extends Spacecraft {
  double altitude;

  Orbiter(super.name, DateTime super.launchDate, this.altitude);
}

// 9. Mixins
mixin Piloted {
  int astronauts = 1;

  void describeCrew() {
    print('Number of astronauts: $astronauts');
  }
}

// 10. Interfaces and abstract classes
abstract class Describable {
  void describe();

  void describeWithEmphasis() {
    print('=========');
    describe();
    print('=========');
  }
}

// 11. Async
const oneSecond = Duration(seconds: 1);
// ···
Future<void> printWithDelay(String message) async {
  await Future.delayed(oneSecond);
  print(message);
}

// 12. Exception
double divide(int a, int b) {
  if (b == 0) {
    throw Exception('Cannot divide by zero');
  }
  return a / b;
}
{% endhighlight %}
[Run on Dartpad](https://dartpad.dev/?id=52d995a5b5df90fb00d2137c0aac9fce)

## Minimal Flutter App

{% highlight dart %}
import 'package:flutter/material.dart';

void main() {
  runApp(
    const Center(
      child: Text(
        'Hello, world!',
        textDirection: TextDirection.ltr,
      ),
    ),
  );
}
{% endhighlight %}

## Basic Widgets

{% highlight dart %}
import 'package:flutter/material.dart';

class MyAppBar extends StatelessWidget {
  const MyAppBar({required this.title, super.key});

  // Fields in a Widget subclass are always marked "final".

  final Widget title;

  @override
  Widget build(BuildContext context) {
    return Container( // CONTAINER
      height: 56, // in logical pixels
      padding: const EdgeInsets.symmetric(horizontal: 8),
      decoration: BoxDecoration(color: Colors.blue[500]),
      // Row is a horizontal, linear layout.
      child: Row(
        children: [
          const IconButton(
            icon: Icon(Icons.menu),
            tooltip: 'Navigation menu',
            onPressed: null, // null disables the button
          ),
          // Expanded expands its child
          // to fill the available space.
          Expanded(
            child: title,
          ),
          const IconButton(
            icon: Icon(Icons.search),
            tooltip: 'Search',
            onPressed: null,
          ),
        ],
      ),
    );
  }
}

class MyScaffold extends StatelessWidget {
  const MyScaffold({super.key});

  @override
  Widget build(BuildContext context) {
    // Material is a conceptual piece
    // of paper on which the UI appears.
    return Material(
      // Column is a vertical, linear layout.
      child: Column(
        children: [
          MyAppBar(
            title: Text(
              'Example title',
              style: Theme.of(context) //
                  .primaryTextTheme
                  .titleLarge,
            ),
          ),
          const Expanded(
            child: Center(
              child: Text('Hello, world!'),
            ),
          ),
        ],
      ),
    );
  }
}

void main() {
  runApp(
    const MaterialApp(
      title: 'My app', // used by the OS task switcher
      home: SafeArea(
        child: MyScaffold(),
      ),
    ),
  );
}
{% endhighlight %}

## Basic Widgets

{% highlight dart %}
{% endhighlight %}