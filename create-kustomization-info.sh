../flux create kustomization headertesting2 \
  --source=headertesting2 \
  --path="./kustomize" \
  --prune=true \
  --validation=client \
  --interval=5m \
  --export > ./clusters/my-cluster/headertesting2-kustomization.yaml
