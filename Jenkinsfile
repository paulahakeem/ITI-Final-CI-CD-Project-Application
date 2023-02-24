pipeline {
    agent any

    stages {
        stage('CI') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                git 'https://github.com/paulahakeem/app_final_project.git'
                sh """
                docker login -u ${USERNAME} -p ${PASSWORD}
                docker build . -t paulahakeem/node-app:v2.0 --network host
                docker push paulahakeem/node-app:v1.0
                """
                }
            }
        }
         stage('CD') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                git 'https://github.com/mahmoud254/jenkins_nodejs_example'
                sh """

                """
                }
            }
        }
    }
}
