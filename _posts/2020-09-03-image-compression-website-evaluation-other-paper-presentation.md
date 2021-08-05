---
layout: post
title: My Assignment in Simple Image Compression Utility Website Evaluation and Other Journal Paper Presentation
categories: masters
tags: [engineering, image, human, perception, assignment]
featuredimage: https://steemitimages.com/640x0/https://images.blurt.buzz/DQmUh4hPNajhcAQjMi33fELiYXDU2g3Ggiha6PcVWND5SFn/thumbnail.png
description: The assignments in human perceptions were exciting where we experiment in compressing image, analyzing website, making video presentations.
canonicalurl: https://0fajarpurnama0.github.io/masters/2020/09/03/image-compression-website-evaluation-other-paper-presentation
---
## My Impression About This Course

Overall I really enjoyed the class, the materials were not complicated and interesting, the links shows to interesting page, the quiz helped me focus on the important part, the assignments were exciting where we get experiment in compressing image, analyzing website, making video presentations, and watched other's videos that had interesting topics. I liked this course because it's very flexible that I can attempt them on my leisure time on Saturday and Sunday for example with almost no burden. The course also reminds me what I did for my bachelor thesis, which is applying discrete wavelet transform on an image in application of wireless sensor network.

The last section of the lecture was very difficult about user interface and universal design which the standards that was pointed to personally bear too much information. It's better to provide examples of a good and not okay page. For the videos I preferred accessing the through Youtube alike, maybe it can be note on the assignment to submit the file and recommended to upload them to Youtube. For the bandwidth consumption there's an option of introducing very high compression technique like x264\. About the comment I said during the final face to face class, I thought that we should evaluated others presentation like the method on the picture below:

![One of my discussion in Network Based Education course.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmdCo5GuTAJU178zLDmERwodv8SwxBeriu79kdQisBmTxZ/One%20of%20my%20discussion%20in%20Network%20Based%20Education%20course.png)

One of my discussion in Network Based Education course



These are my recorded assignments while the rest are not recorded because they are quiz sessions and has never been published anywhere and I, as the author and copyright holder, license this assignment customized CC-BY-SA where anyone can share, copy, republish, and sell on condition to state my name as the author and notify that the original and open version available here. The Professor wanted to change the course to something like Human Perceptions in Computers while actually the course name is Multidimensional Signal Processing.

## 1\. Choose 2 Image Compression Method and Explain

![original-jpeg.jpg](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmXCDPCBMWktbPBMRS7cu8equDUAYzVPozFS3CXnPuRSDc/original-jpeg.jpg)

Original 3027x2304 (resolution)

*   **Filesize**: 1.7 MB
*   **Peak Signal to Noise Ratio (PSNR)**: -
*   **Ratio**: 1:1
*   **Opinion**: Image taken from FinePix S5700 S700 (Fujifilm), on very large resolution. Good for detailed image analysis or big poster printout, but hardly necessary for ordinary learning content. It's too large so this image will be converted or compress using software Imagemagick.

![jpeg-compression.jpg](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmfDiK3faBSLXSzMM7Rk34M7j1vkA2GfscD1EjeuuRDLvK/jpeg-compression.jpg)

JPEG Default Compression

*   **Filesize**: 614.2 kB
*   **Peak Signal to Noise Ratio (PSNR)**: 29.5572 (dB)
*   **Ratio**: 2.8:1
*   **Opinion**: Unless for detailed image analysis an image resolution of above size is already good enough that saves disk space and traffic. With a developing country's Internet connection speed such as Indonesia 100kB/s, the original image takes 17 seconds to load while this one will only take 6 seconds.

![jpeg2000-compression.jpg](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmcGvZgEZxsuCT4wabTiFhr3dj6xLQVpv9suXFaREz4TUg/jpeg2000-compression.jpg)

JPEG2000 Default Compression

*   **Filesize**: 457.7 kB
*   **Peak Signal to Noise Ratio (PSNR)**: 29.707 (dB)
*   **Ratio**: 3.7:1
*   **Opinion**: For this case JPEG 2000 provides lower filesize, same PSNR, but not always, usually reverse. The advantage of JPEG 2000 is that it can compress with high ratio like JPEG, but lossless compression (it can be reverted) because it uses wavelet transform, while JPEG is lossy because it uses cosine transform. Another advantage is it can represent multi quality and resolution, good for low speed network. But JPEG2000 is still new today and almost none on the web is compatible with JPEG 2000 yet. For now, it's still better to use JPEG compression on learning contents.

## 2\. The web site that I chose to examine is my former University [www.unud.ac.id](www.unud.ac.id) 2015, Udayana University with 5 issues:

### 2.1 Readable: Make text content readable and understandable

*   **Reasons**: The beginning html tag doesn't have language describe ```<html class="no-js" lang="">``` which will not be as easy when detecting or converting language. Not major but other issues are only few have English translations, and unwell used on centered and justify on text.
*   **Suggestions**: Filled in the language ```<html class="no-js" lang="ID">```, about English translations I think they are in progress. Centered best to not use this on bullets and numbering (there some on the page), justify to make sure not to use overly spacing.

### 2.2 Text Alternatives: Provide text alternatives for any non-text content

*   **Reasons**: Some front page images doesn't have alternative text, and those that have alternative text is not well written, instead the file name is on the alternative text. Example ```<img src="acadmin/uploads/2250114334.JPG" alt="2250114334.JPG">```.
*   **Suggestions**: It's best to use short description of images for example ```<img src="ac-admin/uploads/2250114334.JPG" alt="An image of Professor ...">```

### 2.3 Navigable: Provide ways to help users navigate

*   **Reasons**: Some links are almost indistinguishable, some links and no links have same color. Not major.
*   **Suggestions**: Links in fixed color, or differentiate between links and not link, for example: not a link, [this is a link](#).

### 2.4 Input Assistance: Help users avoid and correct mistakes

*   **Reasons**: This is still very common that occurs on most website, this could be a new criteria. On most registration pages for doesn't have interactive assistance example [http://elearning.unud.ac.id/login/signup.php](http://elearning.unud.ac.id/login/signup.php)
*   **Suggestions**: Modern webpage like IEEE explore, Google Cloud have interactive registration that on the moment of input it gives feedback whether we input correctly or not, this saves time. One way is to use AJAX.

### 2.5 Predictable: Make Web pages appear and operate in predictable ways

*   **Reasons**: Not all but some doesn't use new tab feature when linking to new url without another link to return. It'll be difficult for those with low computer literacy.
*   **Suggestions**: Use new tabs when going to a totally different web page, or on a page without returning to the previous. On the other hand don't use when not necessary (same page hyperlink for example).

## 3\. Present a Journal Paper Related to Your Research

<iframe src="//www.slideshare.net/slideshow/embed_code/key/rEINhvYBEOaoFE" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/0DarkKing0/fajar-purnama152d8713dynamiccontentsynchronizationdistributedlms" title="Fajar purnama-152-d8713-dynamic-content-synchronization-distributed-lms" target="_blank">Fajar purnama-152-d8713-dynamic-content-synchronization-distributed-lms</a> </strong> from <strong><a href="https://www.slideshare.net/0DarkKing0" target="_blank">Fajar Purnama</a></strong> </div>

*   Slide: [https://www.slideshare.net/0DarkKing0/fajar-purnama152d8713dynamiccontentsynchronizationdistributedlms](https://www.slideshare.net/0DarkKing0/fajar-purnama152d8713dynamiccontentsynchronizationdistributedlms)
*   Paper: [http://hcis-journal.springeropen.com/articles/10.1186/2192-1962-2-17](http://hcis-journal.springeropen.com/articles/10.1186/2192-1962-2-17)

<div class="video-container"><iframe src="https://www.youtube.com/embed/uaywCzBsm6c" allowfullscreen=""></iframe></div>

00:00 Opening

00:14 Title

00:30 Keywords: Dynamic Content Synchronization, Distributed Learning Management Systems, Course Sharing, Unidirectional Content Synchronization, Limited Bandwidth, Developing Country, Adding the update button on contents in LMS. For bandwidth efficient content sharing and support in collaborative content development. Demonstrated on Moodle 1.9.

00:44 Today ICT greatly supports education.

01:35 Motivation: equally distribute the learning contents (quality education for all).

02:51 Related Works: Moodleshare and Communityhub.

03:07 Contribution: novel method for sharing e-Learning content.

04:14 Content Synchronization: differential update using hashing technology.

04:54 Illustration

05:19 Concept

06:00 Coding Concept

06:58 Experiment

08:04 Result

09:16 Conclusion

09:31 Future Work

Finally I would like to vote for the 5 following presentation:

*   [ニコラ　ジャン　パトリック 2015-d9-824 ジラル](http://md.kumamoto-u.ac.jp/user/view.php?id=30525&course=38336)
*   [アルテュー　ロー 2015-d9-837 スキジンスキー](http://md.kumamoto-u.ac.jp/user/view.php?id=30552&course=38336)
*   [アルディアン　ユスフ 2015-d9-842 ウィカソノ](http://md.kumamoto-u.ac.jp/user/view.php?id=30727&course=38336)
*   [セバスチャン　リーズ 2015-d9-816 ミラー](http://md.kumamoto-u.ac.jp/user/view.php?id=30312&course=38336)
*   [NULL 2015-d8-714 HENDARMAWAN](http://md.kumamoto-u.ac.jp/user/view.php?id=30542&course=38336)

## Mirrors

*   [https://www.publish0x.com/fajar-purnama-academics/my-assignment-in-simple-image-compression-utility-website-ev-xkypypo?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/my-assignment-in-simple-image-compression-utility-website-ev-xkypypo?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2021/01/my-assignment-in-simple-image.html](https://0darkking0.blogspot.com/2021/01/my-assignment-in-simple-image.html)
*   [https://0fajarpurnama0.medium.com/my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-fb5d49c650ee](https://0fajarpurnama0.medium.com/my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-fb5d49c650ee)
*   [https://0fajarpurnama0.github.io/masters/2020/09/03/image-compression-website-evaluation-other-paper-presentation](https://0fajarpurnama0.github.io/masters/2020/09/03/image-compression-website-evaluation-other-paper-presentation)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/image-compression-website-evaluation-other-paper-presentation](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/image-compression-website-evaluation-other-paper-presentation)
*   [https://steemit.com/engineering/@fajar.purnama/my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-presentation?r=fajar.purnama](https://steemit.com/engineering/@fajar.purnama/my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-presentation?r=fajar.purnama)
*   [https://stemgeeks.net/engineering/@fajar.purnama/my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-presentation?ref=fajar.purnama](https://stemgeeks.net/engineering/@fajar.purnama/my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-presentation?ref=fajar.purnama)
*   [https://blurt.buzz/@fajar.purnama/my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-presentation?referral=fajar.purnama](https://blurt.buzz/@fajar.purnama/my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-presentation?referral=fajar.purnama)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-present](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-present)
*   [http://0fajarpurnama0.weebly.com/blog/my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-presentation](http://0fajarpurnama0.weebly.com/blog/my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-presentation)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/179-my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-presentation](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/179-my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-presentation)
*   [https://read.cash/@FajarPurnama/simple-image-compression-utility-website-evaluation-and-other-journal-paper-presentation-assignment-61449046](https://read.cash/@FajarPurnama/simple-image-compression-utility-website-evaluation-and-other-journal-paper-presentation-assignment-61449046)
*   [https://www.uptrennd.com/post-detail/my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-presentation~ODQ5ODYy](https://www.uptrennd.com/post-detail/my-assignment-in-simple-image-compression-utility-website-evaluation-and-other-journal-paper-presentation~ODQ5ODYy)