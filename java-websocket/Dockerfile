FROM openjdk:11-jre-slim
CMD ["MKDIR", "/java-websocket"]
WORKDIR /java-websocket
EXPOSE 8080
COPY build/libs/java-websocket-1.0-SNAPSHOT.jar /java-websocket/java-websocket.jar
CMD ["java", "-jar",  "/java-websocket/java-websocket.jar"]
