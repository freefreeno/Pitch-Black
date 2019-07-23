var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "98"
                        },
                        "/General": {
                            "history": "#3d4962,#20d4d1,#25c992,#2255cc,#ffffff,#08c299,#e2434b,#ef6c35,#429ffd"
                        }
                    },
                    "geometry.height": 5,
                    "geometry.width": 9,
                    "geometry.x": 96,
                    "geometry.y": 50,
                    "plugin": "org.kde.plasma.colorpicker",
                    "title": "Color Picker"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "828",
                    "DialogWidth": "1150"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topright",
                    "ToolBoxButtonX": "1890",
                    "positions": "1,17,desktop:/Pitch-Black,0,1,desktop:/Pitch Black,0,0",
                    "showToolbox": "false",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/josh/Pictures/BlackYing.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "1014"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true",
                            "systemApplications": "systemsettings.desktop,org.kde.kinfocenter.desktop",
                            "useExtraRunners": "false"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "localPath": "/home/josh/.local/share/plasma_icons/org.kde.konsole.desktop",
                            "url": "file:///usr/share/applications/org.kde.konsole.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icon"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "localPath": "/home/josh/.local/share/plasma_icons/org.kde.dolphin.desktop",
                            "url": "file:///usr/share/applications/org.kde.dolphin.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icon"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "localPath": "/home/josh/.local/share/plasma_icons/chromium.desktop",
                            "url": "file:///usr/share/applications/chromium.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icon"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "84"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.6666666666666667,
            "hiding": "windowscover",
            "location": "bottom",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
