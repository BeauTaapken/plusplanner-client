import Vue from 'vue'
import Router from 'vue-router'
import SubMenu from "./views/SubMenu/SubMenu";
import BoardCollection from "./views/Board/BoardCollection";
import ChatCollection from "./views/Chat/ChatCollection";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/project/:projectName',
      name: 'project',
      component: SubMenu,
    },
    {
      path: '/project/:projectName/:componentName/:contentName',
      name: 'chat',
      components: {
        default: SubMenu,
        content: ChatCollection
      }
    },
    {
      path: '/project/:projectName/:componentName/:contentName',
      name: 'content',
      components: {
        default: SubMenu,
        content: BoardCollection
      }
    }
  ]
})
