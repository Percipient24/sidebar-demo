# sidebar-demo

A reworking of https://angular.io/guide/dynamic-component-loader for a open/close sidebar.

src/app/app.component has app-main and app-side

src/app/main/app-main has three buttons that send instructions to src/app/side/sidebar.service

src/app/side/side.component monitors the sidebar.service and changes what is displayed

Future work:
using animations to handle component destruction more gracefully?

passing data to components?
