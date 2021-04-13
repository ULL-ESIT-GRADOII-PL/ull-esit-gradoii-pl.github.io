---
title: Inheritance and Scopes in Egg 
---

## JavaScript — Inheritance, delegation patterns and Object linking

* [JavaScript — Inheritance, delegation patterns and Object linking](https://codeburst.io/javascript-inheritance-25fe61ab9f85)

## The __proto__ 

... Most modern browsers, however, do offer property available called 
<code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto">__proto__</a></code> 
(that's 2 underscores either side), which contains the object's constructor's 
<code>prototype</code> object. For example, try <code>person1.__proto__</code> and <code>person1.__proto__.__proto__</code> 
to see what the prototype chain looks like in code!

## Scopes in Egg 

This figure illustrates the chain of environment objects for the code trace explained in the video class below

![]({{site.baseurl}}/assets/images/env-inheritance-chain-4-two-egg.jpg)

corresponding to the code

```js
do(
  define(sum,  # function
    fun(nums, other,
      do(
         print(other),
         define(i, 0),
         define(sum, 0),
         while(<(i, length(nums)),
           do(define(sum, +(sum, element(nums, i))),
              define(i, +(i, 1))
           )
         ),
         sum
      )
   )
 ),
 print(sum(array(1, 2, 3), 4))
)
```
when inside the generated function for `sum`

{% include video provider="youtube" id="LQ4abpHBYhA" %}