import { useSearchParams } from "@solidjs/router";
import { Component } from "solid-js"

const Redir :Component = ()  => {
    const [{name,result},] = useSearchParams()
    location.href = `https://zq.game.maiquer.tech/pvgame/result?name=${name}&result=${result}`
    return <>正在跳转</>
}

export default Redir;