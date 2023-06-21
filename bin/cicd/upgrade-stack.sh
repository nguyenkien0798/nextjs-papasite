#!/bin/sh -e

echo ""
echo "[INFO] Usage: sh bin/upgrade-stack.dev.sh <git-branch-name>"
echo ""

[ ! -z "$1" ] && git checkout $1

git pull && \
 bash swarmkit/bin/build.sh && \
 bash swarmkit/bin/deploy.sh && sleep 5 && \
 bash swarmkit/bin/update-service app

