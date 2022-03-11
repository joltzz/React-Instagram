const myself = {
    user: 'catanacomics',
    nickname: 'Catana'
}

const sidebar = [
    {
        suggestion: 'memeriagourmet',
        text: 'Segue você',
    },

    {
        suggestion: 'bad.vibes.memes',
        text: 'Não Segue você',
    },

    {
        suggestion: 'chibirdart',
        text: 'Segue você',
    },

    {
        suggestion: 'razoesparaacreditar',
        text: 'Segue você',
    },

    {
        suggestion: 'adorable_animals',
        text: 'Não Segue você'
    }
];

export default function Sidebar() {
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src={`assets/img/${myself.user}.svg`} alt={myself.user} />
                <div class="texto">
                    <strong>{myself.user}</strong>
                    {myself.nickname}
                </div>
            </div>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sidebar.map((s) => (
                    <div class="sugestao">
                        <div class="usuario">
                            <img src={`assets/img/${s.suggestion}.svg`} />
                            <div class="texto">
                                <div class="nome">{s.suggestion}</div>
                                <div class="razao">{s.text}</div>
                            </div>
                        </div>
                        <div class="seguir">Seguir</div>
                    </div>
                ))}
            </div>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK & GUILHERME
            </div>
        </div>
    )
}