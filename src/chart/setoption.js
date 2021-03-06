const setChartOption = {
    methods: {
        drawCharts(){
            this.myChart.setOption({
                grid:{
                    x:70,
                    y:50,
                    x2:70,
                    y2:50,
                    borderWidth:1
                },
                backgroundColor: 'white',
                legend: {
                    right: '5%',
                },
                tooltip: {},
                xAxis: {
                    axisLine:{
                        lineStyle:{
                            color:'#979797'
                        }
                    },
                    data: this.dayXData
                },

                yAxis: {
                    axisLine:{
                        lineStyle:{
                            color:'#979797'
                        }
                    },
                },
                series: [{
                    name: this.name,
                    type: 'line',
                    symbol: 'circle',
                    color: "#52baf8",
                    symbolSize: 15,
                    itemStyle:{
                        normal:{
                            borderColor: 'white',
                            borderWidth: 2,
                            shadowColor: 'rgba(0, 0, 0, 0.2)',
                            shadowBlur: 5,
                            lineStyle:{
                                width:3,
                            }
                        }
                    },
                    data: this.dayYData,
                    markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                    },
                }],
            });
        
            this.rankChart.setOption({
                grid:{
                    x:70,
                    y:50,
                    x2:70,
                    y2:50,
                    borderWidth:1
                },
                backgroundColor: 'white',
                legend: {
                    right: '5%',
                },
                tooltip: {},
                xAxis: {
                    axisLine:{
                        lineStyle:{
                            color:'#979797'
                        }
                    },
                    data: ["05-16","05-17","05-18","05-19","05-20","05-21","05-22"]
                },
                yAxis: {
                    axisLine:{
                        lineStyle:{
                            color:'#979797'
                        }
                    },
                },
                series: [{
                    name: this.name,
                    type: 'bar',
                    color: "#52baf8",   
                    barWidth: '40%',            
                    itemStyle:{
                        normal:{
                            lineStyle:{
                                width:3,
                            }
                        }
                    },
                    data: [5, 20, 36, 10, 10, 20, 16],
                }]
            });

            this.rankChart2.setOption({
                grid:{
                    x:70,
                    y:50,
                    x2:70,
                    y2:50,
                    borderWidth:1
                },
                backgroundColor: 'white',
                legend: {
                    right: '5%',
                },
                tooltip: {},
                xAxis: {
                    axisLine:{
                        lineStyle:{
                            color:'#979797'
                        }
                    },
                    data: this.sectionXData,
                },
                yAxis: {
                    axisLine:{
                        lineStyle:{
                            color:'#979797'
                        }
                    },
                },
                series: [{
                    name: this.name,
                    type: 'bar',
                    color: "#52baf8",   
                    barWidth: '40%',            
                    itemStyle:{
                        normal:{
                            lineStyle:{
                                width:3,
                            }
                        }
                    },
                    data: this.sectionYData,
                }]
            });

            return { myChart: myChart, rankChart: rankChart, rankChart2: rankChart2}
        },

        setChartLoading(){
            this.myChart = this.$echarts.init(document.getElementById('myChart'))
            this.rankChart = this.$echarts.init(document.getElementById('rankChart'))
            this.rankChart2 = this.$echarts.init(document.getElementById('rankChart2'))

            this.myChart.showLoading({
                text: 'loading',
                color: '#52baf8',
            })
            this.rankChart.showLoading({
                text: 'loading',
                color: '#52baf8',
            })
            this.rankChart2.showLoading({
                text: 'loading',
                color: '#52baf8',
            })
        },

        cancelChartLoading(){
            this.myChart.hideLoading();
            this.rankChart.hideLoading();
            this.rankChart2.hideLoading();
        },
    },
}

export {setChartOption}