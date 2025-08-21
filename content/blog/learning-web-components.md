---
layout: layouts/post.njk
title: Learning about Web Components
description: Documenting my first step in learning about Web Components
date: 2024-01-11T00:00:00.000Z
tags:
  - engineering
  - web components
---
In my post on [my professional New Year's resolutions for this year](/posts/my-professional-new-year-resolutions-2024/), I mentioned I want to learn more about Web Components. They're a hot topic right now and I'd like to learn how they work and how to build them.

As usual with a topic that's quite popular, I got a bit lost trying to follow conversations online. I wanted a super basic explanation and tutorial on how to build a first Web Component. I also didn't want to use a framework like [Lit](https://lit.dev/) at first, as I wanted to grasp the basic concepts of Web Components and not necessarily start shipping whole projects using them.

So I started with an article published in last year's [12 days of web](https://12daysofweb.dev/) called [Web Components](https://12daysofweb.dev/2023/web-components/). I trust 12 days of web as it's a curated list by Stephanie Eckles so I thought it would be promising. I started following the code and replicating it in a Codepen. I found the complication of styling the component a bit distracting as it needed to look like a toggle. However, I managed to follow everything until I got to the [Shadow DOM section](https://12daysofweb.dev/2023/web-components/#shadow-dom). I found the explanation for this a bit too advanced, and this and the Slots section felt like tips for people who have built Web Components before and wanted a "best practice" way to do this. I got confused and abandoned the article at this point.

I didn't give up, and I went to the HTMHell calendar next. I started following the article [Web Components FTW!](https://www.htmhell.dev/adventcalendar/2023/6/) by Chris Ferdinandi. I found this one much easier to understand and like it was written for complete beginners. Linking to the MDN explanation of [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) was a good call, as I found this to be a great resource to understand what it's supposed to do and how it can live outside custom components too.

I also enjoyed that there was no focus on styling at all and it let you focus on how building a component works, what are the callbacks etc. Here is [my CodePen with the result](https://codepen.io/andapopovici/pen/BabjYbg).

A couple of quick notes I took while going through these articles:
- custom components are `display: inline` by default
- the shadow DOM is a special kind of DOM that you use for internal presentational elements that you don’t want exposed on the page
- the shadow DOM can’t be accessed via Javascript or CSS by querying the document
- however, when attaching the shadow DOM we can specify a mode - "open" will let JavaScript access the shadow DOM using the `hostElement.shadowRoot` method. To prevent this, the mode can be set to "closed"

There's a lot more to learn here, and I will be continuing my learning journey by building a couple of Web Components on my own, probably for this site.
