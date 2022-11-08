FROM amazoncorretto:8

COPY target/spring-rest.jar /opt/spring-rest/

WORKDIR /opt/spring-rest

ENTRYPOINT java  -jar ./spring-rest.jar

EXPOSE 8085
