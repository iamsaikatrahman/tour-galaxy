const blogs = [
  {
    imgUrl: "https://randomuser.me/api/portraits/women/76.jpg",
    contentimg:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHx0cmF2ZWwlMjBibG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    author: "Tonya Watson",
    title: "Mountains is always right destination.",
    content:
      "A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. A mountain differs from a plateau in having a limited summit area, and is larger than a hill, typically rising at least 300 metres (1000 feet) above the surrounding land.High elevations on mountains produce colder climates than at sea level at similar latitude. These colder climates strongly affect the ecosystems of mountains: different elevations have different plants and animals. Because of the less hospitable terrain and climate, mountains tend to be used less for agriculture and more for resource extraction, such as mining and logging, along with recreation, such as mountain climbing and skiing.",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/15.jpg",
    contentimg:
      "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHx0cmF2ZWwlMjBibG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    author: "Armando Neal",
    title: "Life is either a daring adventure.",
    content:
      "An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with some potential for physical danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting or participating in extreme sports.Simply put, love is supposed to be an adventure; it's supposed to be your own adventure. Being in love is about exploring, learning, trusting, breaking, and building each other up. The adventure is not making the first move, it's knowing you must keep moving. Knowing that everyday is and will be different.",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/women/51.jpg",
    contentimg:
      "https://images.unsplash.com/photo-1608661649226-796c26630764?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fHRyYXZlbCUyMGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    author: "Leslie Warren",
    title: "Take only memories, leave only footprints.",
    content:
      "Paris tops the list of best places to visit in 2019 to 2020 with its stellar cuisine, historical sites, and romantic atmosphere.Generally, you spend on five major things – flight tickets, accommodation, ground transportation, food and drinks and activities you indulge in. Recently, a lot of real RTW travellers came on Reddit to tell people what their trip was like and how they managed to travel around the world on their own terms.",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/76.jpg",
    contentimg:
      "https://images.unsplash.com/photo-1626120639806-1237f30e6576?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fHRyYXZlbCUyMGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    author: "Gilbert Carlson",
    title: "Like all great travellers, I have seen more.",
    content:
      "Hodophile – the very word for travel lovers. A Hodophile is “One who loves to travel.”They have what specialists call 'an abnormal impulse to travel' also known as Dromomania. Studies have shown that people who spend their money on experiences, such as travel tend to be happier in their life.",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/women/0.jpg",
    contentimg:
      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHRyYXZlbCUyMGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    author: "Ramona Washington",
    title: "If you think adventure is dangerous.",
    content:
      "Think of all the hardships, battle wounds, and misfortunes that befall heroes — those poor Hobbits, the Jedis, and little Harry Potter!  And yet, if they had lived a life of routine… they would have never achieved greatness.  It's true that their adventures brought them close to the brink of death many times, but they never died.  They lived, and they lived with wild stories to tell and remember.",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/67.jpg",
    contentimg:
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbCUyMGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    author: "Perry Lowe",
    title: "Great things never came so easily.",
    content:
      "You could swim faster if a shark was after you. You could run faster if your child was in danger. You could work harder if the payoff was truly exceptional.What you think you can do is always--always--less than what you can do if you really, really try. You always have a little more in you. Find your true limits and you may find that success is limitless.",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/44.jpg",
    contentimg:
      "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbCUyMGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    author: "Keith Miles",
    title: "If you are always trying to be normal.",
    content:
      "No one is irreplaceable. No one. Not even this guy. Instead of being depressing, the thought that you're professionally replaceable is liberating. You may not leave a hole, but you can leave a mark on a person, a team, or a culture that lives on after you're gone.You may not be missed, but you can be remembered--in the best possible way.",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/11.jpg",
    contentimg:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsJTIwYmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    author: "Clayton Fuller",
    title: "Travel makes one thing you see what.",
    content:
      "You might feel like you’re stuck in a rut in your daily life. Or you’re yearning for something exciting and different. You’re craving new experiences and new challenges. Travel is the ideal place to test yourself. It pushes people to their limits and gets them outside their comfort zone. You’ll discover how resourceful you are when you’re exposed to new places, people and experiences. Maybe it’s finding your way around a busy city. Or ordering a meal when you don’t speak the language. Or zip-lining. You’ll feel pride when you finish your trip successfully. Overcoming challenges will bring you joy and energy for future tests. You’ll realize how capable you are and build your confidence.",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/women/91.jpg",
    contentimg:
      "https://media.istockphoto.com/photos/backpacker-with-laptop-sits-on-the-top-view-point-under-mountain-picture-id655931794?b=1&k=20&m=655931794&s=170667a&w=0&h=2XG6WSnz8dI1qtORRSg_x2BPmT3KMyOvK02DqM6sHzs=",
    author: "Zoe Castillo",
    title: "Stop worrying about the potholes.",
    content:
      "Stop worrying about the potholes in the road and enjoy the journey. This quote tells the importance of just enjoying yourself. When travelling or backpacking, something is bound to go wrong, but there's no point worrying!",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/11.jpg",
    contentimg:
      "https://media.istockphoto.com/photos/attractive-woman-vlogging-from-vienna-picture-id947989088?b=1&k=20&m=947989088&s=170667a&w=0&h=sebrezT2yTLcJxDHv6tUw4yHlCKBW6o3ilmtyDdgeQA=",
    author: "Clayton Fuller",
    title: "Fear is only temporary regrets last forever.",
    content:
      "Fear is something that sometimes holds us back from taking  the much-needed steps to get what we truly desire in life. Nothing is  guaranteed in life's path. There's always a possibility of failures or  hardships. No one, not anyone can tell for sure what's going to happen  in the next second, and it's frightening, if truth to be told. But there  should be a limit of fear. There are so many people who fear the  uncertainty of life so much they give up their real dream of life and  choose a seemingly safer path in order to be happy but can they find  real happiness? ",
  },
];
