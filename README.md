git clone https://github.com/prar1hana/Student_Repo.git
cd Student_Repo

cd frontend
npm install
npm start

mvn clean install
mvn spring-boot:run


rancher desktop to run the docker daemon (kubernetes currently not properly configured)

docker login

we have to login to the dockerhub the profile we made ( [hub.docker.com/repositories/prar1hana](https://hub.docker.com/repositories/prar1hana) ) becuase I have the backend as private, I hve the password in whatsapp jst check for docker hub username and password

cd frontend
docker build -t prar1hana/student_repo_frontend:v1.0 . or docker build -t student-frontend .
docker run -p 3000:80 prar1hana/student_repo_frontend:v1.0 or docker run -p 3000:3000 student-frontend

cd backend
docker build -t prar1hana/student_repo_backend:v1.0 . or docker build -t student-backend .
docker run -p 8083:8083 prar1hana/student_repo_backend:v1.0 or docker run -p 8080:8080 student-backend


# 📚 Student Repository App

A full-stack web application for managing student data.

- ⚙️ Spring Boot (Java) – Backend  
- ⚛️ React.js – Frontend  
- 🗃️ DynamoDB (previously MySQL)  
- 🐳 Docker for containerization  
- 🧑‍🌾 Rancher Desktop to run Docker daemon (Kubernetes currently not configured)  

---

## 🔁 Clone the Repository

```bash
git clone https://github.com/prar1hana/Student_Repo.git
cd Student_Repo
```

---

## ⚛️ Frontend (React)

### ▶️ Run without Docker

```bash
cd frontend
npm install
npm start
```

### 🐳 Build and Run with Docker

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

## ⚙️ Backend (Spring Boot)

### ▶️ Run without Docker

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### 🐳 Build and Run with Docker

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

## 🐳 Docker & Rancher Desktop

- Rancher Desktop is used to run the Docker daemon.
- Make sure Docker is enabled in Rancher Desktop settings.
- Kubernetes is installed but not configured — ignore it for now.

---

## 🔐 DockerHub Login

Before pulling/pushing private images:

```bash
docker login
```

- **Username:** `prar1hana`  
- **Password:** *(check WhatsApp)*  
- [DockerHub Repo](https://hub.docker.com/repositories/prar1hana)

---

## 📁 Project Structure

```
Student_Repo/
├── backend/
│   └── src/...
├── frontend/
│   └── src/...
├── kubernetes files/    # (currently unused)
```

---

## ❌ Kubernetes (Currently Unused)

The folder `kubernetes files/` exists but is not working or configured yet.  
You can ignore this folder for now.












