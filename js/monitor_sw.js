/*#################    项目人员信息状态  #####################*/
var dom = document.getElementById("lytj");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:[]
    },
    series: [
        {
            name:'库存数量',
            type:'pie',
            radius: ['40%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                     formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

                   textStyle : {                   
                    align : 'center',
                    baseline : 'middle',
                    fontFamily : '微软雅黑',
                    fontSize : 14,
                    fontWeight : 'bolder'
                 }

                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    position: 'inside',
                     formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

                   textStyle : {                   
                    align : 'center',
                    baseline : 'middle',
                    fontFamily : '微软雅黑',
                    fontSize : 15,
                    fontWeight : 'bolder'
                 }

                },
            },
            data:[
                {value:452, name:'仓库'},
                {value:145, name:'商店'},
               
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

/*#################    按收款方式统计金额  #####################*/

var dom = document.getElementById("gztj");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['微信支付','支付宝','现金','银行卡','其他'],
		textStyle: {
            fontSize: 16,
			color: '#fff',
		},
    },
    series: [
        {
            name:'付款方式',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                   	textStyle : {                   
                    align : 'center',
                    baseline : 'middle',
                    fontFamily : '微软雅黑',
                    fontSize : 16,
                    fontWeight : 'normal'
                 }

                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:230, name:'微信支付'},
                {value:150, name:'支付宝'},
                {value:100, name:'现金'},
                {value:300, name:'银行卡'},
                {value:80, name:'其他'}
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

/*#################    按商品与供应商统计  #####################*/

var dom = document.getElementById("xcrytj");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['供应商','商品'],
		textStyle: {
			color: '#fff',
            fontSize: 16,
		},
    },
    series: [
        {
            name:'商品与供应商',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                   	textStyle : {                   
                    align : 'center',
                    baseline : 'middle',
                    fontFamily : '微软雅黑',
                    fontSize : 16,
                    fontWeight : 'normal'
                 }

                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'供应商'},
                {value:310, name:'商品'}
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
/*##################  销售趋势分析     ##################*/
var  option = {
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['销售金额','销售数量'],
		textStyle: {
			color: '#fff',
            fontSize: 16,
		},
	},
	xAxis: [
		{
			type: 'category',
			data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
			axisLabel: {
			show: true,
				textStyle: {
					color: '#657c97',
                    fontSize: 14,
                    fontWeight: 'bold',
				}
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			name: '销售金额(万元)',
			nameTextStyle : {
			color: "#657c97",
            fontSize: 14,
			},
			min: 0,
			max: 100,
			interval: 20,
			axisLabel: {
				
				textStyle: {
					color: '#657c97',
                    fontSize: 14,
				}
			}
		},
		{
			type: 'value',
			name: '销售数量(件)',
			nameTextStyle : {
			color: "#657c97",
            fontSize: 14,
		
			},
			min: 0,
			max: 1000,
			interval: 200,
			axisLabel: {
				
				textStyle: {
					color: '#657c97',
                    fontSize: 14,
				}
			}
		}
	],
	series: [
		{
			name:'销售金额',
			type:'bar',
			data:[45, 68, 78, 60, 80, 76, 85, 90, 82, 48, 12, 10],
			itemStyle: {
				normal: {
					color: '#37baf7',
                    fontSize: 14,
				}
			}
		},
		{
			name:'销售数量',
			type:'line',
			yAxisIndex: 1,
			data:[450, 680, 780, 600, 800, 760, 850, 900, 810, 520, 120, 100],
			itemStyle: {
				normal: {
					color: '#00ff00',
                    fontSize: 14,
				}
			}
		}
	]
};
var dom = document.getElementById("xjfxzt");
var myChart = echarts.init(dom);
myChart.setOption(option);

/*##################  库存预警监控     ##################*/
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['库存量','安全库存下限','安全库存上限'],
        textStyle: {
            color: '#fff',
            fontSize: 16,
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['电子产品', '日用百货', '食品饮料', '服装鞋帽', '化妆品'],
            axisLabel: {
                textStyle: {
                    color: '#657c97',
                    fontSize: 14,
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#657c97',
                    fontSize: 14,
                }
            }
        }
    ],
    series: [
        {
            name:'库存量',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[120, 132, 101, 134, 90],
            itemStyle: {
                normal: {
                    color: '#37baf7',
                    fontSize: 14,
                }
            }
        },
        {
            name:'安全库存下限',
            type:'line',
            stack: '预警',
            data:[50, 80, 60, 90, 40],
            itemStyle: {
                normal: {
                    color: '#ff9900',
                    fontSize: 14,
                }
            }
        },
        {
            name:'安全库存上限',
            type:'line',
            stack: '预警',
            data:[180, 150, 120, 160, 130],
            itemStyle: {
                normal: {
                    color: '#00ff00',
                    fontSize: 14,
                }
            }
        }
    ]
};
var dom = document.getElementById("fxbhqs");
var myChart = echarts.init(dom);
myChart.setOption(option);

/*###############  库存结构  ###############*/
var dom = document.getElementById("wentidj");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    series : [
        {
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
                {value:45, name:'电子产品'},
                {value:86, name:'日用百货'},
                {value:65, name:'食品饮料'},
                {value:35, name:'服装鞋帽'},
                {value:48, name:'化妆品'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}