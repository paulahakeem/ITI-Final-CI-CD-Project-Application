pipeline {
    agent any

    stages {
        stage('CI') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                git 'https://github.com/paulahakeem/app_final_project.git'
                sh """
                docker build . -t paulahakeem/node-app:v2.0 --network host
                docker login -u ${USERNAME} -p ${PASSWORD}
                docker push paulahakeem/node-app:v1.0
                """
                }
            }
        }
         stage('CD') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                git 'https://github.com/paulahakeem/app_final_project.git'
                sh """
                kubectl apply -f ./deploy.yaml
                """
                }
            }
        }
    }
}
