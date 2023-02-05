import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },

  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Customers',
    icon: 'user',
    link: '/customers'
  },

  {
    label: 'Orders',
    icon: 'shopping-bag',
    subItems: [
      {
        label: 'Successfull',
        link: '/apps/email/inbox',
      },
      {
        label: 'Pending',
        link: '/apps/email/read'
      },
    ]
  },
  {
    label: 'Offline',
    icon: 'shopping-cart',
    subItems: [
      {
        label: 'Sales',
        link: '/apps/email/inbox',
      },
      {
        label: 'Purchase',
        link: '/apps/email/read'
      },
      {
        label: 'Vendors',
        link: '/apps/email/read'
      },
      {
        label: 'Bulk Sales',
        link: '/apps/email/rgead'
      },
      {
        label: 'Bulk Purchase',
        link: '/apps/email/read'
      },
    ]
  },
  {
    label: 'Transactions',
    icon: 'pie-chart',
    link: '/dashboard'
  },
  {
    label: 'Products',
    icon: 'box',
    subItems: [
      {
        label: 'Products',
        link: '/apps/email/read'
      },
      {
        label: 'Category',
        link: '/apps/email/inbox',
      },
      {
        label: 'Variants',
        link: '/apps/email/inbox',
      },
      {
        label: 'Sub Category',
        link: '/apps/email/read'
      },
      {
        label: 'Brands',
        link: '/apps/email/read'
      },
      {
        label: 'Series',
        link: '/apps/email/read'
      },
      {
        label: 'Question Category',
        link: '/apps/email/read'
      },
    ]
  },
  {
    label: 'Questions',
    icon: 'message-square',
    subItems: [
      {
        label: 'Default',
        link: '/apps/email/read'
      },
      {
        label: 'Defects',
        link: '/apps/email/inbox',
      },
      {
        label: 'Sub Defects',
        link: '/apps/email/read'
      },
      {
        label: 'Physical Problems',
        link: '/apps/email/read'
      },
      {
        label: 'Followings',
        link: '/apps/email/read'
      },
      {
        label: 'Age of Mobile',
        link: '/apps/email/read'
      },
    ]
  },
  {
    label: 'Affiliate',
    icon: 'dollar-sign',
    subItems: [
      {
        label: 'Affiliaters',
        link: '/apps/email/read'
      },
      {
        label: 'Reports',
        link: '/apps/email/inbox',
      },
    ]
  },
  {
    label: 'Notifications',
    icon: 'bell',
    subItems: [
      {
        label: 'Pop-Up Notification',
        link: '/apps/email/read'
      },
      {
        label: 'SMS',
        link: '/apps/email/inbox',
      },
      {
        label: 'Web Notification',
        link: '/apps/email/inbox',
      },
      {
        label: 'Email Notification',
        link: '/apps/email/inbox',
      },
      {
        label: 'Groups',
        link: '/apps/email/inbox',
      },
      {
        label: 'Channels',
        link: '/apps/email/inbox',
      },
    ]
  },
   {
    label: 'Delivery',
    icon: 'navigation-2',
    subItems: [
      {
        label: 'Delivery Boy',
        link: '/apps/email/read'
      },
      {
        label: 'Deliveries',
        link: '/apps/email/inbox',
      },
    ]
  },
  {
    label: 'Users',
    icon: 'user-plus',
    subItems: [
      {
        label: 'Users',
        link: '/apps/email/read'
      },
      {
        label: 'Permissions',
        link: '/apps/email/inbox',
      },
      {
        label: 'Roles',
        link: '/apps/email/inbox',
      },
      {
        label: 'CHC',
        link: '/apps/email/inbox',
      },
    ]
  },
  {
    label: 'Coupons',
    icon: 'percent',
    link: '/dashboard'
  },
  {
    label: 'Partner Program',
    icon: 'share-2',
    subItems: [
      {
        label: 'Partners',
        link: '/apps/email/read'
      },
      {
        label: 'Sale',
        link: '/apps/email/inbox',
      },
      {
        label: 'Purchase',
        link: '/apps/email/inbox',
      },
    ]
  },
  {
    label: 'Settings',
    icon: 'settings',
    subItems: [
      {
        label: 'General',
        link: '/apps/email/inbox',
      },
      {
        label: 'Store',
        link: '/apps/email/read'
      },
      {
        label: 'Currency',
        link: '/apps/email/read'
      },
       {
        label: 'SMS',
        link: '/apps/email/read'
      },
      {
        label: 'Mail',
        link: '/apps/email/read'
      },
      {
        label: 'NewsLetter',
        link: '/apps/email/read'
      },
      {
        label: 'Countries',
        link: '/apps/email/read'
      },
      {
        label: 'Cities',
        link: '/apps/email/read'
      },
       {
        label: 'Pincode',
        link: '/apps/email/read'
      },
       {
        label: 'Language',
        link: '/apps/email/read'
      },
      {
        label: 'Maintenance',
        link: '/apps/email/read'
      },
    ]
  },
  {
    label: 'Website',
    icon: 'droplet',
    subItems: [
      {
        label: 'Banners',
        link: '/apps/email/inbox',
      },
      {
        label: 'Features',
        link: '/apps/email/read'
      },
      {
        label: 'Top Brands',
        link: '/apps/email/read'
      },
       {
        label: 'Top Mobile',
        link: '/apps/email/read'
      },
      {
        label: 'Best Performance',
        link: '/apps/email/read'
      },
    ]
  },
  {
    label: 'Blogs',
    icon: 'pen-tool',
    link: '/dashboard'
  },
   {
    label: 'Reports',
    icon: 'list',
    link: '/dashboard'
  },
   {
    label: 'Stocks',
    icon: 'package',
    link: '/dashboard'
  },
  // {
  //   label: 'Defects',
  //   isTitle: true
  // },
  // {
  //   label: 'Email',
  //   icon: 'mail',
  //   subItems: [
  //     {
  //       label: 'Inbox',
  //       link: '/apps/email/inbox',
  //     },
  //     {
  //       label: 'Read',
  //       link: '/apps/email/read'
  //     },
  //     {
  //       label: 'Compose',
  //       link: '/apps/email/compose'
  //     },
  //   ]
  // },
  // {
  //   label: 'Chat',
  //   icon: 'message-square',
  //   link: '/apps/chat',
  // },
  // {
  //   label: 'Calendar',
  //   icon: 'calendar',
  //   link: '/apps/calendar',
  //   badge: {
  //     variant: 'primary',
  //     text: 'Event',
  //   }
  // },
  // {
  //   label: 'Components',
  //   isTitle: true
  // },
  // {
  //   label: 'UI Kit',
  //   icon: 'feather',
  //   subItems: [
  //     {
  //       label: 'Accordion',
  //       link: '/ui-components/accordion',
  //     },
  //     {
  //       label: 'Alerts',
  //       link: '/ui-components/alerts',
  //     },
  //     {
  //       label: 'Badges',
  //       link: '/ui-components/badges',
  //     },
  //     {
  //       label: 'Breadcrumbs',
  //       link: '/ui-components/breadcrumbs',
  //     },
  //     {
  //       label: 'Buttons',
  //       link: '/ui-components/buttons',
  //     },
  //     {
  //       label: 'Button group',
  //       link: '/ui-components/button-group',
  //     },
  //     {
  //       label: 'Cards',
  //       link: '/ui-components/cards',
  //     },
  //     {
  //       label: 'Carousel',
  //       link: '/ui-components/carousel',
  //     },
  //     {
  //       label: 'Collapse',
  //       link: '/ui-components/collapse',
  //     },
  //     {
  //       label: 'Datepicker',
  //       link: '/ui-components/datepicker',
  //     },
  //     {
  //       label: 'Dropdowns',
  //       link: '/ui-components/dropdowns',
  //     },
  //     {
  //       label: 'List group',
  //       link: '/ui-components/list-group',
  //     },
  //     {
  //       label: 'Media object',
  //       link: '/ui-components/media-object',
  //     },
  //     {
  //       label: 'Modal',
  //       link: '/ui-components/modal',
  //     },
  //     {
  //       label: 'Navs',
  //       link: '/ui-components/navs',
  //     },
  //     {
  //       label: 'Navbar',
  //       link: '/ui-components/navbar',
  //     },
  //     {
  //       label: 'Pagination',
  //       link: '/ui-components/pagination',
  //     },
  //     {
  //       label: 'Popovers',
  //       link: '/ui-components/popovers',
  //     },
  //     {
  //       label: 'Progress',
  //       link: '/ui-components/progress',
  //     },
  //     {
  //       label: 'Rating',
  //       link: '/ui-components/rating',
  //     },
  //     {
  //       label: 'Scrollbar',
  //       link: '/ui-components/scrollbar',
  //     },
  //     {
  //       label: 'Spinners',
  //       link: '/ui-components/spinners',
  //     },
  //     {
  //       label: 'Timepicker',
  //       link: '/ui-components/timepicker',
  //     },
  //     {
  //       label: 'Tooltips',
  //       link: '/ui-components/tooltips',
  //     },
  //     {
  //       label: 'Typeadhed',
  //       link: '/ui-components/typeahead',
  //     },
  //   ]
  // },
  // {
  //   label: 'Advanced UI',
  //   icon: 'anchor',
  //   subItems: [
  //     {
  //       label: 'Cropper',
  //       link: '/advanced-ui/cropper',
  //     },
  //     {
  //       label: 'Owl carousel',
  //       link: '/advanced-ui/owl-carousel',
  //     },
  //     {
  //       label: 'SortableJs',
  //       link: '/advanced-ui/sortablejs',
  //     },
  //     {
  //       label: 'Sweet alert',
  //       link: '/advanced-ui/sweet-alert',
  //     },
  //   ]
  // },
  // {
  //   label: 'Forms',
  //   icon: 'file-text',
  //   subItems: [
  //     {
  //       label: 'Basic elements',
  //       link: '/form-elements/basic-elements'
  //     },
  //     {
  //       label: 'Advanced elements',
  //       subItems: [
  //         {
  //           label: 'Form validation',
  //           link: '/advanced-form-elements/form-validation'
  //         },
  //         {
  //           label: 'Input mask',
  //           link: '/advanced-form-elements/input-mask'
  //         },
  //         {
  //           label: 'Ng-select',
  //           link: '/advanced-form-elements/ng-select'
  //         },
  //         {
  //           label: 'Ngx-chips',
  //           link: '/advanced-form-elements/ngx-chips'
  //         },
  //         {
  //           label: 'Ngx-color-picker',
  //           link: '/advanced-form-elements/ngx-color-picker'
  //         },
  //         {
  //           label: 'Ngx-dropzone',
  //           link: '/advanced-form-elements/ngx-dropzone-wrapper'
  //         },
  //       ]
  //     },
  //     {
  //       label: 'Editors',
  //       link: '/form-elements/editors'
  //     },
  //     {
  //       label: 'Wizard',
  //       link: '/form-elements/wizard'
  //     },
  //   ]
  // },
  // {
  //   label: 'Charts & graphs',
  //   icon: 'pie-chart',
  //   subItems: [
  //     {
  //       label: 'ApexCharts',
  //       link: '/charts-graphs/apexcharts',
  //     },
  //     {
  //       label: 'ChartJs',
  //       link: '/charts-graphs/chartjs',
  //     },
  //   ]
  // },
  // {
  //   label: 'Tables',
  //   icon: 'layout',
  //   subItems: [
  //     {
  //       label: 'Basic tables',
  //       link: '/tables/basic-table',
  //     },
  //     {
  //       label: 'Data table',
  //       link: '/tables/data-table',
  //     },
  //     {
  //       label: 'Ngx-datatable',
  //       link: '/tables/ngx-datatable'
  //     }
  //   ]
  // },
  // {
  //   label: 'Icons',
  //   icon: 'smile',
  //   subItems: [
  //     {
  //       label: 'Feather icons',
  //       link: '/icons/feather-icons',
  //     },
  //     {
  //       label: 'Mdi icons',
  //       link: '/icons/mdi-icons',
  //     }
  //   ]
  // },
  // {
  //   label: 'Pages',
  //   isTitle: true
  // },
  // {
  //   label: 'Special pages',
  //   icon: 'book',
  //   subItems: [
  //     {
  //       label: 'Blank page',
  //       link: '/general/blank-page',
  //     },
  //     {
  //       label: 'Faq',
  //       link: '/general/faq',
  //     },
  //     {
  //       label: 'Invoice',
  //       link: '/general/invoice',
  //     },
  //     {
  //       label: 'Profile',
  //       link: '/general/profile',
  //     },
  //     {
  //       label: 'Pricing',
  //       link: '/general/pricing',
  //     },
  //     {
  //       label: 'Timeline',
  //       link: '/general/timeline',
  //     }
  //   ]
  // },
  // {
  //   label: 'Authentication',
  //   icon: 'unlock',
  //   subItems: [
  //     {
  //       label: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       label: 'Register',
  //       link: '/auth/register',
  //     },
  //   ]
  // },
  // {
  //   label: 'Error',
  //   icon: 'cloud-off',
  //   subItems: [
  //     {
  //       label: '404',
  //       link: '/error/404',
  //     },
  //     {
  //       label: '500',
  //       link: '/error/500',
  //     },
  //   ]
  // },
];
