# 📚 Student Repository App

A full-stack web application for managing student data.

-  Spring Boot (Java) – Backend  
-  React.js – Frontend  
-  DynamoDB (previously MySQL)  
-  Docker for containerization  
-  Rancher Desktop to run Docker daemon (Kubernetes currently not configured)  

---
# To run it locally follow the following steps
## Clone the Repository

```bash
git clone https://github.com/prar1hana/Student_Repo.git <folder-name>
cd Student_Repo
```

---

### If you want to use Docker & Rancher Desktop
- Open Racncher Desktop App to start Docker Daemon
- DockerHub Login
```bash
docker login
```
- **Username:** `prar1hana`  
- **Password:** *(check WhatsApp)*  
- [DockerHub Repo](https://hub.docker.com/repositories/prar1hana)

---

## Frontend (React)

### Run without Docker

```bash
cd frontend
npm install
npm start
```

### Build and Run with Docker

```bash
cd frontend

# Build the Docker image
docker build -t prar1hana/student_repo_frontend:v1.0 .
# or
docker build -t student-frontend .

# Run the container
docker run -p 3000:80 prar1hana/student_repo_frontend:v1.0
# or
docker run -p 3000:3000 student-frontend
```

---

## Backend (Spring Boot)

### Run without Docker

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### Build and Run with Docker

```bash
cd backend

# Build the Docker image
docker build -t prar1hana/student_repo_backend:v1.0 .
# or
docker build -t student-backend .

# Run the container
docker run -p 8083:8083 prar1hana/student_repo_backend:v1.0
# or
docker run -p 8080:8080 student-backend
```

---
## ❌ Kubernetes (Currently Unused)

The folder `kubernetes files/` exists but is not working or configured yet.  
You can ignore this folder for now.












