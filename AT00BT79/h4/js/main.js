var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width= 1000 - margin.left - margin.right,
    height = 700 -margin.top - margin.bottom;

const svg = d3.select(".canvas")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    // .append("g")
    //     .attr("transform",
    //         "translate(" + margin.left + "," + margin.top + ")")

let dataArray = []
d3.json("js/measures.json").then(
    data => {
        for (var k in data){
            object = data[k].Measures;
            dataArray.push(object);
        }
     
    const y = d3.scaleLinear()
        .domain([0, 40])
        .range([0, 500])

    d3.select(dataArray).data(data)
    var minPreassure = d3.min(dataArray, d => {parseFloat(d.AirPressure.replace(",",".")); return d.AirPressure})
    console.log("min AirPressure: " +minPreassure)
    var maxPreassure = d3.max(dataArray, d => {parseFloat(d.AirPressure.replace(",",".")); return d.AirPressure})
    console.log("max AirPressure: " + maxPreassure)

    var minHumidity = d3.min(dataArray, d => {parseFloat(d.Humidity.replace(",",".")); return d.Humidity})
    console.log("min Humidity: " + minHumidity)
    var maxHumidity = d3.max(dataArray, d => {parseFloat(d.Humidity.replace(",",".")); return d.Humidity})
    console.log("max Humidity: " + maxHumidity)

    var minTemp = d3.min(dataArray, d => {parseFloat(d.Temp.replace(",",".")); return d.Temp})
    console.log("min Temp: " + minTemp)
    var maxTemp = d3.max(dataArray, d => {parseFloat(d.Temp.replace(",",".")); return d.Temp})
    console.log("max Temp: " + maxTemp)

    const rects = d3.select("svg")
        .append("rect")
        .data(dataArray)
        .attr("x", (d, i) => i * 75)
        .attr("width", "50")
        .attr("height", d => y(d.Temp))
        .attr("fill", "purple")

    rects.enter()
        .append("rect")
        .attr("x", (d, i) => i * 75)
        .attr("width", "50")
        .attr("height", d => y(d.Temp))
        .attr("fill", "purple")


    }
    


)
    
console.log(dataArray)





// const rects = svg.append("rect")
//     .data(dataArray)
//     .attr("x", (d, i) => i * 75)
//     .attr("y",50)
//     .attr("width", 100)
//     .attr("height", d => y(d.Temp))
//     .attr("fill", "purple")

// rects.enter()
//         .append("rect")
//         .attr("x", (d, i) => i * 75)
//         .attr("y",50)
//         .attr("width", 100)
//         .attr("height", d => y(d.Temp))
//         .attr("fill", "purple")



        // , function(error, data){

        //     if (error) {
        //         return console.warn(error);
        //     } 
        //     d3.data(data)
//.then(

    // for (var k in data){
    //     object = data[k].Measures;
    //     dataArray.push(object);
    // }

//      dataArray => {
//         const max = d3.max(data, d => d.count)
//         const y = d3.scaleLinear()
//             .domain([0, max])
//             .range([height, 0])

//     const x = d3.scaleBand()
//         .domain(dataArray.map(item => item.breed))
//         .range([0, width])
//         .paddingInner(0.1)

//     const rects = graph.selectAll("rect")
//         .data(data)
//         .attr("width", x.bandwidth)
//         .attr("height", d => height - y(d.count))
//         .attr("fill", "red")
//         .attr("x", d => x(d.breed))
//         .attr("y", d => y(d.count))
    
//     rects.enter()
//         .append("rect")
//         .attr("width", x.bandwidth)
//         .attr("height", d => graphHeight - y(d.count))
//         .attr("fill", "red")
//         .attr("x", d => x(d.breed))
//         .attr("y", d => y(d.count))


//     const xAxis = d3.axisBottom(x)
//     const yAxis = d3.axisLeft(y)
//         .ticks(5)
//         .tickFormat(d => d + " yksilöä")
    
//     xAxisGroup.call(xAxis)
//     yAxisGroup.call(yAxis)

//     xAxisGroup.selectAll("text")
//         .attr("transform", "rotate(-30)")
//         .attr("text-anchor", "end")
//         .attr("fill", "red")
// }
//)