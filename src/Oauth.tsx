import { Component } from "solid-js";
import { useSearchParams } from "@solidjs/router";
export const OAuth:Component = () => {
    const [{code,state},] = useSearchParams()
    console.log(code,state)
    location.href = `https://zq.game.maiquer.tech/oauth?code=${code}&state=${state}`
    return (
        <div>正在跳转</div>
    )
}