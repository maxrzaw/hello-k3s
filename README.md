# Hello World Kubernetes

Experimenting with Kubernetes (k3s) and reverse proxies.

This is a pretty simple proof of concept with two services running on the same
Kubernetes cluster sitting behind an ingress controller directing traffic based
on the domain name.

Current setup has DNS records for hello-k3s-a and hello-k3s-b that both point to
the Kubernetes service node's IP.
