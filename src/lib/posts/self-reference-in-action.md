---
title: 💡 Self-Reference in Action
date: "2024-08-24"
preview: How a 60 year old programming language will help write its own book.
---

<script>
  import ExampleOne from '$lib/components/ExampleOne.svelte';
  import pp from '$lib/assets/pp.webp';
</script>

Dear MW,

I am happy to share that, just this morning, I resolved a great wave of doubt that had come over me in the past few days. You see, for many months, I have had the recurring vision of an idea in my head that I must write about. For these months, I've tried finding the bridge between this living, evolving, immense and beautiful idea and the medium of language and code. I had begun to think that these beautiful thoughts were doomed to live inside of my head.

Remember this, MW, sometimes the right direction comes unexpectedly; like the horizon of the world appearing suddenly to a hiker at treeline. A part of you knows the horizon is always there, but if you want to continue moving forward, you will have to cross through dark valleys where you can no longer see it. I am grateful for your perseverence.

I also owe my gratitude to Claude, the Artificially Intelligent Large Language Model, for helping me to find the courage and correct focus with which to write this article and effectively approach a very ambitious idea. This is really thanks to all those who have worked to establish the research, data, hardware, and organization to bring intelligent advice and encouraging words to the world at a remarkably low cost. Yes, in the not so distant future, you will be able to discuss your thoughts with machines and they will give important and useful replies. Claude and friends have really saved the day for you on a number of occasions. Classic [*deus ex machina*](https://en.wikipedia.org/wiki/Deus_ex_machina). Go figure.

Someday soon, you will find yourself alone and afraid in a strange room with a strange book. You won't be able to leave and you won't be able to understand the book. Keep moving forward. The book will find its way back to you. And in due time, you will discover why that book is perhaps the single most meaningful you will ever read.

That one book will open your mind to the wonderful and sublime world of self reference; an infinite world that casts its magnificent shadow over all things divinely beautiful. We will return to this book, I promise. But for now, lets talk about something we can both understand.

## Abstraction

Abstraction is the process of taking some *thing* and giving it a name. (We did it just now!)

If we want to talk about our Self, we have to know how to name the different *things* we notice. To do that, we have to develop a working understanding of how we name things.

Abstraction allows us to reduce the complex and confusing nature of our experience by putting parts of it that "go together" into boxes. For example, when you see an animal that lives in a house, you may call it a pet. In this sense, all pets "go together".

<figure class="relative max-w-xs mx-auto">
  <img class="w-full h-auto" alt="A sitting cat" src={pp}/>
  <figcaption class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm text-sans">
    The average house-dweller
  </figcaption>
</figure>

Abstraction is the spirit of *word*. But it doesn't have to be a word per se. When we look at abstract art, it is art that expresses some reduced or singular essence of the subject. For example, where a classical painting might attempt to portray a landscape or a sailboat, an abstract painting might focus intently on the shapes and color of a landscape or evoking the emotion that the artist associates with a certain sailboat.

The way we write often reflects the way we abstract ideas. We organize our writing by grouping thoughts that "go together". This essay is called "{title}", and this section of the essay is called "Abstraction". When a text is discussed very often, it may have more even more finely detailed ways to refer to text. For example, the Torah, Qur'an, and Bible all have standard systems for referring to every line of text (e.g John 1:1). We could call this paragraph Steve if we'd like.

We can then, in another paragraph, talk about Steve. Steve has 502 characters. Steve includes the words "organize" and "finely". These are of the *Concrete* nature of Steve. But what Steve *does* is different. What Steve *does* is to represent some idea about the organization of writing. This is the *Abstract* nature of Steve.

I might direct your attention to another thought, that objects that reflect light in a wavelength between 625 and 700 nanometers are to be called *red*. This is a scientific definition of red that you may encounter in a textbook or on Wikipedia. The color red is a very intimate and familiar part of your experience, but I can confidently assume that when you encounter <span class="text-red-700"> the actual color represented by the word, red, </span> it comes directly from your sense of vision and you are not experiencing the practically incomprehensible notion of a nanometer. You may not even think clearly the word, *red*. It wasn't until the instruments and methods of [spectroscopy](https://en.wikipedia.org/wiki/Spectroscopy) were invented that the definition of red found its more rigid home in the elecromagnetic spectrum. And likewise, it wasn't until you learned the name for *red* that *red* even existed at all, as seperate from *green*, *blue*, *orange*... You might say that the spectroscopic definition of red is *more abstract* than the way that we talk about red which is in turn more abstract than the intuitive, sensory way of *seeing* the color red. You can also say, inversely, that the red color of the text above is more concrete than the words themselves which is more concrete than discussion of the wavelength of the light emanating from your screen.



Abstraction and Concreteness exist on a spectrum. On one end, we can put the most abstract conceivable ideas. This is where you might find Godel's Incompleteness Theorem, General Relativity, or the theory of Quantum Mechanics. Each of these ideas is only representable with abstract symbols and mathematical structures that take an enormous amount of effort and intelligence to conceptualize and communicate. On the other end, we find the most primal experiences we can have such as the color red or the taste of almonds. Experience, also called consciousness or conscious experience, is the 'beingness' of being a human being. That's about as close as we can get without falling off our spectrum.



If we do decide to 'fall off our spectrum' toward the infinitely concrete and infinitely abstract, we might encounter two ways in which communication breaks down. Toward the concrete, we run into a wall where we no longer have the faculty of language.
We cannot communicate about experience without creating a few abstractions, at the very least, one called Experience! Similarly, at the top of this spectrum, we have the ultimate abstraction, the *every* *thing*. You might find it useful to connect this to the idea of "The Theory of Everything" or "God"; that which defines how every*thing* works and fits together. Just talking about the *every* *thing* can get us into all sorts of abstract trouble. We may be able to catch a glimpse here of the illusiveness of this purest abstraction *in its reflection*. If experience is something so concrete that it cannot be discussed in the abstract, The *every* *thing* is a concept so abstract that it cannot be experienced concretely. It is only ever more carefully implied in the abstract.

This process of more carefully implying the every thing is fun. It is the sort of game that can keep one occupied for a lifetime. Many lifetimes.

To develop a more powerful language for playing with abstraction, we can turn to the world of Computer Science and Math.

An example of a simple abstraction in Math is the point. In 2D space,




In Computer Science class, you learned that we can define programs in terms of functions, individual units of code that each do something that can be given a well-defined *name*.



Let me give you an example to refresh your memory. Since we are in a web browser, we can use Javascript, the language of the web.

One of the simplest abstractions is a line, composed of two points.

```js
  function drawLine(x1, y1, x2, y2) {
		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();
	}
```

<ExampleOne />

## Recursion

Do you remember the first time learning about the concept of recursion? Let me refresh your memory.


If we were to look at this javascript code...





How does one begin to write a self referential book?
