# About
fullstack-hello-world is a simple project to test (hello-worlds) for node, mongo, docker, kubernates, automated QA, CD pipelines &amp; everything else in a small hello world project.

# How to build/ run

## Installing Docker & Kubernates
First you need to install [Docker](https://docs.docker.com/docker-for-mac/) following their instructions. For [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) I recommend you to try installing through [Homebrew](https://brew.sh/):
```
brew install kubernetes-cli
```
Finally, if you are running locally, install [minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) 

## Everything else
* Build the Docker image for the node app (node-product-app)
* Launch the web & mongo services into the kubernate cluster
* Build the Docker image for the client app (pending)
* Start the project (locally) or deploy on the cloud (pending)

Tips: https://gist.github.com/llipe/b9a78430e84d2d09812e08a9cb526052
