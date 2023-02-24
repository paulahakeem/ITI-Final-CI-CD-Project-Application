pipeline {
    agent any

    stages {
        stage('CI') {
            steps {
                git 'https://github.com/mahmoud254/jenkins_nodejs_example.git'
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                sh """
                docker login -u ${USERNAME} -p ${PASSWORD}
                docker build . -f dockerfile -t paulahakeem/finalimage:v1 --network host
                docker push paulahakeem/finalimage:v1
                """
                }
            }
        }
         stage('CD') {
            steps {
                git 'https://github.com/paulahakeem/app_final_project.git'
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                sh """
                kubectl apply -f /var/jenkins_home/workspace/backend/deploy.yaml
//                 kubectl apply -f /var/jenkins_home/workspace/backend/app-loadbalancer.yaml
                """
                }
            }
        }
    }
}
