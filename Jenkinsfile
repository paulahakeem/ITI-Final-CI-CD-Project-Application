pipeline {
  agent any

  stages {
    stage('Preparation') {
      steps {
        checkout scm
      }
    }

    stage('Build image') {
      when {
        branch 'dev'
        branch 'master'
      }
      steps {
        sh 'docker build -t my_django_app:v1 .'
      }
    }

    stage('Push image') {
      when {
//         branch 'dev'
        branch 'master'
      }
      steps {
        withCredentials([usernamePassword(credentialsId: 'DOCKERHUB', usernameVariable: 'my_user', passwordVariable: 'my_pass')]) {
          sh "docker login -u ${my_user} -p ${my_pass}"
          sh "docker tag my_django_app paulahakeem/my_django_app:v1"
          sh "docker push paulahakeem/my_django_app:v1"
        }
      }
    }

    stage('Deploy') {
      when {
//         branch 'dev'
        branch 'master'
      }
      steps {
        sh "docker run -d -p 8000:8000 paulahakeem/my_django_app"
      }
    }
  }
}
