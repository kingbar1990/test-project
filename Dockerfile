FROM python:3.5

RUN apt-get update && apt-get install -y python3-psycopg2

RUN mkdir /code
ADD requirements.txt /code
WORKDIR /code
RUN pip install -r requirements.txt
