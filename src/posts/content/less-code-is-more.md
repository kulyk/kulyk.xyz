---
title: Less Code is More
emoji: ✨
slug: less-code-is-more
description: The advantages of not-invented-here solutions
publishedAt: '2020-11-06T10:30:54.668Z'
---

A beginner developer usually believes their key activity is writing code. This is wrong. Solving a problem with code is actually the most expensive way to do something.

1. Code breaks all the time. There is always that edge case nobody has thought about, some unexpected input or system state.
2. You've married your code and you made a vow to support it until the end of your days. Monitor it works correctly, fix it here and there, update libraries, monitor the infrastructure it's running at, etc.
3. It can become a blocker when doing something meaningful
4. Other developers need to learn that and keep it in mind while designing other stuff

Writing code is a serious and expensive commitment, you have to be really sure this is **the best** way to solve your problem.

Intercom suggests to [rarely say yes to new features](https://www.intercom.com/blog/rarely-say-yes-to-feature-requests/). Because new features come with huge costs today and even bigger costs tomorrow, when you try to build a new thing on top of existing functionality.

So, if good product managers try to avoid new features in their products, should we develop things that are not a part of our core product?

At work I try to ask myself the following questions as much as possible: _do we deliver value with that?_ (_do we earn money with that?)_ or _is that a part of our core product?_

> — Wrote your own caching utility for your small project?
>
> — Do we earn money selling caching service?
>
> — 🙅‍♂️ No, use Redis, memcached, whatever

> — Setting up customer support ticketing system on your backend and frontend?
>
> — Do we earn money selling customer support SaaS solution?
>
> — 🙅‍♂️ No, use Zendesk, Intercom, whatever

> — Creating your own CMS?
>
> — Do we sell the CMS?
>
> — 🙅‍♂️ No, use Contentful, WordPress, whatever

We don't develop our own databases, we use Postgres, MySQL, etc. We don't develop programming languages and frameworks. We use Ruby on Rails, Django, etc. So why do we come up doing thing we're not making money from? What has been done many many times before us.

Reasons to use a complete long living solution:

- it's tested for you, you don't spend time doing that
- it stepped on all the rakes, met all the edge-cases and fixed it
- it frees up your time, so you can focus on important things
- if it's a SaaS, they'll make it better in time

## But it costs money!

First of all, a lot of companies [offer sweet discounts for startups](http://freefor.dev)

Next, you need to compare how many time you're going to spend supporting your custom solutions (while not developing or improving your core business service) with a price you can spend on a subscription

### Cost of Automation

You need good reasons to decide to automate something. Time you gonna spend automating and supporting the automation must be less than time doing it manually. Calc that before doing smth

```
Time to Automate + (Time to Support / Year) > Time to do it Manually / Year
```

## Conclusion

At the end, a developer's key activity is not writing code, it's delivering value and solving problems. And complete solutions help you focus on the important and deliver the most value.

Contentful and some homemade CMS solve the same problem, but do they deliver the same value? Can I schedule posts? Can I post to Facebook too? Can I filter articles by publishing date? That's the thing.
