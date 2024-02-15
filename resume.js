//Resume using JSON objects.
let Resume = {
  "biodata": {
    "name": "Rocky",
    "email": "rockyjee10@gmail.com",
    "phone": "+91 8765432389",
    "degree": "Diploma in Mechanical Engineering",
    "summary": "I am a highly driven Diploma Mechanical Engineering graduate with a vision to become a Mechanical Engineer. I am seeking a role to develop and improve my technical skills and to work in an environment which encourages me to succeed and grow professionally where I can utilize my skills and knowledge appropriately.",
    "location": {
      "address": " no 301,rajastreet,pachal,tiruvanamali",
      "pinCode": "606704",
      "city": "Tiruvanamali",
      "country": "India",
      "state": "Tamil nadu"
    },

  },
  "education": [
    {
      "institution": "T.s.srinivasan polytechnic collage",
      "course": "Diploma in Mechanical Engineering",
      "studyType": "Regular",
      "startDate": "2019-06-08",
      "endDate": "2021-09-11",
      "gpa": "8.24",

    },
    {
      "institution": " maharishi hr sec school",
      "course": "Higher Secondary Education",
      "studyType": "Regular",
      "startDate": "2014-06-01",
      "endDate": "2016-03-30",
      "percentage": "80.9",
    },
    {
      "institution": "jayam matric school",
      "course": "High School Education",
      "studyType": "Regular",
      "gpa": "8.6",

    },
  ],
  

  "skills": {
      "name": "Programming Languages",
      "level": "3",
      "categories": [
          "JavaScript",
          "c++",
          "python"
      ]
    },
  "languages": [
    {
      "language": "English",
      "fluency": "Excellent reading, writing and speaking."
    },
    {
      "language": "Tamil",
      "fluency": "Mothertounge"
    },
   
  ],
  "interests":
    {
      "name": "Sports",
      "categories": [
        "Cricket",
        "Volleyball",
        "Basketball"
       ]
    },
      }
console.log(Resume)