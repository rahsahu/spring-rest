FROM java:8

COPY target/spring-rest.jar /opt/spring-rest/

WORKDIR /opt/spring-rest

RUN mkdir temp

ENTRYPOINT java $JAVA_OPTS -jar ./spring-rest.jar

EXPOSE 8080
