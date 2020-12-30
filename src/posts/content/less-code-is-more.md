---
title: Less Code is More
emoji: ✨
slug: less-code-is-more
description: The advantages of not-invented-here solutions
publishedAt: '2020-11-06T10:30:54.668Z'
---

A beginner developer usually believes their key activity is writing code. This is wrong. Solving a problem with code is actually the most expensive way to do something.

1. Code breaks. There is only one type of code that never does: the code that isn't written. There is always that edge case nobody has thought about, some unexpected input or system state.
2. You marry your code and you make a vow to support it until the end of your days. Monitor it works correctly, fix it here and there, update libraries, monitor the infrastructure it's running at, etc.
3. Each feature can become a blocker when doing something meaningful. Imagine a user can delete their account in your chat application. Having that feature requires you to design a lot of new interactions. What should we do with user's messages after their account is deleted? If a deleted user has previously shared an invitation link to some chat, will it still be valid?
4. Other developers need to learn that and keep it in mind while designing other stuff
5. And [many more reasons](https://twitter.com/johncutlefish/status/1335822976957247489)

Writing code is a serious and expensive commitment, you have to be really sure this is **the best** way to solve your problem.

Intercom suggests to [rarely say yes to new features](https://www.intercom.com/blog/rarely-say-yes-to-feature-requests/). New features come with huge costs today and even bigger costs tomorrow, when you're building a new thing on top of existing functionality. So, if good product managers try to avoid new features in their products, should we develop things that are not a part of our core product?

## Only Core Features Have to be Coded

Non-core things and especially internal tools suffer a common problem. They always appear in the very end of a backlog.

Take admin sites and dashboards. A lot of them, mostly in small companies, are slow, buggy and inconvenient. You wouldn't want to delay a release of a new feature for the end-users, just to add add some fancy filters and data views to the admin site. But how many time and insights your colleagues from customer support, marketing and analytics would loose without them?

If you don't plan to hire a dedicated developer or a team for these tasks, you most likely never gonna have time for internal things. In this case, you can setup something like [Metabase](http://metabase.com), [Retool](http://retool.com) or at least use some high-level framework to quickly bootstrap the thing.

### Finding the Core

At work I try to ask myself _do we deliver value with that?_ (_do we earn money with that?)_ as often as possible.

> — Wrote your own caching service for your small project?
>
> — Do we earn money selling caching service?
>
> — 🙅‍♂️ No, use Redis, memcached or whatever embedded in your framework

> — Setting up customer support ticketing system on your backend and frontend?
>
> — Do we earn money selling customer support SaaS solution?
>
> — 🙅‍♂️ No, use Zendesk, Intercom, whatever

> — Creating your own CMS?
>
> — Do we sell content-management systems? Is our product focused on content creation?
>
> — 🙅‍♂️ No, use Contentful, WordPress, whatever

We don't develop our own databases, we use Postgres, MySQL, etc. We don't develop programming languages and frameworks. We use Ruby on Rails, Django, etc. So why do we come up doing things we're not making money from? What has been done many many times before us.

Using complete third-party and open-source solutions have a lot of benefits:

- it's tested for you, you don't spend time reinventing the existing thing
- it stepped on all the rakes, met all the edge-cases and fixed it
- it frees up your time, so you can focus on important
- if it's a SaaS, they'll most likely make it better in time

## But it costs money!

First of all, a lot of companies [offer sweet discounts for startups](http://freefor.dev)

Next, so is the time you're going to spend developing & supporting your custom solution (while not developing or improving your core business service).

### Cost of Automation

You need good reasons to decide to automate something. Time you gonna spend automating and supporting the automation must be less than time doing it manually.
Calculate that before doing something:

```
Time to Automate + (Time to Support / Year) > Time to do it Manually / Year
```

## Conclusion

At the end, a developer's key activity is not writing code, it's delivering value and solving problems. And complete solutions help you focus on the important and deliver the most value.

Contentful and some homemade CMS solve the same problem, but do they deliver the same value? Can I schedule posts? Can I post to Facebook too? Can I filter articles by publishing date? That's the thing.

> The more you do the same thing over and over again, the more you see it in another products, the more are the changes it's already automated by somebody else.
