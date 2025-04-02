# 베이스 이미지를 eclipse-temurin:21-jre-alpine로 지정
FROM eclipse-temurin:21-jre-alpine
# 작성자 레이블 생성
LABEL maintainer="hong123 <hong123@gmail.com>"
# 버전 레이블 생성
LABEL version="1.0"
# 이미지의 /root 디렉터리에 university-0.0.1-SNAPSHOT.jar 파일 복사
COPY university-0.0.1-SNAPSHOT.jar /root
# docker build 명령어 실행 시 Dockerfile 내부로 값을 전달받을 수 있는 변수 선언(기본값 dev)
ARG BUILD_PROFILE=dev
# docker build 명령어 실행 시 Dockerfile 내부로 값을 전달받을 수 있는 변수 선언(기본값 dev)
ARG BUILD_PORT=8088
# Timezone 환경변수를 Asia/Seoul로 설정
ENV TZ=Asia/Seoul
# BUILD_PROFILE 변수의 값으로 APP_PROFILE 환경변수의 값을 설정
ENV APP_PROFILE=${BUILD_PROFILE}
# BUILD_PORT 변수의 값으로 이미지에서 노출할 포트를 지정
EXPOSE ${BUILD_PORT}
# 작업 디렉터리를 /root로 변경
WORKDIR /root
# 컨테이너 실행 시 university-0.0.1-SNAPSHOT.jar 파일 실행
CMD [ "java", "-jar", "university-0.0.1-SNAPSHOT.jar", "--spring.profiles.active=${APP_PROFILE}" ]