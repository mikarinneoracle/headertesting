../flux create source git podinfo \
  --url=https://github.com/mikarinneoracle/headertesting \
  --branch=master \
  --interval=30s \
  --export > ./clusters/my-cluster/podinfo-source.yaml

