---
layout: post
title: Starting Computer Programming
categories: internet
tags: [computer, programming, Internet, C, Pascal]
featuredimage: https://images.hive.blog/DQmNuc8kYiYp5vPe1K1VrMgiAG3fgCnuoMDgvPEgjHJXT9T/Figure%200.2%20I%20Speak%20Many%20Programming%20Language.png
description: This article introduces computer programming for those who would like to dive into the world of programming starting with Pascal and C lang.
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/03/29/starting-computer-programming
---
<p>This section would like to introduce computer programming to starters, and for those who would like to dive into the world of programming. No advance topic will be covered here, instead focuses on wide of simple and easy programmings. We understand that you might not master the basics of programming after reading all the materials, but we expect you to have ideas of what materials you have read when you want to write a program. The author for example knows that he/she needs to use "if else" and "for" in his/her simple login program, but still searches on the Internet for the correct syntax in using those functions. Each programming language like Pascal, C, C++, Python,  and Ruby had their own form of syntax but the pattern is similar, more ever the idea is still the same.</p>

<h2 id="Course Outline">Course Outline</h2>
<h3 id="Course Overview and Introduction">Course Overview and Introduction</h3>
<p>This section would like to introduce computer programming to starters, and for those who would like to dive into the world of programming. No advance topic will be covered here, instead focuses on wide of simple and easy programmings. If you ever saw a program, or someone programming and it is hard, it's because you have never started in programming. It happens to me too, when someone just suddenly shows his program which hurts my eyes. I started learning programming which only contains 5 lines, then little by little increase the amount that I have wrote. The program that used to give me headache on Figure 1, now it's simple program that I could write.</p>

{% highlight html %}
<html>
<head>
<title>Practice PHP</title>
</head>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
	Username: <input type="text" name="user"><br>
	Password: <input type="text" name="pass"><br>
	<input type="submit">
</form>
{% endhighlight %}
{% highlight php %}
<?php 
$username = array("Fajar","John","emanresu");
$password = array("Purnama","Doe","drowssap");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
$user = $_POST['user'];
$pass = $_POST['pass'];

//var_dump($username[0] == $user and $password[1] == $pass);

for ($c = 0; $c <= count($username)-1; $c++) {

if ($user == $username[$c] and $pass == $password[$c]) {
echo "Welcome!";
break;
} elseif ($c < count($username)-1) {
continue;
} else {
echo "Wrong username or password";
}
}
}

?>
{% endhighlight %}
{% highlight html %}
</body>
</html>
{% endhighlight %}

<p>Figure 0.1 My practice program in PHP</p>

<h3 id="Learning Objective">Learning Objective</h3>
<p>This topic would like to cover only the simple part of the technical in programming. We can simply express in Figure 2.
<ul>
	<li>It is hoped that you are able to write a simple program and it works.</li>
	<li>No need to do analysis of the algorithms (efficiency, structures, etc).</li>
	<li>You are only expected to solve mini problems by making a short script.</li>
	<li>Ultimately at the end of this course you will be familiar with programming and easily adapt with different programming languages.</li>
</ul>

<img src="https://images.hive.blog/DQmNuc8kYiYp5vPe1K1VrMgiAG3fgCnuoMDgvPEgjHJXT9T/Figure%200.2%20I%20Speak%20Many%20Programming%20Language.png" alt="C C++ Python Javascript Java Ruby Pascal PHP ..." />
<p>Figure 0.2 I speak many programming language</p>

<h3 id="Assessment and Measurement">Assessment and Measurement</h3>
<p>It's up to you of how to do this course but it is recommended to do the following:</p>
<ol>
	<li>Read the contents.</li>
	<li>Do the quizzes to enrich your understanding of the content.</li>
	<li>Submit assignments whether they are essays or scripts.</li>
	<li>Try your programs in virtual programming lab (VPL).</li>
	<li>We never meant to place difficult materials so aim for perfect scores before proceeding to the next material since attempting a grade is unlimited.</li>
</ol>
<p>Once again the top instructions are just our recommendation, do the course as you wish.</p>
<ul>
	<li>If your overall score is below 50% you should complete more materials or aim for higher grade.</li>
	<li>If it's above you are ready to dive into computer programming world.</li>
	<li>If you got 100% then you should have no problem in adapting or learning new programming languages.</li>
</ul>

<h2 id="1. About Computer Programming">1. About Computer Programming</h2>
<h3 id="1.1 Definition">1.1 Definition</h3>
<p>A program is a set of instructions to do certain tasks. On daily life for example a program to turn on a computer:</p>
<ol>
	<li>Plug the cable power.</li>
	<li>Turn on the computer.</li>
	<li>Turn on the display.</li>
	<li>Choose you operating system.</li>
	<li>Login.</li>
</ol>

<p>There are variety of ways to do stuffs, and it's same with a program. That's why there tends to be many programs out there but do similar tasks. Usually programs tends to be unique for each people writing them, since they have their own ways. For example eating at a food court, you can:</p>

<ol>
	<li>Pick a food.</li>
	<li>Eat food.</li>
	<li>Pay for the food.</li>
</ol>

<p>Or in KFC or McDonalds:</p>

<ol>
	<li>Pick a food.</li>
	<li>Pay for the food.</li>
	<li>Eat the food.</li>
</ol>

<p>So a computer program is defined as a set of instructions that does specific things when executed by a computer. For example command 'printf("Hello World!!")' in C language will output a text display "Hello World!!"</p>

<h3 id="1.2 Application">1.2 Application</h3>
<p>With computers today lots tasks are being helped by computers. They have done lots of things on our behalf for example on Figure 1.2.1 a calculator program that does calculation for us in a very short time. Figure 1.2.2 is an excel to perform tabulations where we can arrange our data or informations in form of tables. It can even perform calculations and other processes. Last example on Figure 1.2.3 is a web browser which is an application we used to surf the Internet for informations.</p>

<img src="https://images.hive.blog/DQmUY8ajxKWfvxQE3YTY5kZQPGmtBZb2hongey8MpLoM7Qn/Figure%201.2.1%20Calculator%20Application.png" alt="Windows Calculator Application" />
<p>Figure 1.2.1 Calculator Application</p>

<img src="https://images.hive.blog/DQmb4yY9m9tgNQfFT5ZPCi9wnMph4Q6KC1Y4HGcyKedfgPx/Figure%201.2.2%20Excel%20application%20example.png" alt="Libre Office Calc" />
<p>Figure 1.2.2 Excel application example</p>

<img src="https://images.hive.blog/DQmZd6kKBoE9cXCTa11djpzSYDapRNz9Z12pv6wqMWPP48m/Figure%201.2.3%20Excel%20application%20example.png" alt="Ice Weasel Browser" />
<p>Figure 1.2.3 Web Browser</p>

<h3 id="1.3 Popular Programming Languages">1.3 Popular Programming Languages</h3>
<p>Below is a list of todays popular programming language. I started with Pascal and C.</p>
<ul>
	<li>C</li>
	<li>C++</li>
	<li>C#</li>
	<li>Visual Basic</li>
	<li>Python</li>
	<li>R</li>
	<li>Ruby</li>
	<li>Perl</li>
	<li>PHP</li>
	<li>Java</li>
	<li>Javascript</li>
	<li>HTML</li>
	<li>CSS</li>
	<li>Ladder Logic</li>
	<li>Verilog HDL</li>
	<li>Assembly</li>
</ul>

<h2 id="2. Start Writing">2. Start Writing</h2>
<h3 id="2.1 Note">2.1 Note</h3>
<p>There are many tutorials already available online if you want to start learning a programming language, but here we will try to give you a point of where to start, provide a comfortable track until you become familiar with beginner programming. I started with Pascal then C, so this will be first example for every content. Examples are written in various programming language (in the future we would like to make it available in all programming language). If you want to start quickly I suggest viewing the content that had online compiler available (NOTE: Online compiler coming soon!!). (Python, PHP, Ruby, C++ coming soon)</p>

<p>Following suggest setting up environments if you want to do programming at you own computer but you may skip to next section if don't want the hassle and later on you may come back here. The programmings that will be cover are freeware or opensource so programming like Visual Basic or Matlab will not be covered here. What you need for this course are:</p>

<ol>
	<li><b>Operating System (OS):</b> we suggest using Linux because most of the compiler are installed by default, but you may use other like MAC or Windows.</li>
	<li><b>Text editor:</b> anything is ok even the simplest as notepad and wordpad, all that is needed is being able to write the script and save it. Some good example editors with color are VIM, GVIM, Notepad ++, or you may have an editor of certain programming language like Turbo Pascal and Codeblocks.</li>
	<li><b>Compiler:</b> this is the last thing you need, most Linux distribution already equipped with a compiler. If you don't know or don't have the compiler just search on the Internet for Pascal compiler for example. For Windows may asked you to download Turbo Pascal, for Linux mainly Ubuntu or Debian distribution may ask you to install by type "apt-get install fp-compiler". If you want C compiler search on the Internet for C compiler.</li>
</ol>

<h3 id="2.2 First Script Pseudocode">2.2 First Script Pseudocode</h3>

<p>Pseudocode is in freeform where currently there are not defined rules. The only concept is make the pseudocode as easiest to understand as possible.</p>

<p>Simplest "Hello World!" code.</p>
```
INPUT: None
PROCESS: None
OUTPUT: PRINT "Hello, world!"
```

<p>Including variables code.</p>

```
INPUT: None

INITIALIZE:
  firstname = "Fajar"
  lastname = "Purnama"
  a = 9
  b = 4

OUTPUT:
  PRINT "Hi! My name is " + firstname + lastname
  PRINT "I would like to perform simple math operation"

PROCESS:
  c = a + b
  d = a - b
  e = a * b
  f = a DIV b
  g = a MOD b

OUTPUT:
  PRINT a + " + " + b + " = " + c
  PRINT b + " - " + a + " = " + d
  PRINT a + " * " + b + " = " + e
  PRINT b + " div " + a + " = " + f
  PRINT b + " mod " + a + " = " + g
```

<p>Including user input code.</p>
```
INITIALIZE:
  firstname
  lastname
  a
  b

OUTPUT:
  PRINT "What is your firstname? "
INPUT:
  READ firstname
OUTPUT:
  PRINT "What is your lastname? "
INPUT:
  READ lastname

OUTPUT:
  PRINT "Hi! My name is " + firstname + lastname + ". I would like to perform simple math operation"

OUTPUT:
  PRINT "Input first number: "
INPUT:
  READ a
OUTPUT:
  PRINT "Input second number: "
INPUT:
  READ b

PROCESS:
  c = a + b
  d = a - b
  e = a * b
  f = a / b

OUTPUT:
  PRINT a + " + " + b + " = " + c
  PRINT a + " - " + b + " = " + d
  PRINT a + " * " + b + " = " + e
  PRINT a + " / " + b + " = " + f
```

<h3 id="2.3 First Script Flowchart">2.3 First Script Flowchart</h3>

<p>For flowchart, each boxes have different functions and try to minimize the arrows.</p>

{% mermaid %}
graph LR
  A["Rectangle (Process)"]
  B[/"Parallelogram (Input/Output)"/]
  C{"Rhombus (Decision)"}
  D[/"Trapezoid (Document)"\]
  E(("Circle (Terminal)"))
  F{{"Hexagon (Manual Operation)"}}
  G("Ellipse (Terminator)")
{% endmermaid %}

<p>Simplest "Hello World!" flowchart.</p>
{% mermaid %}
graph TD
  A("Start") --> B[/"Hello, world!"/]
  B --> C(End)
{% endmermaid %}

<p>Including variables flowchart.</p>


<p>Including user input flowchart.</p>


<h3 id="2.4 First Script in Pascal">2.4 First Script in Pascal</h3>
<p>Here's a link to one of online pascal compiler provided by <a href="http://www.tutorialspoint.com/compile_pascal_online.php">http://www.tutorialspoint.com/compile_pascal_online.php</a>. You can search the Internet for online compilers. The code for now is not colored, we suggest copy and pasting the code into an online compiler, or your editor if supports color like GVIM and Notepad ++. The "Hello World!" script is very famous in programming world to be as the first program to write. The goal of the program is to produce an output "Hello World!".</p>

{% highlight pascal %}
Program HelloWorld;
begin
	writeln('Hello, world!');
end.
{% endhighlight %}

<p>If you use the online compiler from tutorialspoint, overwrite the script, compile and execute. If you're using Linux save the file into "hello.pas" for example and write "fpc hello.pas". It will produce an executable file "hello" you type "./hello" to run the file.</p>

<p>The next lesson is using variables. We can define a variable as a boolean, number, string, and many other variables. It's recommended to copy, paste, run the script, and see its output first. That way is easier than thoroughly identifying the code first. The program example below is defining "firstname" and "lastname" as a string with the value of "firstname" is "Fajar" and "lastname" is Purnama. Then a variable from "a" to "g" is defined as integer with "a" and "b" initialized. Then we perform simple math operation.</p>

{% highlight pascal %}
program variables;
 
var
	firstname, lastname: string;
	a,b,c,d,e,f,g : integer;
 
begin
	firstname := 'Fajar';
	lastname := 'Purnama';
 
	write('Hi! My name is ', firstname, lastname); writeln('I would like to perform simple math operation');
 
	a := 9;
	b := 4;
	c := a+b;
	d := a-b;
	e := a*b;
	f := a div b;
	g := a mod b;
 
	writeln(a,' + ',b,' = ',c);
	writeln(b,' - ',a,' = ',d);
	writeln(a,' * ',b,' = ',e);
	writeln(b,' div ',a,' = ',f);
	writeln(b,' mod ',a,' = ',g);
end.
{% endhighlight %}

<p>The last of this section is using user input. If the previous script we manually define "firstname", "lastname", "a", and "b", next we let the user define them after the program is run. Simply use the syntax "read" or "readln".</p>

{% highlight pascal %}
program variables;
 
var
	firstname, lastname: string;
	a,b,c,d,e : integer;
	f : real;
 
begin
	write('What is your firstname? '); readln(firstname);
	write('What is your lastname? '); readln(lastname);
 
	write('Hi! My name is ', firstname, lastname); writeln('. I would like to perform simple math operation');
 
	write('Input first number: '); readln(a);
	write('Input second number: '); readln(b);
 
	c := a+b;
	d := a-b;
	e := a*b;
	f := a / b;
 
	writeln(a,' + ',b,' = ',c);
	writeln(a,' - ',b,' = ',d);
	writeln(a,' * ',b,' = ',e);
	writeln(a,' / ',b,' = ',f);
end.
{% endhighlight %}

<h3 id="2.5 First Script in C">2.5 First Script in C</h3>

<p>Here's a link to one of online C compiler provided by http://www.tutorialspoint.com/compile_c_online.php. You can search the Internet for online compilers. The code for now is not colored, we suggest copy and pasting the code into an online compiler, or your editor if supports color like GVIM and Notepad ++. The "Hello World!" script is very famous in programming world to be as the first program to write. The goal of the program is to produce an output "Hello World!".</p>

{% highlight c %}
#include<stdio.h>

int main() {
	printf("Hello, World!");
	return 0;
}
{% endhighlight %}

<p>If you use the online compiler from tutorialspoint, overwrite the script, compile and execute. If you're using Linux save the file into "hello.c" for example and write "gcc hello.c -o hello". It will produce an executable file "hello", then type "./hello" to run the file.</p>

<p>The next lesson is using variables. We can define a variable as a boolean, number, string, and many other variables. It's recommended to copy, paste, run the script, and see its output first. That way is easier than thoroughly identifying the code first. The program example below is defining "firstname" and "lastname" as a string with the value of "firstname" is "Fajar" and "lastname" is Purnama. Then a variable from "a" to "g" is defined as integer with "a" and "b" initialized. Then we perform simple math operation.</p>

{% highlight c %}
#include <stdio.h>

int main() {

	char * firstname = "Fajar";
	char * lastname = "Purnama";
	
	printf("Hi!, My name is %s %s.\n", firstname, lastname);
	printf("I would like to do simple math calculation:\n");
	
	int a,b,c,d,e,f,g;
	
	a = 6;
	b = 4;
	c = a + b;
	d = a - b;
	e = a * b;
	f = a / b;
	g = a % b;
	
	printf("%d + %d = %d\n", a, b, c);
	printf("%d - %d = %d\n", a, b, d);
	printf("%d * %d = %d\n", a, b, e);
	printf("%d / %d = %d\n", a, b, f);
	printf("%d mod %d = %d\n", a, b, g);
	
	return 0;
}
{% endhighlight %}

<p>The last of this section is using user input. If the previous script we manually define "firstname", "lastname", "a", and "b", next we let the user define them after the program is run. Simply use the syntax "scanf". For the numbers we have to change for "a" to "&a" and so. That's covered in advance topic for now.</p>

{% highlight c %}
#include <stdio.h>

int main () {

	char firstname[20], lastname[20];
	
	printf("What is your first name? "); scanf("%s", firstname);
	printf("What is your last name? "); scanf("%s", lastname);
	
	printf("Hi!, My name is %s %s.\n", firstname, lastname);
	printf("I would like to do simple math calculation:\n");
	
	float a,b,c,d,e,f;
	
	printf("Input first number: "); scanf("%f", &a);
	printf("Input second number: "); scanf("%f", &b);
	
	c = a + b;
	d = a - b;
	e = a * b;
	f = a / b;
	
	printf("%f + %f = %f\n", a, b, c);
	printf("%f - %f = %f\n", a, b, d);
	printf("%f * %f = %f\n", a, b, e);
	printf("%f / %f = %f\n", a, b, f);
	
	return 0;
}	
{% endhighlight %}

<h2 id="3. Conditional and Functions">3. Conditional and Functions</h2>

<h3 id="3.1 Note">3.1 Note</h3>

<h3 id="3.2 Pseudocode">3.2 Pseudocode</h3>

<p>The following is the simplest conditional program. If the input is "John" it will output "Hello John", if not it will output "Wrong Username".</p>

<p>Next program if we want more conditions, say that Mary is included as a username:</p>

<p>We can also use "or" for the above program:</p>

<p>If we want to include password as well:</p>

<p>Say this program is used on many pages or included in other programs. Should we paste the whole code? we can, but we prefer to refer this program as a procedure. There's another famous term called function, similar with only difference it returns a value.</p>

<h3 id="3.3 Flowchart">3.3 Flowchart</h3>

<p>The following is the simplest conditional program. If the input is "John" it will output "Hello John", if not it will output "Wrong Username".</p>

<p>Next program if we want more conditions, say that Mary is included as a username:</p>

<p>We can also use "or" for the above program:</p>

<p>If we want to include password as well:</p>

<p>Say this program is used on many pages or included in other programs. Should we paste the whole code? we can, but we prefer to refer this program as a procedure. There's another famous term called function, similar with only difference it returns a value.</p>

<h3 id="3.4 In Pascal">3.4 In Pascal</h3>
<p>The following is the simplest conditional program. If the input is "John" it will output "Hello John", if not it will output "Wrong Username". We personally think that no need for more explanation, just try the programs. This course is designed simple, explanations are for more advance materials. In Pascal ":=" gives a value to a variable while "=" compares whether "a" is equal to "b". It will return TRUE if correct and FALSE if incorrect.</p>


{% highlight pascal %}
program simple_login_1;
 
var
	username: string;
 
begin
	write('username: '); readln(username);
 
	if username = 'John' then
	writeln('Hello ', username)
	else
	writeln('Wrong username');
 
	writeln('Program terminate');
end.
{% endhighlight %}

<p>Next program if we want more conditions, say that Mary is included as a username:</p>

{% highlight pascal %}
program simple_login_2;
 
var
	username: string;
 
begin
	write('username: '); readln(username);
 
	if username = 'John' then
	writeln('Hello ', username)
	else if username = 'Mary' then
	writeln('Hello ', username)
	else
	writeln('Wrong username');
 
	writeln('Program terminate');
end.
{% endhighlight %}

<p>We can also use "or" for the above program:</p>

{% highlight pascal %}
program simple_login_2;
 
var
	username, password: string;
 
begin
	write('username: '); readln(username);
 
	if (username = 'John') or (username = 'Mary') then
	writeln('Hello ', username)
	else
	writeln('Wrong username');
 
	writeln('Program terminate');
end.
{% endhighlight %}

<p>If we want to include password as well:</p>

{% highlight pascal %}
program simple_login_4;
 
var
	username, password: string;
 
begin
	write('username: '); readln(username);
	write('password: '); readln(password);
 
	if (username = 'John') and (password = 'Doe') then
	writeln('Hello ', username,' ', password)
	else if (username = 'Mary') and (password = 'Jane') then
	writeln('Hello ', username,' ', password)
	else if (username = 'Fajar') and (password = 'Purnama') then
	writeln('Hello ', username,' ', password)
	else
	writeln('Wrong username or password!');
 
	writeln('Program terminate!');
end.
{% endhighlight %}

<p>Say this program is used on many pages or included in other programs. Should we paste the whole code? we can, but we prefer to refer this program as a procedure. There's another famous term called function, similar with only difference it returns a value.</p>

{% highlight pascal %}
program simple_login_5;
 
var
	username, password: string;
 
procedure simple_login(username:string; password:string);
	begin
	if (username = 'John') and (password = 'Doe') then
	writeln('Hello ', username,' ', password)
	else if (username = 'Mary') and (password = 'Jane') then
	writeln('Hello ', username,' ', password)
	else if (username = 'Fajar') and (password = 'Purnama') then
	writeln('Hello ', username,' ', password)
	else
	writeln('Wrong username or password!');
 
	writeln('Program terminate!');
	end;
 
begin
	write('username: '); readln(username);
	write('password: '); readln(password);
	simple_login(username, password);
end.
{% endhighlight %}

<h3 id="3.5 In C">3.5 In C</h3>
<p>Doing the simple login on C is not as simple as Pascal because of the string factor, but first we want to show that the concept of if else remains the same. The program states if the user input "1" it will say "the value is 1", if not it will say "the value is not 1". At the end of the program we use the  function strncmp to compare strings since the usual method doesn't work. If the compare string is the same "string1 == test" then it will output 0. The final input in strncmp "20" is the max number of character, you may change it as you want.</p>

{% highlight c %}
#include <stdio.h>

int main() {
	int a,b;
	printf("input a value: "); scanf("%d", &a);
	
	if (a == 1) {
	printf("a is equal 1\n");
	} else {
	printf("a is not equal to 1\n");
	}
	
	char string1[] = "test";
	
	b = strncmp(string1, "test", 20);
	printf("b is %d\n", b);
	printf("is b == 0? %d(yes)", b == 0);
	
	return 0;
}
{% endhighlight %}

<p>The following is the simplest conditional program. If the input is "John" it will output "Hello John", if not it will output "Wrong Username". We personally think that no need for more explanation, just try the programs. This course is designed simple, explanations are for more advance materials. In C "=" gives a value to a variable while "==" compares whether "a" is equal to "b". It will return "1" (TRUE) if correct and "0" (FALSE) if incorrect. C seems intimidating at first, but in our experience, if we learn C, we can easily adapt to different programming languages.</p>

{% highlight c %}
#include <stdio.h>

int main() {

	char username[20];
	printf("Username: "); scanf("%s", username);
	
	if (strncmp(username, "John", 20) == 0) {
		printf("Hello %s.\n", username);
	} else {
		printf("Wrong username!\n");
	}
	
	return 0;
}
{% endhighlight %}

<p>Next program if we want more conditions, say that Mary is included as a username:</p>

{% highlight c %}
#include <stdio.h>

int main() {

	char username[20];
	printf("Username: "); scanf("%s", username);
	
	if (strncmp(username, "John", 20) == 0) {
		printf("Hello %s.\n", username);
	} else if (strncmp(username, "Mary", 20) == 0) {
		printf("Hello %s.\n", username);
	} else {
		printf("Wrong username!\n");
	}
	
	return 0;
}
{% endhighlight %}

<p>We can also use "or"/"||" for the above program:</p>

{% highlight c %}
#include <stdio.h>

int main() {

	char username[20];
	printf("Username: "); scanf("%s", username);
	
	if ((strncmp(username, "John", 20) ) == 0 || (strncmp(username, "Mary", 20)) == 0) {
		printf("Hello %s.\n", username);
	} else {
		printf("Wrong username!\n");
	}
	
	return 0;
}
{% endhighlight %}

<p>If we want to include password as well:</p>
{% highlight c %}
#include <stdio.h>

int main() {

	char username[20], password[20];
	
	printf("Username: "); scanf("%s", username);
	printf("Password: "); scanf("%s", password);
	
	if ((strncmp(username, "John", 20) == 0) && (strncmp(password, "Doe", 20)) == 0) {
		printf("Hello %s %s.\n", username, password);
	} else if ((strncmp(username, "Mary", 20) == 0) && (strncmp(password, "Jane", 20) == 0)) {
		printf("Hello %s %s.\n", username, password);
	} else if ((strncmp(username, "Fajar", 20) == 0) && (strncmp(password, "Purnama", 20)) == 0) {
		printf("Hello %s %s.\n", username, password);
	} else {
		printf("Wrong username or password!\n");
	}
	
	return 0;
}
{% endhighlight %}

<p>Say this program is used on many pages or included in other programs. Should we paste the whole code? we can, but we prefer to refer this program as a void. There's another famous term called function, similar with only difference it returns a value.</p>

{% highlight c %}
#include <stdio.h>

void login(char username[20], char password[20]) {

	if ((strncmp(username, "John", 20) == 0) && (strncmp(password, "Doe", 20)) == 0) {
		printf("Hello %s %s.\n", username, password);
	} else if ((strncmp(username, "Mary", 20) == 0) && (strncmp(password, "Jane", 20) == 0)) {
		printf("Hello %s %s.\n", username, password);
	} else if ((strncmp(username, "Fajar", 20) == 0) && (strncmp(password, "Purnama", 20)) == 0) {
		printf("Hello %s %s.\n", username, password);
	} else {
		printf("Wrong username or password!\n");
	}
}
	
int main() {
	char username[20], password[20];
	
	printf("Username: "); scanf("%s", username);
	printf("Password: "); scanf("%s", password);
	login(username, password);
	return 0;
}
{% endhighlight %}

<h2 id="4. Arrays and Loops">4. Arrays and Loops</h2>

<h3 id="4.1 Note">4.1 Note</h3>

<h3 id="4.2 Pseudocode">4.2 Pseudocode</h3>

<p>This is not a formal definition but we see array as place to store many values. If you assign a variable as an array it may store many numbers, names, values, etc. For example we store the username and password into the array first hand:</p>

<p>Or fill afterwards.</p>

<p>If we have many username and password, and we want to write a login script as in section 3 it will be very difficult. Instead why not the machine do it program? In other words we write a program telling the machine to automatically write the script. Our method here is using the loop method as following.</p>

<p>The program above uses for loop up to 6x (0-5), the first for loop shows that the value if "i" changes in order from 0 to 5 every iteration, and the next for loop shows we can call the username and password using shorter script. Next let's implement the section 3 login script (again copy, paste, and try the program first for easier approach).</p>

<p>The code above uses "begin" and "end" if we want to put more statement inside the if else. The "break" function forcefully ends the for loop if the correct username and password has been found. On the other hand if the for loop already on it's last iteration "5" and no username and password had been found, it will write "Wrong username or password". Other than For there's also While, maybe more at other programming language. "For" specifies the number of iterations, while "while" sets a goal which the process will not stop until it reaches its goal.</p>

<h3 id="4.3 Flowchart">4.3 Flowchart</h3>

<p>This is not a formal definition but we see array as place to store many values. If you assign a variable as an array it may store many numbers, names, values, etc. For example we store the username and password into the array first hand:</p>

<p>Or fill afterwards.</p>

<p>If we have many username and password, and we want to write a login script as in section 3 it will be very difficult. Instead why not the machine do it program? In other words we write a program telling the machine to automatically write the script. Our method here is using the loop method as following.</p>

<p>The program above uses for loop up to 6x (0-5), the first for loop shows that the value if "i" changes in order from 0 to 5 every iteration, and the next for loop shows we can call the username and password using shorter script. Next let's implement the section 3 login script (again copy, paste, and try the program first for easier approach).</p>

<p>The code above uses "begin" and "end" if we want to put more statement inside the if else. The "break" function forcefully ends the for loop if the correct username and password has been found. On the other hand if the for loop already on it's last iteration "5" and no username and password had been found, it will write "Wrong username or password". Other than For there's also While, maybe more at other programming language. "For" specifies the number of iterations, while "while" sets a goal which the process will not stop until it reaches its goal.</p>

<h3 id="4.4 In Pascal">4.4 In Pascal</h3>
<p>This is not a formal definition but we see array as place to store many values. If you assign a variable as an array it may store many numbers, names, values, etc. For example we store the username and password into the array first hand:</p>

{% highlight pascal %}
program array1;
 
var
	username : array[0..5] of string = ('John', 'Mary', 'Fajar', 'emanresu', 'root', 'admin');
	password : array[0..5] of string = ('Doe', 'Jane', 'Purnama', 'drowssap', 'toor', 'nimda');
 
begin
	writeln(username[0]);
	writeln(username[1]);
	writeln(username[3]);
	writeln();
	writeln(password[0]);
	writeln(password[1]);
	writeln(password[3]);
 
end.
{% endhighlight %}

<p>Or you may fill them afterward:</p>

{% highlight pascal %}
program array2;
 
var
	username : array[0..5] of string;
	password : array[0..5] of string;
begin
	username[0] := 'Fajar'; password[0] := 'Purnama';
	writeln(username[0]); writeln(password[0]);
end.
{% endhighlight %}

<p>If we have many username and password, and we want to write a login script as in section 3 it will be very difficult. Instead why not the machine do it program? In other words we write a program telling the machine to automatically write the script. Our method here is using the loop method as following.</p>

{% highlight pascal %}
program for_loop;
 
var
	username : array[0..5] of string = ('John', 'Mary', 'Fajar', 'emanresu', 'root', 'admin');
	password : array[0..5] of string = ('Doe', 'Jane', 'Purnama', 'drowssap', 'toor', 'nimda');
	i: integer;
 
begin
	for i := 0 to 5 do
	begin
		writeln(i);
	end;
 
	writeln;
 
	for i := 0 to 5 do
		begin
		writeln(username[i], password[i]);
	end;
end.
{% endhighlight %}

<p>The program above uses for loop up to 6x (0-5), the first for loop shows that the value if "i" changes in order from 0 to 5 every iteration, and the next for loop shows we can call the username and password using shorter script. Next let's implement the section 3 login script (again copy, paste, and try the program first for easier approach).</p>

{% highlight pascal %}
program many_login;
 
var
	username : array[0..5] of string = ('John', 'Mary', 'Fajar', 'emanresu', 'root', 'admin');
	password : array[0..5] of string = ('Doe', 'Jane', 'Purnama', 'drowssap', 'toor', 'nimda');
	i: integer;
	username_input, password_input: string;
 
begin
	write('Username: '); readln(username_input);
	write('Password: '); readln(password_input);
 
	for i := 0 to 5 do
	begin
 
		if (username_input = username[i]) and (password_input = password[i]) then
		begin
		writeln('Hello ', username_input, ' ', password_input, '!');
		break;
		end
		else if i = 5 then
		writeln('Wrong username or password!');
 
	end;
 
end.
{% endhighlight %}

<p>The code above uses "begin" and "end" if we want to put more statement inside the if else. The "break" function forcefully ends the for loop if the correct username and password has been found. On the other hand if the for loop already on it's last iteration "5" and no username and password had been found, it will write "Wrong username or password". Other than For there's also While, maybe more at other programming language. "For" specifies the number of iterations, while "while" sets a goal which the process will not stop until it reaches its goal.</p>

{% highlight pascal %}
program while_test;
 
var
	a,i: integer;
 
begin

	a := 1;
	write('How much do you want to count? Insert a number: '); readln(i);
	while a <= i do
	begin
		writeln(a);
		a := a + 1;
	end;
 
end.
{% endhighlight %}

<h3 id="4.5 In C">4.5 In C</h3>
<p>This is not a formal definition but we see array as place to store many values. If you assign a variable as an array it may store many numbers, names, values, etc. For example we store the username and password into the array first hand:</p>

{% highlight c %}
#include <stdio.h>

int main() {
	const char * username[] = {"John", "Mary"};
	printf("This is string array: %s %s\n", username[0], username[1]);
	
	const char * password[] = {"Doe", "Jane"};
	printf("This is string array: %s %s\n", password[0], password[1]);
	
	int number[] = {10, 7, 3};
	printf("This is integer array: %d %d %d\n", number[0], number[1], number[2]);
	
	return 0;
}	
{% endhighlight %}

<p>Or you may fill them afterward:</p>
{% highlight c %}
#include <stdio.h>

int main() {
	const char * username[6];
	username[0] = "John";
	username[1] = "Mary";
	printf("This is string array: %s %s\n", username[0], username[1]);
	
	const char * password[6];
	password[0] = "Doe";
	password[1] = "Jane";
	printf("This is string array: %s %s\n", password[0], password[1]);
	
	int number[3];
	number[0] = 10;
	number[1] = 7;
	number[2] = 4;
	printf("This is integer array: %d %d %d\n", number[0], number[1], number[2]);
	
	return 0;
}
{% endhighlight %}

<p>If we have many username and password, and we want to write a login script as in section 3 it will be very difficult. Instead why not the machine do it program? In other words we write a program telling the machine to automatically write the script. Our method here is using the loop method as following.</p>

{% highlight c %}
#include <stdio.h>

int main() {
	const char * username[] = {"John", "Mary", "Fajar", "emanresu", "root", "admin"};
	
	const char * password[] = {"Doe", "Jane", "Purnama", "drowssap", "toor", "nimda"};
	
	int i;
	
	for(i = 0; i <= 5; i++){
		printf("%d\n", i);
	}
	
	for(i = 0; i <= 5; i++){
		printf("This is string array: %s %s\n", username[i], password[i]);
	}
	
	return 0;
}
{% endhighlight %}

<p>The program above uses for loop up to 6x (0-5), the first for loop shows that the value if "i" changes in order from 0 to 5 every iteration, and the next for loop shows we can call the username and password using shorter script. Next let's implement the section 3 login script (again copy, paste, and try the program first for easier approach).</p>

{% highlight c %}
#include <stdio.h>

int main() {
	const char * username[] = {"John", "Mary", "Fajar", "emanresu", "root", "admin"};
	
	const char * password[] = {"Doe", "Jane", "Purnama", "drowssap", "toor", "nimda"};
	
	char username_input[20], password_input[20];
	
	printf("Username: "); scanf("%s", username_input);
	printf("Password: "); scanf("%s", password_input);
	
	int i;
	
	for(i = 0; i <= 5; i++){
		if((strncmp(username_input, username[i], 20) == 0) && (strncmp(password_input, password[i], 20) == 0)){
		printf("Hello %s %s\n", username_input, password_input);
		break;
		} else if(i == 5) {
		printf("Wrong username or password\n");
		}
	}
	
	return 0;
}
{% endhighlight %}

<p>The "break" function forcefully ends the for loop if the correct username and password has been found. On the other hand if the for loop already on it's last iteration "5" and no username and password had been found, it will write "Wrong username or password". Other than For there's also While, maybe more at other programming language. "For" specifies the number of iterations, while "while" sets a goal which the process will not stop until it reaches its goal.</p>

{% highlight c %}
#include <stdio.h>

int main() {
	int i,a;
	a = 1;
	
	printf("How much do you want to count? Insert a number: "); scanf("%d", &i);
	
	while(a<=i){
		printf("%d\n", a);
		a++;
	}
	
	return 0;
}
{% endhighlight %}

<h2>Others</h2>

<p>Paste your code online:</p>

<ul>
	<li><a href="https://cloud.google.com/appengine">https://cloud.google.com/appengine</a></li>
	<li><a href="https://jsfiddle.net/user/0fajarpurnama0/fiddles/">https://jsfiddle.net/user/0fajarpurnama0/fiddles/</a></li>
	<li><a href="https://plnkr.co/">https://plnkr.co/</a></li>
	<li><a href="https://codepen.io/0fajarpurnama0/">https://codepen.io/0fajarpurnama0/</a></li>
	<li><a href="https://www.onlinegdb.com/">https://www.onlinegdb.com/</a></li>
	<li><a href="https://www.jdoodle.com/">https://www.jdoodle.com/</a></li>
</ul>

<p>Examples Online:</p>
<ul>
	<li><a href="http://eng-contact-109902.appspot.com">http://eng-contact-109902.appspot.com</a></li>
	<li><a href="http://phppractice-1103.appspot.com">http://phppractice-1103.appspot.com</a></li>
	<li><a href="http://simple-cashier-change.appspot.com">http://simple-cashier-change.appspot.com</a></li>
</ul>
