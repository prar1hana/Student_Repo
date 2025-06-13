git clone https://github.com/prar1hana/Student_Repo.git
cd Student_Repo

cd frontend
npm install
npm start

mvn clean install
mvn spring-boot:run


[hub.docker.com/repositories/prar1hana
](https://hub.docker.com/repositories/prar1hana)

we have to login to the dockerhub  becuase I have the backend as private

rancher desktop to run the docker daemon (kubernetes currently not properly configured)

cd frontend
docker build -t student-frontend .
docker run -p 3000:3000 student-frontend

cd backend
docker build -t student-backend .
docker run -p 8080:8080 student-backend
