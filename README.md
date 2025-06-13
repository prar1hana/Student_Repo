git clone https://github.com/prar1hana/Student_Repo.git
cd Student_Repo

cd frontend
npm install
npm start

mvn clean install
mvn spring-boot:run


rancher desktop to run the docker daemon (kubernetes currently not properly configured)

doker login

we have to login to the dockerhub the profile we made ( [hub.docker.com/repositories/prar1hana](https://hub.docker.com/repositories/prar1hana) ) becuase I have the backend as private, I hve the password in whatsapp jst check for docker hub username and password

cd frontend
docker build -t prar1hana/student_repo_frontend:v1.0 . or docker build -t student-frontend .
docker run -p 3000:80 prar1hana/student_repo_frontend:v1.0 or docker run -p 3000:3000 student-frontend

cd backend
docker build -t prar1hana/student_repo_backend:v1.0 . or docker build -t student-backend .
docker run -p 8083:8083 prar1hana/student_repo_backend:v1.0 or docker run -p 8080:8080 student-backend











