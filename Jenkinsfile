pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/charith3903/DEVOPS_02.git'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t charith01/devops02-cuban:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
               withCredentials([string(credentialsId: 'devops-dockerhubpassword', variable: 'devops_dockerhubpassword')]) {
              bat'docker login -u charith01 -p ${devops_dockerhubpassword}'
            }
               
               
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push charith01/devops02-cuban:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}