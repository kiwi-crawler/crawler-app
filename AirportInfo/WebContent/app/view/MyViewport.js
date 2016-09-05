/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    border: false,
                    height: 60,
                    header: false,
                    title: 'My Panel',
                    items: [
                        {
                            xtype: 'image',
                            height: 60,
                            maxHeight: 60,
                            maxWidth: 480,
                            width: 480,
                            imgCls: 'icon-airport-top-left'
                        },
                        {
                            xtype: 'image',
                            height: 60,
                            maxHeight: 60,
                            maxWidth: 430,
                            width: 430,
                            imgCls: 'icon-airport-top-right'
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    viewConfig: {
                        loadMask: false,
                        stripeRows: false,
                        getRowClass: function(record,rowIndex,rowParams,store){
                            if(rowIndex % 2 ==0) {
                            	return 'x-grid-row custom-grid-row x-grid-row-lightblue';
                            } else {
                                return 'x-grid-row custom-grid-row x-grid-row-deepblue';
                            }
                        // 在这里添加自定样式 改变这个表格的行高
                            //return 'x-grid-row custom-grid-row';
                    	}
                    },
                    region: 'center',
                    border: false,
                    id: 'AirportInfo',
                    bodyBorder: true,
                    header: false,
                    store: 'AirportInfoList',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                value = '<br/>' + value;
                                if(rowIndex % 2 === 0) {
                                    metaData.css='x-grid-row-lightblue'; 
                                    return "<span style='color:#FFF;font-size:15px;font-family:微软雅黑;'>"+value+"</span>";
                                }else {
                                    metaData.css='x-grid-row-deepblue'; 
                                    return "<span style='color:#FFF;font-size:15px;font-family:微软雅黑;'>"+value+"</span>";
                                }
                            },
                            align: 'center',
                            dataIndex: 'destination',
                            text: '目的地<br><br>DEPATURE',
                            flex: 2.5
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                var tmp = value.split("#");
                                var img = tmp[0];
                                var cpy = tmp[1];
                                var src = "<img src=\"" + window.location.href + "resources/airportimg/" + img + "\">";
                                if(rowIndex % 2 === 0) {
                                    metaData.css='x-grid-row-lightblue-cmpy img'; 
                                    return src + "<span style='color:#FFF;font-size:15px;font-family:微软雅黑;'>"+cpy+"</span>";
                                }else {
                                    metaData.css='x-grid-row-deepblue-cmpy img'; 
                                    return src + "<span style='color:#FFF;font-size:15px;font-family:微软雅黑;'>"+cpy+"</span>";
                                }
                            },
                            dataIndex: 'airCom',
                            text: '航空公司<BR><br>CARRIER',
                            flex: 4
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                value = '<br/>' + value;
                                if(rowIndex % 2 === 0) {
                                    metaData.css='x-grid-row-lightblue'; 
                                    return "<span style='color:#FFF;font-size:15px;font-family:微软雅黑;'>"+value+"</span>";
                                }else {
                                    metaData.css='x-grid-row-deepblue'; 
                                    return "<span style='color:#FFF;font-size:15px;font-family:微软雅黑;'>"+value+"</span>";
                                }
                            },
                            align: 'center',
                            dataIndex: 'airNo',
                            text: '航班号<BR><br>FLIGHT＃',
                            flex: 2
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                value = '<br/>' + value;
                                if(rowIndex % 2 === 0) {
                                    metaData.css='x-grid-row-lightblue'; 

                                    return "<span style='color:#FFF;font-size:15px;font-family:微软雅黑;'>"+value+"</span>";
                                }else {
                                    metaData.css='x-grid-row-deepblue'; 
                                    return "<span style='color:#FFF;font-size:15px;font-family:微软雅黑;'>"+value+"</span>";
                                }
                            },
                            align: 'center',
                            dataIndex: 'subAirNo',
                            text: '共享代码<BR><br>PARTNER',
                            flex: 5
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                value = '<br/>' + value;
                                if(rowIndex % 2 === 0) {
                                    metaData.css='x-grid-row-lightblue'; 
                                    return "<span style='color:#FFF;font-size:15px;font-family:微软雅黑;'>"+value+"</span>";
                                }else {
                                    metaData.css='x-grid-row-deepblue'; 
                                    return "<span style='color:#FFF;font-size:15px;font-family:微软雅黑;'>"+value+"</span>";
                                }
                            },
                            align: 'center',
                            dataIndex: 'counter',
                            text: '值机柜台<BR><br>CHECK-IN COUNTER',
                            flex: 3
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                value = '<br/>' + value;
                                if(rowIndex % 2 === 0) {
                                    metaData.css='x-grid-row-lightblue'; 
                                    return "<span style='color:#FFF;font-size:15px;font-family:微软雅黑;'>"+value+"</span>";
                                }else {
                                    metaData.css='x-grid-row-deepblue'; 
                                    return "<span style='color:#FFF;font-size:15px;font-family:微软雅黑;'>"+value+"</span>";
                                }
                            },
                            align: 'center',
                            dataIndex: 'beginTime',
                            text: '起飞时间<br><br>TIME',
                            flex: 2
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {

                                if(value === "") {
                                    value = "准时";
                                }
                                value = '<br/>' + value;
                                if(rowIndex % 2 === 0) {
                                    metaData.css='x-grid-row-lightblue'; 
                                    return "<span style='color:#FFF;font-size:15px;font-family:微软雅黑;'>"+value+"</span>";
                                }else {
                                    metaData.css='x-grid-row-deepblue'; 
                                    return "<span style='color:#FFF;font-size:15px;font-family:微软雅黑;'>"+value+"</span>";
                                }
                            },
                            align: 'center',
                            dataIndex: 'status',
                            text: '状态<BR><br>STATUS',
                            flex: 2.5
                        }
                    ],
                    listeners: {
                        afterrender: {
                            fn: me.onAirportInfoAfterRender,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onAirportInfoAfterRender: function(component, eOpts) {
        var elments = Ext.select(".x-column-header",true);//.x-grid3-hd
        elments.each(function(el) {
            el.setStyle("color", '#FFFFFF');
            el.setStyle("background", '#171C60');
            el.setStyle("font-family", '微软雅黑');
            el.setStyle("font-size", '15px');
            el.setStyle("height", '50px');
            el.setStyle("text-align", 'center');
        }, this);
    }

});