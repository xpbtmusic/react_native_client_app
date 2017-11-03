import SmartStyleSheet from "./SmartStyleSheet.js";

module.exports = SmartStyleSheet.create({
    "common": {
        "container": {
            "backgroundColor": "#fff"
        },
        "container-fix-height": {
            "backgroundColor": "#fff",
            "height": "calc(100vh - 49pt)"
        },
        "white-bg": {
            "backgroundColor": "#fff"
        },
        "spring-wood-bg": {
            "backgroundColor": "#FAF4F4"
        }
    },
    "@mediaios": {
        "common": {
            "container": {
                "paddingTop": "20pt"
            },
            "container-fix-height": {
                "paddingTop": "20pt"
            }
        }
    },
    "@mediaandroid": {
        "common": {
            "container": {
                "paddingTop": "25pt"
            },
            "container-fix-height": {
                "paddingTop": "25pt"
            }
        }
    },
    "filter-card": {
        "wrapper": {
            "paddingTop": 0,
            "paddingBottom": 0,
            "paddingRight": "3pt",
            "paddingLeft": "3pt"
        },
        "card": {
            "backgroundColor": "#F3EFF0",
            "marginLeft": "3pt",
            "marginRight": "3pt",
            "marginTop": "6pt",
            "marginBottom": 0,
            "paddingTop": "10pt",
            "paddingBottom": "10pt",
            "paddingRight": "10pt",
            "paddingLeft": "10pt",
            "flexDirection": "row",
            "borderRadius": "5pt"
        },
        "info": {
            "flex": 1,
            "height": "44pt"
        },
        "title": {
            "height": "22pt",
            "justifyContent": "center"
        },
        "title-text": {
            "fontSize": "14pt",
            "color": "#5E5254"
        },
        "meta": {
            "height": "22pt",
            "justifyContent": "center"
        },
        "meta-text": {
            "fontSize": "12pt",
            "color": "#B6AAAC"
        },
        "thumbnail": {
            "width": "44pt",
            "height": "44pt"
        }
    },
    "topic-card": {
        "card": {
            "paddingTop": "6pt",
            "paddingBottom": "6pt",
            "paddingRight": "2vw",
            "paddingLeft": "2vw",
            "backgroundColor": "#FFFDFE",
            "marginBottom": "10pt"
        },
        "cover": {
            "width": "96vw",
            "height": "54vw"
        },
        "title": {
            "height": "30pt",
            "justifyContent": "center",
            "marginTop": "3pt",
            "paddingLeft": "2pt"
        },
        "title-text": {
            "fontWeight": "400",
            "fontSize": "18pt",
            "color": "#493A3D"
        },
        "desc": {
            "paddingLeft": "2pt"
        },
        "desc-text": {
            "fontSize": "12pt",
            "lineHeight": 15,
            "color": "#C2BEBF"
        }
    }
});

