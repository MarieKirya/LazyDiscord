LazyDiscord
===========

Introduction
------------

LazyDiscord is theme for [BeautifulDiscord](https://github.com/leovoel/BeautifulDiscord) that makes it follow Slack's design.

![Example of LazyDiscord Dark](/img/lazydiscorddark.png?raw=true)

Discord's design has too much whitespace, poor font weights (particularly 
noticable on @1x displays), and some very odd margin/alignment oddities. I took
a design I know I like and replicated it on Discord.

Installations
-------------

Download this repo and use `css/styles.css` as your `--css` argument with 
[BeautifulDiscord](https://github.com/leovoel/BeautifulDiscord). It will from
that point on automatically update when you update that repo/file.

Features
-------

* Denser Server Sidebar
* Customizable Color Schemes
* Light and Dark Support
* Square Icons
* Proper greys, none of that blueish grey rubbish

How to Build
-----------

1. Have node, npm, and gulp installed locally.
1. If you're running for the first time, run `npm install`.
1. Run `gulp` and it will watch the scss folder.
1. Install as normal.

Annoyances
----------

Discord obfascates their classes, so I need to use these ineficcient attribute
searches to implement the theme. Should be resilient enough to updates, but 
who knows.

Bugs
----

* Dark theme needs colors set
* Probably more I need to start writing down.

Possible Features
-----------------

* Simplify install process