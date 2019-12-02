import Vue from 'vue'
import Router from 'vue-router'
import SubMenu from "./views/SubMenu/SubMenu";
import ChatCollection from "./views/Chat/ChatCollection";
import ProjectRoot from "./views/ProjectRoot";
import Login from "./views/Login";
import BoardCollection from "./views/Board/BoardCollection";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/project',
      name: 'project',
      component: ProjectRoot,
      children: [
        {
          path: ':projectName',
          name: 'submenu',
          component: SubMenu,
          children: [
            {
              path: ':componentName/:contentName',
              name: 'board',
              component: BoardCollection
            },
            {
              path: ':componentName/:chat',
              name: 'chat',
              component: ChatCollection
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }

  ]
})