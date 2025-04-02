# 베이스 이미지를 ubuntu:latest로 지정
FROM ubuntu:latest
# 작성자 레이블 생성
LABEL maintainer="hong123 <hong123@gmail.com>"
# 버전 레이블 생성
LABEL version="2.0"
# 베이스 이미지로 만들어진 컨테이너에서 실행할 명령어 작성
RUN apt update
# 이전 명령어가 실행된 이미지로 만들어진 컨테이너에서 실행할 명령어 작성
RUN apt -y install sudo
RUN sudo apt install net-tools
# Dockerfile로 생성된 이미지로 컨테이너 생성 시 먼저 실행 될 명령어를 지정
# CMD ifconfig
# CMD [ "/bin/bash", "-c", "ifconfig" ]
ENTRYPOINT [ "/bin/bash", "-c", "ifconfig" ]