import Vue from 'vue'
import Router from 'vue-router'
import SubMenu from "@/views/SubMenu/SubMenu";
import ChatCollection from "@/views/Chat/ChatCollection";
import ProjectRoot from "@/views/ProjectRoot";
import Login from "@/views/Login";
import BoardCollection from "@/views/Board/BoardCollection";
import Logout from "@/views/Logout";
import TokenAuthorization from "@/components/Login/TokenAuthorization";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/project',
            name: 'project',
            component: ProjectRoot,
            beforeEnter(to, from, next) {
                if(Vue.prototype.$session.exists() && Vue.prototype.$session.get("plusplannerToken") != null)
                {
                    next();
                }
                else
                {
                    window.location = "/login";
                }
            },
            children: [
                {
                    path: ':projectName',
                    name: 'submenu',
                    component: SubMenu,
                    children: [
                        {
                            path: ':partName',
                            name: 'board',
                            components: {
                                default: SubMenu,
                                board: BoardCollection
                            }
                        },
                        {
                            path: ':chat/:channel',
                            name: 'chat',
                            components: {
                                default: SubMenu,
                                chat: ChatCollection
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout
        },
        {
            path: '/',
            name: 'root',
            component: TokenAuthorization
        }
    ]
})