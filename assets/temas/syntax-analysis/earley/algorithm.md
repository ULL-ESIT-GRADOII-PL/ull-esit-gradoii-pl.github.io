---
title: The Earley Algorithm Explained
---

Let be a grammar $$G = (\Sigma, V, P, Start)$$ and $$x$$  an input string $$x = a_{1}a_{2} \ldots a_{n}$$.

A **state** is an element $$(X \longrightarrow \alpha \bullet \beta, j)$$ where 
$$X \longrightarrow \alpha \beta \in P$$ is a  production in the set of  grammar productions  $$P$$, and 
$$j \in \{0 \ldots n \}$$ is a position in the input string $$x = a_{1}a_{2} \ldots a_{n}$$.

The set of *active states* when the  input prefix $$a_1 \ldots a_k$$ is being analyzed is called $$S_k$$. 

More precisely, $$S_k$$ is the set of states $$(X \longrightarrow \alpha \bullet \beta, j)$$  whose production rule $$X \longrightarrow \alpha \beta$$ appears in a derivation from the $$Start$$ symbol 

$$Start \overset{*}{\Longrightarrow} a_{1}a_{2} \ldots a_{j-1}X\omega \underset{X \longrightarrow \alpha \beta}{\Longrightarrow } a_{1}a_{2} \ldots a_{j-1} \alpha \beta \omega 
\overset{*}{\Longrightarrow} a_{1}a_{2} \ldots a_j \ldots a_{k} \beta \omega$$ 

Observe that it holds that $$ \alpha \overset{*}{\Longrightarrow} a_{j} \ldots a_k$$

and so the production $$X \longrightarrow \alpha \beta$$ can  still be used for derivation at position $$k$$. 

The parser is seeded with $$S_0$$ consisting of only the top-level rule. The parser then repeatedly executes three operations: 

1. prediction, 
2. scanning, and 
3. completion.


These three operations are repeated until no new states can be added to the set $$S_k$$ 

## Prediction 

1. $$\forall s = (X \longrightarrow \alpha \bullet Y \beta, j)  \in S_k$$ (where *j* is the start of the substring), and $$Y \in V$$ is in the set of non terminals
2. add states $$(Y \longrightarrow \bullet \gamma, k)$$ to $$S_k$$ $$\forall Y \longrightarrow \gamma$$ grammar productions having *Y* on the left hand side.

Duplicate states are not added to the state set, only new ones. 

## Scanning 

If $$a_{k} \in \Sigma$$ is the next terminal in the input stream, then $$\forall s \in S_{k-1}$$ of the form $$s = (X \longrightarrow \alpha \bullet a_{k} \beta, j)$$ , add 
$$s = (X \longrightarrow \alpha a_{k} \bullet \beta, j)$$ to $$S_{k}$$.

## Completion

$$\forall s \in S_{k}$$  of the form $$s = (Y \longrightarrow \gamma \bullet, j)$$, 
find all states in $$S_j$$ of the form $$(X \longrightarrow \alpha \bullet Y \beta, i)$$ and add $$(X \longrightarrow \alpha Y \bullet \beta, i)$$ to $$S_k$$.



## Acceptance

The algorithm accepts if an state with the form $$(Start \longrightarrow \gamma \bullet, 0)$$ ends up in $$S_n$$, where $$Start$$ is the start symbol of the grammar $$G$$ and $$n$$ is the input length. 

If there are several of these states it means the grammaris ambiguous. 

If there are none, the input is rejected.



## Earley Parsing Explained

* [Earley Parsing Explained](https://loup-vaillant.fr/tutorials/earley-parsing/) by Loup

## Toby Ho on the Earley Parsing Algorithm

{% include video provider="youtube" id="WNKw1tiskSM"%}

## Earley Parsing by Natalie Parde

{% include video provider="youtube" id="1j6hB3O4hAM"%}


## Wikipedia

* [Earley parser](https://en.wikipedia.org/wiki/Earley_parser)

## Optimizing Right Recursion

* [Optimising Right Recursion](https://loup-vaillant.fr/tutorials/earley-parsing/right-recursion) by Loup 

* [Joop Leo’s optimizations for right-Recursion]({{site.baseurl}}/assets/pdfs/joop-leo-parse-algorithm-optimization-for-right-recursion.pdf) original paper
