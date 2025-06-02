# Use a base JDK image
FROM openjdk:17-jdk-alpine

# Add a volume to store temporary files
VOLUME /tmp

# Copy the jar file into the container
COPY target/*.jar app.jar

# Run the jar file
ENTRYPOINT ["java", "-jar", "/app.jar"]
