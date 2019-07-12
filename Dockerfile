FROM us.gcr.io/ppp-prod/common:java-8-latest

COPY target/spring-rest.jar /opt/spring-rest/

WORKDIR /opt/spring-rest

RUN mkdir temp

ENTRYPOINT java $JAVA_OPTS -jar ./spring-rest.jar

EXPOSE 8080
