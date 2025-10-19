---
title: Em and rem resources from Kevin Powell
description: >-
  A couple of useful videos from Kevin Powell on how ems and rems work as measurements and when to use them
date: 2025-10-19
tags:
  - css
---

I've started [Kevin Powell's Conquering Responsive Layouts course](https://courses.kevinpowell.co/view/courses/conquering-responsive-layouts/). In one of the first lessons, he talks about units of measurement, specifically pointing out em vs rem. He recommended 2 of his videos:

- [CSS em vs rem explained - Youtube, 2017](https://www.youtube.com/watch?v=_-aDOAMmDHI) and
- [Why you shouldn't set font-sizes using em - Youtube, 2019](https://www.youtube.com/watch?v=pautqDqa54I)

These are very good to grasp the fundamentals of when to use ems and rems. From what I understood:
- rems are useful when you want things to scale up relative to the whole document
- ems are useful when you want things to scale with your parent element; for example, a button's padding should grow relative to its font size to maintain the look and ratio of the text 
- don't set font-sizes in ems because it can compound in children elements, and end up with massive sizing
