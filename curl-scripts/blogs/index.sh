#!/bin/bash
API="https://travel-blogpost-api.herokuapp.com/"
URL_PATH="/blog-posts/"
curl  "${API}${URL_PATH}"\
  --include \
  --request GET \
echo
