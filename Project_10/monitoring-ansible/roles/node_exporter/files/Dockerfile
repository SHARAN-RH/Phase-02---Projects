FROM ubuntu:24.04

RUN apt update && apt install -y curl tar

COPY node_exporter-1.8.1.linux-amd64 /opt/node_exporter

EXPOSE 9100

WORKDIR /opt/node_exporter
ENTRYPOINT ["./node_exporter"]
