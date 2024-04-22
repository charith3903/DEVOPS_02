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
        stage('Run') {
    steps {
        bat '''
            docker run -d --name New_container -p 8080:80 charith01/devops02-cuban:%BUILD_NUMBER%
        '''
    }

        }
    }
    
    post {
        always {
            bat 'docker logout'
        }
    }
}
