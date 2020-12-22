#!/bin/bash
API="https://travel-blogpost-api.herokuapp.com/"
URL_PATH="/create-blog"
curl "${API}${URL_PATH}" \
--include \
--request POST \
  --header "Content-type: application/json" \
  --data '{
    "blog": {
      "place": "'"${PLACE}"'",
      "description":  "'"${DESCRIPTION}"'"
    }
  }'
echo
