import Vue from 'vue'
import Router from 'vue-router'
import ProjectContent from "./components/ui/ProjectContent/ProjectContent";
import ComponentListItemContent from "./components/ui/ComponentContent/ComponentListItemContent";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/project/:projectName',
      name: 'project',
      component: ProjectContent,
      props: { default: true, sidebar: false }
    },
    {
      path: '/project/:projectName/:componentName/:contentName',
      name: 'content',
      components: {
        default: ProjectContent,
        content: ComponentListItemContent
      }
    }
  ]
})
