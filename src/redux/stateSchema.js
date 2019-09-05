const stateSchema = {
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
    "required": [
      "comments",
      "auth"
    ],
    "properties": {
      "comments": {
        "$id": "#/properties/comments",
        "type": "object",
        "title": "The Comments Schema",
        "required": [
          "comments"
        ],
        "properties": {
          "comments": {
            "$id": "#/properties/comments/properties/comments",
            "type": "array",
            "title": "The Comments Schema",
            "items": {
              "$id": "#/properties/comments/properties/comments/items",
              "type": "string",
              "title": "The Items Schema",
              "default": "",
              "examples": [
                "Comment #1",
                "Comment #2"
              ],
              "pattern": "^(.*)$"
            }
          }
        }
      },
      "auth": {
        "$id": "#/properties/auth",
        "type": "object",
        "title": "The Auth Schema",
        "required": [
          "isLoggedIn"
        ],
        "properties": {
          "isLoggedIn": {
            "$id": "#/properties/auth/properties/isLoggedIn",
            "type": "boolean",
            "title": "The Isloggedin Schema",
            "default": false,
            "examples": [
              true
            ]
          }
        }
      }
    }
}

export default stateSchema;