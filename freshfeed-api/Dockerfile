FROM ubuntu:16.04
RUN apt-get update -y && \
    apt-get install -y python3-pip python3-dev

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip3 install -r requirements.txt

COPY . /app

RUN export LC_ALL=C.UTF-8
RUN export LANG=C.UTF-8
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

ENTRYPOINT ["flask"]

CMD ["run"]