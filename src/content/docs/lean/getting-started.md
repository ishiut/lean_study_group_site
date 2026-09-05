---
title: How to run Lean
description: Explanation of how to run a Lean code in various ways. 
draft: true
---

I would like to list several ways to run a Lean code. From the simpler to the complicated. 

## Lean Web

If you want to quickly test a code, [Lean Web](https://live.lean-lang.org/) provides an installation-free online environment that can be used from anywhere. 
You can even choose the version. 
However, you cannot save your code so it is not suitable for any project. 

## GitHub Codespaces - Cloning Mathlib4 repository

[GitHub Codespaces](https://github.com/codespaces) is a cloud development environment provided by GitHub. 
Because it is online, you do not have to mess with your computers. 
The downside is that if you use it heavily, you may be charged a small amount. 
However, even I have not been charged more than $10 per month. 
So as long as you are using it properly, it is unlikely that you have to pay a lot. 

1. If you do not have an account, make one at [GitHub](github.com) and log in by the account. 
2. Go to the [Mathlib4 repository](https://github.com/leanprover-community/mathlib4). This provides the pre-configured templates. 
3. Click the green "<> Code" button and choose the "Codespaces" tab. Then, click on "Create codespace on master". 
4. It takes a long time, so wait. 

### For those who know Git or source-control. 
In this process, you made a clone of this repository. So, you cannot push into it. 
If you have a source-controlled fork, you just try to push it from the VS Code and then it suggest forking to your account. If you say Yes to it, you will get your own fork. 

## GitHub Codespaces - Making your own project

