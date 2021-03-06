export default function Posts(props){
    return (
        <div class="posts">
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={`assets/img/${props.user}.svg`} alt={props.user} />
                        {props.user}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={`assets/img/${props.img}`} alt={props.user} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={`assets/img/${props.likes}.svg`} alt={props.likes} />
                        <div class="texto">
                            Curtido por <strong>{props.likes}</strong> e <strong>{props.text}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}