FROM ubuntu:24.04

RUN apt update && apt install -y adduser libfontconfig1 musl libglu1

COPY grafana-11.0.0 /opt/grafana

EXPOSE 3000

WORKDIR /opt/grafana
ENTRYPOINT ["/opt/grafana/bin/grafana-server", "--homepath=/opt/grafana", "--config=/opt/grafana/conf/defaults.ini"]
