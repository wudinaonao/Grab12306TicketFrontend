import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Query from "@/components/web/Query";
import LoginTest from "@/components/web/LoginTest";
import Insert from "@/components/web/Insert";
import Demo1 from "@/components/demo/Demo1";
import Delete from "@/components/web/Delete";
import Update from "@/components/web/Update";
import Backstage from "@/components/web/Backstage";
import ErrorCode404 from "@/components/web/error/ErrorCode404";
import BackstageWelcome from "@/components/web/BackstageWelcome";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: "/LoginTest",
      name: "LoginTest",
      component: LoginTest,
    },
    {
      path: "/Backstage",
      name: "Backstage",
      component: Backstage,
      children: [
        {
          path: "/Backstage/Insert",
          name: "Insert",
          component: Insert
        },
        {
          path: "/Backstage/Query",
          name: "Query",
          component: Query,
        },
        {
          path: "/Backstage/Delete",
          name: "Delete",
          component: Delete,
        },
        {
          path: "/Backstage/Update",
          name: "Update",
          component: Update,
        },
        {
          path: "/Backstage/BackstageWelcome",
          name: "BackstageWelcome",
          component: BackstageWelcome,
        },
        {
          path: "/Backstage/Demo1",
          name: "Demo1",
          component: Demo1,
        }
      ]
    },
    {
      path: "/ErrorCode",
      name: "ErrorCode",
      component: ErrorCode404
    }
  ],
  mode: 'history',
  base: "/app/"
})
