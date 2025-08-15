const axios = require("axios");
const { setStudents } = require("../data/student");

async function initData() {
  try {
    const { data } = await axios.get("https://dummyjson.com/users"); 

    const formatted = data.users.map((user) => ({ 
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      course: ["B.tech", "MBA", "BCA", "MCA"][Math.floor(Math.random() * 4)],
      status: Math.random() > 0.5 ? "Active" : "Inactive",
    }));

    setStudents(formatted); 
    console.log("initial student data loaded");
  } catch (error) {
    console.error("Failed to load data:", error.message);
  }
}

module.exports = initData;

