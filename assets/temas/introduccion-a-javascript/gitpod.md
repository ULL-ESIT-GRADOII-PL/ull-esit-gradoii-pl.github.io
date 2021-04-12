---
title: GitPod
---

Gitpod is an open source platform for automated and ready-to-code development environments that blends into your existing workflow. It enables developers to describe their dev environment as code and start instant and fresh development environments for each new task directly from your browser.

See [Introduction to Gitpod](https://www.gitpod.io/docs)

##  Oferta Plan Personal (2021)

En esta URL [https://gitpod.io/plans](https://gitpod.io/plans)
se puede solicitar un upgrade al plan "personal"  que permite acceder a repositorios privados si eres un miembro de una comunidad educativa. No he tenido que introducir tarjetas ni siquiera probar  que soy miembro de la ULL (¿quizás les basta con el email?). 



![]({{site.baseurl}}/assets/images/gitpod/8-horas-100-euros.png)


**Está limitada a 100 horas de uso por mes**:

* [100 horas](https://www.gitpod.io/pricing)
* Repositorios privados



En el ejemplo se ve los apuntes de PL (un repo público usando Jekyll) siendo editado:

![apuntes-pl-gitpod]({{site.baseurl}}/assets/images/gitpod/apuntes-pl-gitpod.png)

todo funciona bien.

Con este plan es posible acceder a repos privados. 
En el repo en GitHub aparece un nuevo botón verde con etiqueta "GitPod":

![boton-gitpod-en-repo-privado]({{site.baseurl}}/assets/images/gitpod/boton-gitpod-en-repo-privado.png)    

Cuando le damos  la primera vez nos sale un mensaje de error:

![autorizar-gitpod-a-organizacion.png 8-horas-100-euros]({{site.baseurl}}/assets/images/gitpod/autorizar-gitpod-a-organizacion.png)

Le damos los permisos adecuados:

![gitpos-request-permissions]({{site.baseurl}}/assets/images/gitpod/gitpos-request-permissions.png)   

![grant-access]({{site.baseurl}}/assets/images/gitpod/grant-access.png)                    

![teacher-coupon]({{site.baseurl}}/assets/images/gitpod/teacher-coupon.png)

y ya podemos editar nuestros repos privados.

Resumiendo:

Lo que pasa (Abril 2021) es que GitPod está siendo ofertado como parte del GitHub teachers' toolbox: <https://education.github.com/toolbox>. Por tanto, si  tienes actualizado tu GitHub Toolbox, creo que tanto los profes como los alumnos tienen acceso a repos privados y a la nube proveída por GitPod.


## Drawbacks according to Pattacini

> Gitpod is fantastic but comes with some constraints that may affect yours and your students’ work:

> Obviously, you’d need to learn how to deal with Docker files and do some preliminary tests on your side. Getting accustomed to Docker might take some time :hourglass_flowing_sand:

> In a Gitpod workspace, the user has no sudo credentials. This is understandable and represents good practice, but sometimes it’d be convenient to install packages straight away from the console without the burden of adjusting the Dockerfile once more.

> Gitpod is free only for public GitHub repositories. This is ok for public assignments but could be a hitch for private ones. An easy workaround could be to ask students to clone their private repositories only after the workspace is ready.

Esto se resuelve como he comentado

> There’s **the threshold of 100 hours/month per user**. Quite reasonable, but much depends on your classroom payload.
When you share a running workspace, you’ll share also your access to GitHub, which might not be desirable! This is a serious inconvenient during remote technical interviews, for example.

> Finally, don’t expect to have quantum computers available from free Cloud IDE’s services. After all, there’s a trade-off and resources are limited (e.g. no GPU), even though Gitpod seems quite generous in this sense.

## Referencias

* [The benefits of integrating Docker and Cloud IDE’s in the GitHub Classroom workflow](https://education.github.community/t/the-benefits-of-integrating-docker-and-cloud-ides-in-the-github-classroom-workflow/40724) by Ugo Pattacini