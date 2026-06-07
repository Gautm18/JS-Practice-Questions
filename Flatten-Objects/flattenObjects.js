const obj4 = {
  user: {
    name: "Gautam",
    skills: ["JS", "React"],
    projects: [
      { name: "A" },
      { name: "B" }
    ]
  }
};


console.log(Object.keys(obj4.user))

for(let key in obj4){
    console.log(key)
}