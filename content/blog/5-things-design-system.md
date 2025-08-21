---
title: 5 things I learned working on a design system for a year
description: >-
  Describing my experience going from product engineering to working on a design
  system
date: 2022-12-05T00:00:00.000Z
tags:
  - design systems
  - engineering
layout: layouts/post.njk
image: 'https://unsplash.com/photos/_H7p-RZUVo4'
---

I moved on from being an engineer on the product and marketing website of my company to working on our design system in January 2022. The design system is relatively new, built upon a 14 year old mature Ruby on Rails codebase.

In this post, I will describe the 5 most impactful things I learned throughout this year and what a design system engineer can expect from the job.

## 1. You will constantly communicate with other teams

Whether you're communicating a new release, updating a team's area with new components or keeping up to date with teams' roadmaps, you will always be talking to other team members.

As we're humans and have limited time and energy, it's good to learn how to make the most of these interactions. Personally, I'm not a big fan of long meetings, so one solution could be asking for teams' roadmap updates in writing to keep up to date with their work.

## 2. Your changes can affect a lot of places

When rolling out a new component, be prepared for a big impact on the code base. For example, recently we introduced a new notice component which literally had hundreds of existing instances in our app. I don't know if this will ever stop feeling scary!

However, having a robust testing process starting with unit testing your components should mitigate at least some of this risk. Automate as much of the testing as you can, and ask for help from teams to manual test their areas to make sure everything is looking as it should.

## 3. Make reverting updates easy

This is true for any software, obviously. However, when rolling out updates to a design system, bugs could potentially propagate in a lot of places. Having a quick and easy way to revert or fix the issue is important.

The design system I work on is distributed via 2 packages consumed in the main application. In this case, reverting can mean using an older version of the package that contains a bug. Alternatively, if the issue is not critical, the bug can be solved in a new patch release.

Another good idea is documenting the revert process to be able to refer to it. This will come in handy especially in a stressful situation.

## 4. Learn how to write documentation

If you work in a small team like I do, some of your work might involve documenting your components for other developers. This can be tricky if you're not very comfortable with writing content or documenting APIs.

Reading other design systems' technical documentation is a great start. I really enjoy [Primer's](https://primer.style/view-components/) approach to API docs.

Asking for regular feedback from developers using your documentation is also a great way to keep on top of your content and make sure it works for your target audience. This shouldn't be too time consuming to make sure people will enjoy the process and get them invested in the design system.

## 5. You are an integral part of the company

The most exciting part of working on a design system is you can influence changes in your whole app or organisation. Everyone can benefit from the best practices and guidance that are built into the system.

It can also be a little bit scary, but all in all I think it's a really great position to be in, at the heart of your company.

## Conclusion

Design systems are great, and a very exciting area to be working on. I hope this post gave you a feel for what it's like working as a design system engineer.

I'm looking forward to next year, and I will no doubt document my learning along the way!
