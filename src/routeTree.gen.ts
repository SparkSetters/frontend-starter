import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as CallbackImport } from './routes/callback'
import { Route as AppImport } from './routes/_app'
import { Route as IndexImport } from './routes/index'
import { Route as AppUserProfileImport } from './routes/_app/user/profile'

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const CallbackRoute = CallbackImport.update({
  path: '/callback',
  getParentRoute: () => rootRoute,
} as any)

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AppUserProfileRoute = AppUserProfileImport.update({
  path: '/user/profile',
  getParentRoute: () => AppRoute,
} as any)
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_app': {
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/callback': {
      preLoaderRoute: typeof CallbackImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_app/user/profile': {
      preLoaderRoute: typeof AppUserProfileImport
      parentRoute: typeof AppImport
    }
  }
}
export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AppRoute.addChildren([AppUserProfileRoute]),
  CallbackRoute,
  LoginRoute,
])
