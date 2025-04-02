# 베이스 이미지를 eclipse-temurin:21-jre-alpine로 지정
FROM eclipse-temurin:21-jre-alpine
# 작성자 레이블 생성
LABEL maintainer="hong123 <hong123@gmail.com>"
# 버전 레이블 생성
LABEL version="1.0"
# 이미지의 /root 디렉터리에 university-0.0.1-SNAPSHOT.jar 파일 복사
COPY university-0.0.1-SNAPSHOT.jar /root
# Timezone 환경변수를 Asia/Seoul로 설정
ENV TZ=Asia/Seoul
# 이미지에서 8080포트를 노출
EXPOSE 8080
# 작업 디렉터리를 /root로 변경
WORKDIR /root
# 컨테이너 실행 시 university-0.0.1-SNAPSHOT.jar 파일 실행
CMD [ "java", "-jar", "university-0.0.1-SNAPSHOT.jar" ]