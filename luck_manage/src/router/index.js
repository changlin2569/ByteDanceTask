import Prize from "./../container/Prize";
import Money from "./../container/Money";
import Welcome from "./../container/Welcome";

const routers = [
    {
        path: '/',
        component: Welcome
    },
    {
        path: '/prize',
        component: Prize
    },
    {
        path: '/money',
        component: Money
    }
]

export default routers