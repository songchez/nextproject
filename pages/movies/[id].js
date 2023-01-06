import { Router, useRouter } from "next/router";

function Detail(props) {
    const router = useRouter();
    return "detail page";
    console.log(router);
}