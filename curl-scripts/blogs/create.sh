#!/bin/bash
API="https://travel-blogpost-api.herokuapp.com/"
URL_PATH="/blog_posts/"
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
