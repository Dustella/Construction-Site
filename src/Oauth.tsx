import { Component } from "solid-js";
import { useSearchParams } from "@solidjs/router";
export const OAuth:Component = () => {
    const [{code},] = useSearchParams()
    console.log(code)
    return (
        <div>正在跳转</div>
    )
}