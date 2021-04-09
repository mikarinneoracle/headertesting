../flux create source git headertesting2 \
  --url=https://github.com/mikarinneoracle/headertesting \
  --branch=master \
  --interval=30s \
  --export > ./clusters/my-cluster/headertesting2-source.yaml

