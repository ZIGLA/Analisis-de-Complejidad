
$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'right'
    });
});

var ctx = document.getElementById("polarAreaChart ");
var polarAreaChart = new Chart(ctx, {
  type: 'polarArea',
  options: {
      legend: {
          display: true,
          position: 'bottom',
          boxWidth: 30
      },
      title: {
        display: true,
        text: 'Dimensiones ponderadas',
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontSize: 25,
        fontColor: '#696969'
      },
      scale: {
        ticks: {
            beginAtZero: true,
            max: 1// maximum value
        }
      }
  },
  data: {
    labels: ["Dimensión 1","Dimensión 2","Dimensión 3", "Dimensión 4"],
    datasets: [{
      label: 'Dimensiones',
      data: [0, 0, 0, 0],
      borderColor: '#2c3e50',
      backgroundColor: [
        "rgba(255, 172, 142, 0.6)",
        "rgba(253, 119, 146, 0.6)",
        "rgba(63, 77, 113, 0.6)",
        "rgba(85, 174, 149, 0.6)"
      ]
    }]
  }
});


//get input values
function graphMe(){

    var a1 = parseInt(document.getElementById("a1").value);
    var a2 = parseInt(document.getElementById("a2").value);
    var a3 = parseInt(document.getElementById("a3").value);
    var a4 = parseInt(document.getElementById("a4").value);
    var a5 = parseInt(document.getElementById("a5").value);
    var a6 = parseInt(document.getElementById("a6").value);
    var a7 = parseInt(document.getElementById("a7").value);
    var a8 = parseInt(document.getElementById("a8").value);
    var a9 = parseInt(document.getElementById("a9").value);

    var b1 = parseInt(document.getElementById("b1").value);
    var b2 = parseInt(document.getElementById("b2").value);
    var b3 = parseInt(document.getElementById("b3").value);

    var c1 = parseInt(document.getElementById("c1").value);
    var c2 = parseInt(document.getElementById("c2").value);
    var c3 = parseInt(document.getElementById("c3").value);

    var d1 = parseInt(document.getElementById("d1").value);
    var d2 = parseInt(document.getElementById("d2").value);

    const arr1 = new Array(a1,a2,a3,a4,a5,a6,a7,a8,a9);
    var sum1 = 0;
    for( var i = 0; i < arr1.length; i++ ){
        sum1 += parseInt( arr1[i], 10 ); //don't forget to add the base
    }

    const avg1 = sum1/45;
    console.log(avg1)

    const arr2 = new Array(b1,b2,b3);
    var sum2 = 0;
    for( var i = 0; i < arr2.length; i++ ){
        sum2 += parseInt( arr2[i], 10 ); //don't forget to add the base
    }

    const avg2 = sum2/15;
    console.log(avg2)

    const arr3 = new Array(c1,c2,c3);
    var sum3 = 0;
    for( var i = 0; i < arr3.length; i++ ){
        sum3 += parseInt( arr3[i], 10 ); //don't forget to add the base
    }

    const avg3 = sum3/15;
    console.log(avg3)

    const arr4 = new Array(d1,d2);
    var sum4 = 0;
    for( var i = 0; i < arr4.length; i++ ){
        sum4 += parseInt( arr4[i], 10 ); //don't forget to add the base
    }

    const avg4 = sum4/10;
    console.log(avg4)

polarAreaChart.data.datasets[0].data[0] = avg1.toFixed(2);
polarAreaChart.data.datasets[0].data[1] = avg2.toFixed(2);
polarAreaChart.data.datasets[0].data[2] = avg3.toFixed(2);
polarAreaChart.data.datasets[0].data[3] = avg4.toFixed(2);

polarAreaChart.update();
 }
