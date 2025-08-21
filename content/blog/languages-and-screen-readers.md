---
layout: layouts/post.njk
title: Languages and screen readers
description: Documenting what I learned about screen readers and the 'lang' attribute
date: 2024-08-30T00:00:00.000Z
tags:
  - accessibility
  - HTML
---

This page is is written in English. For people who can read in English, this is obvious. But how does a screen reader know that this page's content is in English and not another language?

This is where the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang" target="_blank">HTML "lang" attribute</a> comes in handy.

The `lang` attribute can be specified:
- at the top level of a web page, if the majority of your content is in that language. For example, this page's `html` element looks like this: `<html lang="en"></html>`. <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html">WCAG criterion 3.1.1 Language of Page (Level A)</a> requires a page to have a non-empty `lang` attribute
- on bits of content which are in a language different from the rest of the page. <a href="https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html">WCAG criterion 3.1.2 Language of Parts (Level AA)</a> specifies that the language of each passage or phrase can be programmatically determined, with some exceptions like technical terms.

In practical terms, how does this help people?

- when the language is specified, assistive technology can use the correct pronunciation for that language, if the language is supported. According to <a href="https://webaim.org/techniques/language/#support">WebAIM's documentation on language support</s>:

> All modern screen readers have support for numerous languages. In some screen reader the user must manually install or configure language voices or "language packs".

- specifying the correct language also helps the browser render the text more accurately. For example, quotes look different in a language like Romanian: <p lang="ro"><q>Bate fierul cât e cald.</q></p> Notice how the quotes look different in Romanian (the opening quote is aligned to the bottom and not the top), respecting the language's correct writing style.

## Screen reader test

To show you how screen readers adapt their pronunciation, I will run the MacOS VoiceOver screen reader on this page.

A paragraph in Romanian with the `ro` language specified on the `p` element:

<p lang="ro"><q>Bate fierul cât e cald.</q></p>

A paragraph in Romanian without the language specified:

<p><q>Bate fierul cât e cald.</q></p>

The result is that:
- the first paragraph is read out in the correct Romanian pronunciation, using a different voice from the rest of the screen reader voice.
- the second paragraph is read out in the normal screen reader voice, but with an approximation of how an English speaker would read this. Not great, not easy to understand!

Play back the recording of <a href="https://www.youtube.com/watch?v=2WJZAJNq8GU" target="_blank">VoiceOver reading Romanian on Youtube</a>.


