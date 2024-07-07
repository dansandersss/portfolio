import {
  yourLogo,
  shopify,
  fiverr,
  upwork,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
  image44,
  image45,
  image46,
  image47,
  image48,
  image49,
  image50,
  image51,
  image52,
  image53,
  image54,
  image55,
  image56,
  image57,
  image58,
  image59,
  image60,
  image61,
  image62,
  image63,
  image64,
  image65,
  image66,
  image67,
  image68,
  image69,
  image70,
  image71,
  image72,
  image73,
  image74,
  image75,
  image76,
  image77,
  image78,
  image79,
  image80,
  image81,
  image82,
  image83,
  image84,
  image85,
  image86,
  image87,
  image88,
  image89,
  image90,
  image91,
  image92,
  image93,
  image94,
  image95,
} from "../assets/images";

import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  htmlIcon,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  appwrite,
  gsap,
  reactNative,
  reactIcon,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: appwrite,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: gsap,
    name: "GSAP",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: reactNative,
    name: "React Native",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Next.js Developer",
    company_name: "Freelancer on Fiverr",
    icon: fiverr,
    iconBg: "#accbe1",
    date: "Sep 2022 - Present Days",
    points: [
      "Independently developing and maintaining web applications using Next.js and related technologies.",
      "Collaborating with clients to gather requirements and create high-quality products that meet their needs.",
      "Implementing responsive design and ensuring cross-browser compatibility across all projects.",
      "Conducting thorough code reviews and ensuring the quality and performance of the codebase.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Freelancer on Upwork",
    icon: upwork,
    iconBg: "#fbc3bc",
    date: "Sep 2023 - Present Days",
    points: [
      "Creating and sustaining mobile applications using React Native and associated technologies independently.",
      "Engaging with clients to understand their needs and deliver high-quality solutions tailored to their requirements.",
      "Designing and implementing responsive user interfaces, ensuring seamless performance across both iOS and Android platforms.",
      "Performing comprehensive code reviews and offering constructive feedback to enhance code quality and maintain high performance standards.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Here can be your company!",
    icon: yourLogo,
    iconBg: "#b7e4c7",
    date: "August 2024 - ...",
    points: [
      "I'm excited to join a new team where I can share my experience and learn from others in the process.",
      "Feel free to reach out to me using the contact options below.",
      "I'm looking forward to connecting with you soon!",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#a2d2ff",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = {
  vanilla: [
    {
      iconUrl: htmlIcon,
      theme: "btn-back-red",
      name: "Pick-Up Point App",
      description:
        "Designed as a user-friendly platform to streamline the process of collecting online orders. Customers can easily track and pick up their purchases from designated locations, ensuring a smooth and efficient experience.",
      link: "https://pickuppoint.netlify.app/",
      styleBg: "blue",

      screens: [
        {
          image: image1,
          description: "Here is the main page of my PP application.",
        },
        {
          image: image2,
          description: "Implemented the issuing order to a customer page.",
        },
        {
          image: image3,
          description:
            "Here you can see how many items will your pick up point receive today.",
        },
        {
          image: image4,
          description:
            "The page where you are receiving the items to your point.",
        },
        {
          image: image5,
          description:
            "You can receive them automatically or choose the way you want.",
        },
        {
          image: image7,
          description:
            "You can change the cell on which to put the received order.",
        },
        {
          image: image6,
          description:
            "Some reports that you can check, including how many orders are on your pick-up point, and how many have you issued.",
        },
        {
          image: image8,
          description: "You can search the order by their number.",
        },
        {
          image: image9,
          description: "The issued orders report.",
        },
        {
          image: image10,
          description:
            "Here you can see the address storage of your pick-up point.",
        },
        {
          image: image11,
          description: "Where you can add cells for the receiving orders.",
        },
        {
          image: image12,
          description: "They will appear just below.",
        },
        {
          image: image13,
          description: "Also you can delete the cells.",
        },
        {
          image: image14,
          description:
            "In the end I implented the dark theme for my application.",
        },
      ],
    },

    {
      iconUrl: htmlIcon,
      theme: "btn-back-red",
      name: "Castaway",
      description:
        "Designed with Tailwind CSS, the sleek and modern landing page offers easy navigation through the services that are provided.",
      link: "https://castawaysite.netlify.app/",
      styleBg: "gray",

      screens: [
        {
          image: image15,
          description:
            "This is just a simple landing page created by using Tailwind CSS.",
        },
        {
          image: image16,
          description:
            "Designed a section with latest episodes of the podcast.",
        },
        {
          image: image17,
          description: "Implemented a subscription form and reviews block.",
        },
      ],
    },
  ],

  reactJs: [
    {
      iconUrl: reactIcon,
      theme: "btn-back-red",
      name: "Netflix Clone",
      description:
        "This project is a Netflix clone built using React.js, designed to emulate the functionality of main page of the popular streaming service.",
      // link: "https://github.com/adrianhajdin/pricewise",
      styleBg: "red",

      screens: [
        {
          image: image18,
          description:
            "Main page showing the latest added show trailer with buttons 'Play' and 'My List'.",
        },
        {
          image: image19,
          description:
            "By clicking on 'Play' you are redirect to the episodes page showing the available amount of episodes per show.",
        },
        {
          image: image20,
          description:
            "By clicking on 'My List' the show is added to your list below as you can see.",
        },
        {
          image: image21,
          description:
            "Back to the episodes show you can choose the season of the selected show and it will display the amount of episodes available per selected season. ",
        },
        {
          image: image22,
          description:
            "Clicking on the episode will open a modal with the main info about the episode and the ability to watch it.",
        },
        {
          image: image23,
          description: "Also I implemented the notifications window.",
        },
      ],
    },

    {
      iconUrl: reactIcon,
      theme: "btn-back-red",
      name: "Custom Music Player",
      description:
        "This is a music player application built using React.js, utilizing the Context API for state management.",
      link: "https://streamingserviceanalog.netlify.app/",
      styleBg: "purple",

      screens: [
        {
          image: image24,
          description:
            "On the main page of my custom music player, you have the ability to choose the album you want to play.",
        },
        {
          image: image25,
          description:
            "You can notice that I have added a 3d element to make my site more interesting by using Tree Js, so now you can play with these clouds if you wish too. It's awesome!",
        },
        {
          image: image26,
          description:
            "Once you have chosen the album you are redirected to the page with all the available tracks in the album.",
        },
        {
          image: image27,
          description: "You can search for the track you want to play.",
        },
        {
          image: image28,
          description:
            "Or you can just start playing the first track, it's up to you.",
        },
        {
          image: image29,
          description:
            "You can notice that I added the main control buttons for my application. Now you can skip to the next track or play the previous one, also you can play the tracks in a random order! ",
        },
        {
          image: image30,
          description: "Each album has its own colors to be more exclusive.",
        },
      ],
    },

    {
      iconUrl: reactIcon,
      theme: "btn-back-red",
      name: "Youtube Clone",
      description:
        "It's built using React.js, leveraging RapidAPI to fetch video data.",
      link: "https://danytclone.netlify.app/",
      styleBg: "black",

      screens: [
        {
          image: image31,
          description:
            "The main page is showing the new videos available by default.",
        },
        {
          image: image32,
          description:
            "You can choose the category you'd like to watch using the sidebar on the left.",
        },
        {
          image: image33,
          description:
            "Once you have done that the avaiable videos for the category you chose are shown to you.",
        },
        {
          image: image34,
          description:
            "You can search for the specific video or author using the search input.",
        },
        {
          image: image35,
          description:
            "By clicking on the video you are redirected to its page so you can play it or see the main info such as the amount of views or likes.",
        },
        {
          image: image36,
          description: "On the right side you are shown some related videos.",
        },
        {
          image: image37,
          description:
            "Here you can see how the main page looks on different screen sizes.",
        },
        {
          image: image38,
          description: "The video page looks like this.",
        },
      ],
    },
  ],

  reactNative: [
    {
      iconUrl: reactNative,
      theme: "btn-back-red",
      name: "Calculator App",
      description:
        "Developed with React Native, offers a user-friendly interface designed for efficiency and simplicity. It supports all basic arithmetic operations: addition, subtraction, multiplication, and division, ensuring accuracy in every calculation.",
      // link: "https://github.com/adrianhajdin/pricewise",
      styleBg: "pink",

      screens: [
        {
          image: image39,
          description:
            "This is my Calculator App created by using Expo on React Native.",
        },
        {
          image: image40,
          description:
            "You can add, subtract, multiply, or even divide two numbers and more.",
        },
        {
          image: image41,
          description:
            "The result will appear on the same spot, the numbers you are working with will go just above.",
        },
        {
          image: image42,
          description:
            "By turning your phone horizontally you get the access to even more operations you can make.",
        },
        {
          image: image43,
          description: "Such as getting the pi number.",
        },
        {
          image: image44,
          description:
            "This app also understands the significance of parentheses.",
        },
        {
          image: image45,
          description: "Here you can see that.",
        },
        {
          image: image46,
          description: "I implemented the dark theme.",
        },
        {
          image: image47,
          description: ".",
        },
      ],
    },

    {
      iconUrl: reactNative,
      theme: "btn-back-red",
      name: "Aora App",
      description:
        "This application is designed for uploading and viewing videos. It is developed using React Native with Expo for the frontend and includes a backend service for processing and storing videos. The app allows users to upload videos, watch them, and share them with other users.",
      // link: "https://github.com/adrianhajdin/pricewise",
      styleBg: "orange",

      screens: [
        {
          image: image95,
          description:
            "At the very start you can click on the button 'Continue with Email' to be redirected to the sign in page.",
        },
        {
          image: image82,
          description:
            "Here you can either sign in to the app, if you have an account...",
        },
        {
          image: image81,
          description: "...or you can sign up if you don't.",
        },
        {
          image: image83,
          description:
            "Once you signed in you're redirected to the main page of this application where you can see the trending videos and the latest added ones.",
        },
        {
          image: image84,
          description:
            "You can search for a specific video using the search bar.",
        },
        {
          image: image93,
          description:
            "By the way you can play whatever video you see by clicking on them.",
        },
        {
          image: image94,
          description:
            "By clicking on the three dots you're given the opportunity to save the video to your bookmark.",
        },
        {
          image: image86,
          description: "Once clicked you can see the message.",
        },
        {
          image: image87,
          description:
            "Going to the bookmark page you can see all your saved videos.",
        },
        {
          image: image88,
          description:
            "The 'Create' page gives you the ability to upload a video to the application.",
        },
        {
          image: image89,
          description:
            "You have to fill in all the asked inputs so the 'Submit & Publish' button could work correctly. ",
        },
        {
          image: image90,
          description:
            "Once you've done all of that you are redirected to the 'Home' page and the message saying that the post was uploaded appears.",
        },
        {
          image: image91,
          description:
            "You can see your uploaded video in the beginning of the list as it is the latest one uploaded.",
        },
        {
          image: image92,
          description:
            "Going to the 'Profile' page will show you the videos YOU have uploaded and the amount of them.",
        },
      ],
    },
  ],

  nextJs: [
    {
      iconUrl: nextjs,
      theme: "btn-back-red",
      name: "Zoom Clone",
      description:
        "My website, built with Next.js, Clerk, and Stream.io, provides a seamless and secure video conferencing experience, replicating the functionality of Zoom.",
      link: "https://zoomclone13.netlify.app/",
      styleBg: "#830EF9",

      screens: [
        {
          image: image48,
          description:
            "Firstly you are asked to log in to our application using the Clerk Auth by the method most convenient to you.",
        },
        {
          image: image49,
          description:
            "Once you've logged in you are redirected to our main page containing 4 functioning buttons. You can create a new meeting, join the created one, schedule a meeting or even view the recordings of a specific meeting.",
        },
        {
          image: image50,
          description:
            "By clicking on 'New Meeting' you can create your meeting.",
        },
        {
          image: image51,
          description:
            "Set up your camera and your microphone and just join in. ",
        },
        {
          image: image52,
          description:
            "By using Stream.Io we have a bunch of different settings that we can change within our call. Including the recording of a meeting button, turning on/off the microphone and the camera and even more.",
        },
        {
          image: image53,
          description:
            "By clicking on 'Join a meeting' you can type in the invitation link and join to a meeting.",
        },
        {
          image: image54,
          description:
            "'Schedule a meeting' allows you to schedule a meeting for a specific date and time.",
        },
        {
          image: image55,
          description:
            "Now let's look at my pages. Firstly we have the 'Upcoming' page where you could see the scheduled meetings.",
        },
        {
          image: image56,
          description:
            "Next we have the 'Previous' page with meetings that have been already finished.",
        },
        {
          image: image57,
          description:
            "And finally the 'Recordings' page with ability to view the recorded meeting if they were recorded.",
        },
        {
          image: image58,
          description:
            "Also Clerk Auth allows us to manage our account as you can see here.",
        },
        {
          image: image59,
          description: "You can change anything you want thanks to Clerk Auth.",
        },
      ],
    },

    {
      iconUrl: nextjs,
      theme: "btn-back-red",
      name: "Planner App",
      description:
        "My app developed with Next.js and powered by Appwrite for database management, offers a robust and intuitive platform for managing tasks and to-do lists.",
      // link: "https://github.com/adrianhajdin/pricewise",
      styleBg: "#FF6767",

      screens: [
        {
          image: image60,
          description:
            "By the start you can log in to your dashboard or if you don't have the account...",
        },
        {
          image: image61,
          description: "You can sign up.",
        },
        {
          image: image62,
          description:
            "Once you have done that you are redirected to your dahsboard where you can see all your main information.",
        },
        {
          image: image63,
          description: "You can see the latest added tasks...",
        },
        {
          image: image64,
          description:
            "You can see your tasks statuses and even the latest completed task.",
        },
        {
          image: image65,
          description:
            "By clicking on task you are being transferred to the task page where you can see the task full description.",
        },
        {
          image: image66,
          description: "You can edit the task if you want...",
        },
        {
          image: image67,
          description: "Also you can delete it.",
        },
        {
          image: image68,
          description:
            "On the 'Vital Tasks' page you are able to see your tasks with high priority.",
        },
        {
          image: image69,
          description:
            "On the 'Main Tasks' page you can see all of your tasks.",
        },
        {
          image: image70,
          description:
            "By clicking on the plus sign next to 'My Tasks' link you open the modal where you can add new task.",
        },
        {
          image: image71,
          description:
            "You need to feel in all the blanks in the inputs with needed info and then click 'Done'",
        },
        {
          image: image72,
          description:
            "The new created task will appear just above the other ones.",
        },
        {
          image: image73,
          description:
            "I implemented the search for a task bar, all you need to do is to type the task title.",
        },
        {
          image: image74,
          description:
            "Now let's talk about the todo and note section of my application that follows you on all the pages.",
        },
        {
          image: image75,
          description:
            "You can add new todo the same way as you do with the task but this time less information is required.",
        },
        {
          image: image76,
          description:
            "The todo is added and it appears above the other ones, by clicking on the checkbox it is deleted within the next 5 seconds.",
        },
        {
          image: image77,
          description:
            "The same way works the notes block, except this time you have to type in more information.",
        },
        {
          image: image78,
          description:
            "The new created note will appear the same way, above the other ones.",
        },
        {
          image: image79,
          description:
            "You have the ability to delete or edit the note you need.",
        },
        {
          image: image80,
          description: "The edit note modal looks something like this.",
        },
      ],
    },
  ],

  // {
  //   iconUrl: threads,
  //   theme: "btn-back-green",
  //   name: "Full Stack Threads Clone",
  //   description:
  //     'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
  //   link: "https://github.com/adrianhajdin/threads",
  // },
  // {
  //   iconUrl: car,
  //   theme: "btn-back-blue",
  //   name: "Car Finding App",
  //   description:
  //     "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //   link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  // },
  // {
  //   iconUrl: snapgram,
  //   theme: "btn-back-pink",
  //   name: "Full Stack Instagram Clone",
  //   description:
  //     "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //   link: "https://github.com/adrianhajdin/social_media_app",
  // },
  // {
  //   iconUrl: estate,
  //   theme: "btn-back-black",
  //   name: "Real-Estate Application",
  //   description:
  //     "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //   link: "https://github.com/adrianhajdin/projects_realestate",
  // },
  // {
  //   iconUrl: summiz,
  //   theme: "btn-back-yellow",
  //   name: "AI Summarizer Application",
  //   description:
  //     "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://github.com/adrianhajdin/project_ai_summarizer",
  // },
};
