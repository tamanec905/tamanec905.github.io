"use strict";
var core;
(function (core) {
    class Router {
        m_activeLink;
        m_routingTable;
        get ActiveLink() {
            return this.m_activeLink;
        }
        set ActiveLink(link) {
            this.m_activeLink = link;
        }
        constructor() {
            this.m_activeLink = "";
            this.m_routingTable = [];
        }
        Add(route) {
            this.m_routingTable.push(route);
        }
        AddTable(routeTable) {
            this.m_routingTable = routeTable;
        }
        Find(route) {
            return this.m_routingTable.indexOf(route);
        }
        Remove(route) {
            if (this.Find(route) > -1) {
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }
        toString() {
            return this.m_routingTable.toString();
        }
    }
    core.Router = Router;
})(core || (core = {}));
let router = new core.Router();
router.AddTable([
    "/",
    "/home",
    "/about",
    "/services",
    "/contact",
    "/contact-list",
    "/products",
    "/register",
    "/login",
    "/edit"
]);
let route = location.pathname;
router.ActiveLink = (router.Find(route) > -1)
    ? (route == "/") ? "home" : route.substring(1)
    : ("404");
//# sourceMappingURL=router.js.map