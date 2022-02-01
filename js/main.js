
var ctx = document.getElementById("myChart").getContext('2d');
var barChart = new Chart(ctx, {
  type: 'bar',
  title: {
    display: true,
    text: 'Cash Flow'
  },
  data: {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    datasets: [{
      label: 'Savings',
      data: [148, 350, 793,2999, 0, 3121, 3166, 3187, 3285, 3534, 3587, 3658, 859, 915, 0, 0, 1919, 2393, 2433,1077, 1301, 1358, 1594, 2537, 2763, 2808, 3993, 4041, 4493, 4846, 4875],
      backgroundColor: "#172b9f"
    }, {
      label: 'Expenses',
      data: [303, 575, 846, 952,1834, 1969, 1987, 2144, 2252, 0,2583, 2833, 3102, 3155, 3187, 3315, 3371, 3482, 3518, 3654, 4375, 4440, 4711, 4963,1006, 1091, 1300, 1306, 1445, 1535, 1747],
      backgroundColor: "#f42a79"
    }]
  }
});

function mobilenav() {
  var cls = document.getElementById("dropdown");
  if (cls.style.display === "none") {
    cls.style.display = "block";
  }
  else {
    cls.style.display = "none";
    
  }}

window.onload = function() {
  visi();
};

function visi(){
  var cls = document.getElementById("dropdown");
  cls.style.display='none';
}