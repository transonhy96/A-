var mazeData = [
  [
    {
      "i": 0,
      "j": 0,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        false,
        false,
        true
      ]
    },
    {
      "i": 0,
      "j": 1,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        false,
        true,
        true
      ]
    },
    {
      "i": 0,
      "j": 2,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        true,
        false,
        true
      ]
    },
    {
      "i": 0,
      "j": 3,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        false,
        true,
        true
      ]
    },
    {
      "i": 0,
      "j": 4,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        false,
        false,
        true
      ]
    },
    {
      "i": 0,
      "j": 5,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        false,
        false,
        true
      ]
    }
  ],
  [
    {
      "i": 1,
      "j": 0,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        false,
        true,
        false
      ]
    },
    {
      "i": 1,
      "j": 1,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        true,
        false,
        false
      ]
    },
    {
      "i": 1,
      "j": 2,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        false,
        true,
        true
      ]
    },
    {
      "i": 1,
      "j": 3,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        false,
        false,
        false
      ]
    },
    {
      "i": 1,
      "j": 4,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        true,
        true,
        false
      ]
    },
    {
      "i": 1,
      "j": 5,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        false,
        true,
        false
      ]
    }
  ],
  [
    {
      "i": 2,
      "j": 0,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        false,
        true,
        false
      ]
    },
    {
      "i": 2,
      "j": 1,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        false,
        false,
        true
      ]
    },
    {
      "i": 2,
      "j": 2,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        true,
        false,
        false
      ]
    },
    {
      "i": 2,
      "j": 3,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        true,
        true,
        false
      ]
    },
    {
      "i": 2,
      "j": 4,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        false,
        false,
        true
      ]
    },
    {
      "i": 2,
      "j": 5,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        false,
        true,
        false
      ]
    }
  ],
  [
    {
      "i": 3,
      "j": 0,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        false,
        false,
        false
      ]
    },
    {
      "i": 3,
      "j": 1,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        true,
        true,
        false
      ]
    },
    {
      "i": 3,
      "j": 2,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        false,
        false,
        true
      ]
    },
    {
      "i": 3,
      "j": 3,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        false,
        true,
        true
      ]
    },
    {
      "i": 3,
      "j": 4,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        false,
        true,
        false
      ]
    },
    {
      "i": 3,
      "j": 5,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        false,
        true,
        false
      ]
    }
  ],
  [
    {
      "i": 4,
      "j": 0,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        false,
        true,
        false
      ]
    },
    {
      "i": 4,
      "j": 1,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        true,
        false,
        true
      ]
    },
    {
      "i": 4,
      "j": 2,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        false,
        true,
        false
      ]
    },
    {
      "i": 4,
      "j": 3,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        true,
        false,
        false
      ]
    },
    {
      "i": 4,
      "j": 4,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        true,
        true,
        false
      ]
    },
    {
      "i": 4,
      "j": 5,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        false,
        true,
        false
      ]
    }
  ],
  [
    {
      "i": 5,
      "j": 0,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        true,
        false,
        false
      ]
    },
    {
      "i": 5,
      "j": 1,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        true,
        false,
        true
      ]
    },
    {
      "i": 5,
      "j": 2,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        true,
        true,
        false
      ]
    },
    {
      "i": 5,
      "j": 3,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        true,
        true,
        false,
        true
      ]
    },
    {
      "i": 5,
      "j": 4,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        true,
        false,
        true
      ]
    },
    {
      "i": 5,
      "j": 5,
      "distanceFromFather": 0,
      "g": 0,
      "h": 0,
      "f": 0,
      "visited": true,
      "walls": [
        false,
        true,
        true,
        false
      ]
    }
  ]
];