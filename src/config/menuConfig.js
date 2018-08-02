const menuList = [
    {
        title:'Home',
        key:'/admin/home'
    },
    {
        title:'UI',
        key:'/admin/ui',
        children:[
            {
                title:'Button',
                key:'/admin/ui/buttons',
            },
            {
                title:'Modal',
                key:'/admin/ui/modals',
            },
            {
                title:'Loading',
                key:'/admin/ui/loadings',
            },
            {
                title:'Notification',
                key:'/admin/ui/notification',
            },
            {
                title:'Global Message',
                key:'/admin/ui/messages',
            },
            {
                title:'Tab',
                key:'/admin/ui/tabs',
            },
            {
                title:'Gallery',
                key:'/admin/ui/gallery',
            },
            {
                title:'Carousel',
                key:'/admin/ui/carousel',
            }
        ]
    },
    {
        title:'Form',
        key:'/admin/form',
        children:[
            {
                title:'Login',
                key:'/admin/form/login',
            },
            {
                title:'Register',
                key:'/admin/form/register',
            }
        ]
    },
    {
        title:'Table',
        key:'/admin/table',
        children:[
            {
                title:'BasicTable',
                key:'/admin/table/basic',
            },
            {
                title:'AdvancedTable',
                key:'/admin/table/advanced',
            }
        ]
    },
    {
        title:'RichText',
        key:'/admin/rich'
    },
    {
        title:'City',
        key:'/admin/city'
    },
    {
        title:'Order',
        key:'/admin/order',
        btnList:[
            {
                title:'OrderDetail',
                key:'detail'
            },
            {
                title:'FinishOrder',
                key:'finish'
            }
        ]
    },
    {
        title:'User',
        key:'/admin/user'
    },
    {
        title:'BikeMap',
        key:'/admin/bikeMap'
    },
    {
        title:'Chart',
        key:'/admin/charts',
        children:[
            {
                title:'Bar',
                key:'/admin/charts/bar'
            },
            {
                title:'Pie',
                key:'/admin/charts/pie'
            },
            {
                title:'Line',
                key:'/admin/charts/line'
            },
        ]
    },
    {
        title:'Permission',
        key:'/admin/permission'
    },
];
export default menuList;