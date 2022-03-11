import Conteudo from "./Conteudo"
import FooterMobile from "./FooterMobile"
import Sidebar from "./Sidebar"

export default function Corpo(){
    return (
        <div class="corpo">
            <div class="esquerda">
                <Conteudo />
                <FooterMobile />
            </div>
            <Sidebar />
        </div>
    )
}