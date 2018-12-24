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

## React Native Client
It's a simple client build (will be) to display and handle the product information available on the node-product-app. To start the environment run
```
# Run and connect using the Expo client
npm start

# Run and connect using the iOS simulator
npm run ios
```

Notes on structuring the folders for a scalable react native app:
* https://medium.com/the-andela-way/how-to-structure-a-react-native-app-for-scale-a29194cd33fc
* https://medium.com/the-react-native-log/organizing-a-react-native-project-9514dfadaa0

Tips: https://gist.github.com/llipe/b9a78430e84d2d09812e08a9cb526052
