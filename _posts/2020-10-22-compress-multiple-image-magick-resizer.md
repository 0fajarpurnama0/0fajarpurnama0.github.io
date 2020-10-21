---
layout: post
title: Compress Multiple Image using Windows Resizer and Image Magick Linux
category: internet
tags: [computers, multiple image, Windows Image Resizer, Image Magick, Linux]
featuredimage: https://404store.com/2020/10/21/multiple-image.png
description: Compress multiple image using Windows Image Resizer or Image Magick Linux at once.
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/10/22/compress-multiple-image-magick-resizer
---
## Utility

![multiple image](https://404store.com/2020/10/21/multiple-image.png)

A few days ago, I converted a handbook about maintaining Gumbrih Village's blog that I made during community service program in my Bachelors in 2014 into a blog post or webpage. Other than to fill my blogs, it is to enrich my online curriculum vitae (CV) where I can link the uploaded handbook as a proof that I actually did it. Anyway, the handbook 56 images because the officers in Gumbrih Village are not as computer literate as millenials today where I have to screenshot the steps in very detail. Not only that 56 is a lot of image to upload to a blog post or web content, back then the screenshot and snipping application are not as developed today. Each images are 3MB (megabyte) large in bmp format which is over most image blog limit which is 1MB. Optimizing the images file size one by one is very tiring. Therefore, I need an application that can do them all at once. I found many online services when I search the term _online image compressor_ on the search engine but most of them are premium services when handling large amount of images. So I relied on installed application on my operating system.



## Windows Image Resizer Now Power Toys

![windows image resizer demonstration](https://404store.com/2020/10/21/windows-image-resizer-multiple.gif)

I will go to Windows first because most people are still in this operating system. One software I found convenient is [Windows Image Resizer](https://github.com/bricelam/ImageResizer/tags) where all you need to do is select all the images within the folder, right click, and choose _Resize pictures_. Then you are given options which you can explore yourself and in the end just execute with resizing all images at once. The [latest news from the developers blog](https://www.bricelam.net/ImageResizer/) is that Windows Image Resizer is now a part of [Microsoft Power Toys](https://github.com/microsoft/PowerToys/releases/latest).



## Image Magick Linux

![Image Magick Linux Demonstration](https://404store.com/2020/10/21/linux-image-magick-multiple.gif)

Almost all Linux operating system are pre-install with Image Magick and if it is not for your case, just [go to their website and download](https://imagemagick.org/index.php). Most people in Linux uses the terminal or command line. The image size became much smaller than using Windows Image Resizer since I convert the bmp to jpg where the conversion already include minimal optimization. The image size was reduced from 3MB to around 150kB. The procedure to convert is as following:



Here is a code to convert 1 bmp image to jpg:

<pre style="background-color:black; color:lightgreen">
convert image.bmp image.jpg
</pre>

You can convert multiple files using the following simple command but only if you do not care about the filenames as they will be made random:

<pre style="background-color:black; color:lightgreen">
convert *.bmp *.jpg
</pre>

If you are will to replace the files, you can use mogrify command or you can just copy the images to a new folder and mogrify them.

<pre style="background-color:black; color:lightgreen">
mogrify -format jpg *.bmp
</pre>

The conventional way to convert multiple files at once is first create an empty file and insert the following code:

<pre style="background-color:black; color:lightgreen">
for PHOTO in *.[format]
   do
       BASE=`basename $PHOTO`
	convert "$PHOTO" "[folder]/$BASE.[desired format]"
   done
</pre>

In my case I made a filename _my-convert_ in the same directory as the images:

<pre style="background-color:black; color:lightgreen">
for PHOTO in *.bmp
   do
       BASE=`basename $PHOTO`
	convert "$PHOTO" "Linux/$BASE.jpg"
   done
</pre>

Proceed in executing the file and if it does not work, use administrator access or root or sudo:

<pre style="background-color:black; color:lightgreen">
chmod +x my-convert
./my-convert
</pre>

If you want to do more advance modification, you can check the documenation:

<pre style="background-color:black; color:lightgreen">
convert --help
man convert
</pre>

If the above commands does not work then search their [website](https://www.imagemagick.org/).