## ITI DevOps Final CI-CD Project Application

## By Paula Hakeem

This repository is dependent on the Infrastrucre Repo: https://github.com/paulahakeem/ITI_DEVOPS_FINAL_PROJECT.git

## 5th Part: Build CI/CD Pipeline using Jenkins

#### Once a commit is made Jenkins will:
- Build an image from Dockerfile
- Push the image to DockerHub
- Apply deployment for the app based on the image
- Apply LoadBalancer service for the app

### 1. Add Credentials in Jenkins
- #### DockerHub Credentials
> Add your DockerHub Credentials `(Username and Password)` and save the id with this value `Dockerhub`.
![211](https://user-images.githubusercontent.com/116673091/221338677-6edddd35-1b76-4c53-9934-4b9af38e6a76.png)


### 2. Create CI Pipeline:
- Pull Code from GitHub
- Build the Application image using Docker
- Push Image to DockerHub
- Trigger CD Pipeline to Run

### 3. Create CD Pipeline:
- Deploy Application in EKS

### 4. Add GitHub Webhook:
![webhook](https://user-images.githubusercontent.com/116673091/221338727-4309617e-d09c-4d1f-892d-ebefa6598ff6.png)

## 6th Part: Check the Application
- get application external ip using the following command in the VM

```
kubectl get all -n backend
```
- Finally access the application

![8799665](https://user-images.githubusercontent.com/116673091/221338828-d074abdb-26ff-44a2-8c0d-5ce11c14523a.png)

