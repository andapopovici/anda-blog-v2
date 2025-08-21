---
layout: layouts/post.njk
title: The magic of HTML semantics
description: A fan post for HTML
date: 2025-06-13T00:00:00.000Z
tags:
  - accessibility
  - HTML
---

There's a saying that one of the hardest things in programming is naming. I think that's true, and not only for programming. Generally, for good communication you want to use the right and understood terms. 

Code is communication in a way. We tell a machine what to do, but we also communicate our intent to the next person looking at that code. This makes naming things very powerful (and dangerous!)

I've been learning about [HTML landmark regions](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/HTML5.html) both in my mentoring sessions with [Laurence](https://fuzzylogic.me/), but also from [Sara Soueidan's Practical Accessibility course](https://practical-accessibility.today/). Landmark regions are the best way to communicate to the browser, and in turn, a screen reader, what "bits" your web page is made of. This allows people to navigate a page easier by skipping to the region they need. 

And, structuring the code of a page like this, allows anyone reading it to get a quick overview of what are the rough constituents before getting into the details. This is where it becomes interesting - HTML not only communicates meaning to a machine i.e. the browser & assistive technology, which in turn speaks directly to your users, but also communicates meaning to other people reading the code when used in the intended way. 

What other programming language speaks directly to a user?! Think about it! Let's say you're coding up a button. In HTML, you use the 'button' element which in turn tells your browser to paint a button on screen and have the necessary information for a screen reader that a button is there. A user will know a button is there and know there's something to interact with! Everyone is speaking the same language!! 😍 That's not something I encountered when coding up Rails models as ActiveRecord classes!

This probably doesn't make any sense but I am writing this on my phone in a tiny Github window running on excitement about HTML because it's truly magical! ❤️❤️❤️
