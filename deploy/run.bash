#!/bin/bash

set -e -o pipefail

ssh root@178.128.126.186 "bash ~/deploy/init_project.sh $1"
