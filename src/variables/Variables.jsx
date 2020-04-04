/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
//
// //
// // // For notifications
// //
//
var defaultWidth =
  window.screen.width > 768
    ? (window.screen.width * 1) / 3
    : window.screen.width;

var style = {
  Wrapper: {},
  Containers: {
    DefaultStyle: {
      position: "fixed",
      width: defaultWidth,
      padding: "10px 10px 10px 20px",
      zIndex: 9998,
      WebkitBoxSizing: "",
      MozBoxSizing: "",
      boxSizing: "",
      height: "auto",
      display: "inline-block",
      border: "0",
      fontSize: "14px",
      WebkitFontSmoothing: "antialiased",
      fontFamily: '"Roboto","Helvetica Neue",Arial,sans-serif',
      fontWeight: "400",
      color: "#FFFFFF"
    },

    tl: {
      top: "0px",
      bottom: "auto",
      left: "0px",
      right: "auto"
    },

    tr: {
      top: "0px",
      bottom: "auto",
      left: "auto",
      right: "0px"
    },

    tc: {
      top: "0px",
      bottom: "auto",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2)
    },

    bl: {
      top: "auto",
      bottom: "0px",
      left: "0px",
      right: "auto"
    },

    br: {
      top: "auto",
      bottom: "0px",
      left: "auto",
      right: "0px"
    },

    bc: {
      top: "auto",
      bottom: "0px",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2)
    }
  },

  NotificationItem: {
    DefaultStyle: {
      position: "relative",
      width: "100%",
      cursor: "pointer",
      borderRadius: "4px",
      fontSize: "14px",
      margin: "10px 0 0",
      padding: "10px",
      display: "block",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
      boxSizing: "border-box",
      opacity: 0,
      transition: "all 0.5s ease-in-out",
      WebkitTransform: "translate3d(0, 0, 0)",
      transform: "translate3d(0, 0, 0)",
      willChange: "transform, opacity",

      isHidden: {
        opacity: 0
      },

      isVisible: {
        opacity: 1
      }
    },

    success: {
      borderTop: 0,
      backgroundColor: "#a1e82c",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    error: {
      borderTop: 0,
      backgroundColor: "#fc727a",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    warning: {
      borderTop: 0,
      backgroundColor: "#ffbc67",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    info: {
      borderTop: 0,
      backgroundColor: "#63d8f1",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    }
  },

  Title: {
    DefaultStyle: {
      fontSize: "30px",
      margin: "0",
      padding: 0,
      fontWeight: "bold",
      color: "#FFFFFF",
      display: "block",
      left: "15px",
      position: "absolute",
      top: "50%",
      marginTop: "-15px"
    }
  },

  MessageWrapper: {
    DefaultStyle: {
      marginLeft: "55px",
      marginRight: "30px",
      padding: "0 12px 0 0",
      color: "#FFFFFF",
      maxWidthwidth: "89%"
    }
  },

  Dismiss: {
    DefaultStyle: {
      fontFamily: "inherit",
      fontSize: "21px",
      color: "#000",
      float: "right",
      position: "absolute",
      right: "10px",
      top: "50%",
      marginTop: "-13px",
      backgroundColor: "#FFFFFF",
      display: "block",
      borderRadius: "50%",
      opacity: ".4",
      lineHeight: "11px",
      width: "25px",
      height: "25px",
      outline: "0 !important",
      textAlign: "center",
      padding: "6px 3px 3px 3px",
      fontWeight: "300",
      marginLeft: "65px"
    },

    success: {
      // color: '#f0f5ea',
      // backgroundColor: '#a1e82c'
    },

    error: {
      // color: '#f4e9e9',
      // backgroundColor: '#fc727a'
    },

    warning: {
      // color: '#f9f6f0',
      // backgroundColor: '#ffbc67'
    },

    info: {
      // color: '#e8f0f4',
      // backgroundColor: '#63d8f1'
    }
  },

  Action: {
    DefaultStyle: {
      background: "#ffffff",
      borderRadius: "2px",
      padding: "6px 20px",
      fontWeight: "bold",
      margin: "10px 0 0 0",
      border: 0
    },

    success: {
      backgroundColor: "#a1e82c",
      color: "#ffffff"
    },

    error: {
      backgroundColor: "#fc727a",
      color: "#ffffff"
    },

    warning: {
      backgroundColor: "#ffbc67",
      color: "#ffffff"
    },

    info: {
      backgroundColor: "#63d8f1",
      color: "#ffffff"
    }
  },

  ActionWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0
    }
  }
};

//
// //
// // // For tables
// //
//
const thArray = ["ID", "Name", "Salary", "Country", "City"];
const tdArray = [
  ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
  ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
  ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
  ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
  ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
  ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
];


const brands = {
  name: "levis",
  logo: "assets/img/brands/levis.jpg",  
  bannerImage:"../assets/img/brands/Flex-HomeBanner-1.jpg",
  brandName: 'Levis',
    brandType: 'Clothing Brand',
    brandDesc: "Levi Strauss Co. is an American clothing company known worldwide for its Levi's brand of denim jeans. It was founded in May 1853,",
    brandImg: 'https://image.shutterstock.com/image-photo/manila-philippines-26-june-2016-260nw-458055625.jpg',
    brandBanner: 'https://bellomag.files.wordpress.com/2014/01/versace-jeans-spring-summer-2014-01.jpg',
    uploadedBrandImg: [],
    uploadedBrandBannerImg: [],
    brandAddress: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
    brandContactNum1 : '123456',
    brandContactNum2 : '654321',
    brandJoinDate : '2-22-2010',
}

const OrdersData = [
  {
    id:32,
    userName: "Jesse",
    orderDate: "08-03-2020",
    orderAmount: "$782.00",
    orderStatus: "ordered",
    total: "600",
    cultCut: "182",
    itemQuantity: "2",  
    itemName:"Black Hoodie",
    itemSize:"L"
  },
  {
    id:33,
    userName: "Shanon",
    orderDate: "01-03-2020",
    orderAmount: "$500.00",
    orderStatus: "Stitching",
    total: "400",
    cultCut: "100",
    itemQuantity: "1",  
    itemName:"Graphic t-shirt",
    itemSize:"M"
  },
  {
    id:34,
    userName: "Stacy",
    orderDate: "25-02-2020",
    orderAmount: "$300.00",
    orderStatus: "Shipping",
    total: "200",
    cultCut: "100",
    itemQuantity: "2",  
    itemName:"Cap",
    itemSize:"M"
  }
]
const TransactionData = [
  {
    id:32,
    userName: "Jesse",
    Date: "08-03-2020",
    Remaining: "$782.00",
    Transfered: "600",
    Picture: "https://lateinvoicetips.com/wp-content/uploads/2020/01/invoicing.jpg",
    orderStatus: "ordered",
    cultCut: "182",
    itemQuantity: "2",  
    itemName:"Black Hoodie",
    itemSize:"L"
  },
  {
    id:52,
    userName: "Jesse",
    Date: "16-03-2020",
    Remaining: "$882.00",
    Transfered: "400",
    Picture: "https://lateinvoicetips.com/wp-content/uploads/2020/01/invoicing.jpg",
    orderStatus: "ordered",
    cultCut: "182",
    itemQuantity: "2",  
    itemName:"Black Hoodie",
    itemSize:"L"
  },
  {
    id:22,
    userName: "Jesse",
    Date: "25-03-2020",
    Remaining: "$382.00",
    Transfered: "200",
    Picture: "https://lateinvoicetips.com/wp-content/uploads/2020/01/invoicing.jpg",
    orderStatus: "ordered",
    cultCut: "182",
    itemQuantity: "2",  
    itemName:"Black Hoodie",
    itemSize:"L"
  },
]

const SuperAll = [
  {      
    id:23,
    userName: "Jesse",
    number: "917 458 8569",
    verifType: 'verified'
  },
  {      
    id:32,
    userName: "Victoria",
    number: "917 128 8959",
    verifType: 'verified'
  },
  {      
    id:56,
    userName: "Timothy",
    number: "917 456 2369",
    verifType: 'verified'
  },
  {      
    id:72,
    userName: "Simon",
    number: "917 346 6969",
    verifType: 'unverified'
  },
]

const SuperVerified = [
  {      
    id:23,
    userName: "Jesse",
    number: "917 458 8569",
    verifType: 'verified'
  },
  {      
    id:32,
    userName: "Victoria",
    number: "917 128 8959",
    verifType: 'verified'
  },
  {      
    id:56,
    userName: "Timothy",
    number: "917 456 2369",
    verifType: 'verified'
  },
]

const SuperUnverified = [
  {      
    id:72,
    userName: "Simon",
    number: "917 346 6969",
    verifType: 'unverified'
  },
]


const allUsers = [
  {
      "id": 1,
      "user_name": 'Mason Porter',
      "email":'mason@email.com',
      "password":'123',
      "reported_user_name": 'Doris Greene',
      "date": "2019-12-23 21:44:31",
      "status": "action taken",
      "description": "agressive messages sent VIA pvt msg",
      "options": "hate speech"
  },
  {
      "id": 2,
      "user_name": 'Dakota Rice',
      "email":'dakota@email.com',
      "password":'123',
      "reported_user_name": 'Minerva Hooper',
      "date": "2020-01-06 20:55:25",
      "status": "pending",
      "description": "agressive messages sent VIA pvt msg",
      "options": "hate speech"
  },
  {
      "id": 4,
      "user_name": 'Minerva Hooper',
      "email":'minerva@email.com',
      "password":'123',
      "reported_user_name": 'Dakota Rice',
      "date": "2019-12-23 21:44:31",
      "status": "action taken",
      "description": "agressive messages sent VIA pvt msg",
      "options": "hate speech"
  },
  {
      "id": 6,
      "user_name": 'Sage Rodriguez',
      "email":'sage@email.com',
      "password":'123',
      "reported_user_name": 'Philip Chaney',
      "date": "2019-12-23 21:44:31",
      "status": "pending",
      "description": "agressive messages sent VIA pvt msg",
      "options": "hate speech"
  },
  {
      "id": 5,
      "user_name": 'Philip Chaney',
      "email":'philip@email.com',
      "password":'123',
      "reported_user_name": 'Sage Rodriguez',
      "date": "2019-12-23 21:44:31",
      "status": "action taken",
      "description": "agressive messages sent VIA pvt msg",
      "options": "hate speech"
  },
  {
      "id": 3,
      "user_name": 'Doris Greene',
      "email":'doris@email.com',
      "password":'123',
      "reported_user_name": 'Mason Porter',
      "date": "2019-12-23 21:44:31",
      "status": "pending",
      "description": "agressive messages sent VIA pvt msg",
      "options": "hate speech"
  },

]



const statesData = [
  { id: 1 , name:'New York'},
  { id: 2 , name:'Colorado'}                       
]

const citiesData = {
cities:[
  { id:1, name:"Buffalo",         stateId:1 },
  { id:2, name:"Buffalo",        stateId:1 },
  { id:3, name:"Rochester",      stateId:1 },
  { id:4, name:"Yonkers",        stateId:1 },
  { id:5, name:"Syracuse",       stateId:1 },
  { id:6, name:"Albany",         stateId:1 },
  { id:7, name:"New Rochelle",   stateId:1 },
  { id:8, name:"Mount Vernon",   stateId:1 },
  { id:9, name:"Schenectady",    stateId:1 },
  { id:10, name:"Utica",         stateId:1 },
  { id:11, name:"White Plains",  stateId:1 },
  { id:12, name:"Hempstead",     stateId:1 },
  { id:13, name:"Troy",          stateId:1 },
  { id:14, name:"Niagara Falls", stateId:1 },
  { id:15, name:"Binghamton",    stateId:1 },
  { id:16, name:"Freeport",      stateId:1 },
  { id:17, name:"Valley Stream", stateId:1 },
  { id:18, name:"Denver",             stateId:2 },                        
  { id:19, name:"Colorado Springs",   stateId:2 },                        
  { id:20, name:"Aurora",             stateId:2 },                        
  { id:21, name:"Fort Collins",       stateId:2 },                        
  { id:23, name:"Lakewood",           stateId:2 },                        
  { id:24, name:"Thornton",           stateId:2 },                        
  { id:25, name:"Arvada",             stateId:2 },                        
  { id:26, name:"Westminster",        stateId:2 },                        
  { id:27, name:"Pueblo",             stateId:2 },                        
  { id:28, name:"Centennial",         stateId:2 },                        
  { id:29, name:"Boulder",            stateId:2 },                        
  { id:30, name:"Greeley",            stateId:2 },                        
  { id:31, name:"Longmont",           stateId:2 },                        
  { id:32, name:"Loveland",           stateId:2 },                        
  { id:33, name:"Grand Junction",     stateId:2 },                        
  { id:34, name:"Broomfield",         stateId:2 } 
]
}



//
// //
// // // For icons
// //
//
const iconsArray = [
  "pe-7s-album",
  "pe-7s-arc",
  "pe-7s-back-2",
  "pe-7s-bandaid",
  "pe-7s-car",
  "pe-7s-diamond",
  "pe-7s-door-lock",
  "pe-7s-eyedropper",
  "pe-7s-female",
  "pe-7s-gym",
  "pe-7s-hammer",
  "pe-7s-headphones",
  "pe-7s-helm",
  "pe-7s-hourglass",
  "pe-7s-leaf",
  "pe-7s-magic-wand",
  "pe-7s-male",
  "pe-7s-map-2",
  "pe-7s-next-2",
  "pe-7s-paint-bucket",
  "pe-7s-pendrive",
  "pe-7s-photo",
  "pe-7s-piggy",
  "pe-7s-plugin",
  "pe-7s-refresh-2",
  "pe-7s-rocket",
  "pe-7s-settings",
  "pe-7s-shield",
  "pe-7s-smile",
  "pe-7s-usb",
  "pe-7s-vector",
  "pe-7s-wine",
  "pe-7s-cloud-upload",
  "pe-7s-cash",
  "pe-7s-close",
  "pe-7s-bluetooth",
  "pe-7s-cloud-download",
  "pe-7s-way",
  "pe-7s-close-circle",
  "pe-7s-id",
  "pe-7s-angle-up",
  "pe-7s-wristwatch",
  "pe-7s-angle-up-circle",
  "pe-7s-world",
  "pe-7s-angle-right",
  "pe-7s-volume",
  "pe-7s-angle-right-circle",
  "pe-7s-users",
  "pe-7s-angle-left",
  "pe-7s-user-female",
  "pe-7s-angle-left-circle",
  "pe-7s-up-arrow",
  "pe-7s-angle-down",
  "pe-7s-switch",
  "pe-7s-angle-down-circle",
  "pe-7s-scissors",
  "pe-7s-wallet",
  "pe-7s-safe",
  "pe-7s-volume2",
  "pe-7s-volume1",
  "pe-7s-voicemail",
  "pe-7s-video",
  "pe-7s-user",
  "pe-7s-upload",
  "pe-7s-unlock",
  "pe-7s-umbrella",
  "pe-7s-trash",
  "pe-7s-tools",
  "pe-7s-timer",
  "pe-7s-ticket",
  "pe-7s-target",
  "pe-7s-sun",
  "pe-7s-study",
  "pe-7s-stopwatch",
  "pe-7s-star",
  "pe-7s-speaker",
  "pe-7s-signal",
  "pe-7s-shuffle",
  "pe-7s-shopbag",
  "pe-7s-share",
  "pe-7s-server",
  "pe-7s-search",
  "pe-7s-film",
  "pe-7s-science",
  "pe-7s-disk",
  "pe-7s-ribbon",
  "pe-7s-repeat",
  "pe-7s-refresh",
  "pe-7s-add-user",
  "pe-7s-refresh-cloud",
  "pe-7s-paperclip",
  "pe-7s-radio",
  "pe-7s-note2",
  "pe-7s-print",
  "pe-7s-network",
  "pe-7s-prev",
  "pe-7s-mute",
  "pe-7s-power",
  "pe-7s-medal",
  "pe-7s-portfolio",
  "pe-7s-like2",
  "pe-7s-plus",
  "pe-7s-left-arrow",
  "pe-7s-play",
  "pe-7s-key",
  "pe-7s-plane",
  "pe-7s-joy",
  "pe-7s-photo-gallery",
  "pe-7s-pin",
  "pe-7s-phone",
  "pe-7s-plug",
  "pe-7s-pen",
  "pe-7s-right-arrow",
  "pe-7s-paper-plane",
  "pe-7s-delete-user",
  "pe-7s-paint",
  "pe-7s-bottom-arrow",
  "pe-7s-notebook",
  "pe-7s-note",
  "pe-7s-next",
  "pe-7s-news-paper",
  "pe-7s-musiclist",
  "pe-7s-music",
  "pe-7s-mouse",
  "pe-7s-more",
  "pe-7s-moon",
  "pe-7s-monitor",
  "pe-7s-micro",
  "pe-7s-menu",
  "pe-7s-map",
  "pe-7s-map-marker",
  "pe-7s-mail",
  "pe-7s-mail-open",
  "pe-7s-mail-open-file",
  "pe-7s-magnet",
  "pe-7s-loop",
  "pe-7s-look",
  "pe-7s-lock",
  "pe-7s-lintern",
  "pe-7s-link",
  "pe-7s-like",
  "pe-7s-light",
  "pe-7s-less",
  "pe-7s-keypad",
  "pe-7s-junk",
  "pe-7s-info",
  "pe-7s-home",
  "pe-7s-help2",
  "pe-7s-help1",
  "pe-7s-graph3",
  "pe-7s-graph2",
  "pe-7s-graph1",
  "pe-7s-graph",
  "pe-7s-global",
  "pe-7s-gleam",
  "pe-7s-glasses",
  "pe-7s-gift",
  "pe-7s-folder",
  "pe-7s-flag",
  "pe-7s-filter",
  "pe-7s-file",
  "pe-7s-expand1",
  "pe-7s-exapnd2",
  "pe-7s-edit",
  "pe-7s-drop",
  "pe-7s-drawer",
  "pe-7s-download",
  "pe-7s-display2",
  "pe-7s-display1",
  "pe-7s-diskette",
  "pe-7s-date",
  "pe-7s-cup",
  "pe-7s-culture",
  "pe-7s-crop",
  "pe-7s-credit",
  "pe-7s-copy-file",
  "pe-7s-config",
  "pe-7s-compass",
  "pe-7s-comment",
  "pe-7s-coffee",
  "pe-7s-cloud",
  "pe-7s-clock",
  "pe-7s-check",
  "pe-7s-chat",
  "pe-7s-cart",
  "pe-7s-camera",
  "pe-7s-call",
  "pe-7s-calculator",
  "pe-7s-browser",
  "pe-7s-box2",
  "pe-7s-box1",
  "pe-7s-bookmarks",
  "pe-7s-bicycle",
  "pe-7s-bell",
  "pe-7s-battery",
  "pe-7s-ball",
  "pe-7s-back",
  "pe-7s-attention",
  "pe-7s-anchor",
  "pe-7s-albums",
  "pe-7s-alarm",
  "pe-7s-airplay"
];

//
// //
// // // // For dashboard's charts
// //
//
// Data for Pie Chart
var dataPie = {
  labels: ["40%", "20%", "40%"],
  series: [40, 20, 40]
};
var legendPie = {
  names: ["Open", "Bounce", "Unsubscribe"],
  types: ["info", "danger", "warning"]
};

// Data for Line Chart
var dataSales = {
  labels: [
    "9:00AM",
    "12:00AM",
    "3:00PM",
    "6:00PM",
    "9:00PM",
    "12:00PM",
    "3:00AM",
    "6:00AM"
  ],
  series: [
    [287, 385, 490, 492, 554, 586, 698, 695],
    [67, 152, 143, 240, 287, 335, 435, 437],
    [23, 113, 67, 108, 190, 239, 307, 308]
  ]
};
var optionsSales = {
  low: 0,
  high: 800,
  showArea: false,
  height: "245px",
  axisX: {
    showGrid: false
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50
  }
};
var responsiveSales = [
  [
    "screen and (max-width: 640px)",
    {
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendSales = {
  names: ["Open", "Click", "Click Second Time"],
  types: ["info", "danger", "warning"]
};

// Data for Bar Chart
var dataBar = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
  ]
};
var optionsBar = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};
var responsiveBar = [
  [
    "screen and (max-width: 640px)",
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendBar = {
  names: ["Tesla Model S", "BMW 5 Series"],
  types: ["info", "danger"]
};

module.exports = {
  style, // For notifications (App container and Notifications view)
  thArray,
  tdArray, // For tables (TableList view)
  iconsArray, // For icons (Icons view)
  brands,
  OrdersData, // for orders 
  TransactionData, //transactions history 
  SuperAll,
  SuperVerified,
  SuperUnverified,
  allUsers, // for Login
  statesData, // for signup
  citiesData, // for signup
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar // For charts (Dashboard view)
};
