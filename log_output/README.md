# Exercise: 1.1. Getting started

## Instructions
Exercises can be done with any language and framework you want.

Create an application that generates a random string on startup, stores this string into memory, and outputs it every 5 seconds with a timestamp. e.g.

```
2020-03-30T12:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
2020-03-30T12:15:22.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
```
Deploy it into your Kubernetes cluster and confirm that it's running with kubectl logs ...

You will keep building this application in future exercises. This application will be called Log output.

As an answer, give the link to the GitHub release that corresponds to the exercise

See here for more info on their requirements for your submission repository.
For the example submission repository, the link is https://github.com/mluukkai/KubernetesSubmissions/tree/1.1

## Run locally
Is build for Node js 22.14
- `npm install`
- `npm run start-ts`

## Containerize and push to docker hub
- `docker build -f Dockerfile -t log_output:1.0.0 .`
- `docker login`
- `docker tag log_output:1.0.0 mikhailzvagelsky/log_output:1.0.0`
- `docker push mikhailzvagelsky/log_output:1.0.0`

## Deploy to kubernetes with kubectl, check logs, stop, and clean up
- set up kubectl config to point to your cluster
- `kubectl create deployment app --image=mikhailzvagelsky/log_output:1.0.0`
- `kubectl get pod` # app-xxx
- `kubectl logs -f app-xxx`
- Ctrl+C
- `kubectl delete deployment app` # graceful shutdown is not implemented, so wait some time

Also the deployment manifest is in k8s/log_output-app-deployment.yml could be used for deployment.
