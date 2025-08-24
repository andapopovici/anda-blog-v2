---
title: Font perfomance strategies by Mandy Michael
description: >-
  A write-up of Mandy Michael's talk at the performance.now() 2024 conference
date: 2025-08-24
tags:
  - engineering
  - performance
---
After doing some work involving fonts in FreeAgent, I was interested in [Mandy Michael's talk at performance.now() 2024, Font perfomance strategies](https://www.youtube.com/watch?v=P4378iO4oBI). You can find all of the talks in the [performance.now() 2024 Youtube playlist](https://www.youtube.com/watch?v=5Y9niBfDcVk&list=PLjnstNlepBvOxZeta4-yAFDllxfW-A5EC).

Mandy talks us through her strategies for improving font performance on websites. Here are my take-aways from her talk.

## Use system fonts

- if appropriate and branding is not an issue, it can be a good idea to use system fonts
- one disadvantage is they lack consistency between browsers (width discrepancies) - “When you choose to use system fonts you hand over design choices to the Operating System”

## Hosting

- about 70% of all sites use a self hosted font, while 28-34% use *only* self hosted fonts
- the reason for people switching to self hosting could be that browsers no longer cache 3rd party fonts across websites (due to security risks)
- use 3rd party hosting (like Google fonts) if you don’t have time for or you’re not planning on spending time on optimising font loading. Google Fonts file sizes are already quite small due to their own optimisation.
- self hosting is the way to go, as long as you make use of other font performance strategies as well

## Reduce the number of fonts

- the less fonts you have to load, the quicker it will be
- even if using several font families, only load in the font variations that you really need (she gives the example of her company loading the whole Roboto font file for just a “Log in with Google” button)

## Variable fonts

- use only if you need multiple styles from the same family (regular, bold etc.)
- good for file size reduction - for example, Source sans pro’s variable font file is 22% smaller in size than regular + bold files combined
- about 93% of variable font usage comes from Google fonts

## Reduce font file size

- easiest way to reduce file size is to use better formats - for Source sans pro, the TTF file is 75% larger than the WOFF2
- WOFF2 is the best format for the web

### Practical tips

- use https://wakamaifondue.com/ to get information about a font and see if there’s anything that’s not in use
- use [Slice](https://github.com/source-foundry/Slice) to modify variable fonts and keep only the axes you need
- use the CSS overview in Dev tools which shows you number of occurrences for certain font styles. Alternatively use [her CSS Text Stats tool](https://textlab.dev/tools/css-text-stats)

## Subsetting

- first things first - make sure you have permission to modify files!
- her favourite tool is [Glyphhanger](https://github.com/zachleat/glyphhanger)
- as a first step, subset your font to just latin characters (if only using latin set)

## Incremental Font transfer

- [Incremental Font Transfer](https://www.w3.org/TR/IFT/) - working draft of a new exciting feature!
- loads only the portion of the font you need when the page loads
- fonts can be loaded over multiple requests, each requests adding more data
- when this is available, it will remove the need for subsetting altogether

## Displaying fonts

- she talks through a the options for [font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) which decides how fonts are swapped onto the page
- font-display is a trade-off between aesthetics and performance
- `font-display: optional` - best for performance (100ms block period); if web font is not loaded in 100ms, it will use the fallback and download it in the background. So on the next page load, the web font will be available.
- `font-display: swap` - infinite swap time; higher risk of layout shift when the web font is loaded; good for slower connections as the fallback font is loaded immediately

### How to reduce layout shift when swapping in fonts

- using the [size-adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust) (good for global changes) & [font-size-adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust) CSS properties - aim to render the text in a similar way regardless of the font used
- `font-size-adjust` gives you more fine-grained control but harder to use globally
- use [Minimal CLS font adjustment tool](https://www.industrialempathy.com/perfect-ish-font-fallback/?font=Montserrat) to help with calculations
- be careful with relative units such as `ch`. The size of the text is going to change depending on what font is in use, which can cause layout shifts

## Font loading

- cache your fonts (as they don’t change regularly)
- using [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face), fonts are only downloaded if referenced by styling on the page
- prioritise your most important fonts first
- use resource hints to decrease page loading times
- preload fonts if appropriate, but don’t just preload or preconnect all the fonts. Consider fonts against other assets (make sure to test)

## Conclusion

Mandy offers us a shorthand way of remembering how to optimise fonts. This is a direct quote from her talk:

> Self host as few (probably) variable, woff2 fonts as possible that have been sliced (if they're variable fonts), subset & (maybe) preloaded. They'll be cached, swapped or optionally displayed & use font-size-adjust or size-adjust css properties to reduce layout shift.

## Resources

- [Mandy's recommended resources](https://github.com/mandymichael/font-performance-resources/blob/main/README.md)
- [W3C draft for Incremental Font Transfer](https://www.w3.org/TR/IFT/)
