const ctx = document.getElementById("skillsRadarChart").getContext("2d");
const radarChart = new Chart(ctx, {
  type: "radar",
  data: {
    labels: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Leadership",
      "Creativity",
      "Adaptability",
    ],
    datasets: [
      {
        label: "Skill Mastery %",
        data: [85, 70, 60, 75, 65, 80],
        backgroundColor: "rgba(20, 131, 247, 0.2)",
        borderColor: "#1483f7",
        borderWidth: 2,
        pointBackgroundColor: "#1483f7",
      },
    ],
  },
  options: {
    scales: {
      r: { beginAtZero: true, max: 100 },
    },
  },
});
