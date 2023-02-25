pipeline {
    agent any

    stages {
        stage('CI') {
            steps {
                git 'https://github.com/paulahakeem/app_final_project.git'
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                sh """
                docker build . -f dockerfile -t paulahakeem/finalimage:v3 --network host
//                 docker login -u ${USERNAME} -p ${PASSWORD}
//                 docker push paulahakeem/finalimage:v3
                """
                }
            }
        }
         stage('CD') {
            steps {
                git 'https://github.com/paulahakeem/app_final_project.git'
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                sh """
                kubectl apply -f /var/jenkins_home/workspace/backend/deploy1.yaml
                kubectl apply -f /var/jenkins_home/workspace/backend/lb.yaml
                """
                }
            }
        }
    }
}
