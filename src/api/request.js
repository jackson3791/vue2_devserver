import { Service } from "../http/Service";
export function getProxy() {
    return Service({
        url: "/test/proxy?name=aadd",
        method: "get",
    });
}

export function getProxyTwo() {
    return Service({
        url: "/testtwo",
        method: "get",
    });
}

export function getConfigsByProductId(productId) {
    return Service({
        url: "/manager/getConfigsByProductId",
        params: { productId: productId },
    });
}
export function getAllAndroidPlugins() {
    return Service({
        url: "/manager/getAndroidPlugin ",
        method: "get",
    });
}

export function addNewAndroidPlugin(data) {
    return Service({
        url: "/manager/addAndroidPlguin",
        data: JSON.stringify(data),
    });
}
