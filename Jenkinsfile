pipeline {
    agent any

    stages {
        stage('CI') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                git 'https://github.com/mahmoud254/jenkins_nodejs_example'
                sh """
                docker login -u ${USERNAME} -p ${PASSWORD}
                docker build . -f dockerfile -t paulahakeem/node-app:v1.0
                docker push shrouk20180287/node-app:v1.0
                """
                }
            }
        }
         stage('CD') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                git 'https://github.com/mahmoud254/jenkins_nodejs_example'
                sh """
                docker login -u ${USERNAME} -p ${PASSWORD}
                docker run -d -p 3000:3000 paulahakeem/node-app:v1.0
                """
                }
            }
        }
    }
}
